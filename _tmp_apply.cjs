// Apply the generated milestone block to lessons.ts (replace lines 432-1416)
// and patch milestones.ts game entries with corrected metadata.

const fs = require("fs");

// ---------- 1. Patch lessons.ts ----------
const lessonsPath = "src/lib/lessons.ts";
const lessons = fs.readFileSync(lessonsPath, "utf8");
const lines = lessons.split("\n");

// We replace lines 432..1416 (1-based inclusive) -> array indices 431..1415
const block = fs.readFileSync("/tmp/lessons-milestone-block.txt", "utf8");

const before = lines.slice(0, 431).join("\n"); // up to line 431
const after = lines.slice(1416).join("\n");    // from line 1417 onward

// Original line 432 starts "  // ── 1909 Marshall..." (a comment header). We replace
// everything through line 1416 (end of nottingham-g13 entry).
fs.writeFileSync(
  lessonsPath,
  before + "\n" + block.trimEnd() + "\n\n" + after,
);
console.log("✓ lessons.ts patched");

// ---------- 2. Patch milestones.ts ----------
const milestonesPath = "src/lib/milestones.ts";
let milestones = fs.readFileSync(milestonesPath, "utf8");
const overrides = JSON.parse(fs.readFileSync("/tmp/milestone-overrides.json", "utf8"));

// For each id, find its line and rebuild it.
for (const [id, ov] of Object.entries(overrides)) {
  // Pattern: { id: "<id>", num: X, white: "...", black: "...", opening: "...", result: "..." },
  const re = new RegExp(
    `\\{\\s*id:\\s*"${id}",\\s*num:\\s*\\d+,\\s*white:\\s*"[^"]*",\\s*black:\\s*"[^"]*",\\s*opening:\\s*"[^"]*",\\s*result:\\s*"[^"]*"\\s*\\}`,
  );
  if (!re.test(milestones)) {
    console.error("  miss:", id);
    continue;
  }
  const replacement =
    `{ id: "${id}", num: ${ov.num}, white: "${ov.white}", black: "${ov.black}", opening: "${ov.opening}", result: "${ov.result}" }`;
  milestones = milestones.replace(re, replacement);
}

fs.writeFileSync(milestonesPath, milestones);
console.log("✓ milestones.ts patched");

// ---------- 3. Validate updated lessons.ts compiles a chess sequence ----------
const { Chess } = require("chess.js");
const fresh = fs.readFileSync(lessonsPath, "utf8");
const ids = Object.keys(overrides);
let allOk = true;
for (const id of ids) {
  // Extract moves array as a regex slice
  const startRe = new RegExp(`"${id}":\\s*\\{[\\s\\S]*?moves:\\s*\\[`, "m");
  const m = fresh.match(startRe);
  if (!m) { console.error(id, "block not found"); allOk = false; continue; }
  const tail = fresh.slice(m.index + m[0].length);
  const closeIdx = tail.indexOf("\n    ],");
  const movesText = tail.slice(0, closeIdx);
  const sans = [...movesText.matchAll(/san:\s*"([^"]+)"/g)].map((x) => x[1]);
  const chess = new Chess();
  let ok = true;
  for (const s of sans) {
    try { if (!chess.move(s)) { ok = false; break; } } catch { ok = false; break; }
  }
  if (!ok) { console.error("  ✗", id); allOk = false; }
}
console.log(allOk ? "\n✅ All 26 games validate end-to-end" : "\n⚠ Some games failed validation");
