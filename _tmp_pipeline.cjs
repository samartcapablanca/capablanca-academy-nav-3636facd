// Full pipeline: extract milestone games from PGN, generate per-move commentary,
// pick guessMoveIndex, and emit TypeScript blocks for lessons.ts + metadata for milestones.ts.

const fs = require("fs");
const { Chess } = require("chess.js");

// ---------- 1. Parse pgnmentor archive ----------
const text = fs.readFileSync("/tmp/Capablanca.pgn", "utf8");
const blocks = text.split(/\n(?=\[Event )/);
const parsed = blocks.map((b) => {
  const headers = {};
  for (const m of b.matchAll(/\[(\w+)\s+"([^"]*)"\]/g)) headers[m[1]] = m[2];
  const moveText = b.replace(/\[[^\]]*\]\s*/g, "").trim();
  const sans = moveText
    .replace(/\{[^}]*\}/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\d+\.(\.\.)?/g, "")
    .replace(/(1-0|0-1|1\/2-1\/2|\*)\s*$/, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return { headers, sans };
});

// ---------- 2. Target list ----------
const TARGETS = [
  // key, year, opp, optional round / event keyword, displayWhite, displayBlack (in app-friendly form)
  // displayWhite/Black will be filled from PGN headers (preferring "F. Marshall" style)
  { key: "marshall-g1", year: "1909", opp: "Marshall", round: "1", num: 1 },
  { key: "marshall-g7", year: "1909", opp: "Marshall", round: "7", num: 7 },
  { key: "marshall-g10", year: "1909", opp: "Marshall", round: "10", num: 10 },
  { key: "marshall-g23", year: "1909", opp: "Marshall", round: "23", num: 23 },
  { key: "sansebastian-g1", year: "1911", opp: "Bernstein", event: "San Sebastian", num: 1 },
  { key: "sansebastian-g4", year: "1911", opp: "Burn", event: "San Sebastian", num: 4 },
  { key: "sansebastian-g9", year: "1911", opp: "Janowsky", event: "San Sebastian", num: 9 },
  { key: "sansebastian-g14", year: "1911", opp: "Rubinstein", event: "San Sebastian", num: 14 },
  { key: "havana-g1", year: "1921", opp: "Lasker", round: "1", num: 1 },
  { key: "havana-g5", year: "1921", opp: "Lasker", round: "5", num: 5 },
  { key: "havana-g10", year: "1921", opp: "Lasker", round: "10", num: 10 },
  { key: "havana-g11", year: "1921", opp: "Lasker", round: "11", num: 11 },
  { key: "havana-g14", year: "1921", opp: "Lasker", round: "14", num: 14 },
  { key: "london-g1", year: "1922", opp: "Alekhine", event: "London", num: 1 },
  { key: "london-g5", year: "1922", opp: "Bogoljub", event: "London", num: 5 },
  { key: "london-g8", year: "1922", opp: "Rubinstein", event: "London", num: 8 },
  { key: "london-g13", year: "1922", opp: "Vidmar", event: "London", num: 13 },
  { key: "alekhine-g1", year: "1927", opp: "Alekhine", round: "1", num: 1 },
  { key: "alekhine-g11", year: "1927", opp: "Alekhine", round: "11", num: 11 },
  { key: "alekhine-g21", year: "1927", opp: "Alekhine", round: "21", num: 21 },
  { key: "alekhine-g32", year: "1927", opp: "Alekhine", round: "32", num: 32 },
  { key: "alekhine-g34", year: "1927", opp: "Alekhine", round: "34", num: 34 },
  { key: "nottingham-g1", year: "1936", opp: "Botvinnik", event: "Nottingham", num: 1 },
  { key: "nottingham-g4", year: "1936", opp: "Alekhine", event: "Nottingham", num: 4 },
  { key: "nottingham-g9", year: "1936", opp: "Reshevsky", event: "Nottingham", num: 9 },
  { key: "nottingham-g13", year: "1936", opp: "Flohr", event: "Nottingham", num: 13 },
];

// ---------- 3. Name shortening ("Marshall, Frank James" -> "F. Marshall") ----------
function shortName(full) {
  if (!full) return "?";
  const parts = full.split(",").map((s) => s.trim());
  if (parts.length < 2) return full;
  const last = parts[0];
  const firsts = parts[1].split(/\s+/).filter(Boolean);
  const initial = firsts[0] ? firsts[0][0] + "." : "";
  // Normalize a few special cases
  const lastFixed = last
    .replace(/^Bogoljubow$/, "Bogoljubov")
    .replace(/^Janowsky$/, "Janowski")
    .replace(/^Vidmar.*/, "Vidmar");
  return `${initial} ${lastFixed}`.trim();
}

// ---------- 4. ECO -> opening name (coarse) ----------
function openingName(eco, fallback) {
  if (!eco) return fallback || "Unknown";
  if (eco.startsWith("A")) return fallback || "Flank Opening";
  if (eco === "C68" || eco === "C69" || eco === "C77" || eco === "C78" || eco === "C79" ||
      eco === "C80" || eco === "C81" || eco === "C82" || eco === "C83" || eco === "C84" ||
      eco === "C90" || eco === "C92" || eco === "C95" || eco === "C99")
    return "Ruy López";
  if (eco.startsWith("C42") || eco.startsWith("C43")) return "Petroff Defence";
  if (eco.startsWith("C")) return "Open Game";
  if (eco.startsWith("E2") || eco.startsWith("E3") || eco.startsWith("E4") || eco.startsWith("E5"))
    return "Nimzo-Indian Defence";
  if (eco.startsWith("D")) return "Queen's Gambit Declined";
  if (eco.startsWith("B0")) return "French Defence";
  if (eco.startsWith("B")) return "Semi-Open Game";
  if (eco.startsWith("E")) return "Indian Defence";
  return fallback || "Classical Opening";
}

// ---------- 5. Per-move commentary ----------
const PIECE_NAME = { K: "King", Q: "Queen", R: "Rook", B: "Bishop", N: "Knight" };
function moveCommentary(san, idx, total, isCapaTurn, result) {
  // Final move
  if (idx === total - 1) {
    if (san.endsWith("#")) return "Checkmate.";
    if (result === "1-0") return isCapaTurn ? "Black resigned." : "Capablanca resigned.";
    if (result === "0-1") return isCapaTurn ? "White resigned." : "Capablanca resigned.";
    if (result === "1/2-1/2") return "Draw agreed.";
    return "End of game.";
  }
  // Castling
  if (san === "O-O") return "Castles kingside — the King reaches safety.";
  if (san === "O-O-O") return "Castles queenside — long castling for rapid development.";
  // Promotion
  if (/=[QRBN]/.test(san)) return `Promotes — ${PIECE_NAME[san.match(/=([QRBN])/)[1]]} arrives on the board.`;
  // Mate / check / capture
  const isMate = san.endsWith("#");
  const isCheck = san.endsWith("+");
  const isCapture = san.includes("x");
  // Piece moved
  const first = san[0];
  const piece = PIECE_NAME[first];
  // Pawn
  const phrase = piece
    ? `${piece} ${isCapture ? "captures" : "to " + san.replace(/^[KQRBN]/, "").replace(/[+#]$/, "").replace(/x/, "")}`
    : isCapture
      ? `Pawn captures`
      : `Pawn advance`;
  if (isMate) return `${phrase} — checkmate!`;
  if (isCheck) return `${phrase} — check.`;
  // Opening / middlegame / endgame label
  if (idx < 8) return "Development.";
  if (idx < 16) return isCapture ? "Exchange in the opening." : "Manoeuvring.";
  return phrase + ".";
}

// ---------- 6. Pick guessMoveIndex ----------
function pickGuessIndex(sans, capColor) {
  const N = sans.length;
  // Capa moves at even idx if W, odd if B
  const isCapa = (i) => (i % 2 === 0) === (capColor === "w");
  // Avoid the very last move (post-attempt user clicks Next - keep room)
  const startWin = Math.floor(N * 0.45);
  const endWin = Math.max(startWin + 4, N - 6);
  // Pass 1: capture/check move in window
  for (let i = startWin; i <= endWin && i < N - 2; i++) {
    if (!isCapa(i)) continue;
    if (/[x+#]/.test(sans[i])) return i;
  }
  // Pass 2: any Capa move in window
  for (let i = startWin; i <= endWin && i < N - 2; i++) if (isCapa(i)) return i;
  // Pass 3: middle
  for (let i = Math.floor(N / 2); i < N - 1; i++) if (isCapa(i)) return i;
  return undefined;
}

function guessHintFor(san) {
  if (san.endsWith("#")) return "Capablanca delivered checkmate. Look for the forcing finishing move.";
  if (san.endsWith("+")) return "Capablanca played a check that decides the game. Find the forcing move.";
  if (san.includes("x")) return "Capablanca won material here. Look for the tactical capture that breaks through.";
  if (san === "O-O" || san === "O-O-O") return "Capablanca chose the right moment to bring his king to safety.";
  return "Capablanca's signature manoeuvre — find the precise positional move he played.";
}

// ---------- 7. Match games ----------
function findGame(t) {
  const candidates = parsed.filter((g) => {
    const h = g.headers;
    if (!h.Date || !h.Date.startsWith(t.year)) return false;
    const opp = (h.White + " " + h.Black).toLowerCase();
    if (!opp.includes(t.opp.toLowerCase())) return false;
    if (t.round && h.Round !== t.round) return false;
    if (t.event && !(h.Event || "").toLowerCase().includes(t.event.toLowerCase())) return false;
    return true;
  });
  return candidates[0] || null;
}

// ---------- 8. Build outputs ----------
const lessonBlocks = [];
const milestoneOverrides = {}; // key -> { white, black, result, opening }

const HEADER_GROUPS = {
  rise: [
    "  // ── 1909 Marshall — Capablanca Match ────────────────────────────",
    ["marshall-g1", "marshall-g7", "marshall-g10", "marshall-g23"],
    "  // ── 1911 San Sebastián Tournament ───────────────────────────────",
    ["sansebastian-g1", "sansebastian-g4", "sansebastian-g9", "sansebastian-g14"],
  ],
  champion: [
    "  // ── 1921 Havana World Championship ──────────────────────────────",
    ["havana-g1", "havana-g5", "havana-g10", "havana-g11", "havana-g14"],
    "  // ── 1922 London International Tournament ────────────────────────",
    ["london-g1", "london-g5", "london-g8", "london-g13"],
  ],
  rivalry: [
    "  // ── 1927 Alekhine — Capablanca World Championship ───────────────",
    ["alekhine-g1", "alekhine-g11", "alekhine-g21", "alekhine-g32", "alekhine-g34"],
    "  // ── 1936 Nottingham International ───────────────────────────────",
    ["nottingham-g1", "nottingham-g4", "nottingham-g9", "nottingham-g13"],
  ],
};

const builtById = {};

for (const t of TARGETS) {
  const game = findGame(t);
  if (!game) {
    console.error("MISS", t.key);
    continue;
  }
  const h = game.headers;
  const whiteShort = shortName(h.White);
  const blackShort = shortName(h.Black);
  const isCapaWhite = h.White.startsWith("Capablanca");
  const capColor = isCapaWhite ? "w" : "b";
  const result = h.Result === "1/2-1/2" ? "½-½" : h.Result;
  const opening = openingName(h.ECO);

  // Validate full sequence
  const chess = new Chess();
  const validSans = [];
  for (const s of game.sans) {
    try {
      const m = chess.move(s);
      if (!m) break;
      validSans.push(m.san);
    } catch {
      break;
    }
  }
  if (validSans.length !== game.sans.length) {
    console.error(`${t.key}: only ${validSans.length}/${game.sans.length} valid`);
  }

  const guessIdx = pickGuessIndex(validSans, capColor);
  const guessSan = guessIdx != null ? validSans[guessIdx] : null;

  // Build moves array (sans + commentary)
  const moves = validSans.map((san, i) => {
    const isCapaTurn = (i % 2 === 0) === isCapaWhite;
    let commentary;
    if (i === guessIdx) {
      commentary = `Capablanca plays ${san} — the critical move of the game.`;
    } else {
      commentary = moveCommentary(san, i, validSans.length, isCapaTurn, h.Result);
    }
    return { san, commentary };
  });

  // Intro line
  const intro =
    `${whiteShort} vs. ${blackShort}. ${h.Event}${h.Date ? " (" + h.Date.slice(0, 4) + ")" : ""}. ` +
    opening +
    ". " +
    (validSans.length > 60
      ? "A complete masterclass — follow every move to the historical conclusion."
      : "Replay the full historical game.");

  const title =
    capColor === "w"
      ? `Capablanca – ${shortName(h.Black)}, ${h.Event} (${h.Date.slice(0, 4)})`
      : `${shortName(h.White)} – Capablanca, ${h.Event} (${h.Date.slice(0, 4)})`;

  builtById[t.key] = {
    title,
    intro,
    moves,
    guessIdx,
    guessHint: guessSan ? guessHintFor(guessSan) : undefined,
  };

  milestoneOverrides[t.key] = {
    num: t.num,
    white: whiteShort,
    black: blackShort,
    opening,
    result,
  };
}

// ---------- 9. Emit TS source for lessons.ts block ----------
function jsString(s) {
  return JSON.stringify(s);
}

function emitLessonBlock(key) {
  const b = builtById[key];
  if (!b) return `  // ${key}: MISSING\n`;
  const lines = [];
  lines.push(`  ${jsString(key)}: {`);
  lines.push(`    title: ${jsString(b.title)},`);
  lines.push(`    intro:`);
  lines.push(`      ${jsString(b.intro)},`);
  lines.push(`    moves: [`);
  for (const m of b.moves) {
    lines.push(`      { san: ${jsString(m.san)}, commentary: ${jsString(m.commentary)} },`);
  }
  lines.push(`    ],`);
  if (b.guessIdx != null) {
    lines.push(`    guessMoveIndex: ${b.guessIdx},`);
    lines.push(`    guessHint: ${jsString(b.guessHint)},`);
  }
  lines.push(`  },`);
  return lines.join("\n");
}

const sectionParts = [];
sectionParts.push("  // ═════════════════════════════════════════════════════════════════");
sectionParts.push("  // MILESTONE ARCHIVE — full historical games (auto-generated from PGN)");
sectionParts.push("  // ═════════════════════════════════════════════════════════════════");
sectionParts.push("");
for (const groupKey of ["rise", "champion", "rivalry"]) {
  for (const part of HEADER_GROUPS[groupKey]) {
    if (typeof part === "string") {
      sectionParts.push("");
      sectionParts.push(part);
    } else {
      for (const k of part) {
        sectionParts.push("");
        sectionParts.push(emitLessonBlock(k));
      }
    }
  }
}
sectionParts.push("");

const milestoneSection = sectionParts.join("\n");
fs.writeFileSync("/tmp/lessons-milestone-block.txt", milestoneSection);
fs.writeFileSync("/tmp/milestone-overrides.json", JSON.stringify(milestoneOverrides, null, 2));

console.log("\nEmitted lesson block:", milestoneSection.length, "chars");
console.log("Games:", Object.keys(builtById).length);
for (const [k, v] of Object.entries(builtById)) {
  console.log(`  ${k}: ${v.moves.length} plies, guessIdx=${v.guessIdx}`);
}
