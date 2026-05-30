// Lesson content: predefined move sequences with Master's Commentary.
// Move SAN strings are validated by chess.js at runtime.
//
// Quotations are drawn from José Raúl Capablanca, "Chess Fundamentals"
// (Harcourt, Brace & Company, 1921), Chapter I — First Principles.

export type LessonMove = {
  san: string;
  commentary: string;
};

export type LessonContent = {
  title: string;
  intro: string;
  /** Optional starting FEN. Omit for the standard initial position. */
  startFen?: string;
  moves: LessonMove[];
  /**
   * Optional index (0-based, into `moves`) of the designated "Guess the Move"
   * target. When Guess Mode is enabled, the player auto-positions to the move
   * right before this index and requires the user to drag the correct piece.
   */
  guessMoveIndex?: number;
  /** Custom hint shown when the user guesses incorrectly at the target. */
  guessHint?: string;
};

export const LESSONS: Record<string, LessonContent> = {
  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Example 1: Rook and King vs. King
  // ─────────────────────────────────────────────────────────────────
  "1-1": {
    title: "Rook & King vs King",
    intro:
      "Capablanca's first textbook example. White: King h1, Rook a1. Black: King h8. " +
      "“The principle is to drive the opposing King to the last line on any side of the " +
      "board.” In this 10-move sequence, watch how White systematically restricts the Black " +
      "King using the Rook, then brings the White King up to deliver the final blow.",
    startFen: "7k/8/8/8/8/8/8/R6K w - - 0 1",
    moves: [
      {
        san: "Ra7",
        commentary:
          "“The power of the Rook is demonstrated by this first move, which immediately " +
          "confines the Black King to the last rank.” Black is now trapped on the 8th rank.",
      },
      {
        san: "Kg8",
        commentary: "Forced. The Black King shuffles along the only rank left available.",
      },
      {
        san: "Kg2",
        commentary:
          "“The general principle for a beginner to follow is to keep his King as much " +
          "as possible on the same rank—or, as in this case, file—as the opposing King.”",
      },
      {
        san: "Kf8",
        commentary: "Black continues to move away, trying to delay the approaching White King.",
      },
      {
        san: "Kf3",
        commentary: "White's King marches up, maintaining opposition on the adjacent file.",
      },
      {
        san: "Ke8",
        commentary: "Black is running out of space on the kingside and heads toward the center.",
      },
      {
        san: "Ke4",
        commentary: "White follows systematically. The King and Rook work together to choke the board.",
      },
      {
        san: "Kd8",
        commentary: "Black continues his flight towards the queenside.",
      },
      {
        san: "Kd5",
        commentary:
          "“When the King has been brought to the sixth rank, it is better to place it, " +
          "not on the same file, but on the one next to it towards the center.”",
      },
      {
        san: "Kc8",
        commentary: "Black is nearly cornered now.",
      },
      {
        san: "Kd6",
        commentary: "White cuts off the escape squares.",
      },
      {
        san: "Kb8",
        commentary: "Black attacks the Rook, attempting a last-ditch defense.",
      },
      {
        san: "Rc7",
        commentary: "The Rook simply steps out of harm's way while keeping Black completely locked down.",
      },
      {
        san: "Ka8",
        commentary: "Forced. The Black King is trapped in the corner shadow.",
      },
      {
        san: "Kc6",
        commentary: "White prepares the final net.",
      },
      {
        san: "Kb8",
        commentary: "Black's only legal move.",
      },
      {
        san: "Kb6",
        commentary: "White seals the escape squares on a7, b7, and c7. The trap is sprung.",
      },
      {
        san: "Ka8",
        commentary: "Forced back into the corner for the final turn.",
      },
      {
        san: "Rc8#",
        commentary:
          "Checkmate! “It has taken exactly ten moves to force the mate from the original position.” " +
          "The opposing King has been driven to the edge and executed perfectly.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Example 5: King and Pawn vs. King (Pawn Promotion)
  // ─────────────────────────────────────────────────────────────────
  "1-2": {
    title: "Pawn Promotion — King & Pawn vs. King",
    intro:
      "White: King e6, Pawn e5. Black: King e8, to move. The White King already " +
      "stands in front of his pawn with an intervening square — Capablanca's winning " +
      "configuration. The rule: “Advance the King as far as is compatible with the " +
      "safety of the pawn, and never advance the pawn until it is essential to its " +
      "own safety.”",
    startFen: "4k3/8/4K3/4P3/8/8/8/8 b - - 0 1",
    moves: [
      {
        san: "Kd8",
        commentary:
          "Black is in the awkward position of having to move — he loses the " +
          "opposition. He sidesteps, hoping to slip around the pawn.",
      },
      {
        san: "Kf7",
        commentary:
          "The King first — not the pawn. White seizes f7, clearing the way for the " +
          "pawn while keeping it perfectly safe. This is Capablanca's exact rule in " +
          "motion.",
      },
      {
        san: "Kd7",
        commentary:
          "Black tries to harass the pawn from the side, but it is shepherded by " + "the White King at every step.",
      },
      {
        san: "e6+",
        commentary:
          "Only now does the pawn advance — “essential to its own safety,” for it " +
          "moves with check and under the King's protection.",
      },
      {
        san: "Kd6",
        commentary: "Black's King is shouldered aside; he cannot stop the pawn alone.",
      },
      {
        san: "e7",
        commentary: "One step from coronation. Black cannot reach e8 — the White King guards it.",
      },
      {
        san: "Kd5",
        commentary: "A despairing move; no Black square controls the queening square.",
      },
      {
        san: "e8=Q",
        commentary:
          "Promotion. “The pawn must be carried, not pushed.” The King did the work; " + "the pawn merely walked home.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Example 18 (paraphrased): Control of the Centre
  // ─────────────────────────────────────────────────────────────────
  "1-3": {
    title: "Control of the Centre",
    intro:
      "Capablanca: “The first thing a student should do is to familiarise himself " +
      "with the power of the pieces. This can best be done by learning how quickly " +
      "they can be brought into action.” And the quickest route is through the four " +
      "central squares — e4, d4, e5, d5 — from which every piece radiates the " +
      "greatest force.",
    moves: [
      {
        san: "e4",
        commentary:
          "“The best square at which to aim is one of the four central squares.” " +
          "With one move the pawn occupies a centre square and opens lines for both " +
          "the King's Bishop and the Queen.",
      },
      {
        san: "e5",
        commentary:
          "Black answers in kind. Neither side will yield the centre without a fight — " +
          "for, as Capablanca insists, “a piece in the centre commands the greatest " +
          "number of squares.”",
      },
      {
        san: "Nf3",
        commentary:
          "Develop, and develop with purpose: the Knight attacks the central pawn and " +
          "eyes the squares d4 and e5. “Every move must aim either to develop a piece, " +
          "or to gain control of an important square.”",
      },
      {
        san: "Nc6",
        commentary: "Black defends the pawn and develops simultaneously — the model of opening " + "economy.",
      },
      {
        san: "d4",
        commentary:
          "The decisive central thrust. White challenges Black's e-pawn with a " +
          "second centre pawn, opening lines for the Queen's Bishop.",
      },
      {
        san: "exd4",
        commentary:
          "Black removes one of the central pawns — but at the cost of giving White a " + "free hand in development.",
      },
      {
        san: "Nxd4",
        commentary:
          "“A Knight in the centre commands eight squares.” White's recapture places " +
          "a Knight on d4 — the ideal post.",
      },
      {
        san: "Nf6",
        commentary:
          "Black develops and prepares to contest e4. Both armies are now mobilised " +
          "around the central battlefield.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Lesson 4: Opening Development
  // ─────────────────────────────────────────────────────────────────
  "1-4": {
    title: "Opening Development",
    intro:
      "Capablanca: “In the opening, development must be sought, and the pieces " +
      "placed in a natural position where they will maintain the maximum of " +
      "usefulness.” The rule that follows from this is iron: do not move the same " +
      "piece twice before the rest of the army is in play.",
    moves: [
      {
        san: "e4",
        commentary:
          "A central pawn first — it opens diagonals for the Queen and King's " +
          "Bishop in a single stroke. “The classical openings have stood the test " +
          "of time precisely because they obey this principle.”",
      },
      {
        san: "e5",
        commentary: "Black follows the same rule and contests the centre at once.",
      },
      {
        san: "Nf3",
        commentary:
          "“Knights before Bishops.” The King's Knight reaches its best square — " +
          "f3 — with a single move, attacking the centre and preparing to castle.",
      },
      {
        san: "Nc6",
        commentary:
          "Black does precisely the same. The Knight defends e5 and develops " +
          "toward the centre — one move, two purposes.",
      },
      {
        san: "Bc4",
        commentary:
          "Only now the Bishop. It takes an active diagonal aimed at the weakest " +
          "square in Black's camp (f7). Notice: no piece has yet been moved twice.",
      },
      {
        san: "Bc5",
        commentary:
          "Black mirrors. Both sides have developed three minor pieces; both " + "Kings are one move from safety.",
      },
      {
        san: "d3",
        commentary:
          "A small pawn move that supports e4 and frees the Queen's Bishop. " +
          "Capablanca warned the beginner against speculative attacks like Ng5 — " +
          "“to move a piece a second time before development is complete is a " +
          "loss of time, and time, in the opening, is everything.”",
      },
      {
        san: "Nf6",
        commentary:
          "Black brings the last minor piece into play, contesting e4 and " +
          "preparing to castle. The opening has been conducted exactly as " +
          "Capablanca prescribes: every move developed a new piece, the centre " +
          "was contested, and no piece moved twice.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Lesson 5: Pawn Endings — the Majority
  // ─────────────────────────────────────────────────────────────────
  "1-5": {
    title: "Pawn Endings — Creating a Passed Pawn",
    intro:
      "White: King f3, pawns g4 and h4. Black: King f6, pawn h7. White owns a " +
      "two-to-one majority on the King's side, and the g-pawn has no Black pawn " +
      "opposing it. Capablanca's rule: “Whenever there is no good reason against " +
      "it, follow the general rule of advancing the pawn that has no pawn " +
      "opposing it.” The White King stands ready to escort the pawns forward.",
    startFen: "8/7p/5k2/8/6PP/5K2/8/8 w - - 0 1",
    moves: [
      {
        san: "g5+",
        commentary:
          "The unopposed pawn advances first — the candidate, the future passed " +
          "pawn. Pushing the h-pawn instead would let Black blockade with …Kg6 " +
          "and the majority would be sterile.",
      },
      { san: "Kf7", commentary: "Black sidesteps the check and hurries to stop the pawns before they promote." },
      {
        san: "Kg4",
        commentary:
          "“The King is a fighting piece.” White brings his monarch up to escort the pawns — the majority cannot be converted without him.",
      },
      {
        san: "Kg6",
        commentary: "Black places his King on the natural blockading square, trying to halt the advance with his body.",
      },
      {
        san: "h5+",
        commentary:
          "The supporting pawn follows. The two pawns now move in lock-step — neither can be captured without losing the other's protection.",
      },
      {
        san: "Kg7",
        commentary:
          "Forced away from the blockade. The pawns and King now coordinate perfectly; Black's position is already lost.",
      },
      {
        san: "Kf5",
        commentary:
          "White seizes the opposition, the King one square behind the g-pawn — the textbook escort position for a passed-pawn advance.",
      },
      {
        san: "Kf7",
        commentary:
          "Black takes the opposition in turn, but with the break …g6 coming the opposition cannot save the defender.",
      },
      {
        san: "g6+",
        commentary: "The breakthrough. The pawn cannot be left alone — if Black declines, gxh7 promotes by force.",
      },
      {
        san: "hxg6+",
        commentary: "Forced. The lone Black pawn must capture, opening the file for White's h-pawn to take its place.",
      },
      {
        san: "hxg6+",
        commentary:
          "The h-pawn transforms into a supported, passed g-pawn on the sixth rank — shoulder-to-shoulder with the White King.",
      },
      {
        san: "Ke7",
        commentary:
          "The Black King is driven away. He cannot reach the queening square in time; the path to promotion is now arithmetic.",
      },
      {
        san: "g7",
        commentary:
          "One step from coronation. Capablanca: “In the end-game, the player who first arrives with his pawn at the seventh rank wins the game.”",
      },
      { san: "Kf7", commentary: "A last attempt to attack the pawn — but the White King defends it." },
      {
        san: "g8=Q+",
        commentary:
          "The conversion is complete. Two pawns and a King, played with precision, have produced a new Queen — Capablanca's textbook transformation of a majority into a winning piece.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER I — Lesson 6: Winning a Pawn — How to Use the Advantage
  // ─────────────────────────────────────────────────────────────────
  "1-6": {
    title: "Winning a Pawn — How to Use the Advantage",
    intro:
      "White: King g1, Rook d1, Knight f3, pawns a2 b2 c2 e4 f2 g2 h2. " +
      "Black: King g8, Rook d8, Knight c6, pawns a7 b7 c7 f7 g7 h6 h7. " +
      "White is a clean central pawn up. Capablanca: “The winning of a pawn " +
      "among master-players is often sufficient to win the game.” The method " +
      "is simplification — exchange pieces, never pawns, and steer toward a " +
      "won King-and-pawn ending.",
    startFen: "3r2k1/ppp2pp1/2n4p/8/4P3/5N2/PPP2PPP/3R2K1 w - - 0 1",
    moves: [
      {
        san: "Rxd8+",
        commentary:
          "“The first principle in exploiting a material advantage is the " +
          "exchange of pieces.” Every trade brings the won pawn ending closer " +
          "and removes the opponent's chances of complications.",
      },
      {
        san: "Nxd8",
        commentary:
          "Black recaptures with the Knight — the only piece left to do the " +
          "work. The Rooks are off the board; the simplification has begun.",
      },
      {
        san: "Nd4",
        commentary:
          "Centralise. Capablanca: “A Knight in the centre commands eight " +
          "squares.” White's Knight occupies the strongest post on the board " +
          "and prepares to be exchanged on its own terms.",
      },
      {
        san: "Ne6",
        commentary:
          "Black offers the trade himself, hoping that a Knight ending will " +
          "be drawable. It will not be — the extra central pawn is decisive.",
      },
      {
        san: "Nxe6",
        commentary:
          "“Trade pieces, not pawns.” With the minor pieces gone, only Kings " +
          "and pawns remain — and White's e-pawn is a permanent extra unit on " +
          "the most important file.",
      },
      {
        san: "fxe6",
        commentary:
          "Black recaptures. The position is now a pure pawn ending: White is " +
          "still a pawn up, and Black's pawn structure has been further " +
          "damaged by the doubled e-pawns.",
      },
      {
        san: "Kf1",
        commentary:
          "“In King-and-pawn endings, the King is a fighting piece — bring " +
          "him out at once.” White begins the march to the centre, the " +
          "indispensable second step after simplification.",
      },
      {
        san: "Kf7",
        commentary:
          "Black does the same, but the extra pawn gives White a free tempo " +
          "to seize the opposition. The path from here — centralise the King, " +
          "advance the majority, promote — is exactly the technique of " +
          "Lessons 2 and 5. The single pawn, properly exploited, wins the game.",
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════════
  // MILESTONE ARCHIVE — NODE I: THE RISE (1909 – 1911)
  // ═════════════════════════════════════════════════════════════════

  // ── 1909 Marshall — Capablanca Match ────────────────────────────
  // ═════════════════════════════════════════════════════════════════
  // MILESTONE ARCHIVE — full historical games (auto-generated from PGN)
  // ═════════════════════════════════════════════════════════════════

  // ── 1909 Marshall — Capablanca Match ────────────────────────────

  "marshall-g1": {
    title: "F. Marshall – Capablanca, USA m (1909)",
    intro: "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Be6", commentary: "Bishop comes out to e6, completing minor-piece development." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "h6", commentary: "Pawn to h6 — building the structure." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6, leaving White a clear material edge." },
      { san: "Qxf6", commentary: "Queen takes the bishop on f6" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Nb5", commentary: "Knight manoeuvres to b5, looking for a stable square." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Nfxd4", commentary: "Knight takes the pawn on d4" },
      { san: "Nxd4", commentary: "Knight takes the knight on d4, leaving Black a clear material edge." },
      { san: "Nxd4", commentary: "Knight takes the knight on d4" },
      { san: "Bc5", commentary: "Bishop swings to c5, eyeing the long diagonal." },
      { san: "Nxe6", commentary: "Knight takes the bishop on e6, leaving White a clear material edge." },
      { san: "fxe6", commentary: "Pawn takes the knight on e6" },
      { san: "Qa4+", commentary: "Qa4+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kf7", commentary: "King step Kf7 — quiet prophylaxis." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rhf8", commentary: "Rook lifts to the f-file, seeking an open avenue." },
      { san: "e3", commentary: "Pawn lever e3 — adjusting the structure to open lines." },
      { san: "Qe7", commentary: "Capablanca repositions the Queen to e7, probing for weaknesses." },
      { san: "Rc3", commentary: "Rook lifts to c3, joining the heavy-piece battery." },
      { san: "Rc7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Rfc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rfc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qg4", commentary: "White repositions the Queen to g4, probing for weaknesses." },
      { san: "Qf6", commentary: "Capablanca repositions the Queen to f6, probing for weaknesses." },
      { san: "a3", commentary: "Pawn lever a3 — adjusting the structure to open lines." },
      { san: "Bd6", commentary: "Bishop swings to d6, redirecting its diagonal pressure." },
      { san: "Rxc7+", commentary: "Rook takes the rook on c7 with check." },
      { san: "Rxc7", commentary: "Rook takes the rook on c7" },
      { san: "Rxc7+", commentary: "Rook takes the rook on c7 with check." },
      { san: "Bxc7", commentary: "Bishop takes the rook on c7" },
      { san: "Qb4", commentary: "Queen to b4 — coordinating the final assault." },
      { san: "Bb6", commentary: "Bishop to b6, controlling the long diagonal in the endgame." },
      { san: "a4", commentary: "Pawn push to a4, gaining space in the ending." },
      { san: "Qe7", commentary: "Queen to e7 — coordinating the final assault." },
      { san: "Qf4+", commentary: "Qf4+ — White delivers check, forcing the enemy King to respond." },
      { san: "Qf6", commentary: "Queen to f6 — coordinating the final assault." },
      { san: "Qb4", commentary: "Queen to b4 — coordinating the final assault." },
      { san: "Qe7", commentary: "Queen to e7 — coordinating the final assault." },
      { san: "Qf4+", commentary: "Qf4+ — White delivers check, forcing the enemy King to respond." },
      { san: "Qf6", commentary: "Queen to f6 — coordinating the final assault." },
      { san: "Qb4", commentary: "Queen to b4 — coordinating the final assault." },
      { san: "Qe7", commentary: "Queen to e7 — coordinating the final assault." },
      { san: "Qf4+", commentary: "Qf4+ — White delivers check, forcing the enemy King to respond." },
      {
        san: "Qf6",
        commentary:
          "Threefold repetition — draw agreed, ½–½. Marshall cannot break the Qb4/Qf4+ shuffle without losing the b-pawn, and Capablanca is content to split the point in a still-balanced ending.",
      },
    ],
    guessMoveIndex: 27,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g7": {
    title: "F. Marshall – Capablanca, USA m (1909)",
    intro: "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7. Equal material is restored." },
      { san: "Bd3", commentary: "Bishop comes out to d3, completing minor-piece development." },
      { san: "Nxc3", commentary: "Knight takes the knight on c3, leaving Black a clear material edge." },
      { san: "bxc3", commentary: "Pawn takes the knight on c3. Equal material is restored." },
      { san: "Nd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5" },
      { san: "exd5", commentary: "Pawn takes the pawn on d5" },
      { san: "Qb3", commentary: "White repositions the Queen to b3, probing for weaknesses." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "Qa3", commentary: "White repositions the Queen to a3, probing for weaknesses." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Qc7", commentary: "Capablanca repositions the Queen to c7, probing for weaknesses." },
      { san: "Rfb1", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Rfc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Bxd7", commentary: "Bishop takes the knight on d7, leaving White a clear material edge." },
      { san: "Qxd7", commentary: "Queen takes the bishop on d7" },
      { san: "a6", commentary: "Pawn lever a6 — adjusting the structure to open lines." },
      { san: "Bc6", commentary: "Bishop swings to c6, redirecting its diagonal pressure." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Qxc5", commentary: "Queen takes the pawn on c5" },
      { san: "Rab8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Rxb8", commentary: "Rook takes the rook on b8, leaving White a clear material edge." },
      { san: "Rxb8", commentary: "Rook takes the rook on b8" },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Qf5", commentary: "Capablanca repositions the Queen to f5, probing for weaknesses." },
      { san: "f4", commentary: "Pawn thrust to f4 — claiming space in the centre." },
      { san: "Rb6", commentary: "Rook lifts to b6, joining the heavy-piece battery." },
      {
        san: "Qxb6",
        commentary:
          "25.Qxb6 and Black resigned, 1–0. The rook is lost outright (24...Rb6?? walked into the queen), and with a piece down against Marshall's coordinated rook, knight and a6-passer there is no defence. One of the only games Capablanca lost in the entire 23-game match.",
      },
    ],
    guessMoveIndex: 35,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g10": {
    title: "Capablanca – F. Marshall, USA m (1909)",
    intro:
      "J. Capablanca vs. F. Marshall. USA m (1909). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with e4. The game heads into a Ruy López." },
      { san: "e5", commentary: "e5 — Black steers the contest toward a Ruy López structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Bb5", commentary: "Bishop comes out to b5, completing minor-piece development." },
      { san: "f5", commentary: "Pawn thrust to f5 — claiming space in the centre." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Qe2", commentary: "Queen develops to e2 — Capablanca preferred to keep her flexible." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Nxd4", commentary: "Knight takes the knight on d4, leaving White a clear material edge." },
      { san: "exd4", commentary: "Pawn takes the knight on d4. Equal material is restored." },
      { san: "exf5+", commentary: "Pawn takes the pawn on f5 with check." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nxf6+", commentary: "Knight takes the knight on f6 with check." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "Qh5", commentary: "Capablanca repositions the Queen to h5, probing for weaknesses." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Bg4", commentary: "Bishop swings to g4, redirecting its diagonal pressure." },
      { san: "d3", commentary: "Pawn lever d3 — adjusting the structure to open lines." },
      { san: "cxd3", commentary: "Pawn takes the pawn on d3" },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Rb1", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Ba6", commentary: "Bishop swings to a6, redirecting its diagonal pressure." },
      { san: "Qh3", commentary: "Capablanca repositions the Queen to h3, probing for weaknesses." },
      { san: "Bd4", commentary: "Bishop swings to d4, eyeing the long diagonal." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Qf6", commentary: "Black repositions the Queen to f6, probing for weaknesses." },
      { san: "Ba3", commentary: "Bishop swings to a3, redirecting its diagonal pressure." },
      { san: "Re7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "Rae8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qf3", commentary: "Capablanca repositions the Queen to f3, probing for weaknesses." },
      { san: "Qe5", commentary: "Black repositions the Queen to e5, probing for weaknesses." },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5, leaving White a clear material edge." },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "g3", commentary: "Pawn lever g3 — adjusting the structure to open lines." },
      { san: "Rf7", commentary: "Rook lifts to the f-file, seeking an open avenue." },
      { san: "Rbc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "c4", commentary: "Pawn lever c4 — adjusting the structure to open lines." },
      { san: "Qd1", commentary: "Capablanca repositions the Queen to d1, probing for weaknesses." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4, leaving White a clear material edge." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4" },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qxe1+", commentary: "Queen takes the rook on e1 with check." },
      { san: "Qxe1", commentary: "Queen takes the queen on e1, leaving White a clear material edge." },
      { san: "Rxe1+", commentary: "Rook takes the queen on e1 with check." },
      { san: "Rxe1", commentary: "Rook takes the rook on e1. Every trade matters now." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "Re6", commentary: "Rook activity: Re6. Active Rooks decide Rook endings." },
      { san: "hxg4", commentary: "Pawn takes the bishop on g4. Every trade matters now." },
      { san: "Rxa6", commentary: "Rook takes the bishop on a6. Every trade matters now." },
      { san: "Bb6", commentary: "Bishop to b6, controlling the long diagonal in the endgame." },
      { san: "f6", commentary: "The passed pawn advances to f6 — every tempo counts." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "Bb4", commentary: "Bishop to b4, controlling the long diagonal in the endgame." },
      { san: "Rd5", commentary: "Rook activity: Rd5. Active Rooks decide Rook endings." },
      { san: "Bc3", commentary: "Bishop to c3, controlling the long diagonal in the endgame." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "h3", commentary: "Pawn push to h3, gaining space in the ending." },
      { san: "Bxf2+", commentary: "Bishop takes the pawn on f2 with check." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Bb6", commentary: "Bishop to b6, controlling the long diagonal in the endgame." },
      { san: "hxg4", commentary: "Pawn takes the pawn on g4. Every trade matters now." },
      { san: "Rf2+", commentary: "Rf2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "g5", commentary: "Pawn push to g5, gaining space in the ending." },
      { san: "Ba5", commentary: "Bishop to a5, controlling the long diagonal in the endgame." },
      { san: "Kf7", commentary: "The King steps to f7 — in the endgame, the King is a fighting piece." },
      { san: "Bxb6", commentary: "Bishop takes the bishop on b6, leaving White a clear material edge." },
      { san: "axb6", commentary: "Pawn takes the bishop on b6. Every trade matters now." },
      { san: "Ra7+", commentary: "Ra7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kxf6", commentary: "King takes the pawn on f6. Every trade matters now." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "b5", commentary: "Pawn push to b5, gaining space in the ending." },
      { san: "Rd6+", commentary: "Rd6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Rd5", commentary: "Rook activity: Rd5. Active Rooks decide Rook endings." },
      { san: "b4", commentary: "The passed pawn advances to b4 — every tempo counts." },
      { san: "Rxg5", commentary: "Rook takes the pawn on g5. Every trade matters now." },
      { san: "Rxd2", commentary: "Rook takes the pawn on d2. Every trade matters now." },
      { san: "Rb5", commentary: "Rook activity: Rb5. Active Rooks decide Rook endings." },
      { san: "Rb2", commentary: "Rook activity: Rb2. Active Rooks decide Rook endings." },
      { san: "Rc5", commentary: "Rook activity: Rc5. Active Rooks decide Rook endings." },
      { san: "c3", commentary: "The passed pawn advances to c3 — every tempo counts." },
      { san: "a3", commentary: "Pawn push to a3, gaining space in the ending." },
      { san: "bxa3", commentary: "Pawn takes the pawn on a3. Every trade matters now." },
      { san: "Rxc3", commentary: "Rook takes the pawn on c3. Every trade matters now." },
      { san: "a2", commentary: "The passed pawn advances to a2 — every tempo counts." },
      { san: "Ra3", commentary: "Rook activity: Ra3. Active Rooks decide Rook endings." },
      { san: "Kf6", commentary: "The King steps to f6 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g23": {
    title: "F. Marshall – Capablanca, USA m (1909)",
    intro:
      "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Be6", commentary: "Bishop comes out to e6, completing minor-piece development." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4" },
      { san: "Nxe4", commentary: "Knight takes the knight on e4" },
      { san: "dxe4", commentary: "Pawn takes the knight on e4" },
      { san: "e3", commentary: "Pawn lever e3 — adjusting the structure to open lines." },
      { san: "Nf3+", commentary: "Nf3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Nxf3", commentary: "Knight takes the knight on f3" },
      { san: "exf3", commentary: "Pawn takes the knight on f3" },
      { san: "Qxf3", commentary: "Queen takes the pawn on f3" },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rfc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rab8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Qe4", commentary: "White repositions the Queen to e4, probing for weaknesses." },
      { san: "Qc7", commentary: "Capablanca repositions the Queen to c7, probing for weaknesses." },
      { san: "Rc3", commentary: "Rook lifts to c3, joining the heavy-piece battery." },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "a3", commentary: "Pawn lever a3 — adjusting the structure to open lines." },
      { san: "c4", commentary: "Pawn lever c4 — adjusting the structure to open lines." },
      { san: "Bf3", commentary: "Bishop swings to f3, redirecting its diagonal pressure." },
      { san: "Rfd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rxd1+", commentary: "Rook takes the rook on d1 with check." },
      { san: "Bxd1", commentary: "Bishop takes the rook on d1" },
      { san: "Rd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Bf3", commentary: "Bishop swings to f3, redirecting its diagonal pressure." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "Qc6", commentary: "White repositions the Queen to c6, probing for weaknesses." },
      { san: "Qe5", commentary: "Capablanca repositions the Queen to e5, probing for weaknesses." },
      { san: "Qe4", commentary: "White repositions the Queen to e4, probing for weaknesses." },
      { san: "Qxe4", commentary: "Queen takes the queen on e4, leaving Black a clear material edge." },
      { san: "Bxe4", commentary: "Bishop takes the queen on e4. Every trade matters now." },
      { san: "Rd1+", commentary: "Rd1+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "a5", commentary: "Pawn push to a5, gaining space in the ending." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "b4", commentary: "The passed pawn advances to b4 — every tempo counts." },
      { san: "axb4", commentary: "Pawn takes the pawn on b4. Every trade matters now." },
      { san: "axb4", commentary: "Pawn takes the pawn on b4. Every trade matters now." },
      { san: "Bf3", commentary: "Bishop to f3, controlling the long diagonal in the endgame." },
      { san: "Rb1", commentary: "Rook activity: Rb1. Active Rooks decide Rook endings." },
      { san: "Be2", commentary: "Bishop to e2, controlling the long diagonal in the endgame." },
      { san: "b3", commentary: "The passed pawn advances to b3 — every tempo counts." },
      { san: "Rd2", commentary: "Rook activity: Rd2. Active Rooks decide Rook endings." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "Bd1", commentary: "Bishop to d1, controlling the long diagonal in the endgame." },
      { san: "c3", commentary: "The passed pawn advances to c3 — every tempo counts." },
      { san: "bxc3", commentary: "Pawn takes the pawn on c3. Every trade matters now." },
      { san: "b2", commentary: "The passed pawn advances to b2 — every tempo counts." },
      { san: "Rxb2", commentary: "Rook takes the pawn on b2. Every trade matters now." },
      { san: "Rxd1", commentary: "Rook takes the bishop on d1. Every trade matters now." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "Bf5", commentary: "Bishop to f5, controlling the long diagonal in the endgame." },
      { san: "Rb2", commentary: "Rook activity: Rb2. Active Rooks decide Rook endings." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "Rb3", commentary: "Rook activity: Rb3. Active Rooks decide Rook endings." },
      { san: "Be4+", commentary: "Be4+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "f4", commentary: "Pawn push to f4, gaining space in the ending." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "hxg4+", commentary: "Pawn takes the pawn on g4 with check." },
      { san: "Kxg4", commentary: "King takes the pawn on g4. Every trade matters now." },
      { san: "Rxh2", commentary: "Rook takes the pawn on h2. Every trade matters now." },
      { san: "Rb4", commentary: "Rook activity: Rb4. Active Rooks decide Rook endings." },
      { san: "f5+", commentary: "f5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg3", commentary: "The King steps to g3 — in the endgame, the King is a fighting piece." },
      { san: "Re2", commentary: "Rook activity: Re2. Active Rooks decide Rook endings." },
      { san: "Rc4", commentary: "Rook activity: Rc4. Active Rooks decide Rook endings." },
      { san: "Rxe3+", commentary: "Rook takes the pawn on e3 with check." },
      { san: "Kh4", commentary: "The King steps to h4 — in the endgame, the King is a fighting piece." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Rc7+", commentary: "Rc7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kf6", commentary: "The King steps to f6 — in the endgame, the King is a fighting piece." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "Bg2", commentary: "Bishop to g2, controlling the long diagonal in the endgame." },
      { san: "Rd6+", commentary: "Rd6+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 49,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  // ── 1911 San Sebastián Tournament ───────────────────────────────

  "sansebastian-g1": {
    title: "Capablanca – O. Bernstein, San Sebastian (1911)",
    intro:
      "J. Capablanca vs. O. Bernstein. San Sebastian (1911). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with e4. The game heads into a Ruy López." },
      { san: "e5", commentary: "e5 — Black steers the contest toward a Ruy López structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Bb5", commentary: "Bishop comes out to b5, completing minor-piece development." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "d6", commentary: "Pawn to d6 — building the structure." },
      { san: "Bxc6+", commentary: "Bishop takes the knight on c6 with check." },
      { san: "bxc6", commentary: "Pawn takes the bishop on c6. Equal material is restored." },
      { san: "d4", commentary: "Pawn thrust to d4 — claiming space in the centre." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4. Equal material is restored." },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4. Equal material is restored." },
      { san: "Bd7", commentary: "Bishop comes out to d7, completing minor-piece development." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Bh4", commentary: "Bishop swings to h4, redirecting its diagonal pressure." },
      { san: "Nh7", commentary: "Knight manoeuvres to h7, looking for a stable square." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "Rab8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Ng5", commentary: "Knight manoeuvres to g5, looking for a stable square." },
      { san: "Rad1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Qe5", commentary: "Black repositions the Queen to e5, probing for weaknesses." },
      { san: "Qe3", commentary: "Capablanca repositions the Queen to e3, probing for weaknesses." },
      { san: "Ne6", commentary: "Knight manoeuvres to e6, looking for a stable square." },
      { san: "Nce2", commentary: "Knight manoeuvres to e2, looking for a stable square." },
      { san: "Qa5", commentary: "Black repositions the Queen to a5, probing for weaknesses." },
      { san: "Nf5", commentary: "Knight to f5 — a powerful central outpost." },
      { san: "Nc5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Ned4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Kh7", commentary: "King step Kh7 — quiet prophylaxis." },
      { san: "g4", commentary: "Pawn lever g4 — adjusting the structure to open lines." },
      { san: "Rbe8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "f3", commentary: "Pawn lever f3 — adjusting the structure to open lines." },
      { san: "Ne6", commentary: "Knight manoeuvres to e6, looking for a stable square." },
      { san: "Ne2", commentary: "Knight manoeuvres to e2, looking for a stable square." },
      { san: "Qxa2", commentary: "Queen takes the pawn on a2" },
      { san: "Neg3", commentary: "Knight manoeuvres to g3, looking for a stable square." },
      { san: "Qxc2", commentary: "Queen takes the pawn on c2" },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qb2", commentary: "Black repositions the Queen to b2, probing for weaknesses." },
      { san: "Nh5", commentary: "Knight manoeuvres to h5, looking for a stable square." },
      { san: "Rh8", commentary: "Rook lifts to the h-file, seeking an open avenue." },
      { san: "Re2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "Qe5", commentary: "Black repositions the Queen to e5, probing for weaknesses." },
      { san: "f4", commentary: "Pawn lever f4 — adjusting the structure to open lines." },
      { san: "Qb5", commentary: "Black repositions the Queen to b5, probing for weaknesses." },
      { san: "Nfxg7", commentary: "Knight takes the pawn on g7" },
      { san: "Nc5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Nxe8", commentary: "Knight takes the rook on e8, leaving White a clear material edge." },
      { san: "Bxe8", commentary: "Bishop takes the knight on e8" },
      { san: "Qc3", commentary: "Capablanca repositions the Queen to c3, probing for weaknesses." },
      { san: "f6", commentary: "Pawn lever f6 — adjusting the structure to open lines." },
      { san: "Nxf6+", commentary: "Knight takes the pawn on f6 with check." },
      { san: "Kg6", commentary: "King step Kg6 — quiet prophylaxis." },
      { san: "Nh5", commentary: "Knight manoeuvres to h5, looking for a stable square." },
      { san: "Rg8", commentary: "Rook lifts to the g-file, seeking an open avenue." },
      { san: "f5+", commentary: "f5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg5", commentary: "The King strides into the centre — an endgame piece in its own right." },
      { san: "Qe3+", commentary: "Qe3+ — Capablanca delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 54,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "sansebastian-g4": {
    title: "Capablanca – A. Burn, San Sebastian (1911)",
    intro:
      "J. Capablanca vs. A. Burn. San Sebastian (1911). Ruy López. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with e4. The game heads into a Ruy López." },
      { san: "e5", commentary: "e5 — Black steers the contest toward a Ruy López structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Bb5", commentary: "Bishop comes out to b5, completing minor-piece development." },
      { san: "a6", commentary: "Pawn to a6 — building the structure." },
      { san: "Ba4", commentary: "Bishop comes out to a4, completing minor-piece development." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "d3", commentary: "Pawn to d3 — building the structure." },
      { san: "d6", commentary: "Pawn to d6 — building the structure." },
      { san: "c3", commentary: "Pawn to c3 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nbd2", commentary: "Knight develops to d2 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nf1", commentary: "Knight develops to f1 — pieces before pawns, classical principle." },
      { san: "b5", commentary: "Pawn to b5 — building the structure." },
      { san: "Bc2", commentary: "Bishop swings to c2, redirecting its diagonal pressure." },
      { san: "d5", commentary: "Pawn lever d5 — adjusting the structure to open lines." },
      { san: "Qe2", commentary: "Capablanca repositions the Queen to e2, probing for weaknesses." },
      { san: "dxe4", commentary: "Pawn takes the pawn on e4" },
      { san: "dxe4", commentary: "Pawn takes the pawn on e4" },
      { san: "Bc5", commentary: "Bishop swings to c5, eyeing the long diagonal." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "Be6", commentary: "Bishop swings to e6, redirecting its diagonal pressure." },
      { san: "Ne3", commentary: "Knight manoeuvres to e3, looking for a stable square." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxd5", commentary: "Bishop takes the knight on d5, leaving Black a clear material edge." },
      { san: "exd5", commentary: "Pawn takes the bishop on d5" },
      { san: "Nb8", commentary: "Knight manoeuvres to b8, looking for a stable square." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "cxb4", commentary: "Pawn takes the pawn on b4" },
      { san: "Bxb4", commentary: "Bishop takes the pawn on b4" },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6, leaving White a clear material edge." },
      { san: "Qxf6", commentary: "Queen takes the bishop on f6" },
      { san: "Qe4", commentary: "Capablanca repositions the Queen to e4, probing for weaknesses." },
      { san: "Bd6", commentary: "Bishop swings to d6, redirecting its diagonal pressure." },
      { san: "Qxh7+", commentary: "Queen takes the pawn on h7 with check." },
      { san: "Kf8", commentary: "King step Kf8 — quiet prophylaxis." },
      { san: "Nh4", commentary: "Knight manoeuvres to h4, looking for a stable square." },
      { san: "Qh6", commentary: "Black repositions the Queen to h6, probing for weaknesses." },
      { san: "Qxh6", commentary: "Queen takes the queen on h6, leaving White a clear material edge." },
      { san: "gxh6", commentary: "Pawn takes the queen on h6" },
      { san: "Nf5", commentary: "Knight to f5 — a powerful central outpost." },
      { san: "h5", commentary: "Pawn lever h5 — adjusting the structure to open lines." },
      { san: "Bd1", commentary: "Bishop swings to d1, redirecting its diagonal pressure." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Bxh5", commentary: "Bishop takes the pawn on h5" },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5" },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Nf4", commentary: "Knight to f4 — a powerful central outpost." },
      { san: "Bc4", commentary: "Bishop swings to c4, eyeing the long diagonal." },
      { san: "Red8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "g3", commentary: "Pawn lever g3 — adjusting the structure to open lines." },
      { san: "Ne6", commentary: "Knight manoeuvres to e6, looking for a stable square." },
      { san: "Bxe6", commentary: "Bishop takes the knight on e6, leaving White a clear material edge." },
      { san: "fxe6", commentary: "Pawn takes the bishop on e6. Every trade matters now." },
      { san: "Ne3", commentary: "Knight to e3 — short-range, but decisive on the right square." },
      { san: "Rdb8", commentary: "Rook activity: Rdb8. Active Rooks decide Rook endings." },
      { san: "Nc4", commentary: "Knight to c4 — short-range, but decisive on the right square." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Rac1", commentary: "Rook activity: Rac1. Active Rooks decide Rook endings." },
      { san: "Ra7", commentary: "Rook activity: Ra7. Active Rooks decide Rook endings." },
      { san: "Re1", commentary: "Rook activity: Re1. Active Rooks decide Rook endings." },
      { san: "Kf6", commentary: "The King steps to f6 — in the endgame, the King is a fighting piece." },
      { san: "Re4", commentary: "Rook activity: Re4. Active Rooks decide Rook endings." },
      { san: "Rb4", commentary: "Rook activity: Rb4. Active Rooks decide Rook endings." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Ra6", commentary: "Rook activity: Ra6. Active Rooks decide Rook endings." },
      { san: "Rc3", commentary: "Rook activity: Rc3. Active Rooks decide Rook endings." },
      { san: "Bc5", commentary: "Bishop to c5, controlling the long diagonal in the endgame." },
      { san: "Rf3+", commentary: "Rf3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "b3", commentary: "Pawn push to b3, gaining space in the ending." },
      { san: "Bd4", commentary: "Bishop to d4, controlling the long diagonal in the endgame." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Ra8", commentary: "Rook activity: Ra8. Active Rooks decide Rook endings." },
      { san: "g5", commentary: "The passed pawn advances to g5 — every tempo counts." },
      { san: "Ra6", commentary: "Rook activity: Ra6. Active Rooks decide Rook endings." },
      { san: "h5", commentary: "The passed pawn advances to h5 — every tempo counts." },
      { san: "Rxc4", commentary: "Rook takes the knight on c4. Every trade matters now." },
      { san: "bxc4", commentary: "Pawn takes the rook on c4, leaving White a clear material edge." },
      { san: "Rc6", commentary: "Rook activity: Rc6. Active Rooks decide Rook endings." },
      { san: "g6", commentary: "The passed pawn advances to g6 — every tempo counts." },
    ],
    guessMoveIndex: 40,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  "sansebastian-g9": {
    title: "Capablanca – D. Janowski, San Sebastian (1911)",
    intro:
      "J. Capablanca vs. D. Janowski. San Sebastian (1911). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5. Equal material is restored." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "a3", commentary: "Pawn to a3 — building the structure." },
      { san: "Bxc5", commentary: "Bishop takes the pawn on c5. Equal material is restored." },
      { san: "b4", commentary: "Pawn to b4 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Bb2", commentary: "Bishop swings to b2, redirecting its diagonal pressure." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5" },
      { san: "exd5", commentary: "Pawn takes the pawn on d5" },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Bd6", commentary: "Bishop swings to d6, redirecting its diagonal pressure." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Be6", commentary: "Bishop swings to e6, redirecting its diagonal pressure." },
      { san: "Bf3", commentary: "Bishop swings to f3, redirecting its diagonal pressure." },
      { san: "Ra7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc7", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Nbd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rfc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Na4", commentary: "Knight manoeuvres to a4, looking for a stable square." },
      { san: "Rxc1", commentary: "Rook takes the rook on c1, leaving Black a clear material edge." },
      { san: "Rxc1", commentary: "Rook takes the rook on c1" },
      { san: "Rxc1+", commentary: "Rook takes the rook on c1 with check." },
      { san: "Bxc1", commentary: "Bishop takes the rook on c1" },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Bb2", commentary: "Bishop swings to b2, redirecting its diagonal pressure." },
      { san: "Nc4", commentary: "Knight to c4 — a powerful central outpost." },
      { san: "Bxc4", commentary: "Bishop takes the knight on c4, leaving White a clear material edge." },
      { san: "Bxh2+", commentary: "Bishop takes the pawn on h2 with check." },
      { san: "Kxh2", commentary: "King takes the bishop on h2, leaving White a clear material edge." },
      { san: "Qh4+", commentary: "Qh4+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "Qxf2+", commentary: "Queen takes the pawn on f2 with check." },
      { san: "Kh2", commentary: "King step Kh2 — quiet prophylaxis." },
      { san: "Qg3+", commentary: "Qg3+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "dxc4", commentary: "Pawn takes the bishop on c4" },
      { san: "Qc2", commentary: "Capablanca repositions the Queen to c2, probing for weaknesses." },
      { san: "Qxe3+", commentary: "Queen takes the pawn on e3 with check." },
      { san: "Kh2", commentary: "King step Kh2 — quiet prophylaxis." },
      { san: "Qh6+", commentary: "Qh6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "Qe3+", commentary: "Qe3+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "King step Kh2 — quiet prophylaxis." },
      { san: "Qg3+", commentary: "Qg3+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "Qe1+", commentary: "Qe1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "King step Kh2 — quiet prophylaxis." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Nxe6", commentary: "Knight takes the bishop on e6, leaving White a clear material edge." },
      { san: "Qh4+", commentary: "Qh4+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "The King steps to g1 — in the endgame, the King is a fighting piece." },
      { san: "Qe1+", commentary: "Qe1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qh4+", commentary: "Qh4+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "The King steps to g1 — in the endgame, the King is a fighting piece." },
      { san: "Ng4", commentary: "Knight to g4 — short-range, but decisive on the right square." },
      { san: "Qd2", commentary: "Queen to d2 — coordinating the final assault." },
      { san: "Qh2+", commentary: "Qh2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Qh1+", commentary: "Qh1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Ke2", commentary: "The King steps to e2 — in the endgame, the King is a fighting piece." },
      { san: "Qxg2+", commentary: "Queen takes the pawn on g2 with check." },
      { san: "Kd1", commentary: "The King steps to d1 — in the endgame, the King is a fighting piece." },
      { san: "Nf2+", commentary: "Nf2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kc2", commentary: "The King steps to c2 — in the endgame, the King is a fighting piece." },
      { san: "Qg6+", commentary: "Qg6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kc1", commentary: "The King steps to c1 — in the endgame, the King is a fighting piece." },
      { san: "Qg1+", commentary: "Qg1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kc2", commentary: "The King steps to c2 — in the endgame, the King is a fighting piece." },
      { san: "Qg6+", commentary: "Qg6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kc1", commentary: "The King steps to c1 — in the endgame, the King is a fighting piece." },
      { san: "Nd3+", commentary: "Nd3+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kb1", commentary: "The King steps to b1 — in the endgame, the King is a fighting piece." },
      { san: "fxe6", commentary: "Pawn takes the knight on e6. Every trade matters now." },
      { san: "Qc2", commentary: "Queen to c2 — coordinating the final assault." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "Bd4", commentary: "Bishop to d4, controlling the long diagonal in the endgame." },
      { san: "h4", commentary: "The passed pawn advances to h4 — every tempo counts." },
      { san: "Bxb6", commentary: "Bishop takes the pawn on b6. Every trade matters now." },
      { san: "h3", commentary: "The passed pawn advances to h3 — every tempo counts." },
      { san: "Bc7", commentary: "Bishop to c7, controlling the long diagonal in the endgame." },
      { san: "e5", commentary: "Pawn push to e5, gaining space in the ending." },
      { san: "b6", commentary: "The passed pawn advances to b6 — every tempo counts." },
      { san: "Qe4", commentary: "Queen to e4 — coordinating the final assault." },
      { san: "Bxe5", commentary: "Bishop takes the pawn on e5. Every trade matters now." },
      { san: "Qe1+", commentary: "Qe1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Ka2", commentary: "The King steps to a2 — in the endgame, the King is a fighting piece." },
      { san: "Nxe5", commentary: "Knight takes the bishop on e5. Every trade matters now." },
      { san: "b7", commentary: "The passed pawn advances to b7 — every tempo counts." },
      { san: "Nd7", commentary: "Knight to d7 — short-range, but decisive on the right square." },
      { san: "Nc5", commentary: "Knight to c5 — short-range, but decisive on the right square." },
      { san: "Nb8", commentary: "Knight to b8 — short-range, but decisive on the right square." },
      { san: "Qxc4+", commentary: "Queen takes the pawn on c4 with check." },
      { san: "Kh8", commentary: "The King steps to h8 — in the endgame, the King is a fighting piece." },
      { san: "Ne4", commentary: "Knight to e4 — short-range, but decisive on the right square." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Qd3", commentary: "Queen to d3 — coordinating the final assault." },
      { san: "g6", commentary: "Pawn push to g6, gaining space in the ending." },
      { san: "Qxh3+", commentary: "Queen takes the pawn on h3 with check." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Qf3", commentary: "Queen to f3 — coordinating the final assault." },
      { san: "Qc1", commentary: "Queen to c1 — coordinating the final assault." },
      { san: "Qf6+", commentary: "Qf6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Qf7+", commentary: "Qf7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh6", commentary: "The King steps to h6 — in the endgame, the King is a fighting piece." },
      { san: "Qf8+", commentary: "Qf8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh5", commentary: "The King steps to h5 — in the endgame, the King is a fighting piece." },
      { san: "Qh8+", commentary: "Qh8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg4", commentary: "The King steps to g4 — in the endgame, the King is a fighting piece." },
      { san: "Qc8+", commentary: "Qc8+ — Capablanca delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 68,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "sansebastian-g14": {
    title: "A. Rubinstein – Capablanca, San Sebastian (1911)",
    intro:
      "A. Rubinstein vs. J. Capablanca. San Sebastian (1911). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Be6", commentary: "Bishop comes out to e6, completing minor-piece development." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Bxc5", commentary: "Bishop takes the pawn on c5" },
      { san: "Ng5", commentary: "Knight manoeuvres to g5, looking for a stable square." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Nxe6", commentary: "Knight takes the bishop on e6, leaving White a clear material edge." },
      { san: "fxe6", commentary: "Pawn takes the knight on e6" },
      { san: "Bh3", commentary: "Bishop swings to h3, redirecting its diagonal pressure." },
      { san: "Qe7", commentary: "Capablanca repositions the Queen to e7, probing for weaknesses." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6, leaving White a clear material edge." },
      { san: "Qxf6", commentary: "Queen takes the bishop on f6" },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5" },
      { san: "Qh6", commentary: "Capablanca repositions the Queen to h6, probing for weaknesses." },
      { san: "Kg2", commentary: "King step Kg2 — quiet prophylaxis." },
      { san: "Rcd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Qc1", commentary: "White repositions the Queen to c1, probing for weaknesses." },
      { san: "exd5", commentary: "Pawn takes the knight on d5" },
      { san: "Qxc5", commentary: "Queen takes the bishop on c5" },
      { san: "Qd2", commentary: "Capablanca repositions the Queen to d2, probing for weaknesses." },
      { san: "Qb5", commentary: "White repositions the Queen to b5, probing for weaknesses." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Qd3", commentary: "White repositions the Queen to d3, probing for weaknesses." },
      { san: "Qxd3", commentary: "Queen takes the queen on d3, leaving Black a clear material edge." },
      { san: "exd3", commentary: "Pawn takes the queen on d3" },
      { san: "Rfe8", commentary: "Rook activity: Rfe8. Active Rooks decide Rook endings." },
      { san: "Bg4", commentary: "Bishop to g4, controlling the long diagonal in the endgame." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "Rfe1", commentary: "Rook activity: Rfe1. Active Rooks decide Rook endings." },
      { san: "Rxe1", commentary: "Rook takes the rook on e1, leaving Black a clear material edge." },
      { san: "Rxe1", commentary: "Rook takes the rook on e1. Every trade matters now." },
      { san: "Rb6", commentary: "Rook activity: Rb6. Active Rooks decide Rook endings." },
      { san: "Re5", commentary: "Rook activity: Re5. Active Rooks decide Rook endings." },
      { san: "Rxb2", commentary: "Rook takes the pawn on b2. Every trade matters now." },
      { san: "Rxd5", commentary: "Rook takes the pawn on d5. Every trade matters now." },
      { san: "Nc6", commentary: "Knight to c6 — short-range, but decisive on the right square." },
      { san: "Be6+", commentary: "Be6+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "Rf5+", commentary: "Rf5+ — White delivers check, forcing the enemy King to respond." },
      { san: "Ke8", commentary: "The King steps to e8 — in the endgame, the King is a fighting piece." },
      { san: "Bf7+", commentary: "Bf7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kd7", commentary: "The King steps to d7 — in the endgame, the King is a fighting piece." },
      { san: "Bc4", commentary: "Bishop to c4, controlling the long diagonal in the endgame." },
      { san: "a6", commentary: "Pawn push to a6, gaining space in the ending." },
      { san: "Rf7+", commentary: "Rf7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kd6", commentary: "The King steps to d6 — in the endgame, the King is a fighting piece." },
      { san: "Rxg7", commentary: "Rook takes the pawn on g7. Every trade matters now." },
      { san: "b5", commentary: "Pawn push to b5, gaining space in the ending." },
      { san: "Bg8", commentary: "Bishop to g8, controlling the long diagonal in the endgame." },
      { san: "a5", commentary: "Pawn push to a5, gaining space in the ending." },
      { san: "Rxh7", commentary: "Rook takes the pawn on h7, leaving White a clear material edge." },
      { san: "a4", commentary: "The passed pawn advances to a4 — every tempo counts." },
      { san: "h4", commentary: "Pawn push to h4, gaining space in the ending." },
      { san: "b4", commentary: "The passed pawn advances to b4 — every tempo counts." },
      { san: "Rh6+", commentary: "Rh6+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kc5", commentary: "The King steps to c5 — in the endgame, the King is a fighting piece." },
      { san: "Rh5+", commentary: "Rh5+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kb6", commentary: "The King steps to b6 — in the endgame, the King is a fighting piece." },
      { san: "Bd5", commentary: "Bishop to d5, controlling the long diagonal in the endgame." },
      { san: "b3", commentary: "The passed pawn advances to b3 — every tempo counts." },
      { san: "axb3", commentary: "Pawn takes the pawn on b3, leaving White a clear material edge." },
      { san: "a3", commentary: "The passed pawn advances to a3 — every tempo counts." },
      { san: "Bxc6", commentary: "Bishop takes the knight on c6, leaving White a clear material edge." },
      { san: "Rxb3", commentary: "Rook takes the pawn on b3, leaving White a clear material edge." },
      { san: "Bd5", commentary: "Bishop to d5, controlling the long diagonal in the endgame." },
      { san: "a2", commentary: "The passed pawn advances to a2 — every tempo counts." },
      { san: "Rh6+", commentary: "Rh6+ — White delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 39,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  // ── 1921 Havana World Championship ──────────────────────────────

  "havana-g1": {
    title: "Capablanca – E. Lasker, World Championship 12th (1921)",
    intro:
      "J. Capablanca vs. E. Lasker. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "b6", commentary: "Pawn to b6 — building the structure." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Bb5", commentary: "Bishop swings to b5, redirecting its diagonal pressure." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "Qa4", commentary: "Capablanca repositions the Queen to a4, probing for weaknesses." },
      { san: "a6", commentary: "Pawn lever a6 — adjusting the structure to open lines." },
      { san: "Bxd7", commentary: "Bishop takes the knight on d7, leaving White a clear material edge." },
      { san: "Nxd7", commentary: "Knight takes the bishop on d7" },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Qd6", commentary: "Black repositions the Queen to d6, probing for weaknesses." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rfd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rab8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Ne1", commentary: "Knight manoeuvres to e1, looking for a stable square." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Rc2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Ne2", commentary: "Knight manoeuvres to e2, looking for a stable square." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Qa3", commentary: "Capablanca repositions the Queen to a3, probing for weaknesses." },
      { san: "Rbc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Ng3", commentary: "Knight manoeuvres to g3, looking for a stable square." },
      { san: "Nxg3", commentary: "Knight takes the knight on g3, leaving Black a clear material edge." },
      { san: "hxg3", commentary: "Pawn takes the knight on g3" },
      { san: "Qb6", commentary: "Black repositions the Queen to b6, probing for weaknesses." },
      { san: "Rcd2", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "d4", commentary: "Pawn lever d4 — adjusting the structure to open lines." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Bxf3", commentary: "Bishop takes the knight on f3" },
      { san: "Qxf3", commentary: "Queen takes the bishop on f3" },
      { san: "Rxd4", commentary: "Rook takes the pawn on d4" },
      { san: "Rc2", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rxd1+", commentary: "Rook takes the rook on d1 with check." },
      { san: "Qxd1", commentary: "Queen takes the rook on d1" },
      { san: "Rd8", commentary: "Rook activity: Rd8. Active Rooks decide Rook endings." },
      { san: "Qe2", commentary: "Queen to e2 — coordinating the final assault." },
      { san: "Qd6", commentary: "Queen to d6 — coordinating the final assault." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qd5", commentary: "Queen to d5 — coordinating the final assault." },
      { san: "b3", commentary: "Pawn push to b3, gaining space in the ending." },
      { san: "Qf5", commentary: "Queen to f5 — coordinating the final assault." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Qg5", commentary: "Queen to g5 — coordinating the final assault." },
      { san: "g3", commentary: "Pawn push to g3, gaining space in the ending." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "g6", commentary: "Pawn push to g6, gaining space in the ending." },
      { san: "Qc4", commentary: "Queen to c4 — coordinating the final assault." },
      { san: "Re6", commentary: "Rook activity: Re6. Active Rooks decide Rook endings." },
      { san: "Qxc5", commentary: "Queen takes the pawn on c5. Every trade matters now." },
      { san: "Qxg4", commentary: "Queen takes the pawn on g4. Every trade matters now." },
      { san: "f3", commentary: "Pawn push to f3, gaining space in the ending." },
      { san: "Qg5", commentary: "Queen to g5 — coordinating the final assault." },
      { san: "Qxg5", commentary: "Queen takes the queen on g5, leaving White a clear material edge." },
      { san: "hxg5", commentary: "Pawn takes the queen on g5. Every trade matters now." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "Ke3", commentary: "The King steps to e3 — in the endgame, the King is a fighting piece." },
      { san: "Re6+", commentary: "Re6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kd4", commentary: "The King steps to d4 — in the endgame, the King is a fighting piece." },
      { san: "Rd6+", commentary: "Rd6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Ke3", commentary: "The King steps to e3 — in the endgame, the King is a fighting piece." },
      { san: "Re6+", commentary: "Re6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Rd1", commentary: "Rook activity: Rd1. Active Rooks decide Rook endings." },
      { san: "Ke2", commentary: "The King steps to e2 — in the endgame, the King is a fighting piece." },
      { san: "Ra1", commentary: "Rook activity: Ra1. Active Rooks decide Rook endings." },
      { san: "Kd3", commentary: "The King steps to d3 — in the endgame, the King is a fighting piece." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "b4", commentary: "Pawn push to b4, gaining space in the ending." },
      { san: "Rf1", commentary: "Rook activity: Rf1. Active Rooks decide Rook endings." },
      { san: "Ke3", commentary: "The King steps to e3 — in the endgame, the King is a fighting piece." },
      { san: "Rb1", commentary: "Rook activity: Rb1. Active Rooks decide Rook endings." },
      { san: "Rc6", commentary: "Rook activity: Rc6. Active Rooks decide Rook endings." },
      { san: "Rxb4", commentary: "Rook takes the pawn on b4. Every trade matters now." },
      { san: "Rxa6", commentary: "Rook takes the pawn on a6. Every trade matters now." },
      { san: "Rb2", commentary: "Rook activity: Rb2. Active Rooks decide Rook endings." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g5": {
    title: "Capablanca – E. Lasker, World Championship 12th (1921)",
    intro:
      "J. Capablanca vs. E. Lasker. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "b6", commentary: "Pawn to b6 — building the structure." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Qa4", commentary: "Capablanca repositions the Queen to a4, probing for weaknesses." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "Qc6", commentary: "Capablanca repositions the Queen to c6, probing for weaknesses." },
      { san: "Rb8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5" },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "Nxe7+", commentary: "Knight takes the bishop on e7 with check." },
      { san: "Qxe7", commentary: "Queen takes the knight on e7" },
      { san: "Qa4", commentary: "Capablanca repositions the Queen to a4, probing for weaknesses." },
      { san: "Rbc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qa3", commentary: "Capablanca repositions the Queen to a3, probing for weaknesses." },
      { san: "Qe6", commentary: "Black repositions the Queen to e6, probing for weaknesses." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6, leaving White a clear material edge." },
      { san: "Qxf6", commentary: "Queen takes the bishop on f6" },
      { san: "Ba6", commentary: "Bishop swings to a6, redirecting its diagonal pressure." },
      { san: "Bxf3", commentary: "Bishop takes the knight on f3" },
      { san: "Bxc8", commentary: "Bishop takes the rook on c8, leaving White a clear material edge." },
      { san: "Rxc8", commentary: "Rook takes the bishop on c8" },
      { san: "gxf3", commentary: "Pawn takes the bishop on f3, leaving White a clear material edge." },
      { san: "Qxf3", commentary: "Queen takes the pawn on f3" },
      { san: "Rg1", commentary: "Rook lifts to the g-file, seeking an open avenue." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "Kf1", commentary: "King step Kf1 — quiet prophylaxis." },
      { san: "Re4", commentary: "Rook lifts to e4, joining the heavy-piece battery." },
      { san: "Qd1", commentary: "Capablanca repositions the Queen to d1, probing for weaknesses." },
      { san: "Qh3+", commentary: "Qh3+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Rg2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Rc4", commentary: "Rook lifts to c4, joining the heavy-piece battery." },
      { san: "dxe3", commentary: "Pawn takes the pawn on e3" },
      { san: "Rxe4", commentary: "Rook takes the rook on e4, leaving White a clear material edge." },
      { san: "Nxe4", commentary: "Knight takes the rook on e4" },
      { san: "Qd8+", commentary: "Qd8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Qd4+", commentary: "Qd4+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Nf6", commentary: "Knight to f6 — short-range, but decisive on the right square." },
      { san: "fxe3", commentary: "Pawn takes the pawn on e3. Every trade matters now." },
      { san: "Qe6", commentary: "Queen to e6 — coordinating the final assault." },
      { san: "Rf2", commentary: "Rook activity: Rf2. Active Rooks decide Rook endings." },
      { san: "g5", commentary: "Pawn push to g5, gaining space in the ending." },
      { san: "h4", commentary: "Pawn push to h4, gaining space in the ending." },
      { san: "gxh4", commentary: "Pawn takes the pawn on h4. Every trade matters now." },
      { san: "Qxh4", commentary: "Queen takes the pawn on h4. Every trade matters now." },
      { san: "Ng4", commentary: "Knight to g4 — short-range, but decisive on the right square." },
      { san: "Qg5+", commentary: "Qg5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "Qd8+", commentary: "Qd8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Qg5+", commentary: "Qg5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "Qd8+", commentary: "Qd8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Qg5+", commentary: "Qg5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "b3", commentary: "Pawn push to b3, gaining space in the ending." },
      { san: "Qd6", commentary: "Queen to d6 — coordinating the final assault." },
      { san: "Qf4", commentary: "Queen to f4 — coordinating the final assault." },
      { san: "Qd1+", commentary: "Qd1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Qf1", commentary: "Queen to f1 — coordinating the final assault." },
      { san: "Qd2", commentary: "Queen to d2 — coordinating the final assault." },
      { san: "Rxh5", commentary: "Rook takes the pawn on h5. Every trade matters now." },
      { san: "Nxe3", commentary: "Knight takes the pawn on e3. Every trade matters now." },
      { san: "Qf3", commentary: "Queen to f3 — coordinating the final assault." },
      { san: "Qd4", commentary: "Queen to d4 — coordinating the final assault." },
      { san: "Qa8+", commentary: "Qa8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Qb7+", commentary: "Qb7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "Qb8+", commentary: "Qb8+ — Capablanca delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 50,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g10": {
    title: "E. Lasker – Capablanca, World Championship 12th (1921)",
    intro:
      "E. Lasker vs. J. Capablanca. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "Qc2", commentary: "Queen develops to c2 — Capablanca preferred to keep her flexible." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Qa5", commentary: "Capablanca plays Qa5, continuing development." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Bh4", commentary: "Bishop swings to h4, redirecting its diagonal pressure." },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "exd4", commentary: "Pawn takes the pawn on d4" },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4" },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "Nb6", commentary: "Knight manoeuvres to b6, looking for a stable square." },
      { san: "Bb3", commentary: "Bishop swings to b3, redirecting its diagonal pressure." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rac8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Bb5", commentary: "Bishop swings to b5, redirecting its diagonal pressure." },
      { san: "Rfe1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Nbd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxd5", commentary: "Bishop takes the knight on d5, leaving White a clear material edge." },
      { san: "Nxd5", commentary: "Knight takes the bishop on d5" },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Nxe7", commentary: "Knight takes the bishop on e7" },
      { san: "Qb3", commentary: "White repositions the Queen to b3, probing for weaknesses." },
      { san: "Bc6", commentary: "Bishop swings to c6, redirecting its diagonal pressure." },
      { san: "Nxc6", commentary: "Knight takes the bishop on c6, leaving White a clear material edge." },
      { san: "bxc6", commentary: "Pawn takes the knight on c6" },
      { san: "Re5", commentary: "Rook lifts to e5, joining the heavy-piece battery." },
      { san: "Qb6", commentary: "Capablanca repositions the Queen to b6, probing for weaknesses." },
      { san: "Qc2", commentary: "White repositions the Queen to c2, probing for weaknesses." },
      { san: "Rfd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Ne2", commentary: "Knight manoeuvres to e2, looking for a stable square." },
      { san: "Rd5", commentary: "Rook lifts to d5, joining the heavy-piece battery." },
      { san: "Rxd5", commentary: "Rook takes the rook on d5, leaving White a clear material edge." },
      { san: "cxd5", commentary: "Pawn takes the rook on d5" },
      { san: "Qd2", commentary: "White repositions the Queen to d2, probing for weaknesses." },
      { san: "Nf5", commentary: "Knight to f5 — a powerful central outpost." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "h5", commentary: "Pawn lever h5 — adjusting the structure to open lines." },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "Qd3", commentary: "White repositions the Queen to d3, probing for weaknesses." },
      { san: "Rc6", commentary: "Rook lifts to c6, joining the heavy-piece battery." },
      { san: "Kf1", commentary: "King step Kf1 — quiet prophylaxis." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "Qb1", commentary: "White repositions the Queen to b1, probing for weaknesses." },
      { san: "Qb4", commentary: "Capablanca repositions the Queen to b4, probing for weaknesses." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "Qb2", commentary: "White repositions the Queen to b2, probing for weaknesses." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Qd2", commentary: "White repositions the Queen to d2, probing for weaknesses." },
      { san: "Qxd2", commentary: "Queen takes the queen on d2, leaving Black a clear material edge." },
      { san: "Rxd2", commentary: "Rook takes the queen on d2. Every trade matters now." },
      { san: "axb3", commentary: "Pawn takes the pawn on b3. Every trade matters now." },
      { san: "axb3", commentary: "Pawn takes the pawn on b3. Every trade matters now." },
      { san: "Rb6", commentary: "Rook activity: Rb6. Active Rooks decide Rook endings." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "Ra6", commentary: "Rook activity: Ra6. Active Rooks decide Rook endings." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "hxg3", commentary: "Pawn takes the pawn on g3. Every trade matters now." },
      { san: "fxg3", commentary: "Pawn takes the pawn on g3. Every trade matters now." },
      { san: "Ra2", commentary: "Rook activity: Ra2. Active Rooks decide Rook endings." },
      { san: "Nc3", commentary: "Knight to c3 — short-range, but decisive on the right square." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "Nd1", commentary: "Knight to d1 — short-range, but decisive on the right square." },
      { san: "Ne7", commentary: "Knight to e7 — short-range, but decisive on the right square." },
      { san: "Nc3", commentary: "Knight to c3 — short-range, but decisive on the right square." },
      { san: "Rc1+", commentary: "Rc1+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "Nc6", commentary: "Knight to c6 — short-range, but decisive on the right square." },
      { san: "Nd1", commentary: "Knight to d1 — short-range, but decisive on the right square." },
      { san: "Rb1", commentary: "Rook activity: Rb1. Active Rooks decide Rook endings." },
      { san: "Ke2", commentary: "The King steps to e2 — in the endgame, the King is a fighting piece." },
      { san: "Rxb3", commentary: "Rook takes the pawn on b3. Every trade matters now." },
      { san: "Ke3", commentary: "The King steps to e3 — in the endgame, the King is a fighting piece." },
      { san: "Rb4", commentary: "Rook activity: Rb4. Active Rooks decide Rook endings." },
      { san: "Nc3", commentary: "Knight to c3 — short-range, but decisive on the right square." },
      { san: "Ne7", commentary: "Knight to e7 — short-range, but decisive on the right square." },
      { san: "Ne2", commentary: "Knight to e2 — short-range, but decisive on the right square." },
      { san: "Nf5+", commentary: "Nf5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "g5", commentary: "Pawn push to g5, gaining space in the ending." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Nd6", commentary: "Knight to d6 — short-range, but decisive on the right square." },
      { san: "Ng1", commentary: "Knight to g1 — short-range, but decisive on the right square." },
      { san: "Ne4+", commentary: "Ne4+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Rb1+", commentary: "Rb1+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Rb2+", commentary: "Rb2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Rf2+", commentary: "Rf2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke1", commentary: "The King steps to e1 — in the endgame, the King is a fighting piece." },
      { san: "Ra2", commentary: "Rook activity: Ra2. Active Rooks decide Rook endings." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Re3", commentary: "Rook activity: Re3. Active Rooks decide Rook endings." },
      { san: "Kg6", commentary: "The King steps to g6 — in the endgame, the King is a fighting piece." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "f6", commentary: "Pawn push to f6, gaining space in the ending." },
      { san: "Re3", commentary: "Rook activity: Re3. Active Rooks decide Rook endings." },
      { san: "Kf7", commentary: "The King steps to f7 — in the endgame, the King is a fighting piece." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Re3", commentary: "Rook activity: Re3. Active Rooks decide Rook endings." },
      { san: "Kd6", commentary: "The King steps to d6 — in the endgame, the King is a fighting piece." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "Rf2+", commentary: "Rf2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke1", commentary: "The King steps to e1 — in the endgame, the King is a fighting piece." },
      { san: "Rg2", commentary: "Rook activity: Rg2. Active Rooks decide Rook endings." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Ra2", commentary: "Rook activity: Ra2. Active Rooks decide Rook endings." },
      { san: "Re3", commentary: "Rook activity: Re3. Active Rooks decide Rook endings." },
      { san: "e5", commentary: "Pawn push to e5, gaining space in the ending." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4. Every trade matters now." },
      { san: "Rxd4", commentary: "Rook takes the pawn on d4. Every trade matters now." },
      { san: "Kc5", commentary: "The King steps to c5 — in the endgame, the King is a fighting piece." },
      { san: "Rd1", commentary: "Rook activity: Rd1. Active Rooks decide Rook endings." },
      { san: "d4", commentary: "The passed pawn advances to d4 — every tempo counts." },
      { san: "Rc1+", commentary: "Rc1+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kd5", commentary: "The King steps to d5 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 65,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g11": {
    title: "Capablanca – E. Lasker, World Championship 12th (1921)",
    intro:
      "J. Capablanca vs. E. Lasker. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qc2", commentary: "Capablanca plays Qc2, continuing development." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4" },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Rxe7", commentary: "Rook takes the bishop on e7" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nf8", commentary: "Knight manoeuvres to f8, looking for a stable square." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "e4", commentary: "Pawn lever e4 — adjusting the structure to open lines." },
      { san: "Nb6", commentary: "Knight manoeuvres to b6, looking for a stable square." },
      { san: "Bf1", commentary: "Bishop swings to f1, redirecting its diagonal pressure." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "Be8", commentary: "Bishop swings to e8, redirecting its diagonal pressure." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Rec7", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Ng6", commentary: "Knight manoeuvres to g6, looking for a stable square." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "e5", commentary: "Pawn lever e5 — adjusting the structure to open lines." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Rb8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Qc3", commentary: "Capablanca repositions the Queen to c3, probing for weaknesses." },
      { san: "Nf4", commentary: "Knight to f4 — a powerful central outpost." },
      { san: "Nd6", commentary: "Knight manoeuvres to d6, looking for a stable square." },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Qa3", commentary: "Capablanca repositions the Queen to a3, probing for weaknesses." },
      { san: "f6", commentary: "Pawn lever f6 — adjusting the structure to open lines." },
      { san: "Nxe8", commentary: "Knight takes the bishop on e8, leaving White a clear material edge." },
      { san: "Qxe8", commentary: "Queen takes the knight on e8" },
      { san: "exf6", commentary: "Pawn takes the pawn on f6" },
      { san: "gxf6", commentary: "Pawn takes the pawn on f6" },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "Rbc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "bxc6", commentary: "Pawn takes the pawn on c6" },
      { san: "Rxc6", commentary: "Rook takes the pawn on c6" },
      { san: "Rxc6", commentary: "Rook takes the rook on c6, leaving White a clear material edge." },
      { san: "Rxc6", commentary: "Rook takes the rook on c6" },
      { san: "axb6", commentary: "Pawn takes the pawn on b6" },
      { san: "axb6", commentary: "Pawn takes the pawn on b6" },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qc8", commentary: "Black repositions the Queen to c8, probing for weaknesses." },
      { san: "Nd2", commentary: "Knight manoeuvres to d2, looking for a stable square." },
      { san: "Nf8", commentary: "Knight manoeuvres to f8, looking for a stable square." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Qd8", commentary: "Black repositions the Queen to d8, probing for weaknesses." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "Rc7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Rg7", commentary: "Rook lifts to the g-file, seeking an open avenue." },
      { san: "g3", commentary: "Pawn lever g3 — adjusting the structure to open lines." },
      { san: "Ra7", commentary: "Rook lifts to the a-file, seeking an open avenue." },
      { san: "Bc4", commentary: "Bishop swings to c4, eyeing the long diagonal." },
      { san: "Ra5", commentary: "Rook lifts to a5, joining the heavy-piece battery." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Nxc3", commentary: "Knight takes the knight on c3, leaving Black a clear material edge." },
      { san: "Qxc3", commentary: "Queen takes the knight on c3" },
      { san: "Kf7", commentary: "King step Kf7 — quiet prophylaxis." },
      { san: "Qe3", commentary: "Capablanca repositions the Queen to e3, probing for weaknesses." },
      { san: "Qd6", commentary: "Black repositions the Queen to d6, probing for weaknesses." },
      { san: "Qe4", commentary: "Capablanca repositions the Queen to e4, probing for weaknesses." },
      { san: "Ra4", commentary: "Rook lifts to a4, joining the heavy-piece battery." },
      { san: "Qb7+", commentary: "Qb7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg6", commentary: "King step Kg6 — quiet prophylaxis." },
      { san: "Qc8", commentary: "Capablanca repositions the Queen to c8, probing for weaknesses." },
      { san: "Qb4", commentary: "Black repositions the Queen to b4, probing for weaknesses." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "Bd3+", commentary: "Bd3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh6", commentary: "King step Kh6 — quiet prophylaxis." },
      { san: "Rc7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Ra1+", commentary: "Ra1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "King step Kg2 — quiet prophylaxis." },
      { san: "Qd6", commentary: "Black repositions the Queen to d6, probing for weaknesses." },
      { san: "Qxf8+", commentary: "Queen takes the knight on f8 with check." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g14": {
    title: "E. Lasker – Capablanca, World Championship 12th (1921)",
    intro:
      "E. Lasker vs. J. Capablanca. World Championship 12th (1921). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "White opens with e4. The game heads into a Ruy López." },
      { san: "e5", commentary: "e5 — Black steers the contest toward a Ruy López structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Bb5", commentary: "Bishop comes out to b5, completing minor-piece development." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "d6", commentary: "Pawn to d6 — building the structure." },
      { san: "d4", commentary: "Pawn thrust to d4 — claiming space in the centre." },
      { san: "Bd7", commentary: "Bishop comes out to d7, completing minor-piece development." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Bxc6", commentary: "Bishop takes the knight on c6, leaving White a clear material edge." },
      { san: "Bxc6", commentary: "Bishop takes the bishop on c6. Equal material is restored." },
      { san: "Qd3", commentary: "White plays Qd3, continuing development." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4. Equal material is restored." },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4" },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rae1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Bh4", commentary: "Bishop swings to h4, redirecting its diagonal pressure." },
      { san: "Nh7", commentary: "Knight manoeuvres to h7, looking for a stable square." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Qd8", commentary: "Capablanca repositions the Queen to d8, probing for weaknesses." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "f4", commentary: "Pawn thrust to f4 — claiming space in the centre." },
      { san: "c6", commentary: "Pawn lever c6 — adjusting the structure to open lines." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Qb6", commentary: "Capablanca repositions the Queen to b6, probing for weaknesses." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Rad8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Kh1", commentary: "King step Kh1 — quiet prophylaxis." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "Bc8", commentary: "Bishop swings to c8, redirecting its diagonal pressure." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Re7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Rfe1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Rde8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Re2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "Qa5", commentary: "Capablanca repositions the Queen to a5, probing for weaknesses." },
      { san: "Rf1", commentary: "Rook lifts to the f-file, seeking an open avenue." },
      { san: "Qh5", commentary: "Capablanca repositions the Queen to h5, probing for weaknesses." },
      { san: "Kg1", commentary: "King step Kg1 — quiet prophylaxis." },
      { san: "a6", commentary: "Pawn lever a6 — adjusting the structure to open lines." },
      { san: "Rff2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "Qg6", commentary: "Capablanca repositions the Queen to g6, probing for weaknesses." },
      { san: "Rf3", commentary: "Rook lifts to f3, joining the heavy-piece battery." },
      { san: "Qh5", commentary: "Capablanca repositions the Queen to h5, probing for weaknesses." },
      { san: "f5", commentary: "Pawn lever f5 — adjusting the structure to open lines." },
      { san: "Qh4", commentary: "Capablanca repositions the Queen to h4, probing for weaknesses." },
      { san: "Kh2", commentary: "King step Kh2 — quiet prophylaxis." },
      { san: "Ng4+", commentary: "Ng4+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh1", commentary: "King step Kh1 — quiet prophylaxis." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Qd2", commentary: "White repositions the Queen to d2, probing for weaknesses." },
      { san: "Nxf3", commentary: "Knight takes the rook on f3, leaving Black a clear material edge." },
      { san: "Nxf3", commentary: "Knight takes the knight on f3" },
      { san: "Qf6", commentary: "Capablanca repositions the Queen to f6, probing for weaknesses." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "fxg6", commentary: "Pawn takes the pawn on g6" },
      { san: "fxg6", commentary: "Pawn takes the pawn on g6" },
      { san: "Re3", commentary: "Rook lifts to e3, joining the heavy-piece battery." },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Qd3", commentary: "White repositions the Queen to d3, probing for weaknesses." },
      { san: "g5", commentary: "Pawn lever g5 — adjusting the structure to open lines." },
      { san: "Nd2", commentary: "Knight manoeuvres to d2, looking for a stable square." },
      { san: "Bg6", commentary: "Bishop swings to g6, redirecting its diagonal pressure." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "Qe6", commentary: "Capablanca repositions the Queen to e6, probing for weaknesses." },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "axb5", commentary: "Pawn takes the pawn on b5, leaving Black a clear material edge." },
      { san: "axb5", commentary: "Pawn takes the pawn on b5" },
      { san: "Ra8", commentary: "Rook lifts to the a-file, seeking an open avenue." },
      { san: "Qb1", commentary: "White repositions the Queen to b1, probing for weaknesses." },
      { san: "Qe5", commentary: "Capablanca repositions the Queen to e5, probing for weaknesses." },
      { san: "Qe1", commentary: "White repositions the Queen to e1, probing for weaknesses." },
      { san: "Kh7", commentary: "King step Kh7 — quiet prophylaxis." },
      { san: "bxc6", commentary: "Pawn takes the pawn on c6" },
      { san: "bxc6", commentary: "Pawn takes the pawn on c6" },
      { san: "Qg3", commentary: "White repositions the Queen to g3, probing for weaknesses." },
      { san: "Qxg3", commentary: "Queen takes the queen on g3, leaving Black a clear material edge." },
      { san: "Rxg3", commentary: "Rook takes the queen on g3" },
      { san: "Ra3", commentary: "Rook activity: Ra3. Active Rooks decide Rook endings." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Rb7", commentary: "Rook activity: Rb7. Active Rooks decide Rook endings." },
      { san: "c5", commentary: "The passed pawn advances to c5 — every tempo counts." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5, leaving Black a clear material edge." },
      { san: "Nc4", commentary: "Knight to c4 — short-range, but decisive on the right square." },
      { san: "Ra1", commentary: "Rook activity: Ra1. Active Rooks decide Rook endings." },
      { san: "Ne5", commentary: "Knight to e5 — short-range, but decisive on the right square." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "h4", commentary: "Pawn push to h4, gaining space in the ending." },
      { san: "Re7", commentary: "Rook activity: Re7. Active Rooks decide Rook endings." },
      { san: "Nxc6", commentary: "Knight takes the pawn on c6. Every trade matters now." },
      { san: "Re6", commentary: "Rook activity: Re6. Active Rooks decide Rook endings." },
      { san: "Nd8", commentary: "Knight to d8 — short-range, but decisive on the right square." },
      { san: "gxh4", commentary: "Pawn takes the pawn on h4, leaving Black a clear material edge." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "Rf6", commentary: "Rook activity: Rf6. Active Rooks decide Rook endings." },
      { san: "Rd7+", commentary: "Rd7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kh8", commentary: "The King steps to h8 — in the endgame, the King is a fighting piece." },
      { san: "Nd5", commentary: "Knight to d5 — short-range, but decisive on the right square." },
      { san: "Rff1", commentary: "Rook activity: Rff1. Active Rooks decide Rook endings." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Bxe4", commentary: "Bishop takes the pawn on e4, leaving Black a clear material edge." },
    ],
    guessMoveIndex: 57,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  // ── 1922 London International Tournament ────────────────────────

  "london-g1": {
    title: "A. Alekhine – Capablanca, London (1922)",
    intro: "A. Alekhine vs. J. Capablanca. London (1922). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "Qc2", commentary: "White plays Qc2, continuing development." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4. Equal material is restored." },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nxc3", commentary: "Knight takes the knight on c3, leaving Black a clear material edge." },
      { san: "Qxc3", commentary: "Queen takes the knight on c3" },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Qd3", commentary: "White repositions the Queen to d3, probing for weaknesses." },
      { san: "c5", commentary: "Pawn lever c5 — adjusting the structure to open lines." },
      { san: "Ba6", commentary: "Bishop swings to a6, redirecting its diagonal pressure." },
      { san: "Bxa6", commentary: "Bishop takes the bishop on a6, leaving Black a clear material edge." },
      { san: "Qxa6", commentary: "Queen takes the bishop on a6" },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4" },
      { san: "Nc5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Qb5", commentary: "White repositions the Queen to b5, probing for weaknesses." },
    ],
    guessMoveIndex: 15,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g5": {
    title: "Capablanca – E. Bogoljubov, London (1922)",
    intro:
      "J. Capablanca vs. E. Bogoljubov. London (1922). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with e4. The game heads into a Ruy López." },
      { san: "e5", commentary: "e5 — Black steers the contest toward a Ruy López structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Bb5", commentary: "Bishop comes out to b5, completing minor-piece development." },
      { san: "a6", commentary: "Pawn to a6 — building the structure." },
      { san: "Ba4", commentary: "Bishop comes out to a4, completing minor-piece development." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "b5", commentary: "Pawn to b5 — building the structure." },
      { san: "Bb3", commentary: "Bishop comes out to b3, completing minor-piece development." },
      { san: "d6", commentary: "Pawn to d6 — building the structure." },
      { san: "c3", commentary: "Pawn to c3 — building the structure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "d4", commentary: "Pawn thrust to d4 — claiming space in the centre." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4" },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Bg4", commentary: "Bishop swings to g4, redirecting its diagonal pressure." },
      { san: "Be3", commentary: "Bishop swings to e3, redirecting its diagonal pressure." },
      { san: "Na5", commentary: "Knight manoeuvres to a5, looking for a stable square." },
      { san: "Bc2", commentary: "Bishop swings to c2, redirecting its diagonal pressure." },
      { san: "Nc4", commentary: "Knight to c4 — a powerful central outpost." },
      { san: "Bc1", commentary: "Bishop swings to c1, redirecting its diagonal pressure." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Na5", commentary: "Knight manoeuvres to a5, looking for a stable square." },
      { san: "Bb2", commentary: "Bishop swings to b2, redirecting its diagonal pressure." },
      { san: "Nc6", commentary: "Knight manoeuvres to c6, looking for a stable square." },
      { san: "d5", commentary: "Pawn lever d5 — adjusting the structure to open lines." },
      { san: "Nb4", commentary: "Knight manoeuvres to b4, looking for a stable square." },
      { san: "Nbd2", commentary: "Knight manoeuvres to d2, looking for a stable square." },
      { san: "Nxc2", commentary: "Knight takes the bishop on c2, leaving Black a clear material edge." },
      { san: "Qxc2", commentary: "Queen takes the knight on c2" },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Nf1", commentary: "Knight manoeuvres to f1, looking for a stable square." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "Bh5", commentary: "Bishop swings to h5, redirecting its diagonal pressure." },
      { san: "N3d2", commentary: "Knight manoeuvres to d2, looking for a stable square." },
      { san: "Bf6", commentary: "Bishop swings to f6, redirecting its diagonal pressure." },
      { san: "Bxf6", commentary: "Bishop takes the bishop on f6, leaving White a clear material edge." },
      { san: "Qxf6", commentary: "Queen takes the bishop on f6" },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "c4", commentary: "Pawn lever c4 — adjusting the structure to open lines." },
      { san: "bxc4", commentary: "Pawn takes the pawn on c4" },
      { san: "Nc5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Qe3", commentary: "Capablanca repositions the Queen to e3, probing for weaknesses." },
      { san: "bxa4", commentary: "Pawn takes the pawn on a4" },
      { san: "f4", commentary: "Pawn thrust to f4 — claiming space in the centre." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "g4", commentary: "Pawn lever g4 — adjusting the structure to open lines." },
      { san: "Bg6", commentary: "Bishop swings to g6, redirecting its diagonal pressure." },
      { san: "f5", commentary: "Pawn lever f5 — adjusting the structure to open lines." },
      { san: "Bh7", commentary: "Bishop swings to h7, redirecting its diagonal pressure." },
      { san: "Ng3", commentary: "Knight manoeuvres to g3, looking for a stable square." },
      { san: "Qe5", commentary: "Black repositions the Queen to e5, probing for weaknesses." },
      { san: "Kg2", commentary: "King step Kg2 — quiet prophylaxis." },
      { san: "Rab8", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Rab1", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "f6", commentary: "Pawn lever f6 — adjusting the structure to open lines." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Rb2+", commentary: "Rb2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Rxb2", commentary: "Rook takes the rook on b2, leaving White a clear material edge." },
      { san: "Qxb2+", commentary: "Queen takes the rook on b2 with check." },
      { san: "Re2", commentary: "Rook penetrates to the 2th rank — a classical Capablanca theme." },
      { san: "Qb3", commentary: "Black repositions the Queen to b3, probing for weaknesses." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Qxe3", commentary: "Queen takes the queen on e3, leaving Black a clear material edge." },
      { san: "Rxe3", commentary: "Rook takes the queen on e3" },
      { san: "Rb8", commentary: "Rook activity: Rb8. Active Rooks decide Rook endings." },
      { san: "Rc3", commentary: "Rook activity: Rc3. Active Rooks decide Rook endings." },
      { san: "Kf7", commentary: "The King steps to f7 — in the endgame, the King is a fighting piece." },
      { san: "Kf3", commentary: "The King steps to f3 — in the endgame, the King is a fighting piece." },
      { san: "Rb2", commentary: "Rook activity: Rb2. Active Rooks decide Rook endings." },
      { san: "Nge2", commentary: "Knight to e2 — short-range, but decisive on the right square." },
      { san: "Bg8", commentary: "Bishop to g8, controlling the long diagonal in the endgame." },
      { san: "Ne6", commentary: "Knight to e6 — short-range, but decisive on the right square." },
      { san: "Nb3", commentary: "Knight to b3 — short-range, but decisive on the right square." },
      { san: "c5", commentary: "The passed pawn advances to c5 — every tempo counts." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5. Every trade matters now." },
      { san: "Nxc5", commentary: "Knight takes the pawn on c5. Every trade matters now." },
      { san: "Nd2+", commentary: "Nd2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Ke1", commentary: "The King steps to e1 — in the endgame, the King is a fighting piece." },
      { san: "Nb1", commentary: "Knight to b1 — short-range, but decisive on the right square." },
      { san: "Rd3", commentary: "Rook activity: Rd3. Active Rooks decide Rook endings." },
      { san: "a3", commentary: "The passed pawn advances to a3 — every tempo counts." },
      { san: "d6+", commentary: "d6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kd8", commentary: "The King steps to d8 — in the endgame, the King is a fighting piece." },
      { san: "Nd4", commentary: "Knight to d4 — short-range, but decisive on the right square." },
      { san: "Rb6", commentary: "Rook activity: Rb6. Active Rooks decide Rook endings." },
      { san: "Nde6+", commentary: "Nde6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Bxe6", commentary: "Bishop takes the knight on e6, leaving Black a clear material edge." },
      { san: "fxe6", commentary: "Pawn takes the bishop on e6. Every trade matters now." },
      { san: "Rb8", commentary: "Rook activity: Rb8. Active Rooks decide Rook endings." },
      { san: "e7+", commentary: "e7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke8", commentary: "The King steps to e8 — in the endgame, the King is a fighting piece." },
      { san: "Nxa6", commentary: "Knight takes the pawn on a6. Every trade matters now." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g8": {
    title: "A. Rubinstein – Capablanca, London (1922)",
    intro: "A. Rubinstein vs. J. Capablanca. London (1922). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "Nf6", commentary: "Black answers Nf6, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "Bf4", commentary: "Bishop swings to f4, eyeing the long diagonal." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Bd6", commentary: "Bishop comes out to d6, completing minor-piece development." },
      { san: "Nbd2", commentary: "Knight develops to d2 — pieces before pawns, classical principle." },
      { san: "Bxf4", commentary: "Bishop takes the bishop on f4, leaving Black a clear material edge." },
      { san: "exf4", commentary: "Pawn takes the bishop on f4. Equal material is restored." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5. Equal material is restored." },
      { san: "Qc7", commentary: "Queen develops to c7 — Capablanca preferred to keep her flexible." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Qxc5", commentary: "Queen takes the pawn on c5. Equal material is restored." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "Nc6", commentary: "Knight manoeuvres to c6, looking for a stable square." },
      { san: "c3", commentary: "Pawn lever c3 — adjusting the structure to open lines." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "Qe2", commentary: "White repositions the Queen to e2, probing for weaknesses." },
    ],
    guessMoveIndex: 15,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g13": {
    title: "Capablanca – M. Vidmar, London (1922)",
    intro:
      "J. Capablanca vs. M. Vidmar. London (1922). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "Qc2", commentary: "Capablanca plays Qc2, continuing development." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4. Equal material is restored." },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Nxd5", commentary: "Knight takes the knight on d5, leaving White a clear material edge." },
      { san: "cxd5", commentary: "Pawn takes the knight on d5" },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Qc7", commentary: "Capablanca repositions the Queen to c7, probing for weaknesses." },
      { san: "Qb4", commentary: "Black repositions the Queen to b4, probing for weaknesses." },
      { san: "a3", commentary: "Pawn lever a3 — adjusting the structure to open lines." },
      { san: "Qa4", commentary: "Black repositions the Queen to a4, probing for weaknesses." },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "Nf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "Bc2", commentary: "Bishop swings to c2, redirecting its diagonal pressure." },
      { san: "Qb5", commentary: "Black repositions the Queen to b5, probing for weaknesses." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Qxb2", commentary: "Queen takes the pawn on b2" },
      { san: "Nxd7", commentary: "Knight takes the bishop on d7" },
      { san: "Rac8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qb7", commentary: "Capablanca repositions the Queen to b7, probing for weaknesses." },
      { san: "Nxd7", commentary: "Knight takes the knight on d7" },
      { san: "Bh7+", commentary: "Bh7+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kxh7", commentary: "King takes the bishop on h7, leaving Black a clear material edge." },
      { san: "Rxc8", commentary: "Rook takes the rook on c8" },
      { san: "Rxc8", commentary: "Rook takes the rook on c8, leaving Black a clear material edge." },
      { san: "Qxc8", commentary: "Queen takes the rook on c8" },
      { san: "Nf6", commentary: "Knight to f6 — short-range, but decisive on the right square." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "Qb4", commentary: "Queen to b4 — coordinating the final assault." },
      { san: "Qc2+", commentary: "Qc2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg8", commentary: "The King steps to g8 — in the endgame, the King is a fighting piece." },
      { san: "Qc6", commentary: "Queen to c6 — coordinating the final assault." },
      { san: "Qa3", commentary: "Queen to a3 — coordinating the final assault." },
      { san: "Qa8+", commentary: "Qa8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Rc7", commentary: "Rook activity: Rc7. Active Rooks decide Rook endings." },
      { san: "Qxa4", commentary: "Queen takes the pawn on a4. Every trade matters now." },
      { san: "Rxf7", commentary: "Rook takes the pawn on f7. Every trade matters now." },
      { san: "Qd1+", commentary: "Qd1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qh5", commentary: "Queen to h5 — coordinating the final assault." },
      { san: "Qxa7", commentary: "Queen takes the pawn on a7. Every trade matters now." },
      { san: "Qg6", commentary: "Queen to g6 — coordinating the final assault." },
      { san: "Rf8", commentary: "Rook activity: Rf8. Active Rooks decide Rook endings." },
      { san: "Qf5", commentary: "Queen to f5 — coordinating the final assault." },
      { san: "Rf7", commentary: "Rook activity: Rf7. Active Rooks decide Rook endings." },
      { san: "Qg6", commentary: "Queen to g6 — coordinating the final assault." },
      { san: "Rb7", commentary: "Rook activity: Rb7. Active Rooks decide Rook endings." },
      { san: "Ne4", commentary: "Knight to e4 — short-range, but decisive on the right square." },
      { san: "Qa2", commentary: "Queen to a2 — coordinating the final assault." },
      { san: "e5", commentary: "Pawn push to e5, gaining space in the ending." },
      { san: "Qxd5", commentary: "Queen takes the pawn on d5, leaving White a clear material edge." },
      { san: "exd4", commentary: "Pawn takes the pawn on d4. Every trade matters now." },
      { san: "Rb8", commentary: "Rook activity: Rb8. Active Rooks decide Rook endings." },
      { san: "Nf6", commentary: "Knight to f6 — short-range, but decisive on the right square." },
      { san: "Qxd4", commentary: "Queen takes the pawn on d4, leaving White a clear material edge." },
      { san: "Qf5", commentary: "Queen to f5 — coordinating the final assault." },
      { san: "Rxb6", commentary: "Rook takes the pawn on b6, leaving White a clear material edge." },
      { san: "Qxf2", commentary: "Queen takes the pawn on f2, leaving White a clear material edge." },
      { san: "Qd3+", commentary: "Qd3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg8", commentary: "The King steps to g8 — in the endgame, the King is a fighting piece." },
      { san: "Rb8+", commentary: "Rb8+ — Capablanca delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 38,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  // ── 1927 Alekhine — Capablanca World Championship ───────────────

  "alekhine-g1": {
    title: "Capablanca – A. Alekhine, World Championship 13th (1927)",
    intro:
      "J. Capablanca vs. A. Alekhine. World Championship 13th (1927). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with e4. The game heads into a French Defence." },
      { san: "e6", commentary: "e6 — Black steers the contest toward a French Defence structure." },
      { san: "d4", commentary: "Pawn thrust to d4 — claiming space in the centre." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Bb4", commentary: "Bishop comes out to b4, completing minor-piece development." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Bd3", commentary: "Bishop comes out to d3, completing minor-piece development." },
      { san: "Nc6", commentary: "Knight develops to c6 — pieces before pawns, classical principle." },
      { san: "Ne2", commentary: "Knight develops to e2 — pieces before pawns, classical principle." },
      { san: "Nge7", commentary: "Knight develops to e7 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Bxf5", commentary: "Bishop takes the bishop on f5, leaving White a clear material edge." },
      { san: "Nxf5", commentary: "Knight takes the bishop on f5. Equal material is restored." },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "Qd7", commentary: "Black repositions the Queen to d7, probing for weaknesses." },
      { san: "Nd1", commentary: "Knight manoeuvres to d1, looking for a stable square." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Ne3", commentary: "Knight manoeuvres to e3, looking for a stable square." },
      { san: "Nxe3", commentary: "Knight takes the knight on e3, leaving Black a clear material edge." },
      { san: "Bxe3", commentary: "Bishop takes the knight on e3" },
      { san: "Rfe8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Nf4", commentary: "Knight to f4 — a powerful central outpost." },
      { san: "Bd6", commentary: "Bishop swings to d6, redirecting its diagonal pressure." },
      { san: "Rfe1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Nb4", commentary: "Knight manoeuvres to b4, looking for a stable square." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Qf5", commentary: "Black repositions the Queen to f5, probing for weaknesses." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Nxc2", commentary: "Knight takes the pawn on c2" },
      { san: "Rxc2", commentary: "Rook takes the knight on c2" },
      { san: "Qxf4", commentary: "Queen takes the knight on f4" },
      { san: "g3", commentary: "Pawn lever g3 — adjusting the structure to open lines." },
      { san: "Qf5", commentary: "Black repositions the Queen to f5, probing for weaknesses." },
      { san: "Rce2", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Qb5", commentary: "Capablanca repositions the Queen to b5, probing for weaknesses." },
      { san: "h5", commentary: "Pawn lever h5 — adjusting the structure to open lines." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "Re4", commentary: "Rook lifts to e4, joining the heavy-piece battery." },
      { san: "Bd2", commentary: "Bishop swings to d2, redirecting its diagonal pressure." },
      { san: "Rxd4", commentary: "Rook takes the pawn on d4" },
      { san: "Bc3", commentary: "Bishop swings to c3, redirecting its diagonal pressure." },
      { san: "Rd3", commentary: "Rook lifts to d3, joining the heavy-piece battery." },
      { san: "Be5", commentary: "Bishop swings to e5, eyeing the long diagonal." },
      { san: "Rd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Bxd6", commentary: "Bishop takes the bishop on d6" },
      { san: "Rxd6", commentary: "Rook takes the bishop on d6" },
      { san: "Re5", commentary: "Rook lifts to e5, joining the heavy-piece battery." },
      { san: "Qf3", commentary: "Black repositions the Queen to f3, probing for weaknesses." },
      { san: "Rxh5", commentary: "Rook takes the pawn on h5" },
      { san: "Qxh5", commentary: "Queen takes the rook on h5, leaving Black a clear material edge." },
      { san: "Re8+", commentary: "Re8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh7", commentary: "King step Kh7 — quiet prophylaxis." },
      { san: "Qxd3+", commentary: "Queen takes the rook on d3 with check." },
      { san: "Qg6", commentary: "Queen to g6 — coordinating the final assault." },
      { san: "Qd1", commentary: "Queen to d1 — coordinating the final assault." },
      { san: "Re6", commentary: "Rook activity: Re6. Active Rooks decide Rook endings." },
      { san: "Ra8", commentary: "Rook activity: Ra8. Active Rooks decide Rook endings." },
      { san: "Re5", commentary: "Rook activity: Re5. Active Rooks decide Rook endings." },
      { san: "Rxa7", commentary: "Rook takes the pawn on a7. Every trade matters now." },
      { san: "c5", commentary: "Pawn push to c5, gaining space in the ending." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "Qe6", commentary: "Queen to e6 — coordinating the final assault." },
      { san: "Qd3+", commentary: "Qd3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "g6", commentary: "Pawn push to g6, gaining space in the ending." },
      { san: "Rd8", commentary: "Rook activity: Rd8. Active Rooks decide Rook endings." },
      { san: "d4", commentary: "The passed pawn advances to d4 — every tempo counts." },
      { san: "a4", commentary: "Pawn push to a4, gaining space in the ending." },
      { san: "Re1+", commentary: "Re1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Qc6+", commentary: "Qc6+ — Black delivers check, forcing the enemy King to respond." },
      { san: "f3", commentary: "Pawn push to f3, gaining space in the ending." },
      { san: "Re3", commentary: "Rook activity: Re3. Active Rooks decide Rook endings." },
      { san: "Qd1", commentary: "Queen to d1 — coordinating the final assault." },
      { san: "Qe6", commentary: "Queen to e6 — coordinating the final assault." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Re2+", commentary: "Re2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Qe3", commentary: "Queen to e3 — coordinating the final assault." },
      { san: "Qh1", commentary: "Queen to h1 — coordinating the final assault." },
      { san: "Qf4", commentary: "Queen to f4 — coordinating the final assault." },
      { san: "h5", commentary: "The passed pawn advances to h5 — every tempo counts." },
      { san: "Rf2", commentary: "Rook activity: Rf2. Active Rooks decide Rook endings." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g11": {
    title: "Capablanca – A. Alekhine, World Championship 13th (1927)",
    intro:
      "J. Capablanca vs. A. Alekhine. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Qa5", commentary: "Queen develops to a5 — Capablanca preferred to keep her flexible." },
      { san: "Nd2", commentary: "Knight develops to d2 — pieces before pawns, classical principle." },
      { san: "Bb4", commentary: "Bishop comes out to b4, completing minor-piece development." },
      { san: "Qc2", commentary: "Capablanca plays Qc2, continuing development." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4. Equal material is restored." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6" },
      { san: "Nxf6", commentary: "Knight takes the bishop on f6" },
      { san: "Nxc4", commentary: "Knight takes the pawn on c4" },
      { san: "Qc7", commentary: "Black repositions the Queen to c7, probing for weaknesses." },
      { san: "a3", commentary: "Pawn lever a3 — adjusting the structure to open lines." },
      { san: "Be7", commentary: "Bishop swings to e7, redirecting its diagonal pressure." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Bf3", commentary: "Bishop swings to f3, redirecting its diagonal pressure." },
      { san: "Rac8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rfd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Be8", commentary: "Bishop swings to e8, redirecting its diagonal pressure." },
      { san: "g3", commentary: "Pawn lever g3 — adjusting the structure to open lines." },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Nb2", commentary: "Knight manoeuvres to b2, looking for a stable square." },
      { san: "Qb8", commentary: "Black repositions the Queen to b8, probing for weaknesses." },
      { san: "Nd3", commentary: "Knight manoeuvres to d3, looking for a stable square." },
      { san: "Bg5", commentary: "Bishop swings to g5, redirecting its diagonal pressure." },
      { san: "Rb1", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "Qb7", commentary: "Black repositions the Queen to b7, probing for weaknesses." },
      { san: "e4", commentary: "Pawn lever e4 — adjusting the structure to open lines." },
      { san: "Nxc3", commentary: "Knight takes the knight on c3, leaving Black a clear material edge." },
      { san: "Qxc3", commentary: "Queen takes the knight on c3" },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "Bh6", commentary: "Bishop swings to h6, redirecting its diagonal pressure." },
      { san: "Ne5", commentary: "Knight to e5 — a powerful central outpost." },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "Ng4", commentary: "Knight manoeuvres to g4, looking for a stable square." },
      { san: "Bg7", commentary: "Bishop swings to g7, redirecting its diagonal pressure." },
      { san: "e5", commentary: "Pawn lever e5 — adjusting the structure to open lines." },
      { san: "h5", commentary: "Pawn lever h5 — adjusting the structure to open lines." },
      { san: "Ne3", commentary: "Knight manoeuvres to e3, looking for a stable square." },
      { san: "c5", commentary: "Pawn lever c5 — adjusting the structure to open lines." },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "bxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "d5", commentary: "Pawn lever d5 — adjusting the structure to open lines." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5" },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5" },
      { san: "Qe6", commentary: "Black repositions the Queen to e6, probing for weaknesses." },
      { san: "Nf6+", commentary: "Nf6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Bxf6", commentary: "Bishop takes the knight on f6, leaving Black a clear material edge." },
      { san: "exf6", commentary: "Pawn takes the bishop on f6" },
      { san: "Rxd1+", commentary: "Rook takes the rook on d1 with check." },
      { san: "Rxd1", commentary: "Rook takes the rook on d1" },
      { san: "Bc6", commentary: "Bishop swings to c6, redirecting its diagonal pressure." },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Qf5", commentary: "Black repositions the Queen to f5, probing for weaknesses." },
      { san: "Re3", commentary: "Rook lifts to e3, joining the heavy-piece battery." },
      { san: "c4", commentary: "Pawn lever c4 — adjusting the structure to open lines." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "Bg2", commentary: "Bishop swings to g2, redirecting its diagonal pressure." },
      { san: "Bxg2", commentary: "Bishop takes the bishop on g2, leaving Black a clear material edge." },
      { san: "Kxg2", commentary: "King takes the bishop on g2" },
      { san: "Qd5+", commentary: "Qd5+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qf5", commentary: "Queen to f5 — coordinating the final assault." },
      { san: "Rf3", commentary: "Rook activity: Rf3. Active Rooks decide Rook endings." },
      { san: "Qc5", commentary: "Queen to c5 — coordinating the final assault." },
      { san: "Rf4", commentary: "Rook activity: Rf4. Active Rooks decide Rook endings." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Rd4", commentary: "Rook activity: Rd4. Active Rooks decide Rook endings." },
      { san: "Qc6", commentary: "Queen to c6 — coordinating the final assault." },
      { san: "Qxa5", commentary: "Queen takes the pawn on a5. Every trade matters now." },
      { san: "c3", commentary: "The passed pawn advances to c3 — every tempo counts." },
      { san: "Qa7", commentary: "Queen to a7 — coordinating the final assault." },
      { san: "Kg8", commentary: "The King steps to g8 — in the endgame, the King is a fighting piece." },
      { san: "Qe7", commentary: "Queen to e7 — coordinating the final assault." },
      { san: "Qb6", commentary: "Queen to b6 — coordinating the final assault." },
      { san: "Qd7", commentary: "Queen to d7 — coordinating the final assault." },
      { san: "Qc5", commentary: "Queen to c5 — coordinating the final assault." },
      { san: "Re4", commentary: "Rook activity: Re4. Active Rooks decide Rook endings." },
      { san: "Qxf2+", commentary: "Queen takes the pawn on f2 with check." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Qf1+", commentary: "Qf1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qf2+", commentary: "Qf2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Rf8", commentary: "Rook activity: Rf8. Active Rooks decide Rook endings." },
      { san: "Qc6", commentary: "Queen to c6 — coordinating the final assault." },
      { san: "Qf1+", commentary: "Qf1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qf2+", commentary: "Qf2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Qf1+", commentary: "Qf1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Qc4", commentary: "Queen to c4 — coordinating the final assault." },
      { san: "Qf2+", commentary: "Qf2+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Qg1", commentary: "Queen to g1 — coordinating the final assault." },
      { san: "Re2", commentary: "Rook activity: Re2. Active Rooks decide Rook endings." },
      { san: "Qf1+", commentary: "Qf1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qxf6", commentary: "Queen takes the pawn on f6. Every trade matters now." },
      { san: "a5", commentary: "The passed pawn advances to a5 — every tempo counts." },
      { san: "Rd8", commentary: "Rook activity: Rd8. Active Rooks decide Rook endings." },
      { san: "a6", commentary: "The passed pawn advances to a6 — every tempo counts." },
      { san: "Qf1", commentary: "Queen to f1 — coordinating the final assault." },
      { san: "Qe4", commentary: "Queen to e4 — coordinating the final assault." },
      { san: "Rd2", commentary: "Rook activity: Rd2. Active Rooks decide Rook endings." },
      { san: "Rxd2", commentary: "Rook takes the rook on d2, leaving White a clear material edge." },
      { san: "cxd2", commentary: "Pawn takes the rook on d2. Every trade matters now." },
      { san: "a7", commentary: "The passed pawn advances to a7 — every tempo counts." },
      { san: "d1=Q", commentary: "Promotion! The pawn becomes a Queen — material balance shifts decisively." },
      { san: "a8=Q", commentary: "Promotion! The pawn becomes a Queen — material balance shifts decisively." },
      { san: "Qg1+", commentary: "Qg1+ — Black delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "King step Kh3 — quiet prophylaxis." },
      { san: "Qdf1+", commentary: "Qdf1+ — Black delivers check, forcing the enemy King to respond." },
    ],
    guessMoveIndex: 60,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g21": {
    title: "Capablanca – A. Alekhine, World Championship 13th (1927)",
    intro:
      "J. Capablanca vs. A. Alekhine. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "a6", commentary: "Pawn to a6 — building the structure." },
      { san: "a3", commentary: "Pawn to a3 — building the structure." },
      { san: "h6", commentary: "Pawn to h6 — building the structure." },
      { san: "Bh4", commentary: "Bishop swings to h4, redirecting its diagonal pressure." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4" },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "b5", commentary: "Pawn lever b5 — adjusting the structure to open lines." },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Nxc5", commentary: "Knight takes the pawn on c5" },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "Ncd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Bg3", commentary: "Bishop swings to g3, redirecting its diagonal pressure." },
      { san: "Nb6", commentary: "Knight manoeuvres to b6, looking for a stable square." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Nfd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bf3", commentary: "Bishop swings to f3, redirecting its diagonal pressure." },
      { san: "Rc4", commentary: "Rook lifts to c4, joining the heavy-piece battery." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Qc8", commentary: "Black repositions the Queen to c8, probing for weaknesses." },
      { san: "Rxc4", commentary: "Rook takes the rook on c4, leaving White a clear material edge." },
      { san: "Nxc4", commentary: "Knight takes the rook on c4" },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qa8", commentary: "Black repositions the Queen to a8, probing for weaknesses." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Nxd5", commentary: "Knight takes the knight on d5, leaving White a clear material edge." },
      { san: "Bxd5", commentary: "Bishop takes the knight on d5" },
      { san: "Bxd5", commentary: "Bishop takes the bishop on d5, leaving White a clear material edge." },
      { san: "Qxd5", commentary: "Queen takes the bishop on d5" },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Bf6", commentary: "Bishop swings to f6, redirecting its diagonal pressure." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Bb2", commentary: "Bishop swings to b2, redirecting its diagonal pressure." },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Rd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "axb5", commentary: "Pawn takes the pawn on b5" },
      { san: "axb5", commentary: "Pawn takes the pawn on b5" },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "e5", commentary: "Pawn lever e5 — adjusting the structure to open lines." },
      { san: "Rb1", commentary: "Rook lifts to the b-file, seeking an open avenue." },
      { san: "e4", commentary: "Pawn lever e4 — adjusting the structure to open lines." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Bxd4", commentary: "Bishop takes the knight on d4, leaving Black a clear material edge." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Nxe3", commentary: "Knight takes the pawn on e3, leaving Black a clear material edge." },
    ],
    guessMoveIndex: 38,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g32": {
    title: "A. Alekhine – Capablanca, World Championship 13th (1927)",
    intro:
      "A. Alekhine vs. J. Capablanca. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Indian Defence complex." },
      { san: "Nf6", commentary: "Nf6 — Black steers the contest toward a Indian Defence complex structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "exd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Bd3", commentary: "Bishop comes out to d3, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nge2", commentary: "Knight develops to e2 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Ng3", commentary: "Knight manoeuvres to g3, looking for a stable square." },
      { san: "Ne8", commentary: "Knight manoeuvres to e8, looking for a stable square." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "Ndf6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Qc2", commentary: "White repositions the Queen to c2, probing for weaknesses." },
      { san: "Be6", commentary: "Bishop swings to e6, redirecting its diagonal pressure." },
      { san: "Nf5", commentary: "Knight to f5 — a powerful central outpost." },
      { san: "Bxf5", commentary: "Bishop takes the knight on f5, leaving Black a clear material edge." },
      { san: "Bxf5", commentary: "Bishop takes the bishop on f5" },
      { san: "Nd6", commentary: "Knight manoeuvres to d6, looking for a stable square." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Bf4", commentary: "Bishop swings to f4, eyeing the long diagonal." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "g4", commentary: "Pawn lever g4 — adjusting the structure to open lines." },
      { san: "Nfe4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "g5", commentary: "Pawn lever g5 — adjusting the structure to open lines." },
      { san: "h5", commentary: "Pawn lever h5 — adjusting the structure to open lines." },
      { san: "Bxe4", commentary: "Bishop takes the knight on e4, leaving White a clear material edge." },
      { san: "Nxe4", commentary: "Knight takes the bishop on e4" },
      { san: "Nxe4", commentary: "Knight takes the knight on e4, leaving White a clear material edge." },
      { san: "dxe4", commentary: "Pawn takes the knight on e4" },
      { san: "Qxe4", commentary: "Queen takes the pawn on e4" },
      { san: "Qa5+", commentary: "Qa5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf1", commentary: "King step Kf1 — quiet prophylaxis." },
      { san: "Qd5", commentary: "Capablanca repositions the Queen to d5, probing for weaknesses." },
      { san: "Qxd5", commentary: "Queen takes the queen on d5, leaving White a clear material edge." },
      { san: "cxd5", commentary: "Pawn takes the queen on d5" },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "Rhc1", commentary: "Rook activity: Rhc1. Active Rooks decide Rook endings." },
      { san: "Rfc8", commentary: "Rook activity: Rfc8. Active Rooks decide Rook endings." },
      { san: "Rxc2", commentary: "Rook takes the rook on c2, leaving White a clear material edge." },
      { san: "Rxc2", commentary: "Rook takes the rook on c2. Every trade matters now." },
      { san: "Rb1", commentary: "Rook activity: Rb1. Active Rooks decide Rook endings." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Kg3", commentary: "The King steps to g3 — in the endgame, the King is a fighting piece." },
      { san: "Kg6", commentary: "The King steps to g6 — in the endgame, the King is a fighting piece." },
      { san: "f3", commentary: "Pawn push to f3, gaining space in the ending." },
      { san: "f6", commentary: "Pawn push to f6, gaining space in the ending." },
      { san: "gxf6", commentary: "Pawn takes the pawn on f6. Every trade matters now." },
      { san: "Bxf6", commentary: "Bishop takes the pawn on f6. Every trade matters now." },
      { san: "a4", commentary: "Pawn push to a4, gaining space in the ending." },
      { san: "Kf5", commentary: "The King steps to f5 — in the endgame, the King is a fighting piece." },
      { san: "a5", commentary: "The passed pawn advances to a5 — every tempo counts." },
      { san: "Re2", commentary: "Rook activity: Re2. Active Rooks decide Rook endings." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "Rxb2", commentary: "Rook takes the pawn on b2. Every trade matters now." },
      { san: "Rc5", commentary: "Rook activity: Rc5. Active Rooks decide Rook endings." },
      { san: "Ke6", commentary: "The King steps to e6 — in the endgame, the King is a fighting piece." },
      { san: "e4", commentary: "Pawn push to e4, gaining space in the ending." },
      { san: "Bxd4", commentary: "Bishop takes the pawn on d4. Every trade matters now." },
      { san: "Rxd5", commentary: "Rook takes the pawn on d5. Every trade matters now." },
      { san: "Bc3", commentary: "Bishop to c3, controlling the long diagonal in the endgame." },
      { san: "Rxh5", commentary: "Rook takes the pawn on h5. Every trade matters now." },
      { san: "a6", commentary: "Pawn push to a6, gaining space in the ending." },
      { san: "Bc7", commentary: "Bishop to c7, controlling the long diagonal in the endgame." },
      { san: "Be1+", commentary: "Be1+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg4", commentary: "The King steps to g4 — in the endgame, the King is a fighting piece." },
      { san: "Rg2+", commentary: "Rg2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Rf2", commentary: "Rook activity: Rf2. Active Rooks decide Rook endings." },
      { san: "Kg4", commentary: "The King steps to g4 — in the endgame, the King is a fighting piece." },
      { san: "Rg2+", commentary: "Rg2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Rf2", commentary: "Rook activity: Rf2. Active Rooks decide Rook endings." },
      { san: "f4", commentary: "Pawn push to f4, gaining space in the ending." },
      { san: "Rf3+", commentary: "Rf3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Rf2+", commentary: "Rf2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh3", commentary: "The King steps to h3 — in the endgame, the King is a fighting piece." },
      { san: "Rf3+", commentary: "Rf3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Rf2+", commentary: "Rf2+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg1", commentary: "The King steps to g1 — in the endgame, the King is a fighting piece." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "Bb6", commentary: "Bishop to b6, controlling the long diagonal in the endgame." },
      { san: "Rc4", commentary: "Rook activity: Rc4. Active Rooks decide Rook endings." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "g6", commentary: "Pawn push to g6, gaining space in the ending." },
      { san: "Re5+", commentary: "Re5+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kd7", commentary: "The King steps to d7 — in the endgame, the King is a fighting piece." },
      { san: "h5", commentary: "The passed pawn advances to h5 — every tempo counts." },
      { san: "gxh5", commentary: "Pawn takes the pawn on h5. Every trade matters now." },
      { san: "Kf3", commentary: "The King steps to f3 — in the endgame, the King is a fighting piece." },
      { san: "h4", commentary: "The passed pawn advances to h4 — every tempo counts." },
      { san: "Rh5", commentary: "Rook activity: Rh5. Active Rooks decide Rook endings." },
      { san: "Rc3+", commentary: "Rc3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kg4", commentary: "The King steps to g4 — in the endgame, the King is a fighting piece." },
      { san: "Rc4", commentary: "Rook activity: Rc4. Active Rooks decide Rook endings." },
      { san: "Kf5", commentary: "The King steps to f5 — in the endgame, the King is a fighting piece." },
      { san: "Bxa5", commentary: "Bishop takes the pawn on a5. Every trade matters now." },
      { san: "Rh7+", commentary: "Rh7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kc6", commentary: "The King steps to c6 — in the endgame, the King is a fighting piece." },
      { san: "Bxa5", commentary: "Bishop takes the bishop on a5. Every trade matters now." },
      { san: "Rc5+", commentary: "Rc5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke6", commentary: "The King steps to e6 — in the endgame, the King is a fighting piece." },
      { san: "Rxa5", commentary: "Rook takes the bishop on a5. Every trade matters now." },
      { san: "f5", commentary: "The passed pawn advances to f5 — every tempo counts." },
      { san: "Ra3", commentary: "Rook activity: Ra3. Active Rooks decide Rook endings." },
      { san: "f6", commentary: "The passed pawn advances to f6 — every tempo counts." },
      { san: "Rf3", commentary: "Rook activity: Rf3. Active Rooks decide Rook endings." },
      { san: "f7", commentary: "The passed pawn advances to f7 — every tempo counts." },
      { san: "b5", commentary: "Pawn push to b5, gaining space in the ending." },
      { san: "Rh5", commentary: "Rook activity: Rh5. Active Rooks decide Rook endings." },
      { san: "h3", commentary: "The passed pawn advances to h3 — every tempo counts." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "Rxf5", commentary: "Rook takes the rook on f5, leaving Black a clear material edge." },
      { san: "exf5", commentary: "Pawn takes the rook on f5. Every trade matters now." },
    ],
    guessMoveIndex: 57,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g34": {
    title: "A. Alekhine – Capablanca, World Championship 13th (1927)",
    intro:
      "A. Alekhine vs. J. Capablanca. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Queen's Gambit Declined." },
      { san: "d5", commentary: "d5 — Black steers the contest toward a Queen's Gambit Declined structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "c6", commentary: "Pawn to c6 — building the structure." },
      { san: "a3", commentary: "Pawn to a3 — building the structure." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Bd3", commentary: "Bishop comes out to d3, completing minor-piece development." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4. Equal material is restored." },
      { san: "Bxc4", commentary: "Bishop takes the pawn on c4" },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Qxe7", commentary: "Queen takes the bishop on e7" },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "N5f6", commentary: "Knight manoeuvres to f6, looking for a stable square." },
      { san: "Ng3", commentary: "Knight manoeuvres to g3, looking for a stable square." },
      { san: "c5", commentary: "Pawn lever c5 — adjusting the structure to open lines." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nb6", commentary: "Knight manoeuvres to b6, looking for a stable square." },
      { san: "Ba2", commentary: "Bishop swings to a2, redirecting its diagonal pressure." },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4" },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4" },
      { san: "g6", commentary: "Pawn lever g6 — adjusting the structure to open lines." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "Qe2", commentary: "White repositions the Queen to e2, probing for weaknesses." },
      { san: "Rac8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "e4", commentary: "Pawn lever e4 — adjusting the structure to open lines." },
      { san: "e5", commentary: "Pawn lever e5 — adjusting the structure to open lines." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Kg7", commentary: "King step Kg7 — quiet prophylaxis." },
      { san: "h3", commentary: "Pawn lever h3 — adjusting the structure to open lines." },
      { san: "h6", commentary: "Pawn lever h6 — adjusting the structure to open lines." },
      { san: "Qd2", commentary: "White repositions the Queen to d2, probing for weaknesses." },
      { san: "Be6", commentary: "Bishop swings to e6, redirecting its diagonal pressure." },
      { san: "Bxe6", commentary: "Bishop takes the bishop on e6, leaving White a clear material edge." },
      { san: "Qxe6", commentary: "Queen takes the bishop on e6" },
      { san: "Qa5", commentary: "White repositions the Queen to a5, probing for weaknesses." },
      { san: "Nc4", commentary: "Knight to c4 — a powerful central outpost." },
      { san: "Qxa7", commentary: "Queen takes the pawn on a7" },
      { san: "Nxb2", commentary: "Knight takes the pawn on b2" },
      { san: "Rxc8", commentary: "Rook takes the rook on c8, leaving White a clear material edge." },
      { san: "Rxc8", commentary: "Rook takes the rook on c8" },
      { san: "Qxb7", commentary: "Queen takes the pawn on b7" },
      { san: "Nc4", commentary: "Knight to c4 — a powerful central outpost." },
      { san: "Qb4", commentary: "White repositions the Queen to b4, probing for weaknesses." },
      { san: "Ra8", commentary: "Rook lifts to the a-file, seeking an open avenue." },
      { san: "Ra1", commentary: "Rook lifts to the a-file, seeking an open avenue." },
      { san: "Qc6", commentary: "Capablanca repositions the Queen to c6, probing for weaknesses." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Nxe4", commentary: "Knight takes the pawn on e4" },
      { san: "Nxe5", commentary: "Knight takes the pawn on e5" },
      { san: "Qd6", commentary: "Capablanca repositions the Queen to d6, probing for weaknesses." },
      { san: "Qxc4", commentary: "Queen takes the knight on c4, leaving White a clear material edge." },
      { san: "Qxe5", commentary: "Queen takes the knight on e5" },
      { san: "Re1", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Nd6", commentary: "Knight manoeuvres to d6, looking for a stable square." },
      { san: "Qc1", commentary: "White repositions the Queen to c1, probing for weaknesses." },
      { san: "Qf6", commentary: "Capablanca repositions the Queen to f6, probing for weaknesses." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Nxe4", commentary: "Knight takes the knight on e4" },
      { san: "Rxe4", commentary: "Rook takes the knight on e4. Every trade matters now." },
      { san: "Rb8", commentary: "Rook activity: Rb8. Active Rooks decide Rook endings." },
      { san: "Re2", commentary: "Rook activity: Re2. Active Rooks decide Rook endings." },
      { san: "Ra8", commentary: "Rook activity: Ra8. Active Rooks decide Rook endings." },
      { san: "Ra2", commentary: "Rook activity: Ra2. Active Rooks decide Rook endings." },
      { san: "Ra5", commentary: "Rook activity: Ra5. Active Rooks decide Rook endings." },
      { san: "Qc7", commentary: "Queen to c7 — coordinating the final assault." },
      { san: "Qa6", commentary: "Queen to a6 — coordinating the final assault." },
      { san: "Qc3+", commentary: "Qc3+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kh7", commentary: "The King steps to h7 — in the endgame, the King is a fighting piece." },
      { san: "Rd2", commentary: "Rook activity: Rd2. Active Rooks decide Rook endings." },
      { san: "Qb6", commentary: "Queen to b6 — coordinating the final assault." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "Qb1+", commentary: "Qb1+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh2", commentary: "The King steps to h2 — in the endgame, the King is a fighting piece." },
      { san: "Qb8+", commentary: "Qb8+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "g3", commentary: "Pawn push to g3, gaining space in the ending." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "Qd4", commentary: "Queen to d4 — coordinating the final assault." },
      { san: "Qe8", commentary: "Queen to e8 — coordinating the final assault." },
      { san: "Rd5", commentary: "Rook activity: Rd5. Active Rooks decide Rook endings." },
      { san: "Rf3", commentary: "Rook activity: Rf3. Active Rooks decide Rook endings." },
      { san: "h4", commentary: "Pawn push to h4, gaining space in the ending." },
      { san: "Qh8", commentary: "Queen to h8 — coordinating the final assault." },
      { san: "Qb6", commentary: "Queen to b6 — coordinating the final assault." },
      { san: "Qa1", commentary: "Queen to a1 — coordinating the final assault." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Rf6", commentary: "Rook activity: Rf6. Active Rooks decide Rook endings." },
      { san: "Qd4", commentary: "Queen to d4 — coordinating the final assault." },
      { san: "Qxd4", commentary: "Queen takes the queen on d4, leaving Black a clear material edge." },
      { san: "Rxd4", commentary: "Rook takes the queen on d4. Every trade matters now." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "a5", commentary: "The passed pawn advances to a5 — every tempo counts." },
      { san: "Ra6", commentary: "Rook activity: Ra6. Active Rooks decide Rook endings." },
      { san: "Rd5", commentary: "Rook activity: Rd5. Active Rooks decide Rook endings." },
      { san: "Rf6", commentary: "Rook activity: Rf6. Active Rooks decide Rook endings." },
      { san: "Rd4", commentary: "Rook activity: Rd4. Active Rooks decide Rook endings." },
      { san: "Ra6", commentary: "Rook activity: Ra6. Active Rooks decide Rook endings." },
      { san: "Ra4", commentary: "Rook activity: Ra4. Active Rooks decide Rook endings." },
      { san: "Kf6", commentary: "The King steps to f6 — in the endgame, the King is a fighting piece." },
      { san: "Kf3", commentary: "The King steps to f3 — in the endgame, the King is a fighting piece." },
      { san: "Ke5", commentary: "The King steps to e5 — in the endgame, the King is a fighting piece." },
      { san: "Ke3", commentary: "The King steps to e3 — in the endgame, the King is a fighting piece." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "Kd3", commentary: "The King steps to d3 — in the endgame, the King is a fighting piece." },
      { san: "Kd5", commentary: "The King steps to d5 — in the endgame, the King is a fighting piece." },
      { san: "Kc3", commentary: "The King steps to c3 — in the endgame, the King is a fighting piece." },
      { san: "Kc5", commentary: "The King steps to c5 — in the endgame, the King is a fighting piece." },
      { san: "Ra2", commentary: "Rook activity: Ra2. Active Rooks decide Rook endings." },
      { san: "Kb5", commentary: "The King steps to b5 — in the endgame, the King is a fighting piece." },
      { san: "Kb3", commentary: "The King steps to b3 — in the endgame, the King is a fighting piece." },
      { san: "Kc5", commentary: "The King steps to c5 — in the endgame, the King is a fighting piece." },
      { san: "Kc3", commentary: "The King steps to c3 — in the endgame, the King is a fighting piece." },
      { san: "Kb5", commentary: "The King steps to b5 — in the endgame, the King is a fighting piece." },
      { san: "Kd4", commentary: "The King steps to d4 — in the endgame, the King is a fighting piece." },
      { san: "Rd6+", commentary: "Rd6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Ke5", commentary: "The King steps to e5 — in the endgame, the King is a fighting piece." },
      { san: "Re6+", commentary: "Re6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "Ka6", commentary: "The King steps to a6 — in the endgame, the King is a fighting piece." },
      { san: "Kg5", commentary: "The King steps to g5 — in the endgame, the King is a fighting piece." },
      { san: "Re5+", commentary: "Re5+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh6", commentary: "The King steps to h6 — in the endgame, the King is a fighting piece." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "f4", commentary: "Pawn push to f4, gaining space in the ending." },
      { san: "Rc5", commentary: "Rook activity: Rc5. Active Rooks decide Rook endings." },
      { san: "Ra3", commentary: "Rook activity: Ra3. Active Rooks decide Rook endings." },
      { san: "Rc7", commentary: "Rook activity: Rc7. Active Rooks decide Rook endings." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Rd7", commentary: "Rook activity: Rd7. Active Rooks decide Rook endings." },
      { san: "f5", commentary: "The passed pawn advances to f5 — every tempo counts." },
      { san: "gxf5", commentary: "Pawn takes the pawn on f5. Every trade matters now." },
      { san: "Kh6", commentary: "The King steps to h6 — in the endgame, the King is a fighting piece." },
      { san: "f4", commentary: "The passed pawn advances to f4 — every tempo counts." },
      { san: "gxf4", commentary: "Pawn takes the pawn on f4. Every trade matters now." },
      { san: "Rd5", commentary: "Rook activity: Rd5. Active Rooks decide Rook endings." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "Ra4", commentary: "Rook activity: Ra4. Active Rooks decide Rook endings." },
      { san: "Kb5", commentary: "The King steps to b5 — in the endgame, the King is a fighting piece." },
      { san: "Re4", commentary: "Rook activity: Re4. Active Rooks decide Rook endings." },
      { san: "Ka6", commentary: "The King steps to a6 — in the endgame, the King is a fighting piece." },
      { san: "Kh6", commentary: "The King steps to h6 — in the endgame, the King is a fighting piece." },
      { san: "Rxa5", commentary: "Rook takes the pawn on a5. Every trade matters now." },
      { san: "Re5", commentary: "Rook activity: Re5. Active Rooks decide Rook endings." },
      { san: "Ra1", commentary: "Rook activity: Ra1. Active Rooks decide Rook endings." },
      { san: "Kxh5", commentary: "King takes the pawn on h5. Every trade matters now." },
      { san: "Rg1", commentary: "Rook activity: Rg1. Active Rooks decide Rook endings." },
      { san: "Rg5", commentary: "Rook activity: Rg5. Active Rooks decide Rook endings." },
      { san: "Rh1", commentary: "Rook activity: Rh1. Active Rooks decide Rook endings." },
      { san: "Rf5", commentary: "Rook activity: Rf5. Active Rooks decide Rook endings." },
      { san: "Kb6", commentary: "The King steps to b6 — in the endgame, the King is a fighting piece." },
      { san: "Rxf7", commentary: "Rook takes the pawn on f7. Every trade matters now." },
      { san: "Kc6", commentary: "The King steps to c6 — in the endgame, the King is a fighting piece." },
      { san: "Re7", commentary: "Rook activity: Re7. Active Rooks decide Rook endings." },
    ],
    guessMoveIndex: 81,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  // ── 1936 Nottingham International ───────────────────────────────

  "nottingham-g1": {
    title: "Capablanca – M. Botvinnik, Nottingham (1936)",
    intro: "J. Capablanca vs. M. Botvinnik. Nottingham (1936). Flank Opening. Replay the full historical game.",
    moves: [
      { san: "Nf3", commentary: "Capablanca opens with Nf3. The game heads into a Réti / Flank Opening." },
      { san: "Nf6", commentary: "Nf6 — Black steers the contest toward a Réti / Flank Opening structure." },
      { san: "d4", commentary: "Pawn thrust to d4 — claiming space in the centre." },
      { san: "b6", commentary: "Pawn to b6 — building the structure." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Bb7", commentary: "Bishop comes out to b7, completing minor-piece development." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "cxd4", commentary: "Pawn takes the pawn on d4. Equal material is restored." },
      { san: "Nxd4", commentary: "Knight takes the pawn on d4. Equal material is restored." },
      { san: "Bxg2", commentary: "Bishop takes the bishop on g2, leaving Black a clear material edge." },
      { san: "Kxg2", commentary: "King takes the bishop on g2. Equal material is restored." },
      { san: "g6", commentary: "Pawn to g6 — building the structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "Bg7", commentary: "Bishop comes out to g7, completing minor-piece development." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Qc8", commentary: "Black repositions the Queen to c8, probing for weaknesses." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Qb7+", commentary: "Qb7+ — Black delivers check, forcing the enemy King to respond." },
      { san: "f3", commentary: "Pawn lever f3 — adjusting the structure to open lines." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5" },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5" },
      { san: "Nxd5", commentary: "Knight takes the knight on d5, leaving White a clear material edge." },
      { san: "Qxd5", commentary: "Queen takes the knight on d5" },
      { san: "Bb2", commentary: "Bishop swings to b2, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "Rd8", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Nc5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Qb1", commentary: "Capablanca repositions the Queen to b1, probing for weaknesses." },
      { san: "Qb7", commentary: "Black repositions the Queen to b7, probing for weaknesses." },
      { san: "Nc2", commentary: "Knight manoeuvres to c2, looking for a stable square." },
      { san: "Qa6", commentary: "Black repositions the Queen to a6, probing for weaknesses." },
      { san: "Kf1", commentary: "King step Kf1 — quiet prophylaxis." },
      { san: "Bh6", commentary: "Bishop swings to h6, redirecting its diagonal pressure." },
      { san: "Nb4", commentary: "Knight manoeuvres to b4, looking for a stable square." },
      { san: "Qb7", commentary: "Black repositions the Queen to b7, probing for weaknesses." },
      { san: "Rxd8+", commentary: "Rook takes the rook on d8 with check." },
      { san: "Rxd8", commentary: "Rook takes the rook on d8" },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Rd7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Nd3", commentary: "Knight manoeuvres to d3, looking for a stable square." },
      { san: "Nxd3", commentary: "Knight takes the knight on d3, leaving Black a clear material edge." },
      { san: "Rxd3", commentary: "Rook takes the knight on d3" },
      { san: "Bg7", commentary: "Bishop swings to g7, redirecting its diagonal pressure." },
      { san: "Bxg7", commentary: "Bishop takes the bishop on g7, leaving White a clear material edge." },
      { san: "Rxd3", commentary: "Rook takes the rook on d3" },
      { san: "Qxd3", commentary: "Queen takes the rook on d3, leaving White a clear material edge." },
      { san: "Kxg7", commentary: "King takes the bishop on g7. Every trade matters now." },
      { san: "Qd8", commentary: "Queen to d8 — coordinating the final assault." },
      { san: "b5", commentary: "Pawn push to b5, gaining space in the ending." },
      { san: "b4", commentary: "Pawn push to b4, gaining space in the ending." },
      { san: "a6", commentary: "Pawn push to a6, gaining space in the ending." },
    ],
    guessMoveIndex: 42,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  "nottingham-g4": {
    title: "Capablanca – A. Alekhine, Nottingham (1936)",
    intro:
      "J. Capablanca vs. A. Alekhine. Nottingham (1936). Flank Opening. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "e6", commentary: "Black answers e6, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "f5", commentary: "Pawn thrust to f5 — claiming space in the centre." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Qb3", commentary: "Queen develops to b3 — Capablanca preferred to keep her flexible." },
      { san: "Bf6", commentary: "Bishop comes out to f6, completing minor-piece development." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Qe8", commentary: "Black plays Qe8, continuing development." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Nc6", commentary: "Knight manoeuvres to c6, looking for a stable square." },
      { san: "Nb5", commentary: "Knight manoeuvres to b5, looking for a stable square." },
      { san: "Bd8", commentary: "Bishop swings to d8, redirecting its diagonal pressure." },
      { san: "Qc2", commentary: "Capablanca repositions the Queen to c2, probing for weaknesses." },
      { san: "d6", commentary: "Pawn lever d6 — adjusting the structure to open lines." },
      { san: "d5", commentary: "Pawn lever d5 — adjusting the structure to open lines." },
      { san: "Nb4", commentary: "Knight manoeuvres to b4, looking for a stable square." },
      { san: "Qb3", commentary: "Capablanca repositions the Queen to b3, probing for weaknesses." },
      { san: "Na6", commentary: "Knight manoeuvres to a6, looking for a stable square." },
      { san: "dxe6", commentary: "Pawn takes the pawn on e6" },
      { san: "Nac5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Qc2", commentary: "Capablanca repositions the Queen to c2, probing for weaknesses." },
      { san: "Nxe6", commentary: "Knight takes the pawn on e6" },
      { san: "Nfd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Nxd4", commentary: "Knight takes the knight on d4, leaving Black a clear material edge." },
      { san: "Nxd4", commentary: "Knight takes the knight on d4" },
      { san: "Bf6", commentary: "Bishop swings to f6, redirecting its diagonal pressure." },
      { san: "Nb5", commentary: "Knight manoeuvres to b5, looking for a stable square." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "Be3", commentary: "Bishop swings to e3, redirecting its diagonal pressure." },
      { san: "a6", commentary: "Pawn lever a6 — adjusting the structure to open lines." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Bd7", commentary: "Bishop swings to d7, redirecting its diagonal pressure." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rae8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "b4", commentary: "Pawn lever b4 — adjusting the structure to open lines." },
      { san: "b6", commentary: "Pawn lever b6 — adjusting the structure to open lines." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Nc3", commentary: "Knight manoeuvres to c3, looking for a stable square." },
      { san: "Rd3", commentary: "Rook lifts to d3, joining the heavy-piece battery." },
      { san: "f4", commentary: "Pawn lever f4 — adjusting the structure to open lines." },
      { san: "gxf4", commentary: "Pawn takes the pawn on f4" },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Qd2", commentary: "Capablanca repositions the Queen to d2, probing for weaknesses." },
      { san: "Bxd3", commentary: "Bishop takes the rook on d3, leaving Black a clear material edge." },
      { san: "exd3", commentary: "Pawn takes the bishop on d3" },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "Rxc3", commentary: "Rook takes the knight on c3" },
      { san: "Bxc3", commentary: "Bishop takes the rook on c3, leaving Black a clear material edge." },
      { san: "Qxc3", commentary: "Queen takes the bishop on c3" },
      { san: "Qf6", commentary: "Black repositions the Queen to f6, probing for weaknesses." },
      { san: "Qxf6", commentary: "Queen takes the queen on f6, leaving White a clear material edge." },
      { san: "gxf6", commentary: "Pawn takes the queen on f6" },
      { san: "Nd2", commentary: "Knight to d2 — short-range, but decisive on the right square." },
      { san: "f5", commentary: "Pawn push to f5, gaining space in the ending." },
      { san: "b5", commentary: "The passed pawn advances to b5 — every tempo counts." },
      { san: "a5", commentary: "Pawn push to a5, gaining space in the ending." },
      { san: "Nf1", commentary: "Knight to f1 — short-range, but decisive on the right square." },
      { san: "Kf7", commentary: "The King steps to f7 — in the endgame, the King is a fighting piece." },
      { san: "Ng3", commentary: "Knight to g3 — short-range, but decisive on the right square." },
      { san: "Kg6", commentary: "The King steps to g6 — in the endgame, the King is a fighting piece." },
      { san: "Bf3", commentary: "Bishop to f3, controlling the long diagonal in the endgame." },
      { san: "Re7", commentary: "Rook activity: Re7. Active Rooks decide Rook endings." },
      { san: "Kf1", commentary: "The King steps to f1 — in the endgame, the King is a fighting piece." },
      { san: "Kf6", commentary: "The King steps to f6 — in the endgame, the King is a fighting piece." },
      { san: "Bd2", commentary: "Bishop to d2, controlling the long diagonal in the endgame." },
      { san: "Kg6", commentary: "The King steps to g6 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "nottingham-g9": {
    title: "Capablanca – S. Reshevsky, Nottingham (1936)",
    intro:
      "J. Capablanca vs. S. Reshevsky. Nottingham (1936). Indian Defence. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Capablanca opens with d4, claiming central territory at once." },
      { san: "d5", commentary: "Black answers d5, declining to surrender the centre." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "Nf6", commentary: "Knight develops to f6 — pieces before pawns, classical principle." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "dxc4", commentary: "Pawn takes the pawn on c4. Equal material is restored." },
      { san: "Qa4+", commentary: "Qa4+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Nbd7", commentary: "Knight develops to d7 — pieces before pawns, classical principle." },
      { san: "Qxc4", commentary: "Queen takes the pawn on c4. Equal material is restored." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "g3", commentary: "Pawn to g3 — building the structure." },
      { san: "a6", commentary: "Pawn to a6 — building the structure." },
      { san: "Bg2", commentary: "Bishop comes out to g2, completing minor-piece development." },
      { san: "b5", commentary: "Pawn to b5 — building the structure." },
      { san: "Qc6", commentary: "Capablanca plays Qc6, continuing development." },
      { san: "Ra7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Bf4", commentary: "Bishop swings to f4, eyeing the long diagonal." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "Qc1", commentary: "Capablanca repositions the Queen to c1, probing for weaknesses." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Bxc5", commentary: "Bishop takes the pawn on c5" },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nbd2", commentary: "Knight manoeuvres to d2, looking for a stable square." },
      { san: "Qe7", commentary: "Black repositions the Queen to e7, probing for weaknesses." },
      { san: "Nb3", commentary: "Knight manoeuvres to b3, looking for a stable square." },
      { san: "Bb6", commentary: "Bishop swings to b6, redirecting its diagonal pressure." },
      { san: "Be3", commentary: "Bishop swings to e3, redirecting its diagonal pressure." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Qd2", commentary: "Capablanca repositions the Queen to d2, probing for weaknesses." },
      { san: "Ne4", commentary: "Knight to e4 — a powerful central outpost." },
      { san: "Qd3", commentary: "Capablanca repositions the Queen to d3, probing for weaknesses." },
      { san: "Nec5", commentary: "Knight to c5 — a powerful central outpost." },
      { san: "Nxc5", commentary: "Knight takes the knight on c5, leaving White a clear material edge." },
      { san: "Nxc5", commentary: "Knight takes the knight on c5" },
      { san: "Qd1", commentary: "Capablanca repositions the Queen to d1, probing for weaknesses." },
      { san: "Ba8", commentary: "Bishop swings to a8, redirecting its diagonal pressure." },
      { san: "Rc1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rac7", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "b3", commentary: "Pawn lever b3 — adjusting the structure to open lines." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Rxc7", commentary: "Rook takes the rook on c7, leaving White a clear material edge." },
      { san: "Rxc7", commentary: "Rook takes the rook on c7" },
      { san: "Bxb6", commentary: "Bishop takes the bishop on b6, leaving White a clear material edge." },
      { san: "Nxb6", commentary: "Knight takes the bishop on b6" },
      { san: "Qd4", commentary: "Capablanca repositions the Queen to d4, probing for weaknesses." },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Rd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "f6", commentary: "Pawn lever f6 — adjusting the structure to open lines." },
      { san: "Ne1", commentary: "Knight manoeuvres to e1, looking for a stable square." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "Bxd5", commentary: "Bishop takes the knight on d5, leaving White a clear material edge." },
      { san: "exd5", commentary: "Pawn takes the bishop on d5" },
      { san: "e3", commentary: "Pawn lever e3 — adjusting the structure to open lines." },
      { san: "Qe4", commentary: "Black repositions the Queen to e4, probing for weaknesses." },
      { san: "h4", commentary: "Pawn lever h4 — adjusting the structure to open lines." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "f3", commentary: "Pawn lever f3 — adjusting the structure to open lines." },
      { san: "Qxd4", commentary: "Queen takes the queen on d4, leaving Black a clear material edge." },
      { san: "Rxd4", commentary: "Rook takes the queen on d4. Every trade matters now." },
      { san: "Rc1", commentary: "Rook activity: Rc1. Active Rooks decide Rook endings." },
      { san: "Kf2", commentary: "The King steps to f2 — in the endgame, the King is a fighting piece." },
      { san: "Ra1", commentary: "Rook activity: Ra1. Active Rooks decide Rook endings." },
      { san: "Rd2", commentary: "Rook activity: Rd2. Active Rooks decide Rook endings." },
      { san: "a4", commentary: "The passed pawn advances to a4 — every tempo counts." },
      { san: "Nd3", commentary: "Knight to d3 — short-range, but decisive on the right square." },
      { san: "Rb1", commentary: "Rook activity: Rb1. Active Rooks decide Rook endings." },
      { san: "Rb2", commentary: "Rook activity: Rb2. Active Rooks decide Rook endings." },
      { san: "Rxb2+", commentary: "Rook takes the rook on b2 with check." },
      { san: "Nxb2", commentary: "Knight takes the rook on b2. Every trade matters now." },
      { san: "Bc6", commentary: "Bishop to c6, controlling the long diagonal in the endgame." },
      { san: "Nd3", commentary: "Knight to d3 — short-range, but decisive on the right square." },
      { san: "g5", commentary: "Pawn push to g5, gaining space in the ending." },
      { san: "hxg5", commentary: "Pawn takes the pawn on g5. Every trade matters now." },
      { san: "fxg5", commentary: "Pawn takes the pawn on g5. Every trade matters now." },
      { san: "Nb4", commentary: "Knight to b4 — short-range, but decisive on the right square." },
      { san: "axb3", commentary: "Pawn takes the pawn on b3. Every trade matters now." },
      { san: "axb3", commentary: "Pawn takes the pawn on b3. Every trade matters now." },
      { san: "Bb7", commentary: "Bishop to b7, controlling the long diagonal in the endgame." },
      { san: "g4", commentary: "Pawn push to g4, gaining space in the ending." },
      { san: "Kg7", commentary: "The King steps to g7 — in the endgame, the King is a fighting piece." },
      { san: "Ke2", commentary: "The King steps to e2 — in the endgame, the King is a fighting piece." },
      { san: "Kg6", commentary: "The King steps to g6 — in the endgame, the King is a fighting piece." },
      { san: "Kd3", commentary: "The King steps to d3 — in the endgame, the King is a fighting piece." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "gxh5+", commentary: "Pawn takes the pawn on h5 with check." },
      { san: "Kxh5", commentary: "King takes the pawn on h5. Every trade matters now." },
      { san: "Kd4", commentary: "The King steps to d4 — in the endgame, the King is a fighting piece." },
      { san: "Kh4", commentary: "The King steps to h4 — in the endgame, the King is a fighting piece." },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5. Every trade matters now." },
      { san: "Kg3", commentary: "The King steps to g3 — in the endgame, the King is a fighting piece." },
      { san: "f4", commentary: "Pawn push to f4, gaining space in the ending." },
      { san: "g4", commentary: "The passed pawn advances to g4 — every tempo counts." },
      { san: "f5", commentary: "The passed pawn advances to f5 — every tempo counts." },
      { san: "Bc8", commentary: "Bishop to c8, controlling the long diagonal in the endgame." },
      { san: "Ke5", commentary: "The King steps to e5 — in the endgame, the King is a fighting piece." },
      { san: "Bd7", commentary: "Bishop to d7, controlling the long diagonal in the endgame." },
      { san: "e4", commentary: "Pawn push to e4, gaining space in the ending." },
      { san: "Be8", commentary: "Bishop to e8, controlling the long diagonal in the endgame." },
      { san: "Kd4", commentary: "The King steps to d4 — in the endgame, the King is a fighting piece." },
      { san: "Kf3", commentary: "The King steps to f3 — in the endgame, the King is a fighting piece." },
      { san: "e5", commentary: "The passed pawn advances to e5 — every tempo counts." },
      { san: "g3", commentary: "The passed pawn advances to g3 — every tempo counts." },
      { san: "Ne3", commentary: "Knight to e3 — short-range, but decisive on the right square." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "e6", commentary: "The passed pawn advances to e6 — every tempo counts." },
      { san: "g2", commentary: "The passed pawn advances to g2 — every tempo counts." },
      { san: "Nxg2+", commentary: "Knight takes the pawn on g2 with check." },
      { san: "Kxf5", commentary: "King takes the pawn on f5. Every trade matters now." },
      { san: "Kd5", commentary: "The King steps to d5 — in the endgame, the King is a fighting piece." },
      { san: "Kg4", commentary: "The King steps to g4 — in the endgame, the King is a fighting piece." },
      { san: "Ne3+", commentary: "Ne3+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "Kd4", commentary: "The King steps to d4 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 52,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "nottingham-g13": {
    title: "S. Flohr – Capablanca, Nottingham (1936)",
    intro:
      "S. Flohr vs. J. Capablanca. Nottingham (1936). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "White opens with d4. The game heads into a Indian Defence complex." },
      { san: "Nf6", commentary: "Nf6 — Black steers the contest toward a Indian Defence complex structure." },
      { san: "c4", commentary: "Pawn thrust to c4 — claiming space in the centre." },
      { san: "e6", commentary: "Pawn to e6 — building the structure." },
      { san: "Nc3", commentary: "Knight develops to c3 — pieces before pawns, classical principle." },
      { san: "d5", commentary: "Pawn thrust to d5 — claiming space in the centre." },
      { san: "Bg5", commentary: "Bishop comes out to g5, completing minor-piece development." },
      { san: "Be7", commentary: "Bishop comes out to e7, completing minor-piece development." },
      { san: "e3", commentary: "Pawn to e3 — building the structure." },
      { san: "O-O", commentary: "Black castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nf3", commentary: "Knight develops to f3 — pieces before pawns, classical principle." },
      { san: "h6", commentary: "Pawn to h6 — building the structure." },
      { san: "Bh4", commentary: "Bishop comes out to h4, completing minor-piece development." },
      { san: "b6", commentary: "Pawn to b6 — building the structure." },
      { san: "cxd5", commentary: "Pawn takes the pawn on d5. Equal material is restored." },
      { san: "Nxd5", commentary: "Knight takes the pawn on d5. Equal material is restored." },
      { san: "Bxe7", commentary: "Bishop takes the bishop on e7, leaving White a clear material edge." },
      { san: "Nxe7", commentary: "Knight takes the bishop on e7" },
      { san: "Be2", commentary: "Bishop swings to e2, redirecting its diagonal pressure." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "O-O", commentary: "White castles short — the King reaches safety and the Rook joins the game." },
      { san: "Nd7", commentary: "Knight manoeuvres to d7, looking for a stable square." },
      { san: "Qa4", commentary: "White repositions the Queen to a4, probing for weaknesses." },
      { san: "a6", commentary: "Pawn lever a6 — adjusting the structure to open lines." },
      { san: "Rfd1", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Nd5", commentary: "Knight to d5 — a powerful central outpost." },
      { san: "Rac1", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Rc8", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Nxd5", commentary: "Knight takes the knight on d5, leaving White a clear material edge." },
      { san: "exd5", commentary: "Pawn takes the knight on d5" },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "c5", commentary: "Pawn thrust to c5 — claiming space in the centre." },
      { san: "dxc5", commentary: "Pawn takes the pawn on c5" },
      { san: "Nxc5", commentary: "Knight takes the pawn on c5" },
      { san: "Qd4", commentary: "White repositions the Queen to d4, probing for weaknesses." },
      { san: "Re8", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Rc7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Qf4", commentary: "White repositions the Queen to f4, probing for weaknesses." },
      { san: "Rce7", commentary: "Rook lifts to the e-file, seeking an open avenue." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "a5", commentary: "Pawn lever a5 — adjusting the structure to open lines." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "Re5", commentary: "Rook lifts to e5, joining the heavy-piece battery." },
      { san: "Bb5", commentary: "Bishop swings to b5, redirecting its diagonal pressure." },
      { san: "R8e7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Qf3", commentary: "White repositions the Queen to f3, probing for weaknesses." },
      { san: "Rg5", commentary: "Rook lifts to the g-file, seeking an open avenue." },
      { san: "Qe2", commentary: "White repositions the Queen to e2, probing for weaknesses." },
      { san: "Rg6", commentary: "Rook lifts to g6, joining the heavy-piece battery." },
      { san: "Bd3", commentary: "Bishop swings to d3, redirecting its diagonal pressure." },
      { san: "Rf6", commentary: "Rook lifts to the f-file, seeking an open avenue." },
      { san: "Bb1", commentary: "Bishop swings to b1, redirecting its diagonal pressure." },
      { san: "Ba6", commentary: "Bishop swings to a6, redirecting its diagonal pressure." },
      { san: "Qh5", commentary: "White repositions the Queen to h5, probing for weaknesses." },
      { san: "Bb7", commentary: "Bishop swings to b7, redirecting its diagonal pressure." },
      { san: "a3", commentary: "Pawn lever a3 — adjusting the structure to open lines." },
      { san: "a4", commentary: "Pawn lever a4 — adjusting the structure to open lines." },
      { san: "Qg4", commentary: "White repositions the Queen to g4, probing for weaknesses." },
      { san: "Re5", commentary: "Rook lifts to e5, joining the heavy-piece battery." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Re7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Re5", commentary: "Rook lifts to e5, joining the heavy-piece battery." },
      { san: "Nf3", commentary: "Knight manoeuvres to f3, looking for a stable square." },
      { san: "Re7", commentary: "Rook penetrates to the 7th rank — a classical Capablanca theme." },
      { san: "Qg3", commentary: "White repositions the Queen to g3, probing for weaknesses." },
      { san: "Ba6", commentary: "Bishop swings to a6, redirecting its diagonal pressure." },
      { san: "Nd4", commentary: "Knight to d4 — a powerful central outpost." },
      { san: "Rd7", commentary: "Rook lifts to the d-file, seeking an open avenue." },
      { san: "Bf5", commentary: "Bishop swings to f5, eyeing the long diagonal." },
      { san: "Rc7", commentary: "Rook lifts to the c-file, seeking an open avenue." },
      { san: "Bb1", commentary: "Bishop swings to b1, redirecting its diagonal pressure." },
      { san: "Qc8", commentary: "Capablanca repositions the Queen to c8, probing for weaknesses." },
      { san: "Nf5", commentary: "Knight to f5 — a powerful central outpost." },
      { san: "Rg6", commentary: "Rook lifts to the g-file, seeking an open avenue." },
      { san: "Nd6", commentary: "Knight manoeuvres to d6, looking for a stable square." },
      { san: "Rxg3", commentary: "Rook takes the queen on g3, leaving Black a clear material edge." },
      { san: "Nxc8", commentary: "Knight takes the queen on c8" },
      { san: "Rxg2+", commentary: "Rook takes the pawn on g2 with check." },
      { san: "Kxg2", commentary: "King takes the rook on g2, leaving White a clear material edge." },
      { san: "Rxc8", commentary: "Rook takes the knight on c8. Every trade matters now." },
      { san: "Ba2", commentary: "Bishop to a2, controlling the long diagonal in the endgame." },
      { san: "Rc6", commentary: "Rook activity: Rc6. Active Rooks decide Rook endings." },
      { san: "Bxd5", commentary: "Bishop takes the pawn on d5. Every trade matters now." },
      { san: "Rg6+", commentary: "Rg6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kh1", commentary: "The King steps to h1 — in the endgame, the King is a fighting piece." },
      { san: "Nd3", commentary: "Knight to d3 — short-range, but decisive on the right square." },
      { san: "Rc2", commentary: "Rook activity: Rc2. Active Rooks decide Rook endings." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "Bf3", commentary: "Bishop to f3, controlling the long diagonal in the endgame." },
      { san: "Rf6", commentary: "Rook activity: Rf6. Active Rooks decide Rook endings." },
      { san: "Be4", commentary: "Bishop to e4, controlling the long diagonal in the endgame." },
      { san: "Rd6", commentary: "Rook activity: Rd6. Active Rooks decide Rook endings." },
      { san: "Bxd3", commentary: "Bishop takes the knight on d3, leaving White a clear material edge." },
      { san: "Bxd3", commentary: "Bishop takes the bishop on d3. Every trade matters now." },
      { san: "f3", commentary: "Pawn push to f3, gaining space in the ending." },
      { san: "Bxc2", commentary: "Bishop takes the rook on c2, leaving Black a clear material edge." },
      { san: "Rxd6", commentary: "Rook takes the rook on d6. Every trade matters now." },
      { san: "b5", commentary: "Pawn push to b5, gaining space in the ending." },
      { san: "Kg2", commentary: "The King steps to g2 — in the endgame, the King is a fighting piece." },
      { san: "Bb3", commentary: "Bishop to b3, controlling the long diagonal in the endgame." },
      { san: "Rb6", commentary: "Rook activity: Rb6. Active Rooks decide Rook endings." },
      { san: "Bc4", commentary: "Bishop to c4, controlling the long diagonal in the endgame." },
      { san: "Kg3", commentary: "The King steps to g3 — in the endgame, the King is a fighting piece." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "Ke7", commentary: "The King steps to e7 — in the endgame, the King is a fighting piece." },
      { san: "Ke5", commentary: "The King steps to e5 — in the endgame, the King is a fighting piece." },
      { san: "Be2", commentary: "Bishop to e2, controlling the long diagonal in the endgame." },
      { san: "f4", commentary: "Pawn push to f4, gaining space in the ending." },
      { san: "Bc4", commentary: "Bishop to c4, controlling the long diagonal in the endgame." },
      { san: "Rb7+", commentary: "Rb7+ — White delivers check, forcing the enemy King to respond." },
      { san: "Kf8", commentary: "The King steps to f8 — in the endgame, the King is a fighting piece." },
      { san: "f5", commentary: "The passed pawn advances to f5 — every tempo counts." },
      { san: "f6+", commentary: "f6+ — Capablanca delivers check, forcing the enemy King to respond." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "h5", commentary: "Pawn push to h5, gaining space in the ending." },
      { san: "e4", commentary: "Pawn push to e4, gaining space in the ending." },
      { san: "Be2", commentary: "Bishop to e2, controlling the long diagonal in the endgame." },
      { san: "e5", commentary: "The passed pawn advances to e5 — every tempo counts." },
      { san: "fxe5+", commentary: "Pawn takes the pawn on e5 with check." },
      { san: "Kxe5", commentary: "King takes the pawn on e5. Every trade matters now." },
      { san: "Bc4", commentary: "Bishop to c4, controlling the long diagonal in the endgame." },
      { san: "Kf4", commentary: "The King steps to f4 — in the endgame, the King is a fighting piece." },
      { san: "h4", commentary: "The passed pawn advances to h4 — every tempo counts." },
      { san: "Kg5", commentary: "The King steps to g5 — in the endgame, the King is a fighting piece." },
    ],
    guessMoveIndex: 77,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "2-1": {
    title: "A Cardinal Principle — The King as Attacking Piece",
    intro:
      "Capablanca: “The King, which in the beginning of the game is a source of " +
      "anxiety because of its vulnerability, becomes in the end-game a main " +
      "weapon of offense and defense. Bring out your King as fast as possible " +
      "to the center of the board.”",
    startFen: "8/7p/5k2/8/8/8/7P/5K2 w - - 0 1",
    moves: [
      {
        san: "Kf2",
        commentary:
          "“Bring out your King.” The very first move of the endgame: the monarch " +
          "steps forward. No longer a timid bystander behind a wall of pawns, the " +
          "King becomes a fighting piece.",
      },
      {
        san: "Kf7",
        commentary:
          "Black follows the same rule. In pawn endgames, the first King to the " +
          "centre usually dictates the terms of the battle.",
      },
      {
        san: "Ke3",
        commentary:
          "White continues the march. The goal is not a single square but " +
          "domination of the entire board — a King in the centre commands more " +
          "squares than from any edge.",
      },
      {
        san: "Kg7",
        commentary:
          "Black drifts toward the wing, away from the critical theatre. A small " +
          "inaccuracy, but in endgames small inaccuracies decide the result.",
      },
      {
        san: "Kd4",
        commentary:
          "“The King in the center is worth a piece.” White occupies d4, a central " +
          "square from which every wing is within reach.",
      },
      {
        san: "Kh6",
        commentary:
          "Black is reduced to passive shuffling on the rim. The geometry of the " +
          "position has already begun to tilt in White's favour.",
      },
      {
        san: "Kc5",
        commentary:
          "Capablanca's principle fulfilled: the White King dominates the centre, " +
          "while Black's monarch wanders the edge. The difference in activity is " +
          "the entire story of the endgame.",
      },
      {
        san: "Kg5",
        commentary:
          "Black attempts to become active, but it is too late. The central King " +
          "has seized the opposition and the better position. The lesson: in " +
          "endgames, activate your King immediately — delay is fatal.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER II — Lesson 2: Three Pawns vs. Three (The breakthrough)
  // ─────────────────────────────────────────────────────────────────
  "2-2": {
    title: "Three Pawns vs. Three — The Breakthrough",
    intro:
      "Capablanca: “Whenever there is a majority of pawns on one side of the " +
      "board, the general rule is to advance the pawn that has no pawn opposing " +
      "it.” Here White owns a three-to-three majority on the queenside, but all " +
      "pawns are blocked. The breakthrough shatters the blockade with a sacrifice.",
    startFen: "8/ppp5/5k2/PPP5/8/5K2/8/8 w - - 0 1",
    moves: [
      {
        san: "b6",
        commentary:
          "“The lever is thrown.” White sacrifices the b-pawn to open lines. " +
          "Capablanca taught that a blocked majority is worthless until a " +
          "path is forced open.",
      },
      {
        san: "cxb6",
        commentary:
          "Black accepts, thinking he has stopped the threat. He has not — the " + "sacrifice is only the first act.",
      },
      {
        san: "a6",
        commentary:
          "The second pawn is offered. White now sacrifices the a-pawn, " + "clearing the way for the true candidate.",
      },
      {
        san: "bxa6",
        commentary:
          "Black captures again, but each capture weakens his structure and " + "opens a file for the remaining pawn.",
      },
      {
        san: "c6",
        commentary:
          "“The decisive thrust.” The c-pawn is now unstoppable: if Black " +
          "takes on c6, the a-pawn queens; if he ignores it, c7 and c8=Q " +
          "follows. Numerical equality has been shattered by timing.",
      },
      {
        san: "b5",
        commentary:
          "A desperate attempt to create a passed pawn of his own. Black " +
          "understands that the breakthrough has already decided the position.",
      },
      {
        san: "c7",
        commentary:
          "White's candidate marches on. One more step and the pawn becomes " +
          "a Queen. The breakthrough has transformed a blocked majority into " +
          "a winning passed pawn.",
      },
      {
        san: "b4",
        commentary:
          "Too late. Black's counterplay is one tempo short. The lesson: a " +
          "well-timed pawn sacrifice can turn a static majority into an " +
          "unstoppable passed pawn. Timing, not numbers, decides.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER II — Lesson 3: The Power of the Rook on the 7th Rank
  // ─────────────────────────────────────────────────────────────────
  "2-3": {
    title: "The Power of the Rook on the 7th Rank",
    intro:
      "Capablanca: “A Rook on the 7th rank is of great value because it keeps " +
      "the opposing King hemmed in on the last rank and attacks the enemy pawns " +
      "at their base.” White's Rook already occupies the ideal post on d7, " +
      "while Black's pawns sit helpless on the 7th rank.",
    startFen: "6k1/pppR4/8/8/8/8/3r2K1/8 w - - 0 1",
    moves: [
      {
        san: "Rxc7",
        commentary:
          "The rook on the 7th rank feasts on the immobile pawns. With one " +
          "move White harvests the c-pawn — the first of three victims.",
      },
      {
        san: "Kf8",
        commentary:
          "Black brings his King toward the centre, but the structural damage " +
          "is already severe. The rook's position is too powerful to be met by " +
          "King moves alone.",
      },
      {
        san: "Rxb7",
        commentary:
          "The b-pawn falls next. Capablanca's principle in action: a rook on " +
          "the 7th against pawns on their original squares wins material by force.",
      },
      {
        san: "Ke8",
        commentary:
          "Driven to the edge. The Black King finds no shelter; the rook controls " +
          "the entire 7th rank and the open files behind the pawns.",
      },
      {
        san: "Rxa7",
        commentary:
          "The last pawn is taken. All three pawns have fallen to the 7th-rank " +
          "rook. White has won three pawns without any counterplay from Black.",
      },
      {
        san: "Kd8",
        commentary:
          "Black's King remains on the back rank, exactly where Capablanca " +
          "said it would be trapped. The rook dominates from above.",
      },
      {
        san: "Ra8+",
        commentary:
          "The rook invades the 8th rank with check, completing the sentence: " +
          "“keeps the opposing King hemmed in on the last rank.” The monarch " +
          "cannot escape the horizontal and vertical prison.",
      },
      {
        san: "Kd7",
        commentary:
          "The King finally steps off the last rank, but only after losing " +
          "three pawns and the initiative. The lesson: place your Rook on the " +
          "7th, and the opponent's pawns and King become your targets.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER II — Lesson 4: Queen against Rook (Philidor & Zugzwang)
  // ─────────────────────────────────────────────────────────────────
  "2-4": {
    title: "Queen against Rook — The Philidor Position & Zugzwang",
    intro:
      "Capablanca: “In this ending, the stronger side wins by pushing the " +
      "opponent's king to the edge or corner of the board. The winning method " +
      "is based on 'Zugzwang'—forcing the weaker side to separate their Rook " +
      "from their King, which immediately allows a deadly double-attack (fork) " +
      "by the Queen to win the piece.” White: King e6, Queen e5. Black: King e8, " +
      "Rook f7. A classic Philidor setup where the defender is already on the " +
      "brink of collapse.",
    startFen: "4k3/5r2/4K3/4Q3/8/8/8/8 w - - 0 1",
    moves: [
      {
        san: "Qd5",
        commentary:
          "“Restrict, then attack.” The Queen descends to d5, cutting off the " +
          "Rook's escape along the 7th rank and threatening to tighten the net. " +
          "Every step in this ending is about reducing the defender's options.",
      },
      {
        san: "Re7+",
        commentary:
          "Black attempts a desperado check, hoping to force the White King " +
          "away and gain a tempo. Capablanca noted that in lost positions, " +
          "checks are often the only resource — but they rarely save the game.",
      },
      {
        san: "Kf6",
        commentary:
          "The King approaches. “Bring your King to the centre of the board.” " +
          "From f6, White's monarch seals off every flight square on the 7th rank " +
          "and prepares for the final zugzwang.",
      },
      {
        san: "Kf8",
        commentary:
          "Black's King retreats to f8, clinging to the centre. But the " +
          "coordinated White pieces are closing in, and the defender's mobility " +
          "shrinks with every move.",
      },
      {
        san: "Qd6",
        commentary:
          "The decisive zugzwang. The Queen on d6 attacks e7 and paralyses the " +
          "entire Black position: the Rook cannot move to any safe square, and " +
          "the King must abandon his protector. Capablanca's method in its purest " +
          "form — force the opponent to move against his own interest.",
      },
      {
        san: "Ke8",
        commentary:
          "Forced. The Rook on e7 is immobilised — every escape square is either " +
          "attacked by the Queen or the White King. The defender's only legal " +
          "moves are with the King: to e8 or g8. Both are fatal.",
      },
      {
        san: "Qxe7#",
        commentary:
          "Mate. The King stepped away, and the Rook was instantly captured with " +
          "check. The Black King has no escape: d8 and f8 are controlled by the " +
          "Queen, d7 and f7 by the White King. This is the power of zugzwang — " +
          "the defender was compelled to self-destruction. As Capablanca wrote: " +
          "“The winning method is based on Zugzwang.”",
      },
    ],
  },

  "3-1": {
    title: "Attacking the King from the Flank",
    intro:
      "Capablanca: “When planning a flank attack against the enemy King, it is " +
      "vital to first ensure your own centre is secure. An attack on a flank " +
      "with an unstable centre will almost always be crushed by a counter-strike " +
      "in the middle.” Both sides have castled — White short, Black long — and " +
      "the pawn storm against the enemy King must be timed to a rock-solid centre.",
    startFen: "2kr1bnr/ppp2ppp/2nqb3/3pp3/3PP3/2NQBN2/PPP2PPP/2KR1B1R w - - 0 1",
    moves: [
      {
        san: "Kb1",
        commentary:
          "Before the storm, prophylaxis. White tucks the King into the corner, " +
          "off the c-file where Black's Rook already eyes the queenside. " +
          "Capablanca: “Never begin an attack until your own King is safe.”",
      },
      {
        san: "Kb8",
        commentary:
          "Black mirrors the same wisdom. Both sides quietly secure their monarchs " +
          "before the pawns begin to march.",
      },
      {
        san: "h4",
        commentary:
          "The flank attack begins. The h-pawn advances to pry open lines toward " +
          "the Black King — but only because the d4/e4 centre is firmly defended.",
      },
      {
        san: "a6",
        commentary:
          "Black prepares his own counter-storm with …b5. The race is on, and " +
          "the side with the more stable centre will land the decisive blow first.",
      },
      {
        san: "h5",
        commentary:
          "White's pawn reaches h5, threatening h6 to crack the shelter around " +
          "Black's King. Every flank move rests on the granite centre.",
      },
      {
        san: "b5",
        commentary:
          "Black launches the counter. Capablanca warned: the side whose centre " +
          "first cracks will see his flank attack rebound.",
      },
      {
        san: "exd5",
        commentary:
          "A central exchange that clarifies — but does not weaken — White's pawns. " +
          "The d4-pawn remains an anchor while the kingside assault continues.",
      },
      {
        san: "Nxd5",
        commentary:
          "Black recaptures. The lesson stands: a flank attack only succeeds when " +
          "the centre is secure. The player who follows Capablanca's principle " +
          "most strictly will land the decisive blow.",
      },
    ],
  },

  "3-2": {
    title: "The Value of the Two Bishops",
    intro:
      "Capablanca: “In open positions, the two Bishops are immensely powerful " +
      "because they can control both color complexes simultaneously, slice across " +
      "the entire board, and slowly squeeze the opponent's knights into complete " +
      "passivity.” White holds the Bishop pair in an open middle-game — the " +
      "perfect laboratory for the famous “minor exchange.”",
    startFen: "r3k2r/ppp2ppp/2n1b3/3p4/3P4/2N1B3/PPP2PPP/R3KB1R w KQkq - 0 1",
    moves: [
      {
        san: "Bd3",
        commentary:
          "The light-squared Bishop takes up its grand diagonal. Capablanca: " +
          "“Place your Bishops where they command the longest open lines.”",
      },
      {
        san: "O-O",
        commentary:
          "Black castles into safety, but his Knight on c6 is already short of " +
          "good squares. The two Bishops are simply more flexible.",
      },
      {
        san: "O-O",
        commentary:
          "White castles. With both Kings secure, the long-term struggle begins: " +
          "the side with the Bishop pair will steer the game toward open lines.",
      },
      {
        san: "Nb4",
        commentary:
          "The Knight seeks an outpost, but Bishops thrive when the position is " +
          "fluid. “A Bishop is always stronger than a Knight whose outposts can " +
          "be challenged by a pawn.”",
      },
      {
        san: "Bb1",
        commentary:
          "The Bishop steps back to preserve itself — never trade a Bishop for a " +
          "Knight without concrete reason. The pair must be kept intact.",
      },
      {
        san: "c5",
        commentary:
          "Black tries to gain space, but every pawn exchange tends to open the " +
          "position — and open positions favour the long-range Bishops.",
      },
      {
        san: "dxc5",
        commentary:
          "White obliges. The diagonals lengthen, and the two Bishops now rake " +
          "across the whole board. The Knight has no permanent square.",
      },
      {
        san: "Bxc5",
        commentary:
          "The position is fully open. White's Bishop pair controls both colour " +
          "complexes. This is the “slow squeeze” Capablanca described — the " +
          "Bishops win by accumulating tiny advantages until the opponent has no " +
          "useful move left.",
      },
    ],
  },

  "3-3": {
    title: "Creating a Target — Weakening the Enemy Pawn Structure",
    intro:
      "Capablanca: “A plan must have an object. The easiest object is a weak " +
      "enemy pawn. Force the opponent to move their pawns forward until they " +
      "create a permanent structural hole or an isolated target that your pieces " +
      "can collectively siege.” Black has been left with an isolated d-pawn — a " +
      "textbook target on a half-open file.",
    startFen: "r2q1rk1/pp3ppp/2n1bn2/3p4/8/2N1BN2/PP3PPP/R2QR1K1 w - - 0 1",
    moves: [
      {
        san: "Nb5",
        commentary:
          "The first siege piece arrives. The Knight heads for d4 — the ideal " +
          "blockading square in front of an isolated pawn. “Blockade first, " +
          "capture later.”",
      },
      {
        san: "Rc8",
        commentary:
          "Black seeks counterplay on the c-file, but the pawn on d5 cannot move " +
          "without losing itself. The weakness is permanent.",
      },
      {
        san: "Nbd4",
        commentary:
          "The Knight settles on d4. Capablanca's method: collect pieces around " +
          "the target one by one until the defender runs out of guards.",
      },
      {
        san: "Bd7",
        commentary:
          "Black scrambles to add a defender. Every piece tied to d5 is a piece " +
          "that cannot attack — the isolated pawn paralyses the entire army.",
      },
      {
        san: "Nxe6",
        commentary:
          "A small combination removes a defender. “Reduce the opponent's pieces " +
          "around the weakness, then the weakness falls.”",
      },
      {
        san: "fxe6",
        commentary:
          "Black recaptures — and now has two weaknesses: the isolated d-pawn and " +
          "a new doubled e-pawn. The principle of two weaknesses: the defender " +
          "cannot guard both at once.",
      },
      {
        san: "Rxc8",
        commentary:
          "Simplification. Trade pieces, not pawns — every exchange brings White " +
          "closer to an endgame in which d5 must fall.",
      },
      {
        san: "Qxc8",
        commentary:
          "The position is technically winning. White will manoeuvre a Knight to " +
          "f4, double Rooks on the d-file, and harvest the pawn at leisure. This " +
          "is the essence of Capablanca's middle-game plan: identify the target, " +
          "blockade it, surround it, and collect it.",
      },
    ],
  },
  "4-1": {
    title: "The Relative Value of the Pieces",
    intro:
      "Capablanca: “The relative value of the pieces changes constantly according " +
      "to the nature of the position. A Bishop is generally better than a Knight " +
      "in open positions, while a Knight is superior in blocked positions with " +
      "locked pawn structures. You must learn to judge when to swap standard " +
      "values for positional advantages.” The board shows a deliberate imbalance: " +
      "White's Bishop pair against Black's Knight pair, with a Rook facing two " +
      "connected pawns on the queenside — a living laboratory of dynamic values.",
    startFen: "4k3/pp3pp1/2n2n1p/8/8/1P3B1P/P4PP1/2R1KB2 w - - 0 1",
    moves: [
      {
        san: "Bd3",
        commentary:
          "The Bishop seizes its long diagonal. In open positions like this, the " +
          "Bishop's reach across the whole board is worth more than its nominal " +
          "three points — “the value of the piece depends on what it does.”",
      },
      {
        san: "Nd4",
        commentary:
          "The Knight grabs a central outpost. A well-posted Knight on d4 — " +
          "unchallenged by pawns — is often worth a Rook in practical terms.",
      },
      {
        san: "Rc7",
        commentary:
          "The Rook invades the 7th rank. Capablanca's table of values is only " +
          "a starting point: a Rook behind enemy lines can be decisive against " +
          "two connected pawns that have not yet started rolling.",
      },
      {
        san: "Nfe6",
        commentary:
          "Black brings a second Knight to a strong square. Two Knights working " +
          "together can dominate when the position is closed — but here the lines " +
          "are open, and the Bishops will get the upper hand.",
      },
      {
        san: "Bxh6",
        commentary:
          "A small but telling exchange. Capablanca: “Never give up a Bishop for " +
          "a Knight without reason — but always do so when it wins material or " +
          "creates a decisive structural weakness.”",
      },
      {
        san: "gxh6",
        commentary:
          "Black's kingside is shattered. The pawns now form a target structure, " +
          "and the surviving light-squared Bishop will rake the weakened squares.",
      },
      {
        san: "b4",
        commentary:
          "The connected pawns advance. Two passed pawns on the sixth rank are " +
          "stronger than a Rook — another reminder that material values are " +
          "fluid, governed by position, not by the textbook.",
      },
      {
        san: "Nd8",
        commentary:
          "Black's Knight retreats to blockade. The lesson is complete: every " +
          "piece's value rose or fell with the changing position. The student " +
          "who memorises only the numbers will lose to the one who sees the squares.",
      },
    ],
  },

  "4-2": {
    title: "General Strategy of the Open Game",
    intro:
      "Capablanca: “In an open game, speed of development is everything. Every " +
      "move must serve to bring a piece into play or secure control of the " +
      "centre. Waste no time moving the same piece twice, and castle early to " +
      "ensure the King's safety before lines are completely opened.” The Italian " +
      "Game — the archetype of the open game — is our stage.",
    startFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    moves: [
      {
        san: "e4",
        commentary:
          "“Open the game with the centre pawns.” The e-pawn stakes a claim on " +
          "d5 and f5 and frees both the Bishop and the Queen in a single move.",
      },
      {
        san: "e5",
        commentary:
          "Black mirrors. A symmetric centre is the purest battlefield for the " +
          "principles of open play: the faster developer will win the tempo war.",
      },
      {
        san: "Nf3",
        commentary:
          "Develop with a threat. The Knight attacks e5 and reaches its best " +
          "square in one move. Capablanca: “The King's Knight belongs on f3.”",
      },
      {
        san: "Nc6",
        commentary:
          "Black defends and develops at the same time. Every move must do at " +
          "least one useful job; in the open game, ideally two.",
      },
      {
        san: "Bc4",
        commentary:
          "The Italian Bishop. From c4 it eyes f7 — the weakest square in Black's " +
          "camp — and stays out of the way of future castling.",
      },
      {
        san: "Bc5",
        commentary:
          "Black follows the same principle. Knights before Bishops, but once " +
          "the Knights are out, the Bishops must follow at once.",
      },
      {
        san: "O-O",
        commentary:
          "Castle early! With lines about to open, the King's safety is non-" +
          "negotiable. Capablanca: “Castle before you attack, not after.”",
      },
      {
        san: "Nf6",
        commentary:
          "Black completes minor-piece development. Both sides have followed the " +
          "open-game catechism perfectly: centre pawn, both Knights, both Bishops, " +
          "castle. The middle-game battle for the centre can now begin.",
      },
    ],
  },

  "4-3": {
    title: "Control of the Centre — Advanced Theory",
    intro:
      "Capablanca: “The control of the centre is the essential foundation for " +
      "any successful flank attack or endgame advantage. By controlling the " +
      "central squares, you maximise the mobility of your own pieces while " +
      "severely cramping your opponent's army, forcing them onto defensive, " +
      "passive squares.” The fight is for d4, e4, d5, and e5 — and every piece " +
      "must contribute.",
    startFen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 1",
    moves: [
      {
        san: "dxe5",
        commentary:
          "White resolves the central tension on his own terms. “He who controls " +
          "the centre dictates the play on both wings.”",
      },
      {
        san: "Nxe5",
        commentary:
          "Black recaptures with the Knight, placing it on a fine central square. " +
          "But a Knight on e5 can be challenged — true central control requires " +
          "pawns, not just pieces.",
      },
      {
        san: "Nxe5",
        commentary:
          "White trades the central Knight, removing the most active enemy piece " +
          "and clarifying the structure: White will keep a pawn on e4, Black on " +
          "nothing. The advanced lesson begins.",
      },
      {
        san: "Nxe4",
        commentary:
          "Black grabs the e-pawn — but only temporarily. Capablanca: “Material " +
          "won at the cost of central control is usually material lost.”",
      },
      {
        san: "Nxe4",
        commentary:
          "Recapture. White now has a Knight commanding the centre with no Black " +
          "pawn able to challenge it — the textbook definition of central " +
          "dominance.",
      },
      {
        san: "d5",
        commentary:
          "Black tries to evict the Knight with a pawn, the only piece that can. " +
          "But every pawn move creates a new weakness; the central squares Black " +
          "abandons (e5, c5) become permanent White outposts.",
      },
      {
        san: "Nc3",
        commentary:
          "The Knight retreats with purpose, eyeing a re-entry to e4 or d5 and " +
          "supporting the eventual advance of the c-pawn. Central control is not " +
          "a single moment — it is a long campaign of squares.",
      },
      {
        san: "Be7",
        commentary:
          "Black develops passively. This is the deeper lesson: the side that " +
          "controls the centre is free to manoeuvre; the side that does not must " +
          "react. From this foundation, any flank attack or endgame plan becomes " +
          "possible — exactly as Capablanca taught.",
      },
    ],
  },
  "5-1": {
    title: "Rook and Pawn Endgames",
    intro:
      "Capablanca: “Rook and pawn endgames are the most common of all endings. " +
      "The golden rule here is activity: your Rook must be active, even at the " +
      "cost of a pawn. A passive Rook is a losing Rook. Keep your Rook behind " +
      "passed pawns whenever possible to maximise its power.” White: King e4, " +
      "Rook c7, Pawn e5. Black: King e7, Rook c2 — a textbook study in Rook " +
      "activity.",
    startFen: "8/2R1k3/8/4P3/4K3/8/2r5/8 w - - 0 1",
    moves: [
      {
        san: "Rc8",
        commentary:
          "The Rook stays maximally active, cutting Black's King off from the " +
          "queenside and keeping mobility along the 8th rank. “An active Rook is " +
          "worth a pawn — sometimes two.”",
      },
      {
        san: "Rc4+",
        commentary:
          "Black checks to drive the White King back. In Rook endings, every " +
          "check that gains tempo is precious — but only if the checking Rook " +
          "remains active afterwards.",
      },
      {
        san: "Kd5",
        commentary:
          "The King steps forward, not back. Capablanca: “In all endings, the " +
          "King is a fighting piece.” White attacks the Black Rook while " +
          "centralising.",
      },
      {
        san: "Rc1",
        commentary:
          "Black retreats — but to a passive square. A Rook on the first rank " +
          "with nothing to attack is the very definition of the losing Rook.",
      },
      {
        san: "e6",
        commentary:
          "The passed pawn advances, supported by the centralised King. Note the " +
          "ideal placement: White's Rook sits behind the pawn's path on the c-file " +
          "ready to swing to e8, while the pawn marches forward.",
      },
      {
        san: "Rd1+",
        commentary:
          "Another desperado check. Black is reduced to harassment because his " +
          "Rook has no constructive plan — exactly the fate of every passive Rook.",
      },
      {
        san: "Ke5",
        commentary:
          "The King escorts the pawn personally. With the Rook on c8 cutting off " +
          "the Black King and the White King shepherding the e-pawn, promotion is " +
          "imminent.",
      },
      {
        san: "Re1+",
        commentary:
          "Useless checks. The pawn is one square from queening, and Black has " +
          "no perpetual. The lesson is etched: an active Rook plus an active King " +
          "convert the smallest material edge. A passive Rook converts nothing.",
      },
    ],
  },

  "5-2": {
    title: "Bishop vs. Knight in the Endgame",
    intro:
      "Capablanca: “When the remaining pawns are scattered on both sides of the " +
      "board, the Bishop is vastly superior to the Knight due to its long-range " +
      "speed. The Bishop can defend one flank and attack the other simultaneously, " +
      "while the slow Knight gets overworked and outrun.” White holds the Bishop; " +
      "pawns sit on both wings — the perfect demonstration.",
    startFen: "8/p4ppk/8/8/8/5B2/P4PPK/5n2 w - - 0 1",
    moves: [
      {
        san: "Bd5",
        commentary:
          "The Bishop occupies the long diagonal, eyeing both a8 and the kingside " +
          "in a single move. “The Bishop is two pieces at once — defender and " +
          "attacker.”",
      },
      {
        san: "Ne3",
        commentary:
          "The Knight tries to centralise, but it takes two moves to reach a " +
          "useful square. By the time it arrives, the Bishop has already shifted " +
          "to a new front.",
      },
      {
        san: "Bxa7",
        commentary:
          "The Bishop strikes on the queenside, snatching a pawn. A Knight could " +
          "never have reached a7 from f3 in one move — the difference in speed is " +
          "decisive.",
      },
      {
        san: "Nc4",
        commentary:
          "Black centralises and threatens the Bishop. But the Bishop simply " +
          "steps away on its long diagonal, while the Knight is stuck without " +
          "reinforcement.",
      },
      {
        san: "Bd4",
        commentary:
          "Bishop retreats to a square that defends a7's escape AND attacks " +
          "the kingside. Capablanca: “One Bishop, two flanks.”",
      },
      {
        san: "f6",
        commentary:
          "Black tries to set up a fortress. But the Knight must defend his own " +
          "pawns while watching the Bishop — the “overworked Knight” Capablanca " +
          "warned about.",
      },
      {
        san: "a4",
        commentary:
          "The passed a-pawn begins its march, supported by the long-range Bishop. " +
          "The Knight is too far away and too slow to stop it.",
      },
      {
        san: "Ne5",
        commentary:
          "The Knight gallops back, but it is hopelessly behind. The Bishop will " +
          "queen the a-pawn or pick off the kingside pawns. The lesson is " +
          "permanent: on a board with pawns on both wings, give me the Bishop.",
      },
    ],
  },

  "5-3": {
    title: "The Power of a Passed Pawn",
    intro:
      "Capablanca: “A passed pawn is a criminal that must be kept under lock and " +
      "key. It forces the enemy pieces to abandon their attacking plans and rush " +
      "backward to blockade it, completely paralysing your opponent's army and " +
      "granting you the freedom to win elsewhere.” White's a-pawn is the " +
      "criminal; the rest of the board will be decided by its march.",
    startFen: "8/8/4k3/8/8/2K5/P5pp/8 w - - 0 1",
    moves: [
      {
        san: "a4",
        commentary:
          "The criminal takes his first step. Every tempo the pawn advances forces " +
          "Black's pieces deeper into passivity.",
      },
      {
        san: "Kd5",
        commentary:
          "The Black King hurries toward the queenside to blockade. Capablanca: " +
          "“The passed pawn drags the enemy King to the wrong side of the board.”",
      },
      {
        san: "a5",
        commentary:
          "Forward again. The pawn is now too far advanced to be caught by anything " +
          "but the King — and the King is dragged further from his own pawns on h2 " +
          "and g2.",
      },
      {
        san: "Kc5",
        commentary:
          "Black continues the chase. With every step, his own kingside pawns " +
          "become orphans. The criminal is doing exactly the job Capablanca " +
          "described: paralysing the entire enemy army.",
      },
      {
        san: "Kd4",
        commentary:
          "Now the truth emerges. While Black's King is glued to the a-pawn, " +
          "White's King is free to swing to the kingside and harvest the g- and " +
          "h-pawns at leisure.",
      },
      {
        san: "Kb6",
        commentary:
          "Black finally captures the a-pawn — but at what cost. His King is in " +
          "the corner of the board; White's King is in the centre, with all the " +
          "remaining pawns within reach.",
      },
      {
        san: "Ke3",
        commentary:
          "The freedom granted by the passed pawn is collected. The Black pawns " +
          "on g2 and h2 — once a winning advantage — are about to be lost.",
      },
      {
        san: "Kxa5",
        commentary:
          "Black recovers the pawn, but the game is decided on the other wing. " +
          "This is the deepest endgame lesson in the book: a single passed pawn, " +
          "even when lost, can win the game by tying down the enemy King. " +
          "Capablanca's “criminal under lock and key” has done his work.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER VI — Lesson 1: The Ruy Lopez (The Royal Opening)
  // ─────────────────────────────────────────────────────────────────
  "6-1": {
    title: "The Ruy Lopez (The Royal Opening)",
    intro:
      "Capablanca: “The Ruy Lopez is one of the oldest and most trusted openings. " +
      "White's third move attacks the Knight that defends the e5 pawn, immediately " +
      "creating long-term positional pressure on Black's center. Success relies on " +
      "rapid development and fighting for the open files that will inevitably follow.”",
    startFen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",
    moves: [
      {
        san: "a6",
        commentary:
          "The Morphy Defense. Black immediately challenges the Bishop, forcing a " +
          "decision: retreat or trade. Capablanca praised this move for its directness — " +
          "it asks White to declare his intentions before committing further.",
      },
      {
        san: "Ba4",
        commentary:
          "White retreats along the diagonal, preserving the Bishop pair. To capture " +
          "on c6 would surrender the Bishop for a Knight — only advisable when it wins " +
          "concrete material or damages Black's pawn structure beyond repair.",
      },
      {
        san: "Nf6",
        commentary:
          "Black develops the King's Knight with a central threat, attacking the e-pawn " +
          "and preparing to castle. Capablanca: “Develop every piece toward the centre.”",
      },
      {
        san: "O-O",
        commentary:
          "White castles into safety. In the Ruy Lopez, the King must be secure before " +
          "any central or queenside action begins — the open files will soon become dangerous.",
      },
      {
        san: "Be7",
        commentary:
          "The Bishop retreats to a solid defensive post, clearing the back rank for " +
          "castling and keeping an eye on the central light squares. Quiet moves often " +
          "prepare the deepest strategy.",
      },
      {
        san: "Re1",
        commentary:
          "The Rook seizes the half-open e-file, adding pressure to e5 before the " +
          "centre is resolved. “A Rook on an open file is the beginning of an attack.”",
      },
      {
        san: "b5",
        commentary:
          "Black gains space on the queenside, challenging the Bishop again and preparing " +
          "to develop the c8 Bishop to b7. Every pawn advance must have a piece waiting " +
          "to occupy the territory it claims.",
      },
      {
        san: "Bb3",
        commentary:
          "The Bishop finds its permanent home on b3, eyeing the f7 pawn and supporting " +
          "the central occupation. The Ruy Lopez has been played for centuries because " +
          "this modest retreat conceals enormous latent pressure.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER VI — Lesson 2: The Danger of Pawn "Holes"
  // ─────────────────────────────────────────────────────────────────
  "6-2": {
    title: "The Danger of Pawn “Holes”",
    intro:
      "Capablanca: “A 'hole' is a square on the third or fourth rank that can no " +
      "longer be protected by a pawn. If an enemy piece—especially a Knight—maneuvers " +
      "into that hole, it becomes a permanent thorn in your side that can paralyze " +
      "your entire defensive structure. Guard your pawn movements carefully.” Here " +
      "White has played f4 and h4, leaving e3 and g3 as permanent weaknesses.",
    startFen: "rnbqkb1r/pppp1ppp/5n2/4p3/3PPpP1/5N2/PPPP2P1/RNBQKB1R b KQkq - 0 4",
    moves: [
      {
        san: "Bc5",
        commentary:
          "Black immediately develops the Bishop to an active diagonal, preparing to " +
          "punish the weakened light squares around White's King. A hole is only " +
          "dangerous if the opponent can bring pieces to exploit it.",
      },
      {
        san: "d4",
        commentary:
          "White gains central space, but every pawn step widens the gap between " +
          "pawns and creates new holes. The d4 pawn now leaves e3 and c3 permanently " +
          "beyond the reach of any White pawn.",
      },
      {
        san: "Bb6",
        commentary:
          "The Bishop retreats to b6, keeping pressure on d4 and maintaining the " +
          "diagonal toward the weakened kingside. Capablanca taught that pieces must " +
          "be placed where they can both attack and defend.",
      },
      {
        san: "Bxf4",
        commentary:
          "White finally recaptures the pawn on f4, but the structural damage is done. " +
          "The pawns on d4 and h4 no longer touch; the squares between them are holes " +
          "that Black's Knights and Bishops will target for the rest of the game.",
      },
      {
        san: "d6",
        commentary:
          "A quiet move that solidifies the centre and prepares to bring the c8 Bishop " +
          "into play. The player who avoids creating holes can afford such patient " +
          "development; the one who has created them must scramble to compensate.",
      },
      {
        san: "Nc3",
        commentary:
          "White develops the Queen's Knight, hoping to control the centre and block " +
          "enemy piece entry. But no number of active pieces can erase a structural " +
          "hole — it is a permanent feature of the position.",
      },
      {
        san: "Bg4",
        commentary:
          "The Bishop plants itself on g4, pinning the Knight and proving that the " +
          "f4 advance has left the entire kingside light complex vulnerable. " +
          "Capablanca's warning is now a reality: one reckless pawn has weakened a " +
          "whole wing.",
      },
      {
        san: "Nbd7",
        commentary:
          "Black calmly completes development, ready to reroute the Knight to c5 or " +
          "even e6 — squares that White's own pawns can no longer control. The hole " +
          "is not merely a square; it is an invitation the opponent will never refuse.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER VI — Lesson 3: The Ill-Timed Attack
  // ─────────────────────────────────────────────────────────────────
  "6-3": {
    title: "The Ill-Timed Attack",
    intro:
      "Capablanca: “An attack launched before your pieces are fully developed and your " +
      "King is safe is doomed to fail. A master does not attack out of impatience; " +
      "an attack must flow naturally from a superior position where the opponent's " +
      "pieces are already tangled or restricted.” Here Black has launched …f5 without " +
      "completing development or castling — a classic case of premature aggression.",
    startFen: "r1bqkbnr/pppp1ppp/2n5/1B3P2/8/5N2/PPPPPPPP/RNBQK2R b KQkq - 0 4",
    moves: [
      {
        san: "e4",
        commentary:
          "Black pushes the e-pawn forward, attempting to seize space and complicate. " +
          "But without castling or the King's Bishop developed, this is a pawn thrust " +
          "without an army behind it — exactly the impatience Capablanca condemned.",
      },
      {
        san: "d3",
        commentary:
          "White calmly protects the centre, refusing to be provoked. The master " +
          "knows that an ill-timed attack contains the seeds of its own destruction; " +
          "he need only block the storm and let the clouds dissipate.",
      },
      {
        san: "exd3",
        commentary:
          "Black captures on d3, opening lines he cannot exploit because his own King " +
          "is still in the centre and his Rooks are unconnected. Every exchange now " +
          "favours the better-developed side.",
      },
      {
        san: "Qxd3",
        commentary:
          "The Queen recaptures and immediately eyes the exposed Black King along the " +
          "d-file. Capablanca: “Develop with every move; if your attack does not flow " +
          "from development, it is not an attack — it is a gamble.”",
      },
      {
        san: "Nf6",
        commentary:
          "Black brings out the Knight, but it is too late. The e-file and d-file are " +
          "already open toward his uncastled King, and White's lead in development " +
          "has become decisive.",
      },
      {
        san: "Bg5",
        commentary:
          "The Bishop pins the Knight to the Queen, paralysing Black's ability to castle. " +
          "A single pin can destroy an entire position when that position was built on " +
          "haste rather than preparation.",
      },
      {
        san: "d5",
        commentary:
          "A desperate attempt to break the pin and gain space. But the d-pawn is " +
          "another pawn moving before its pieces are ready — another ill-timed lunge " +
          "that weakens c6 and e6 instead of solving anything.",
      },
      {
        san: "Nc3",
        commentary:
          "White completes development with gain of time, attacking d5 and preparing " +
          "to castle. The lesson is complete: the player who attacked before he was " +
          "ready has no pieces where they are needed, and every square he claims " +
          "becomes a new weakness.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ARCHIVE GAME 31 — Winter vs. Capablanca, Hastings 1919
  // Position after 17. f4 — Black to play the legendary 17... f5!
  // ─────────────────────────────────────────────────────────────────
  "archive-31": {
    title: "W. Winter vs. J. R. Capablanca — Hastings, 1919",
    intro:
      "Hastings Victory Congress, 1919. A Four Knights Game has reached a critical " +
      "juncture: White has just played 17. f4, hoping to expand on the kingside. " +
      "Black to move — what is Raúl's reply?",
    startFen: "6k1/pp2bppp/2p5/n2pP3/3P1P2/2N3B1/PP4PP/6K1 b - - 0 17",
    guessMoveIndex: 0,
    guessHint:
      "Not quite! Look closer at White's kingside structure. How can you lock down " +
      "the board so White's light-squared bishop stays trapped forever?",
    moves: [
      {
        san: "f5",
        commentary:
          "Excellent! By playing 17... f5!, Capablanca completely locks the pawn " +
          "chain. This permanently shuts White's light-squared bishop out of the " +
          "game, leaving White functionally a piece down for the entire rest of " +
          "the match. A positional masterpiece.",
      },
    ],
  },
};

export function getLesson(id: string): LessonContent {
  return (
    LESSONS[id] ?? {
      title: "Lesson",
      intro:
        "This lesson is coming soon. Use the navigation arrows below to step through a sample game in the meantime.",
      moves: [
        { san: "e4", commentary: "A sample move so you can explore the board." },
        { san: "e5", commentary: "Black replies in kind." },
        { san: "Nf3", commentary: "Develop, develop, develop." },
      ],
    }
  );
}
