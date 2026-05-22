// Parse pgnmentor Capablanca.pgn and extract specific milestone games.
const fs = require("fs");
const { Chess } = require("chess.js");

const text = fs.readFileSync("/tmp/Capablanca.pgn", "utf8");

// Split into game blocks
const blocks = text.split(/\n(?=\[Event )/);
const games = blocks.map((b) => {
  const headers = {};
  for (const m of b.matchAll(/\[(\w+)\s+"([^"]*)"\]/g)) headers[m[1]] = m[2];
  // moves = everything after the last header line
  const moveText = b.replace(/\[[^\]]*\]\s*/g, "").trim();
  // strip result tokens at end
  const cleanedMoves = moveText
    .replace(/\{[^}]*\}/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\d+\.(\.\.)?/g, "")
    .replace(/(1-0|0-1|1\/2-1\/2|\*)\s*$/, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return { headers, sans: cleanedMoves };
});

console.log("Total games:", games.length);

// Targets: find each by (year, opponent, optional round/event keyword)
const TARGETS = [
  // Marshall 1909 match
  { key: "marshall-g1", year: "1909", opp: "Marshall", round: "1" },
  { key: "marshall-g7", year: "1909", opp: "Marshall", round: "7" },
  { key: "marshall-g10", year: "1909", opp: "Marshall", round: "10" },
  { key: "marshall-g23", year: "1909", opp: "Marshall", round: "23" },
  // San Sebastián 1911
  { key: "sansebastian-g1", year: "1911", opp: "Bernstein", event: "San Sebastian" },
  { key: "sansebastian-g4", year: "1911", opp: "Burn", event: "San Sebastian" },
  { key: "sansebastian-g9", year: "1911", opp: "Janowski", event: "San Sebastian" },
  { key: "sansebastian-g14", year: "1911", opp: "Rubinstein", event: "San Sebastian" },
  // Havana 1921 WCC vs Lasker
  { key: "havana-g1", year: "1921", opp: "Lasker", round: "1" },
  { key: "havana-g5", year: "1921", opp: "Lasker", round: "5" },
  { key: "havana-g10", year: "1921", opp: "Lasker", round: "10" },
  { key: "havana-g11", year: "1921", opp: "Lasker", round: "11" },
  { key: "havana-g14", year: "1921", opp: "Lasker", round: "14" },
  // London 1922
  { key: "london-g1", year: "1922", opp: "Alekhine", event: "London" },
  { key: "london-g5", year: "1922", opp: "Bogoljub", event: "London" },
  { key: "london-g8", year: "1922", opp: "Rubinstein", event: "London" },
  { key: "london-g13", year: "1922", opp: "Vidmar", event: "London" },
  // Alekhine 1927 WCC
  { key: "alekhine-g1", year: "1927", opp: "Alekhine", round: "1" },
  { key: "alekhine-g11", year: "1927", opp: "Alekhine", round: "11" },
  { key: "alekhine-g21", year: "1927", opp: "Alekhine", round: "21" },
  { key: "alekhine-g32", year: "1927", opp: "Alekhine", round: "32" },
  { key: "alekhine-g34", year: "1927", opp: "Alekhine", round: "34" },
  // Nottingham 1936
  { key: "nottingham-g1", year: "1936", opp: "Botvinnik", event: "Nottingham" },
  { key: "nottingham-g4", year: "1936", opp: "Alekhine", event: "Nottingham" },
  { key: "nottingham-g9", year: "1936", opp: "Reshevsky", event: "Nottingham" },
  { key: "nottingham-g13", year: "1936", opp: "Flohr", event: "Nottingham" },
];

const out = {};
for (const t of TARGETS) {
  const candidates = games.filter((g) => {
    const h = g.headers;
    if (!h.Date || !h.Date.startsWith(t.year)) return false;
    const opp = (h.White + " " + h.Black).toLowerCase();
    if (!opp.includes(t.opp.toLowerCase())) return false;
    if (t.round && h.Round !== t.round) return false;
    if (t.event && !(h.Event || "").toLowerCase().includes(t.event.toLowerCase())) return false;
    return true;
  });
  if (candidates.length === 0) {
    console.log(`MISS ${t.key}: no match`);
    continue;
  }
  // If multiple candidates, prefer one matching event keyword
  let pick = candidates[0];
  if (candidates.length > 1) {
    console.log(`  ${t.key}: ${candidates.length} candidates — using first (${pick.headers.Event} R${pick.headers.Round})`);
  }
  // Validate moves
  const chess = new Chess();
  const validSans = [];
  let failed = null;
  for (let i = 0; i < pick.sans.length; i++) {
    try {
      const m = chess.move(pick.sans[i]);
      if (!m) { failed = { i, san: pick.sans[i] }; break; }
      validSans.push(m.san);
    } catch (e) { failed = { i, san: pick.sans[i], err: e.message }; break; }
  }
  console.log(
    `${failed ? "✗" : "✓"} ${t.key} [${pick.headers.Event} R${pick.headers.Round} ${pick.headers.White} vs ${pick.headers.Black} ${pick.headers.Result}] — ${validSans.length}/${pick.sans.length}` +
    (failed ? ` FAIL at "${failed.san}"` : ""),
  );
  out[t.key] = {
    headers: pick.headers,
    sans: validSans,
    result: pick.headers.Result,
  };
}

fs.writeFileSync("/tmp/extracted-games.json", JSON.stringify(out, null, 2));
console.log(`\nExtracted ${Object.keys(out).length}/${TARGETS.length} games.`);
