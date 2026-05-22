const { Chess } = require("chess.js");
const games = require("./_tmp_games.cjs");

const results = [];
let bad = 0;
for (const g of games) {
  const chess = new Chess();
  const tokens = g.pgn.trim().split(/\s+/);
  const validSans = [];
  let failedAt = null;
  for (let i = 0; i < tokens.length; i++) {
    const san = tokens[i];
    try {
      const m = chess.move(san);
      if (!m) {
        failedAt = { i, san, fen: chess.fen() };
        break;
      }
      validSans.push(m.san);
    } catch (e) {
      failedAt = { i, san, fen: chess.fen(), err: e.message };
      break;
    }
  }
  const guessIndex = validSans.findIndex((s) => s === g.guessSan);
  results.push({ id: g.id, total: validSans.length, failedAt, guessIndex, validSans });
  if (failedAt) {
    bad++;
    console.log(`✗ ${g.id} FAILED at ply ${failedAt.i + 1} "${failedAt.san}" — fen: ${failedAt.fen}`);
  } else {
    console.log(`✓ ${g.id} — ${validSans.length} plies, guessIndex=${guessIndex} (${g.guessSan})`);
  }
}
console.log(`\n${games.length - bad}/${games.length} games valid`);

require("fs").writeFileSync("/tmp/games-validated.json", JSON.stringify(results, null, 2));
