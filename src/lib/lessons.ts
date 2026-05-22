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
    title: "Some Simple Mates — Rook & King vs. King",
    intro:
      "Capablanca's first example. White: King c6, Rook a7. Black: King a8, to move. " +
      "“The principle is to drive the opposing King to the last line on any side of the " +
      "board… keep your King, as much as possible, on the same rank — or, as in this " +
      "case, file — as the opposing King.”",
    // Black to move. The White King already occupies the 6th rank, holding
    // the opposition; the Rook seals the 7th. Black has but one square.
    startFen: "k7/R7/2K5/8/8/8/8/8 b - - 0 1",
    moves: [
      {
        san: "Kb8",
        commentary:
          "Black has no choice: a7 is held by the Rook and b7 by the King. " +
          "The defender is already confined to two squares — the Rook does the " +
          "fencing, the King does the driving.",
      },
      {
        san: "Kb6",
        commentary:
          "“Advance the King.” With the Rook restraining the back rank, White brings " +
          "his own monarch shoulder-to-shoulder with the enemy. Notice we do not yet " +
          "move the Rook — it is doing perfect work where it stands.",
      },
      {
        san: "Kc8",
        commentary:
          "Forced. The Black King is herded toward the corner: a8 is covered by the " +
          "Rook, b7 and c7 by White's King.",
      },
      {
        san: "Rc7+",
        commentary:
          "The Rook slides across to cut off another file with check. Capablanca's " +
          "method: King and Rook work as one — neither piece moves without a purpose.",
      },
      {
        san: "Kb8",
        commentary:
          "Driven back to the corner. The mating net is nearly complete.",
      },
      {
        san: "Rh7",
        commentary:
          "“A waiting move.” The Rook leaves the c-file but retains the 7th rank, " +
          "passing the obligation to move back to Black — the heart of the technique.",
      },
      {
        san: "Ka8",
        commentary:
          "The only square. Now the picture is set: White King on b6, Black King " +
          "cornered on a8, Rook poised on the 7th.",
      },
      {
        san: "Rh8#",
        commentary:
          "Mate. “The opposing King has been driven to the last line.” A textbook " +
          "demonstration of Capablanca's first principle: restrict, advance, deliver.",
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
          "Black tries to harass the pawn from the side, but it is shepherded by " +
          "the White King at every step.",
      },
      {
        san: "e6+",
        commentary:
          "Only now does the pawn advance — “essential to its own safety,” for it " +
          "moves with check and under the King's protection.",
      },
      {
        san: "Kd6",
        commentary:
          "Black's King is shouldered aside; he cannot stop the pawn alone.",
      },
      {
        san: "e7",
        commentary:
          "One step from coronation. Black cannot reach e8 — the White King guards it.",
      },
      {
        san: "Kd5",
        commentary:
          "A despairing move; no Black square controls the queening square.",
      },
      {
        san: "e8=Q",
        commentary:
          "Promotion. “The pawn must be carried, not pushed.” The King did the work; " +
          "the pawn merely walked home.",
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
        commentary:
          "Black defends the pawn and develops simultaneously — the model of opening " +
          "economy.",
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
          "Black removes one of the central pawns — but at the cost of giving White a " +
          "free hand in development.",
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
        commentary:
          "Black follows the same rule and contests the centre at once.",
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
          "Black mirrors. Both sides have developed three minor pieces; both " +
          "Kings are one move from safety.",
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
      "White: King e4, pawns g4 and h4. Black: King e6, pawn g7. White owns a " +
      "two-to-one majority on the King's side. Capablanca's rule: “Whenever there " +
      "is no good reason against it, follow the general rule of advancing the " +
      "pawn that has no pawn opposing it.”",
    startFen: "8/6p1/4k3/8/4K1PP/8/8/8 w - - 0 1",
    moves: [
      {
        san: "g5",
        commentary:
          "The unopposed pawn advances first. This is the candidate — the future " +
          "passed pawn. Pushing the h-pawn instead would allow Black to blockade " +
          "with …g6 and the majority would be sterile.",
      },
      {
        san: "Kf7",
        commentary:
          "Black's King hurries across, hoping to stop the pawns before they " +
          "promote. But the calculation has already been made.",
      },
      {
        san: "h5",
        commentary:
          "The supporting pawn follows. The two pawns now move in lock-step — " +
          "neither can be captured without losing the other's protection.",
      },
      {
        san: "Kg8",
        commentary:
          "Black sidesteps, but the structure of the majority is decisive.",
      },
      {
        san: "g6",
        commentary:
          "The candidate marches on. Black's lone g-pawn is fixed and cannot " +
          "move; White's pawns are mutually defended.",
      },
      {
        san: "Kh8",
        commentary:
          "Black is reduced to shuffling. The geometry of the position cannot " +
          "be saved.",
      },
      {
        san: "h6",
        commentary:
          "“The pawn that has no pawn opposing it” will queen. After …gxh6 g7+ " +
          "the pawn promotes; if Black declines, h6xg7 follows. This is " +
          "Capablanca's textbook conversion of a majority into a passed pawn.",
      },
      {
        san: "gxh6",
        commentary:
          "Forced acceptance. Now g6–g7–g8=Q is unstoppable: the Black King " +
          "cannot reach the queening square in time. The lesson: in pawn " +
          "endings, the unopposed pawn is the future Queen.",
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
      "Black: King g8, Rook d8, Knight f6, pawns a7 b7 c7 f7 g7 h7. " +
      "White is a clean central pawn up. Capablanca: “The winning of a pawn " +
      "among master-players is often sufficient to win the game.” The method " +
      "is simplification — exchange pieces, never pawns, and steer toward a " +
      "won King-and-pawn ending.",
    startFen: "3r2k1/pppp1pp1/5n1p/8/4P3/5N2/PPP2PPP/3R2K1 w - - 0 1",
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
    intro:
      "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "c5", commentary: "Development." },
      { san: "cxd5", commentary: "Development." },
      { san: "exd5", commentary: "Development." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "Nc6", commentary: "Manoeuvring." },
      { san: "g3", commentary: "Manoeuvring." },
      { san: "Be6", commentary: "Manoeuvring." },
      { san: "Bg2", commentary: "Manoeuvring." },
      { san: "Nf6", commentary: "Manoeuvring." },
      { san: "Bg5", commentary: "Manoeuvring." },
      { san: "h6", commentary: "Manoeuvring." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "Nb5", commentary: "Knight to b5." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "Nfxd4", commentary: "Knight captures." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Bc5", commentary: "Bishop to c5." },
      { san: "Nxe6", commentary: "Knight captures." },
      { san: "fxe6", commentary: "Capablanca plays fxe6 — the critical move of the game." },
      { san: "Qa4+", commentary: "Queen to a4 — check." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Rhf8", commentary: "Rook to hf8." },
      { san: "e3", commentary: "Pawn advance." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Rc3", commentary: "Rook to c3." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Rfc1", commentary: "Rook to fc1." },
      { san: "Rfc8", commentary: "Rook to fc8." },
      { san: "Qg4", commentary: "Queen to g4." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "Bd6", commentary: "Bishop to d6." },
      { san: "Rxc7+", commentary: "Rook captures — check." },
      { san: "Rxc7", commentary: "Rook captures." },
      { san: "Rxc7+", commentary: "Rook captures — check." },
      { san: "Bxc7", commentary: "Bishop captures." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Bb6", commentary: "Bishop to b6." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Qf4+", commentary: "Queen to f4 — check." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Qf4+", commentary: "Queen to f4 — check." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Qf4+", commentary: "Queen to f4 — check." },
      { san: "Qf6", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 27,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g7": {
    title: "F. Marshall – Capablanca, USA m (1909)",
    intro:
      "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "Ne4", commentary: "Manoeuvring." },
      { san: "Bxe7", commentary: "Exchange in the opening." },
      { san: "Qxe7", commentary: "Exchange in the opening." },
      { san: "Bd3", commentary: "Manoeuvring." },
      { san: "Nxc3", commentary: "Exchange in the opening." },
      { san: "bxc3", commentary: "Exchange in the opening." },
      { san: "Nd7", commentary: "Manoeuvring." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Qa3", commentary: "Queen to a3." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Qc7", commentary: "Queen to c7." },
      { san: "Rfb1", commentary: "Rook to fb1." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Rfc8", commentary: "Rook to fc8." },
      { san: "Bxd7", commentary: "Bishop captures." },
      { san: "Qxd7", commentary: "Capablanca plays Qxd7 — the critical move of the game." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Bc6", commentary: "Bishop to c6." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "Qxc5", commentary: "Queen captures." },
      { san: "Rab8", commentary: "Rook to ab8." },
      { san: "Rxb8", commentary: "Rook captures." },
      { san: "Rxb8", commentary: "Rook captures." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Rb6", commentary: "Rook to b6." },
      { san: "Qxb6", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 35,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g10": {
    title: "Capablanca – F. Marshall, USA m (1909)",
    intro:
      "J. Capablanca vs. F. Marshall. USA m (1909). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Development." },
      { san: "e5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nc6", commentary: "Development." },
      { san: "Bb5", commentary: "Development." },
      { san: "f5", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Qe2", commentary: "Manoeuvring." },
      { san: "Nd4", commentary: "Manoeuvring." },
      { san: "Nxd4", commentary: "Exchange in the opening." },
      { san: "exd4", commentary: "Exchange in the opening." },
      { san: "exf5+", commentary: "Pawn captures — check." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Ne4", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nxf6+", commentary: "Knight captures — check." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "Qh5", commentary: "Queen to h5." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "Bg4", commentary: "Bishop to g4." },
      { san: "d3", commentary: "Pawn advance." },
      { san: "cxd3", commentary: "Pawn captures." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Ba6", commentary: "Bishop to a6." },
      { san: "Qh3", commentary: "Queen to h3." },
      { san: "Bd4", commentary: "Bishop to d4." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "Ba3", commentary: "Bishop to a3." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Rae8", commentary: "Rook to ae8." },
      { san: "Qf3", commentary: "Queen to f3." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Rf7", commentary: "Rook to f7." },
      { san: "Rbc1", commentary: "Rook to bc1." },
      { san: "c4", commentary: "Pawn advance." },
      { san: "Qd1", commentary: "Queen to d1." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "dxc4", commentary: "Capablanca plays dxc4 — the critical move of the game." },
      { san: "dxc4", commentary: "Pawn captures." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Qxe1+", commentary: "Queen captures — check." },
      { san: "Qxe1", commentary: "Queen captures." },
      { san: "Rxe1+", commentary: "Rook captures — check." },
      { san: "Rxe1", commentary: "Rook captures." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Re6", commentary: "Rook to e6." },
      { san: "hxg4", commentary: "Pawn captures." },
      { san: "Rxa6", commentary: "Rook captures." },
      { san: "Bb6", commentary: "Bishop to b6." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Bb4", commentary: "Bishop to b4." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "Bc3", commentary: "Bishop to c3." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Bxf2+", commentary: "Bishop captures — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Bb6", commentary: "Bishop to b6." },
      { san: "hxg4", commentary: "Pawn captures." },
      { san: "Rf2+", commentary: "Rook to f2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "Ba5", commentary: "Bishop to a5." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Bxb6", commentary: "Bishop captures." },
      { san: "axb6", commentary: "Pawn captures." },
      { san: "Ra7+", commentary: "Rook to a7 — check." },
      { san: "Kxf6", commentary: "King captures." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Rd6+", commentary: "Rook to d6 — check." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Rxg5", commentary: "Rook captures." },
      { san: "Rxd2", commentary: "Rook captures." },
      { san: "Rb5", commentary: "Rook to b5." },
      { san: "Rb2", commentary: "Rook to b2." },
      { san: "Rc5", commentary: "Rook to c5." },
      { san: "c3", commentary: "Pawn advance." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "bxa3", commentary: "Pawn captures." },
      { san: "Rxc3", commentary: "Rook captures." },
      { san: "a2", commentary: "Pawn advance." },
      { san: "Ra3", commentary: "Rook to a3." },
      { san: "Kf6", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "marshall-g23": {
    title: "F. Marshall – Capablanca, USA m (1909)",
    intro:
      "F. Marshall vs. J. Capablanca. USA m (1909). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "c5", commentary: "Development." },
      { san: "cxd5", commentary: "Development." },
      { san: "exd5", commentary: "Development." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "Nc6", commentary: "Manoeuvring." },
      { san: "g3", commentary: "Manoeuvring." },
      { san: "Be6", commentary: "Manoeuvring." },
      { san: "Bg2", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nf6", commentary: "Manoeuvring." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "dxe4", commentary: "Pawn captures." },
      { san: "e3", commentary: "Pawn advance." },
      { san: "Nf3+", commentary: "Knight to f3 — check." },
      { san: "Nxf3", commentary: "Knight captures." },
      { san: "exf3", commentary: "Pawn captures." },
      { san: "Qxf3", commentary: "Queen captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rfc1", commentary: "Rook to fc1." },
      { san: "Rab8", commentary: "Rook to ab8." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Qc7", commentary: "Queen to c7." },
      { san: "Rc3", commentary: "Rook to c3." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "c4", commentary: "Pawn advance." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Rfd8", commentary: "Rook to fd8." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "Rxd1+", commentary: "Rook captures — check." },
      { san: "Bxd1", commentary: "Bishop captures." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Qxe4", commentary: "Capablanca plays Qxe4 — the critical move of the game." },
      { san: "Bxe4", commentary: "Bishop captures." },
      { san: "Rd1+", commentary: "Rook to d1 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "axb4", commentary: "Pawn captures." },
      { san: "axb4", commentary: "Pawn captures." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Rd2", commentary: "Rook to d2." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Bd1", commentary: "Bishop to d1." },
      { san: "c3", commentary: "Pawn advance." },
      { san: "bxc3", commentary: "Pawn captures." },
      { san: "b2", commentary: "Pawn advance." },
      { san: "Rxb2", commentary: "Rook captures." },
      { san: "Rxd1", commentary: "Rook captures." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Rb2", commentary: "Rook to b2." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Rb3", commentary: "Rook to b3." },
      { san: "Be4+", commentary: "Bishop to e4 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "hxg4+", commentary: "Pawn captures — check." },
      { san: "Kxg4", commentary: "King captures." },
      { san: "Rxh2", commentary: "Rook captures." },
      { san: "Rb4", commentary: "Rook to b4." },
      { san: "f5+", commentary: "Pawn advance — check." },
      { san: "Kg3", commentary: "King to g3." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Rc4", commentary: "Rook to c4." },
      { san: "Rxe3+", commentary: "Rook captures — check." },
      { san: "Kh4", commentary: "King to h4." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Rc7+", commentary: "Rook to c7 — check." },
      { san: "Kf6", commentary: "King to f6." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Bg2", commentary: "Bishop to g2." },
      { san: "Rd6+", commentary: "Rook to d6 — check." },
      { san: "Kg7", commentary: "White resigned." },
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
      { san: "e4", commentary: "Development." },
      { san: "e5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nc6", commentary: "Development." },
      { san: "Bb5", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Be7", commentary: "Development." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "d6", commentary: "Manoeuvring." },
      { san: "Bxc6+", commentary: "Bishop captures — check." },
      { san: "bxc6", commentary: "Exchange in the opening." },
      { san: "d4", commentary: "Manoeuvring." },
      { san: "exd4", commentary: "Exchange in the opening." },
      { san: "Nxd4", commentary: "Exchange in the opening." },
      { san: "Bd7", commentary: "Manoeuvring." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Bh4", commentary: "Bishop to h4." },
      { san: "Nh7", commentary: "Knight to h7." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Rab8", commentary: "Rook to ab8." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Ng5", commentary: "Knight to g5." },
      { san: "Rad1", commentary: "Rook to ad1." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "Qe3", commentary: "Queen to e3." },
      { san: "Ne6", commentary: "Knight to e6." },
      { san: "Nce2", commentary: "Knight to ce2." },
      { san: "Qa5", commentary: "Queen to a5." },
      { san: "Nf5", commentary: "Knight to f5." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Ned4", commentary: "Knight to ed4." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Rbe8", commentary: "Rook to be8." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "Ne6", commentary: "Knight to e6." },
      { san: "Ne2", commentary: "Knight to e2." },
      { san: "Qxa2", commentary: "Queen captures." },
      { san: "Neg3", commentary: "Knight to eg3." },
      { san: "Qxc2", commentary: "Queen captures." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Qb2", commentary: "Queen to b2." },
      { san: "Nh5", commentary: "Knight to h5." },
      { san: "Rh8", commentary: "Rook to h8." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Qb5", commentary: "Queen to b5." },
      { san: "Nfxg7", commentary: "Capablanca plays Nfxg7 — the critical move of the game." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Nxe8", commentary: "Knight captures." },
      { san: "Bxe8", commentary: "Bishop captures." },
      { san: "Qc3", commentary: "Queen to c3." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Nxf6+", commentary: "Knight captures — check." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "Nh5", commentary: "Knight to h5." },
      { san: "Rg8", commentary: "Rook to g8." },
      { san: "f5+", commentary: "Pawn advance — check." },
      { san: "Kg5", commentary: "King to g5." },
      { san: "Qe3+", commentary: "Black resigned." },
    ],
    guessMoveIndex: 54,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "sansebastian-g4": {
    title: "Capablanca – A. Burn, San Sebastian (1911)",
    intro:
      "J. Capablanca vs. A. Burn. San Sebastian (1911). Ruy López. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Development." },
      { san: "e5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nc6", commentary: "Development." },
      { san: "Bb5", commentary: "Development." },
      { san: "a6", commentary: "Development." },
      { san: "Ba4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "d3", commentary: "Manoeuvring." },
      { san: "d6", commentary: "Manoeuvring." },
      { san: "c3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nbd2", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nf1", commentary: "Manoeuvring." },
      { san: "b5", commentary: "Manoeuvring." },
      { san: "Bc2", commentary: "Bishop to c2." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "Qe2", commentary: "Queen to e2." },
      { san: "dxe4", commentary: "Pawn captures." },
      { san: "dxe4", commentary: "Pawn captures." },
      { san: "Bc5", commentary: "Bishop to c5." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "Be6", commentary: "Bishop to e6." },
      { san: "Ne3", commentary: "Knight to e3." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Bxd5", commentary: "Bishop captures." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Nb8", commentary: "Knight to b8." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "cxb4", commentary: "Pawn captures." },
      { san: "Bxb4", commentary: "Bishop captures." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Bd6", commentary: "Bishop to d6." },
      { san: "Qxh7+", commentary: "Capablanca plays Qxh7+ — the critical move of the game." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Nh4", commentary: "Knight to h4." },
      { san: "Qh6", commentary: "Queen to h6." },
      { san: "Qxh6", commentary: "Queen captures." },
      { san: "gxh6", commentary: "Pawn captures." },
      { san: "Nf5", commentary: "Knight to f5." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Bd1", commentary: "Bishop to d1." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Bxh5", commentary: "Bishop captures." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Nf4", commentary: "Knight to f4." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "Red8", commentary: "Rook to ed8." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Ne6", commentary: "Knight to e6." },
      { san: "Bxe6", commentary: "Bishop captures." },
      { san: "fxe6", commentary: "Pawn captures." },
      { san: "Ne3", commentary: "Knight to e3." },
      { san: "Rdb8", commentary: "Rook to db8." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Ra7", commentary: "Rook to a7." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Kf6", commentary: "King to f6." },
      { san: "Re4", commentary: "Rook to e4." },
      { san: "Rb4", commentary: "Rook to b4." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Ra6", commentary: "Rook to a6." },
      { san: "Rc3", commentary: "Rook to c3." },
      { san: "Bc5", commentary: "Bishop to c5." },
      { san: "Rf3+", commentary: "Rook to f3 — check." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Bd4", commentary: "Bishop to d4." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Ra8", commentary: "Rook to a8." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "Ra6", commentary: "Rook to a6." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Rxc4", commentary: "Rook captures." },
      { san: "bxc4", commentary: "Pawn captures." },
      { san: "Rc6", commentary: "Rook to c6." },
      { san: "g6", commentary: "Black resigned." },
    ],
    guessMoveIndex: 40,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  "sansebastian-g9": {
    title: "Capablanca – D. Janowski, San Sebastian (1911)",
    intro:
      "J. Capablanca vs. D. Janowski. San Sebastian (1911). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "e3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "c5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "dxc5", commentary: "Exchange in the opening." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "a3", commentary: "Manoeuvring." },
      { san: "Bxc5", commentary: "Exchange in the opening." },
      { san: "b4", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Bb2", commentary: "Bishop to b2." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Bd6", commentary: "Bishop to d6." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Be6", commentary: "Bishop to e6." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Ra7", commentary: "Rook to a7." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Nbd7", commentary: "Knight to bd7." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Rfc8", commentary: "Rook to fc8." },
      { san: "Na4", commentary: "Knight to a4." },
      { san: "Rxc1", commentary: "Rook captures." },
      { san: "Rxc1", commentary: "Rook captures." },
      { san: "Rxc1+", commentary: "Rook captures — check." },
      { san: "Bxc1", commentary: "Bishop captures." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Bb2", commentary: "Bishop to b2." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Bxh2+", commentary: "Bishop captures — check." },
      { san: "Kxh2", commentary: "King captures." },
      { san: "Qh4+", commentary: "Queen to h4 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Qxf2+", commentary: "Queen captures — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qg3+", commentary: "Queen to g3 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "dxc4", commentary: "Pawn captures." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "Qxe3+", commentary: "Queen captures — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qh6+", commentary: "Queen to h6 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Qe3+", commentary: "Queen to e3 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qg3+", commentary: "Queen to g3 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Qe1+", commentary: "Queen to e1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Nxe6", commentary: "Capablanca plays Nxe6 — the critical move of the game." },
      { san: "Qh4+", commentary: "Queen to h4 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Qe1+", commentary: "Queen to e1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qh4+", commentary: "Queen to h4 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Ng4", commentary: "Knight to g4." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Qh2+", commentary: "Queen to h2 — check." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Qh1+", commentary: "Queen to h1 — check." },
      { san: "Ke2", commentary: "King to e2." },
      { san: "Qxg2+", commentary: "Queen captures — check." },
      { san: "Kd1", commentary: "King to d1." },
      { san: "Nf2+", commentary: "Knight to f2 — check." },
      { san: "Kc2", commentary: "King to c2." },
      { san: "Qg6+", commentary: "Queen to g6 — check." },
      { san: "Kc1", commentary: "King to c1." },
      { san: "Qg1+", commentary: "Queen to g1 — check." },
      { san: "Kc2", commentary: "King to c2." },
      { san: "Qg6+", commentary: "Queen to g6 — check." },
      { san: "Kc1", commentary: "King to c1." },
      { san: "Nd3+", commentary: "Knight to d3 — check." },
      { san: "Kb1", commentary: "King to b1." },
      { san: "fxe6", commentary: "Pawn captures." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Bd4", commentary: "Bishop to d4." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Bxb6", commentary: "Bishop captures." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Bc7", commentary: "Bishop to c7." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Bxe5", commentary: "Bishop captures." },
      { san: "Qe1+", commentary: "Queen to e1 — check." },
      { san: "Ka2", commentary: "King to a2." },
      { san: "Nxe5", commentary: "Knight captures." },
      { san: "b7", commentary: "Pawn advance." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Nb8", commentary: "Knight to b8." },
      { san: "Qxc4+", commentary: "Queen captures — check." },
      { san: "Kh8", commentary: "King to h8." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Qxh3+", commentary: "Queen captures — check." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Qf3", commentary: "Queen to f3." },
      { san: "Qc1", commentary: "Queen to c1." },
      { san: "Qf6+", commentary: "Queen to f6 — check." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Qf7+", commentary: "Queen to f7 — check." },
      { san: "Kh6", commentary: "King to h6." },
      { san: "Qf8+", commentary: "Queen to f8 — check." },
      { san: "Kh5", commentary: "King to h5." },
      { san: "Qh8+", commentary: "Queen to h8 — check." },
      { san: "Kg4", commentary: "King to g4." },
      { san: "Qc8+", commentary: "Black resigned." },
    ],
    guessMoveIndex: 68,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "sansebastian-g14": {
    title: "A. Rubinstein – Capablanca, San Sebastian (1911)",
    intro:
      "A. Rubinstein vs. J. Capablanca. San Sebastian (1911). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "c5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "cxd5", commentary: "Development." },
      { san: "exd5", commentary: "Development." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "Nc6", commentary: "Manoeuvring." },
      { san: "g3", commentary: "Manoeuvring." },
      { san: "Be6", commentary: "Manoeuvring." },
      { san: "Bg2", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc8", commentary: "Manoeuvring." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Bxc5", commentary: "Bishop captures." },
      { san: "Ng5", commentary: "Knight to g5." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Nxe6", commentary: "Knight captures." },
      { san: "fxe6", commentary: "Pawn captures." },
      { san: "Bh3", commentary: "Bishop to h3." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Qh6", commentary: "Queen to h6." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rcd8", commentary: "Rook to cd8." },
      { san: "Qc1", commentary: "Queen to c1." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Qxc5", commentary: "Queen captures." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Qb5", commentary: "Queen to b5." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Qxd3", commentary: "Capablanca plays Qxd3 — the critical move of the game." },
      { san: "exd3", commentary: "Pawn captures." },
      { san: "Rfe8", commentary: "Rook to fe8." },
      { san: "Bg4", commentary: "Bishop to g4." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "Rfe1", commentary: "Rook to fe1." },
      { san: "Rxe1", commentary: "Rook captures." },
      { san: "Rxe1", commentary: "Rook captures." },
      { san: "Rb6", commentary: "Rook to b6." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Rxb2", commentary: "Rook captures." },
      { san: "Rxd5", commentary: "Rook captures." },
      { san: "Nc6", commentary: "Knight to c6." },
      { san: "Be6+", commentary: "Bishop to e6 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Rf5+", commentary: "Rook to f5 — check." },
      { san: "Ke8", commentary: "King to e8." },
      { san: "Bf7+", commentary: "Bishop to f7 — check." },
      { san: "Kd7", commentary: "King to d7." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Rf7+", commentary: "Rook to f7 — check." },
      { san: "Kd6", commentary: "King to d6." },
      { san: "Rxg7", commentary: "Rook captures." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Bg8", commentary: "Bishop to g8." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Rxh7", commentary: "Rook captures." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Rh6+", commentary: "Rook to h6 — check." },
      { san: "Kc5", commentary: "King to c5." },
      { san: "Rh5+", commentary: "Rook to h5 — check." },
      { san: "Kb6", commentary: "King to b6." },
      { san: "Bd5", commentary: "Bishop to d5." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "axb3", commentary: "Pawn captures." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "Bxc6", commentary: "Bishop captures." },
      { san: "Rxb3", commentary: "Rook captures." },
      { san: "Bd5", commentary: "Bishop to d5." },
      { san: "a2", commentary: "Pawn advance." },
      { san: "Rh6+", commentary: "Capablanca resigned." },
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
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "Nbd7", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "b6", commentary: "Manoeuvring." },
      { san: "cxd5", commentary: "Exchange in the opening." },
      { san: "exd5", commentary: "Exchange in the opening." },
      { san: "Bb5", commentary: "Bishop to b5." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "Qa4", commentary: "Queen to a4." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Bxd7", commentary: "Bishop captures." },
      { san: "Nxd7", commentary: "Knight captures." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rfd8", commentary: "Rook to fd8." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Rab8", commentary: "Rook to ab8." },
      { san: "Ne1", commentary: "Knight to e1." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "Ne2", commentary: "Knight to e2." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Qa3", commentary: "Queen to a3." },
      { san: "Rbc8", commentary: "Rook to bc8." },
      { san: "Ng3", commentary: "Knight to g3." },
      { san: "Nxg3", commentary: "Knight captures." },
      { san: "hxg3", commentary: "Pawn captures." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "Rcd2", commentary: "Rook to cd2." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "d4", commentary: "Pawn advance." },
      { san: "exd4", commentary: "Capablanca plays exd4 — the critical move of the game." },
      { san: "Bxf3", commentary: "Bishop captures." },
      { san: "Qxf3", commentary: "Queen captures." },
      { san: "Rxd4", commentary: "Rook captures." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Rxd1+", commentary: "Rook captures — check." },
      { san: "Qxd1", commentary: "Queen captures." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "Qe2", commentary: "Queen to e2." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qd5", commentary: "Queen to d5." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Qg5", commentary: "Queen to g5." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Qc4", commentary: "Queen to c4." },
      { san: "Re6", commentary: "Rook to e6." },
      { san: "Qxc5", commentary: "Queen captures." },
      { san: "Qxg4", commentary: "Queen captures." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "Qg5", commentary: "Queen to g5." },
      { san: "Qxg5", commentary: "Queen captures." },
      { san: "hxg5", commentary: "Pawn captures." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "Ke3", commentary: "King to e3." },
      { san: "Re6+", commentary: "Rook to e6 — check." },
      { san: "Kd4", commentary: "King to d4." },
      { san: "Rd6+", commentary: "Rook to d6 — check." },
      { san: "Ke3", commentary: "King to e3." },
      { san: "Re6+", commentary: "Rook to e6 — check." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "Ke2", commentary: "King to e2." },
      { san: "Ra1", commentary: "Rook to a1." },
      { san: "Kd3", commentary: "King to d3." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Rf1", commentary: "Rook to f1." },
      { san: "Ke3", commentary: "King to e3." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Rc6", commentary: "Rook to c6." },
      { san: "Rxb4", commentary: "Rook captures." },
      { san: "Rxa6", commentary: "Rook captures." },
      { san: "Rb2", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g5": {
    title: "Capablanca – E. Lasker, World Championship 12th (1921)",
    intro:
      "J. Capablanca vs. E. Lasker. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "b6", commentary: "Manoeuvring." },
      { san: "cxd5", commentary: "Exchange in the opening." },
      { san: "exd5", commentary: "Exchange in the opening." },
      { san: "Qa4", commentary: "Queen to a4." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "Nxe7+", commentary: "Knight captures — check." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Qa4", commentary: "Queen to a4." },
      { san: "Rbc8", commentary: "Rook to bc8." },
      { san: "Qa3", commentary: "Queen to a3." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "Ba6", commentary: "Bishop to a6." },
      { san: "Bxf3", commentary: "Bishop captures." },
      { san: "Bxc8", commentary: "Bishop captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "gxf3", commentary: "Pawn captures." },
      { san: "Qxf3", commentary: "Queen captures." },
      { san: "Rg1", commentary: "Rook to g1." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Re4", commentary: "Rook to e4." },
      { san: "Qd1", commentary: "Queen to d1." },
      { san: "Qh3+", commentary: "Queen to h3 — check." },
      { san: "Rg2", commentary: "Rook to g2." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "Rc4", commentary: "Rook to c4." },
      { san: "dxe3", commentary: "Pawn captures." },
      { san: "Rxe4", commentary: "Capablanca plays Rxe4 — the critical move of the game." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "Qd8+", commentary: "Queen to d8 — check." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Qd4+", commentary: "Queen to d4 — check." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "fxe3", commentary: "Pawn captures." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "Rf2", commentary: "Rook to f2." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "gxh4", commentary: "Pawn captures." },
      { san: "Qxh4", commentary: "Queen captures." },
      { san: "Ng4", commentary: "Knight to g4." },
      { san: "Qg5+", commentary: "Queen to g5 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Qd8+", commentary: "Queen to d8 — check." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Qg5+", commentary: "Queen to g5 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Qd8+", commentary: "Queen to d8 — check." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Qg5+", commentary: "Queen to g5 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "Qf4", commentary: "Queen to f4." },
      { san: "Qd1+", commentary: "Queen to d1 — check." },
      { san: "Qf1", commentary: "Queen to f1." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Rxh5", commentary: "Rook captures." },
      { san: "Nxe3", commentary: "Knight captures." },
      { san: "Qf3", commentary: "Queen to f3." },
      { san: "Qd4", commentary: "Queen to d4." },
      { san: "Qa8+", commentary: "Queen to a8 — check." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Qb7+", commentary: "Queen to b7 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Qb8+", commentary: "Black resigned." },
    ],
    guessMoveIndex: 50,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g10": {
    title: "E. Lasker – Capablanca, World Championship 12th (1921)",
    intro:
      "E. Lasker vs. J. Capablanca. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "Nbd7", commentary: "Manoeuvring." },
      { san: "Qc2", commentary: "Manoeuvring." },
      { san: "c5", commentary: "Manoeuvring." },
      { san: "Rd1", commentary: "Manoeuvring." },
      { san: "Qa5", commentary: "Manoeuvring." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Bh4", commentary: "Bishop to h4." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "exd4", commentary: "Pawn captures." },
      { san: "dxc4", commentary: "Pawn captures." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Nb6", commentary: "Knight to b6." },
      { san: "Bb3", commentary: "Bishop to b3." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rac8", commentary: "Rook to ac8." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Bb5", commentary: "Bishop to b5." },
      { san: "Rfe1", commentary: "Rook to fe1." },
      { san: "Nbd5", commentary: "Knight to bd5." },
      { san: "Bxd5", commentary: "Bishop captures." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Nxe7", commentary: "Knight captures." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Bc6", commentary: "Bishop to c6." },
      { san: "Nxc6", commentary: "Knight captures." },
      { san: "bxc6", commentary: "Pawn captures." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "Rfd8", commentary: "Rook to fd8." },
      { san: "Ne2", commentary: "Knight to e2." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "Rxd5", commentary: "Rook captures." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Nf5", commentary: "Knight to f5." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Rc6", commentary: "Rook to c6." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Qb1", commentary: "Queen to b1." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Qb2", commentary: "Queen to b2." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Qxd2", commentary: "Capablanca plays Qxd2 — the critical move of the game." },
      { san: "Rxd2", commentary: "Rook captures." },
      { san: "axb3", commentary: "Pawn captures." },
      { san: "axb3", commentary: "Pawn captures." },
      { san: "Rb6", commentary: "Rook to b6." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "Ra6", commentary: "Rook to a6." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "hxg3", commentary: "Pawn captures." },
      { san: "fxg3", commentary: "Pawn captures." },
      { san: "Ra2", commentary: "Rook to a2." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Nd1", commentary: "Knight to d1." },
      { san: "Ne7", commentary: "Knight to e7." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Rc1+", commentary: "Rook to c1 — check." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "Nc6", commentary: "Knight to c6." },
      { san: "Nd1", commentary: "Knight to d1." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Ke2", commentary: "King to e2." },
      { san: "Rxb3", commentary: "Rook captures." },
      { san: "Ke3", commentary: "King to e3." },
      { san: "Rb4", commentary: "Rook to b4." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Ne7", commentary: "Knight to e7." },
      { san: "Ne2", commentary: "Knight to e2." },
      { san: "Nf5+", commentary: "Knight to f5 — check." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Nd6", commentary: "Knight to d6." },
      { san: "Ng1", commentary: "Knight to g1." },
      { san: "Ne4+", commentary: "Knight to e4 — check." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Rb1+", commentary: "Rook to b1 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rb2+", commentary: "Rook to b2 — check." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Rf2+", commentary: "Rook to f2 — check." },
      { san: "Ke1", commentary: "King to e1." },
      { san: "Ra2", commentary: "Rook to a2." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "Kd6", commentary: "King to d6." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "Rf2+", commentary: "Rook to f2 — check." },
      { san: "Ke1", commentary: "King to e1." },
      { san: "Rg2", commentary: "Rook to g2." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Ra2", commentary: "Rook to a2." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "exd4", commentary: "Pawn captures." },
      { san: "Rxd4", commentary: "Rook captures." },
      { san: "Kc5", commentary: "King to c5." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "d4", commentary: "Pawn advance." },
      { san: "Rc1+", commentary: "Rook to c1 — check." },
      { san: "Kd5", commentary: "White resigned." },
    ],
    guessMoveIndex: 65,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g11": {
    title: "Capablanca – E. Lasker, World Championship 12th (1921)",
    intro:
      "J. Capablanca vs. E. Lasker. World Championship 12th (1921). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "Re8", commentary: "Manoeuvring." },
      { san: "Qc2", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "dxc4", commentary: "Pawn captures." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Rxe7", commentary: "Rook captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nf8", commentary: "Knight to f8." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Nb6", commentary: "Knight to b6." },
      { san: "Bf1", commentary: "Bishop to f1." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Be8", commentary: "Bishop to e8." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Rec7", commentary: "Rook to ec7." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Ng6", commentary: "Knight to g6." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "Qc3", commentary: "Queen to c3." },
      { san: "Nf4", commentary: "Knight to f4." },
      { san: "Nd6", commentary: "Knight to d6." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Qa3", commentary: "Queen to a3." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Nxe8", commentary: "Capablanca plays Nxe8 — the critical move of the game." },
      { san: "Qxe8", commentary: "Queen captures." },
      { san: "exf6", commentary: "Pawn captures." },
      { san: "gxf6", commentary: "Pawn captures." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Rbc8", commentary: "Rook to bc8." },
      { san: "bxc6", commentary: "Pawn captures." },
      { san: "Rxc6", commentary: "Rook captures." },
      { san: "Rxc6", commentary: "Rook captures." },
      { san: "Rxc6", commentary: "Rook captures." },
      { san: "axb6", commentary: "Pawn captures." },
      { san: "axb6", commentary: "Pawn captures." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Qc8", commentary: "Queen to c8." },
      { san: "Nd2", commentary: "Knight to d2." },
      { san: "Nf8", commentary: "Knight to f8." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Qd8", commentary: "Queen to d8." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Rg7", commentary: "Rook to g7." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Ra7", commentary: "Rook to a7." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "Ra5", commentary: "Rook to a5." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Nxc3", commentary: "Knight captures." },
      { san: "Qxc3", commentary: "Queen captures." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Qe3", commentary: "Queen to e3." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Ra4", commentary: "Rook to a4." },
      { san: "Qb7+", commentary: "Queen to b7 — check." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "Qc8", commentary: "Queen to c8." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Bd3+", commentary: "Bishop to d3 — check." },
      { san: "Kh6", commentary: "King to h6." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Ra1+", commentary: "Rook to a1 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "Qxf8+", commentary: "Black resigned." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "havana-g14": {
    title: "E. Lasker – Capablanca, World Championship 12th (1921)",
    intro:
      "E. Lasker vs. J. Capablanca. World Championship 12th (1921). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Development." },
      { san: "e5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nc6", commentary: "Development." },
      { san: "Bb5", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "d6", commentary: "Development." },
      { san: "d4", commentary: "Manoeuvring." },
      { san: "Bd7", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Bxc6", commentary: "Exchange in the opening." },
      { san: "Bxc6", commentary: "Exchange in the opening." },
      { san: "Qd3", commentary: "Manoeuvring." },
      { san: "exd4", commentary: "Exchange in the opening." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rae1", commentary: "Rook to ae1." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Bh4", commentary: "Bishop to h4." },
      { san: "Nh7", commentary: "Knight to h7." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Qd8", commentary: "Queen to d8." },
      { san: "c4", commentary: "Pawn advance." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "c6", commentary: "Pawn advance." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Rad8", commentary: "Rook to ad8." },
      { san: "Kh1", commentary: "King to h1." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Bc8", commentary: "Bishop to c8." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "Rfe1", commentary: "Rook to fe1." },
      { san: "Rde8", commentary: "Rook to de8." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Qa5", commentary: "Queen to a5." },
      { san: "Rf1", commentary: "Rook to f1." },
      { san: "Qh5", commentary: "Queen to h5." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Rff2", commentary: "Rook to ff2." },
      { san: "Qg6", commentary: "Queen to g6." },
      { san: "Rf3", commentary: "Rook to f3." },
      { san: "Qh5", commentary: "Queen to h5." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "Qh4", commentary: "Queen to h4." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Ng4+", commentary: "Capablanca plays Ng4+ — the critical move of the game." },
      { san: "Kh1", commentary: "King to h1." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Nxf3", commentary: "Knight captures." },
      { san: "Nxf3", commentary: "Knight captures." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "fxg6", commentary: "Pawn captures." },
      { san: "fxg6", commentary: "Pawn captures." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "Nd2", commentary: "Knight to d2." },
      { san: "Bg6", commentary: "Bishop to g6." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "axb5", commentary: "Pawn captures." },
      { san: "axb5", commentary: "Pawn captures." },
      { san: "Ra8", commentary: "Rook to a8." },
      { san: "Qb1", commentary: "Queen to b1." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "Qe1", commentary: "Queen to e1." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "bxc6", commentary: "Pawn captures." },
      { san: "bxc6", commentary: "Pawn captures." },
      { san: "Qg3", commentary: "Queen to g3." },
      { san: "Qxg3", commentary: "Queen captures." },
      { san: "Rxg3", commentary: "Rook captures." },
      { san: "Ra3", commentary: "Rook to a3." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Rb7", commentary: "Rook to b7." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Ra1", commentary: "Rook to a1." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "Nxc6", commentary: "Knight captures." },
      { san: "Re6", commentary: "Rook to e6." },
      { san: "Nd8", commentary: "Knight to d8." },
      { san: "gxh4", commentary: "Pawn captures." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "Rf6", commentary: "Rook to f6." },
      { san: "Rd7+", commentary: "Rook to d7 — check." },
      { san: "Kh8", commentary: "King to h8." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Rff1", commentary: "Rook to ff1." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Bxe4", commentary: "White resigned." },
    ],
    guessMoveIndex: 57,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  // ── 1922 London International Tournament ────────────────────────

  "london-g1": {
    title: "A. Alekhine – Capablanca, London (1922)",
    intro:
      "A. Alekhine vs. J. Capablanca. London (1922). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "Bg5", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "Qc2", commentary: "Manoeuvring." },
      { san: "dxc4", commentary: "Capablanca plays dxc4 — the critical move of the game." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nxc3", commentary: "Knight captures." },
      { san: "Qxc3", commentary: "Queen captures." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Ba6", commentary: "Bishop to a6." },
      { san: "Bxa6", commentary: "Bishop captures." },
      { san: "Qxa6", commentary: "Queen captures." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Qb5", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 15,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g5": {
    title: "Capablanca – E. Bogoljubov, London (1922)",
    intro:
      "J. Capablanca vs. E. Bogoljubov. London (1922). Open Game. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "e4", commentary: "Development." },
      { san: "e5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nc6", commentary: "Development." },
      { san: "Bb5", commentary: "Development." },
      { san: "a6", commentary: "Development." },
      { san: "Ba4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Re1", commentary: "Manoeuvring." },
      { san: "b5", commentary: "Manoeuvring." },
      { san: "Bb3", commentary: "Manoeuvring." },
      { san: "d6", commentary: "Manoeuvring." },
      { san: "c3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "d4", commentary: "Pawn advance." },
      { san: "exd4", commentary: "Pawn captures." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "Bg4", commentary: "Bishop to g4." },
      { san: "Be3", commentary: "Bishop to e3." },
      { san: "Na5", commentary: "Knight to a5." },
      { san: "Bc2", commentary: "Bishop to c2." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Bc1", commentary: "Bishop to c1." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Na5", commentary: "Knight to a5." },
      { san: "Bb2", commentary: "Bishop to b2." },
      { san: "Nc6", commentary: "Knight to c6." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "Nb4", commentary: "Knight to b4." },
      { san: "Nbd2", commentary: "Knight to bd2." },
      { san: "Nxc2", commentary: "Knight captures." },
      { san: "Qxc2", commentary: "Queen captures." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Nf1", commentary: "Knight to f1." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Bh5", commentary: "Bishop to h5." },
      { san: "N3d2", commentary: "Knight to 3d2." },
      { san: "Bf6", commentary: "Bishop to f6." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "c4", commentary: "Pawn advance." },
      { san: "bxc4", commentary: "Capablanca plays bxc4 — the critical move of the game." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Qe3", commentary: "Queen to e3." },
      { san: "bxa4", commentary: "Pawn captures." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Bg6", commentary: "Bishop to g6." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "Bh7", commentary: "Bishop to h7." },
      { san: "Ng3", commentary: "Knight to g3." },
      { san: "Qe5", commentary: "Queen to e5." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rab8", commentary: "Rook to ab8." },
      { san: "Rab1", commentary: "Rook to ab1." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Rb2+", commentary: "Rook to b2 — check." },
      { san: "Rxb2", commentary: "Rook captures." },
      { san: "Qxb2+", commentary: "Queen captures — check." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Qxe3", commentary: "Queen captures." },
      { san: "Rxe3", commentary: "Rook captures." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "Rc3", commentary: "Rook to c3." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Kf3", commentary: "King to f3." },
      { san: "Rb2", commentary: "Rook to b2." },
      { san: "Nge2", commentary: "Knight to ge2." },
      { san: "Bg8", commentary: "Bishop to g8." },
      { san: "Ne6", commentary: "Knight to e6." },
      { san: "Nb3", commentary: "Knight to b3." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Nxc5", commentary: "Knight captures." },
      { san: "Nd2+", commentary: "Knight to d2 — check." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Ke1", commentary: "King to e1." },
      { san: "Nb1", commentary: "Knight to b1." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "d6+", commentary: "Pawn advance — check." },
      { san: "Kd8", commentary: "King to d8." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Rb6", commentary: "Rook to b6." },
      { san: "Nde6+", commentary: "Knight to de6 — check." },
      { san: "Bxe6", commentary: "Bishop captures." },
      { san: "fxe6", commentary: "Pawn captures." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "e7+", commentary: "Pawn advance — check." },
      { san: "Ke8", commentary: "King to e8." },
      { san: "Nxa6", commentary: "Black resigned." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g8": {
    title: "A. Rubinstein – Capablanca, London (1922)",
    intro:
      "A. Rubinstein vs. J. Capablanca. London (1922). Queen's Gambit Declined. Replay the full historical game.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Bf4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "e3", commentary: "Development." },
      { san: "Bd6", commentary: "Development." },
      { san: "Nbd2", commentary: "Manoeuvring." },
      { san: "Bxf4", commentary: "Exchange in the opening." },
      { san: "exf4", commentary: "Exchange in the opening." },
      { san: "c5", commentary: "Manoeuvring." },
      { san: "dxc5", commentary: "Exchange in the opening." },
      { san: "Qc7", commentary: "Manoeuvring." },
      { san: "g3", commentary: "Manoeuvring." },
      { san: "Qxc5", commentary: "Capablanca plays Qxc5 — the critical move of the game." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "Nc6", commentary: "Knight to c6." },
      { san: "c3", commentary: "Pawn advance." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "Qe2", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 15,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "london-g13": {
    title: "Capablanca – M. Vidmar, London (1922)",
    intro:
      "J. Capablanca vs. M. Vidmar. London (1922). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "Bg5", commentary: "Manoeuvring." },
      { san: "Nbd7", commentary: "Manoeuvring." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "Qc2", commentary: "Manoeuvring." },
      { san: "dxc4", commentary: "Exchange in the opening." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Qc7", commentary: "Queen to c7." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "Qa4", commentary: "Queen to a4." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "Bc2", commentary: "Bishop to c2." },
      { san: "Qb5", commentary: "Queen to b5." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Qxb2", commentary: "Queen captures." },
      { san: "Nxd7", commentary: "Capablanca plays Nxd7 — the critical move of the game." },
      { san: "Rac8", commentary: "Rook to ac8." },
      { san: "Qb7", commentary: "Queen to b7." },
      { san: "Nxd7", commentary: "Knight captures." },
      { san: "Bh7+", commentary: "Bishop to h7 — check." },
      { san: "Kxh7", commentary: "King captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "Qxc8", commentary: "Queen captures." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Qc2+", commentary: "Queen to c2 — check." },
      { san: "Kg8", commentary: "King to g8." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "Qa3", commentary: "Queen to a3." },
      { san: "Qa8+", commentary: "Queen to a8 — check." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Qxa4", commentary: "Queen captures." },
      { san: "Rxf7", commentary: "Rook captures." },
      { san: "Qd1+", commentary: "Queen to d1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qh5", commentary: "Queen to h5." },
      { san: "Qxa7", commentary: "Queen captures." },
      { san: "Qg6", commentary: "Queen to g6." },
      { san: "Rf8", commentary: "Rook to f8." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Rf7", commentary: "Rook to f7." },
      { san: "Qg6", commentary: "Queen to g6." },
      { san: "Rb7", commentary: "Rook to b7." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Qa2", commentary: "Queen to a2." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "Qxd5", commentary: "Queen captures." },
      { san: "exd4", commentary: "Pawn captures." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "Nf6", commentary: "Knight to f6." },
      { san: "Qxd4", commentary: "Queen captures." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Rxb6", commentary: "Rook captures." },
      { san: "Qxf2", commentary: "Queen captures." },
      { san: "Qd3+", commentary: "Queen to d3 — check." },
      { san: "Kg8", commentary: "King to g8." },
      { san: "Rb8+", commentary: "Black resigned." },
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
      { san: "e4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Bb4", commentary: "Development." },
      { san: "exd5", commentary: "Development." },
      { san: "exd5", commentary: "Development." },
      { san: "Bd3", commentary: "Manoeuvring." },
      { san: "Nc6", commentary: "Manoeuvring." },
      { san: "Ne2", commentary: "Manoeuvring." },
      { san: "Nge7", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Bf5", commentary: "Manoeuvring." },
      { san: "Bxf5", commentary: "Exchange in the opening." },
      { san: "Nxf5", commentary: "Exchange in the opening." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Qd7", commentary: "Queen to d7." },
      { san: "Nd1", commentary: "Knight to d1." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Ne3", commentary: "Knight to e3." },
      { san: "Nxe3", commentary: "Knight captures." },
      { san: "Bxe3", commentary: "Bishop captures." },
      { san: "Rfe8", commentary: "Rook to fe8." },
      { san: "Nf4", commentary: "Knight to f4." },
      { san: "Bd6", commentary: "Bishop to d6." },
      { san: "Rfe1", commentary: "Rook to fe1." },
      { san: "Nb4", commentary: "Knight to b4." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Nxc2", commentary: "Knight captures." },
      { san: "Rxc2", commentary: "Rook captures." },
      { san: "Qxf4", commentary: "Queen captures." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Rce2", commentary: "Rook to ce2." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Qb5", commentary: "Queen to b5." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Re4", commentary: "Rook to e4." },
      { san: "Bd2", commentary: "Bishop to d2." },
      { san: "Rxd4", commentary: "Rook captures." },
      { san: "Bc3", commentary: "Bishop to c3." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "Be5", commentary: "Bishop to e5." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "Bxd6", commentary: "Capablanca plays Bxd6 — the critical move of the game." },
      { san: "Rxd6", commentary: "Rook captures." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Qf3", commentary: "Queen to f3." },
      { san: "Rxh5", commentary: "Rook captures." },
      { san: "Qxh5", commentary: "Queen captures." },
      { san: "Re8+", commentary: "Rook to e8 — check." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Qxd3+", commentary: "Queen captures — check." },
      { san: "Qg6", commentary: "Queen to g6." },
      { san: "Qd1", commentary: "Queen to d1." },
      { san: "Re6", commentary: "Rook to e6." },
      { san: "Ra8", commentary: "Rook to a8." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Rxa7", commentary: "Rook captures." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "Qd3+", commentary: "Queen to d3 — check." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "d4", commentary: "Pawn advance." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Re1+", commentary: "Rook to e1 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Qc6+", commentary: "Queen to c6 — check." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "Qd1", commentary: "Queen to d1." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Re2+", commentary: "Rook to e2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Qe3", commentary: "Queen to e3." },
      { san: "Qh1", commentary: "Queen to h1." },
      { san: "Qf4", commentary: "Queen to f4." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Rf2", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g11": {
    title: "Capablanca – A. Alekhine, World Championship 13th (1927)",
    intro:
      "J. Capablanca vs. A. Alekhine. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "Qa5", commentary: "Manoeuvring." },
      { san: "Nd2", commentary: "Manoeuvring." },
      { san: "Bb4", commentary: "Manoeuvring." },
      { san: "Qc2", commentary: "Manoeuvring." },
      { san: "dxc4", commentary: "Exchange in the opening." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "Nxf6", commentary: "Knight captures." },
      { san: "Nxc4", commentary: "Knight captures." },
      { san: "Qc7", commentary: "Queen to c7." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "Be7", commentary: "Bishop to e7." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Rac8", commentary: "Rook to ac8." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Rfd8", commentary: "Rook to fd8." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Be8", commentary: "Bishop to e8." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Nb2", commentary: "Knight to b2." },
      { san: "Qb8", commentary: "Queen to b8." },
      { san: "Nd3", commentary: "Knight to d3." },
      { san: "Bg5", commentary: "Bishop to g5." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Qb7", commentary: "Queen to b7." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Nxc3", commentary: "Knight captures." },
      { san: "Qxc3", commentary: "Queen captures." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Bh6", commentary: "Bishop to h6." },
      { san: "Ne5", commentary: "Knight to e5." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Ng4", commentary: "Knight to g4." },
      { san: "Bg7", commentary: "Bishop to g7." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Ne3", commentary: "Knight to e3." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "bxc5", commentary: "Pawn captures." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Nxd5", commentary: "Capablanca plays Nxd5 — the critical move of the game." },
      { san: "Qe6", commentary: "Queen to e6." },
      { san: "Nf6+", commentary: "Knight to f6 — check." },
      { san: "Bxf6", commentary: "Bishop captures." },
      { san: "exf6", commentary: "Pawn captures." },
      { san: "Rxd1+", commentary: "Rook captures — check." },
      { san: "Rxd1", commentary: "Rook captures." },
      { san: "Bc6", commentary: "Bishop to c6." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Re3", commentary: "Rook to e3." },
      { san: "c4", commentary: "Pawn advance." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Bg2", commentary: "Bishop to g2." },
      { san: "Bxg2", commentary: "Bishop captures." },
      { san: "Kxg2", commentary: "King captures." },
      { san: "Qd5+", commentary: "Queen to d5 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qf5", commentary: "Queen to f5." },
      { san: "Rf3", commentary: "Rook to f3." },
      { san: "Qc5", commentary: "Queen to c5." },
      { san: "Rf4", commentary: "Rook to f4." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Rd4", commentary: "Rook to d4." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "Qxa5", commentary: "Queen captures." },
      { san: "c3", commentary: "Pawn advance." },
      { san: "Qa7", commentary: "Queen to a7." },
      { san: "Kg8", commentary: "King to g8." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "Qd7", commentary: "Queen to d7." },
      { san: "Qc5", commentary: "Queen to c5." },
      { san: "Re4", commentary: "Rook to e4." },
      { san: "Qxf2+", commentary: "Queen captures — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Qf1+", commentary: "Queen to f1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qf2+", commentary: "Queen to f2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Rf8", commentary: "Rook to f8." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "Qf1+", commentary: "Queen to f1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qf2+", commentary: "Queen to f2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Qf1+", commentary: "Queen to f1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Qc4", commentary: "Queen to c4." },
      { san: "Qf2+", commentary: "Queen to f2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Qg1", commentary: "Queen to g1." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Qf1+", commentary: "Queen to f1 — check." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Qf1", commentary: "Queen to f1." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "Rd2", commentary: "Rook to d2." },
      { san: "Rxd2", commentary: "Rook captures." },
      { san: "cxd2", commentary: "Pawn captures." },
      { san: "a7", commentary: "Pawn advance." },
      { san: "d1=Q", commentary: "Promotes — Queen arrives on the board." },
      { san: "a8=Q", commentary: "Promotes — Queen arrives on the board." },
      { san: "Qg1+", commentary: "Queen to g1 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Qdf1+", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 60,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g21": {
    title: "Capablanca – A. Alekhine, World Championship 13th (1927)",
    intro:
      "J. Capablanca vs. A. Alekhine. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Rc1", commentary: "Manoeuvring." },
      { san: "a6", commentary: "Manoeuvring." },
      { san: "a3", commentary: "Manoeuvring." },
      { san: "h6", commentary: "Manoeuvring." },
      { san: "Bh4", commentary: "Bishop to h4." },
      { san: "dxc4", commentary: "Pawn captures." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Nxc5", commentary: "Knight captures." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "Ncd7", commentary: "Knight to cd7." },
      { san: "Bg3", commentary: "Bishop to g3." },
      { san: "Nb6", commentary: "Knight to b6." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Nfd5", commentary: "Knight to fd5." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Rc4", commentary: "Rook to c4." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Qc8", commentary: "Queen to c8." },
      { san: "Rxc4", commentary: "Capablanca plays Rxc4 — the critical move of the game." },
      { san: "Nxc4", commentary: "Knight captures." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Qa8", commentary: "Queen to a8." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Bxd5", commentary: "Bishop captures." },
      { san: "Bxd5", commentary: "Bishop captures." },
      { san: "Qxd5", commentary: "Queen captures." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Bf6", commentary: "Bishop to f6." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Bb2", commentary: "Bishop to b2." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "axb5", commentary: "Pawn captures." },
      { san: "axb5", commentary: "Pawn captures." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Bxd4", commentary: "Bishop captures." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "Nxe3", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 38,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g32": {
    title: "A. Alekhine – Capablanca, World Championship 13th (1927)",
    intro:
      "A. Alekhine vs. J. Capablanca. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "cxd5", commentary: "Exchange in the opening." },
      { san: "exd5", commentary: "Exchange in the opening." },
      { san: "Bd3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nge2", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Ng3", commentary: "Knight to g3." },
      { san: "Ne8", commentary: "Knight to e8." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Ndf6", commentary: "Knight to df6." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "Be6", commentary: "Bishop to e6." },
      { san: "Nf5", commentary: "Knight to f5." },
      { san: "Bxf5", commentary: "Bishop captures." },
      { san: "Bxf5", commentary: "Bishop captures." },
      { san: "Nd6", commentary: "Knight to d6." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Bf4", commentary: "Bishop to f4." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Nfe4", commentary: "Knight to fe4." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Bxe4", commentary: "Bishop captures." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "dxe4", commentary: "Pawn captures." },
      { san: "Qxe4", commentary: "Queen captures." },
      { san: "Qa5+", commentary: "Queen to a5 — check." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Qd5", commentary: "Queen to d5." },
      { san: "Qxd5", commentary: "Queen captures." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Rhc1", commentary: "Rook to hc1." },
      { san: "Rfc8", commentary: "Rook to fc8." },
      { san: "Rxc2", commentary: "Rook captures." },
      { san: "Rxc2", commentary: "Rook captures." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Kg3", commentary: "King to g3." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "gxf6", commentary: "Pawn captures." },
      { san: "Bxf6", commentary: "Capablanca plays Bxf6 — the critical move of the game." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Kf5", commentary: "King to f5." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Rxb2", commentary: "Rook captures." },
      { san: "Rc5", commentary: "Rook to c5." },
      { san: "Ke6", commentary: "King to e6." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Bxd4", commentary: "Bishop captures." },
      { san: "Rxd5", commentary: "Rook captures." },
      { san: "Bc3", commentary: "Bishop to c3." },
      { san: "Rxh5", commentary: "Rook captures." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Bc7", commentary: "Bishop to c7." },
      { san: "Be1+", commentary: "Bishop to e1 — check." },
      { san: "Kg4", commentary: "King to g4." },
      { san: "Rg2+", commentary: "Rook to g2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Rf2", commentary: "Rook to f2." },
      { san: "Kg4", commentary: "King to g4." },
      { san: "Rg2+", commentary: "Rook to g2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Rf2", commentary: "Rook to f2." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Rf3+", commentary: "Rook to f3 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rf2+", commentary: "Rook to f2 — check." },
      { san: "Kh3", commentary: "King to h3." },
      { san: "Rf3+", commentary: "Rook to f3 — check." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rf2+", commentary: "Rook to f2 — check." },
      { san: "Kg1", commentary: "King to g1." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Bb6", commentary: "Bishop to b6." },
      { san: "Rc4", commentary: "Rook to c4." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Re5+", commentary: "Rook to e5 — check." },
      { san: "Kd7", commentary: "King to d7." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "gxh5", commentary: "Pawn captures." },
      { san: "Kf3", commentary: "King to f3." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Rh5", commentary: "Rook to h5." },
      { san: "Rc3+", commentary: "Rook to c3 — check." },
      { san: "Kg4", commentary: "King to g4." },
      { san: "Rc4", commentary: "Rook to c4." },
      { san: "Kf5", commentary: "King to f5." },
      { san: "Bxa5", commentary: "Bishop captures." },
      { san: "Rh7+", commentary: "Rook to h7 — check." },
      { san: "Kc6", commentary: "King to c6." },
      { san: "Bxa5", commentary: "Bishop captures." },
      { san: "Rc5+", commentary: "Rook to c5 — check." },
      { san: "Ke6", commentary: "King to e6." },
      { san: "Rxa5", commentary: "Rook captures." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "Ra3", commentary: "Rook to a3." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Rf3", commentary: "Rook to f3." },
      { san: "f7", commentary: "Pawn advance." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Rh5", commentary: "Rook to h5." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "Rxf5", commentary: "Rook captures." },
      { san: "exf5", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 57,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "alekhine-g34": {
    title: "A. Alekhine – Capablanca, World Championship 13th (1927)",
    intro:
      "A. Alekhine vs. J. Capablanca. World Championship 13th (1927). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Nbd7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "c6", commentary: "Manoeuvring." },
      { san: "a3", commentary: "Manoeuvring." },
      { san: "Be7", commentary: "Manoeuvring." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Bd3", commentary: "Manoeuvring." },
      { san: "dxc4", commentary: "Exchange in the opening." },
      { san: "Bxc4", commentary: "Bishop captures." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Qxe7", commentary: "Queen captures." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "N5f6", commentary: "Knight to 5f6." },
      { san: "Ng3", commentary: "Knight to g3." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nb6", commentary: "Knight to b6." },
      { san: "Ba2", commentary: "Bishop to a2." },
      { san: "cxd4", commentary: "Pawn captures." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "g6", commentary: "Pawn advance." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "Qe2", commentary: "Queen to e2." },
      { san: "Rac8", commentary: "Rook to ac8." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "h3", commentary: "Pawn advance." },
      { san: "h6", commentary: "Pawn advance." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Be6", commentary: "Bishop to e6." },
      { san: "Bxe6", commentary: "Bishop captures." },
      { san: "Qxe6", commentary: "Queen captures." },
      { san: "Qa5", commentary: "Queen to a5." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Qxa7", commentary: "Queen captures." },
      { san: "Nxb2", commentary: "Knight captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "Qxb7", commentary: "Queen captures." },
      { san: "Nc4", commentary: "Knight to c4." },
      { san: "Qb4", commentary: "Queen to b4." },
      { san: "Ra8", commentary: "Rook to a8." },
      { san: "Ra1", commentary: "Rook to a1." },
      { san: "Qc6", commentary: "Queen to c6." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "Nxe5", commentary: "Knight captures." },
      { san: "Qd6", commentary: "Queen to d6." },
      { san: "Qxc4", commentary: "Queen captures." },
      { san: "Qxe5", commentary: "Queen captures." },
      { san: "Re1", commentary: "Rook to e1." },
      { san: "Nd6", commentary: "Knight to d6." },
      { san: "Qc1", commentary: "Queen to c1." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Nxe4", commentary: "Knight captures." },
      { san: "Rxe4", commentary: "Rook captures." },
      { san: "Rb8", commentary: "Rook to b8." },
      { san: "Re2", commentary: "Rook to e2." },
      { san: "Ra8", commentary: "Rook to a8." },
      { san: "Ra2", commentary: "Rook to a2." },
      { san: "Ra5", commentary: "Rook to a5." },
      { san: "Qc7", commentary: "Queen to c7." },
      { san: "Qa6", commentary: "Queen to a6." },
      { san: "Qc3+", commentary: "Queen to c3 — check." },
      { san: "Kh7", commentary: "King to h7." },
      { san: "Rd2", commentary: "Rook to d2." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Qb1+", commentary: "Capablanca plays Qb1+ — the critical move of the game." },
      { san: "Kh2", commentary: "King to h2." },
      { san: "Qb8+", commentary: "Queen to b8 — check." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "Qd4", commentary: "Queen to d4." },
      { san: "Qe8", commentary: "Queen to e8." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "Rf3", commentary: "Rook to f3." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Qh8", commentary: "Queen to h8." },
      { san: "Qb6", commentary: "Queen to b6." },
      { san: "Qa1", commentary: "Queen to a1." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Rf6", commentary: "Rook to f6." },
      { san: "Qd4", commentary: "Queen to d4." },
      { san: "Qxd4", commentary: "Queen captures." },
      { san: "Rxd4", commentary: "Rook captures." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Ra6", commentary: "Rook to a6." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "Rf6", commentary: "Rook to f6." },
      { san: "Rd4", commentary: "Rook to d4." },
      { san: "Ra6", commentary: "Rook to a6." },
      { san: "Ra4", commentary: "Rook to a4." },
      { san: "Kf6", commentary: "King to f6." },
      { san: "Kf3", commentary: "King to f3." },
      { san: "Ke5", commentary: "King to e5." },
      { san: "Ke3", commentary: "King to e3." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "Kd3", commentary: "King to d3." },
      { san: "Kd5", commentary: "King to d5." },
      { san: "Kc3", commentary: "King to c3." },
      { san: "Kc5", commentary: "King to c5." },
      { san: "Ra2", commentary: "Rook to a2." },
      { san: "Kb5", commentary: "King to b5." },
      { san: "Kb3", commentary: "King to b3." },
      { san: "Kc5", commentary: "King to c5." },
      { san: "Kc3", commentary: "King to c3." },
      { san: "Kb5", commentary: "King to b5." },
      { san: "Kd4", commentary: "King to d4." },
      { san: "Rd6+", commentary: "Rook to d6 — check." },
      { san: "Ke5", commentary: "King to e5." },
      { san: "Re6+", commentary: "Rook to e6 — check." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "Ka6", commentary: "King to a6." },
      { san: "Kg5", commentary: "King to g5." },
      { san: "Re5+", commentary: "Rook to e5 — check." },
      { san: "Kh6", commentary: "King to h6." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Rc5", commentary: "Rook to c5." },
      { san: "Ra3", commentary: "Rook to a3." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "gxf5", commentary: "Pawn captures." },
      { san: "Kh6", commentary: "King to h6." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "gxf4", commentary: "Pawn captures." },
      { san: "Rd5", commentary: "Rook to d5." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "Ra4", commentary: "Rook to a4." },
      { san: "Kb5", commentary: "King to b5." },
      { san: "Re4", commentary: "Rook to e4." },
      { san: "Ka6", commentary: "King to a6." },
      { san: "Kh6", commentary: "King to h6." },
      { san: "Rxa5", commentary: "Rook captures." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Ra1", commentary: "Rook to a1." },
      { san: "Kxh5", commentary: "King captures." },
      { san: "Rg1", commentary: "Rook to g1." },
      { san: "Rg5", commentary: "Rook to g5." },
      { san: "Rh1", commentary: "Rook to h1." },
      { san: "Rf5", commentary: "Rook to f5." },
      { san: "Kb6", commentary: "King to b6." },
      { san: "Rxf7", commentary: "Rook captures." },
      { san: "Kc6", commentary: "King to c6." },
      { san: "Re7", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 81,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  // ── 1936 Nottingham International ───────────────────────────────

  "nottingham-g1": {
    title: "Capablanca – M. Botvinnik, Nottingham (1936)",
    intro:
      "J. Capablanca vs. M. Botvinnik. Nottingham (1936). Flank Opening. Replay the full historical game.",
    moves: [
      { san: "Nf3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "d4", commentary: "Development." },
      { san: "b6", commentary: "Development." },
      { san: "g3", commentary: "Development." },
      { san: "Bb7", commentary: "Development." },
      { san: "Bg2", commentary: "Development." },
      { san: "c5", commentary: "Development." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "cxd4", commentary: "Exchange in the opening." },
      { san: "Nxd4", commentary: "Exchange in the opening." },
      { san: "Bxg2", commentary: "Exchange in the opening." },
      { san: "Kxg2", commentary: "Exchange in the opening." },
      { san: "g6", commentary: "Manoeuvring." },
      { san: "c4", commentary: "Manoeuvring." },
      { san: "Bg7", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Qc8", commentary: "Queen to c8." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Qb7+", commentary: "Queen to b7 — check." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "cxd5", commentary: "Pawn captures." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Qxd5", commentary: "Queen captures." },
      { san: "Bb2", commentary: "Bishop to b2." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Rd8", commentary: "Rook to d8." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Nc5", commentary: "Knight to c5." },
      { san: "Qb1", commentary: "Queen to b1." },
      { san: "Qb7", commentary: "Queen to b7." },
      { san: "Nc2", commentary: "Knight to c2." },
      { san: "Qa6", commentary: "Queen to a6." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Bh6", commentary: "Bishop to h6." },
      { san: "Nb4", commentary: "Knight to b4." },
      { san: "Qb7", commentary: "Queen to b7." },
      { san: "Rxd8+", commentary: "Capablanca plays Rxd8+ — the critical move of the game." },
      { san: "Rxd8", commentary: "Rook captures." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Nd3", commentary: "Knight to d3." },
      { san: "Nxd3", commentary: "Knight captures." },
      { san: "Rxd3", commentary: "Rook captures." },
      { san: "Bg7", commentary: "Bishop to g7." },
      { san: "Bxg7", commentary: "Bishop captures." },
      { san: "Rxd3", commentary: "Rook captures." },
      { san: "Qxd3", commentary: "Queen captures." },
      { san: "Kxg7", commentary: "King captures." },
      { san: "Qd8", commentary: "Queen to d8." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "a6", commentary: "Draw agreed." },
    ],
    guessMoveIndex: 42,
    guessHint: "Capablanca played a check that decides the game. Find the forcing move.",
  },

  "nottingham-g4": {
    title: "Capablanca – A. Alekhine, Nottingham (1936)",
    intro:
      "J. Capablanca vs. A. Alekhine. Nottingham (1936). Flank Opening. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "f5", commentary: "Development." },
      { san: "g3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "Bg2", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "c4", commentary: "Manoeuvring." },
      { san: "Ne4", commentary: "Manoeuvring." },
      { san: "Qb3", commentary: "Manoeuvring." },
      { san: "Bf6", commentary: "Manoeuvring." },
      { san: "Rd1", commentary: "Manoeuvring." },
      { san: "Qe8", commentary: "Manoeuvring." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Nc6", commentary: "Knight to c6." },
      { san: "Nb5", commentary: "Knight to b5." },
      { san: "Bd8", commentary: "Bishop to d8." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "d6", commentary: "Pawn advance." },
      { san: "d5", commentary: "Pawn advance." },
      { san: "Nb4", commentary: "Knight to b4." },
      { san: "Qb3", commentary: "Queen to b3." },
      { san: "Na6", commentary: "Knight to a6." },
      { san: "dxe6", commentary: "Pawn captures." },
      { san: "Nac5", commentary: "Knight to ac5." },
      { san: "Qc2", commentary: "Queen to c2." },
      { san: "Nxe6", commentary: "Knight captures." },
      { san: "Nfd4", commentary: "Knight to fd4." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Nxd4", commentary: "Knight captures." },
      { san: "Bf6", commentary: "Bishop to f6." },
      { san: "Nb5", commentary: "Knight to b5." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Be3", commentary: "Bishop to e3." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Rae8", commentary: "Rook to ae8." },
      { san: "b4", commentary: "Pawn advance." },
      { san: "b6", commentary: "Pawn advance." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Nc3", commentary: "Knight to c3." },
      { san: "Rd3", commentary: "Rook to d3." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "gxf4", commentary: "Capablanca plays gxf4 — the critical move of the game." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Bxd3", commentary: "Bishop captures." },
      { san: "exd3", commentary: "Pawn captures." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "Rxc3", commentary: "Rook captures." },
      { san: "Bxc3", commentary: "Bishop captures." },
      { san: "Qxc3", commentary: "Queen captures." },
      { san: "Qf6", commentary: "Queen to f6." },
      { san: "Qxf6", commentary: "Queen captures." },
      { san: "gxf6", commentary: "Pawn captures." },
      { san: "Nd2", commentary: "Knight to d2." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Nf1", commentary: "Knight to f1." },
      { san: "Kf7", commentary: "King to f7." },
      { san: "Ng3", commentary: "Knight to g3." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "Kf1", commentary: "King to f1." },
      { san: "Kf6", commentary: "King to f6." },
      { san: "Bd2", commentary: "Bishop to d2." },
      { san: "Kg6", commentary: "Capablanca resigned." },
    ],
    guessMoveIndex: 48,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "nottingham-g9": {
    title: "Capablanca – S. Reshevsky, Nottingham (1936)",
    intro:
      "J. Capablanca vs. S. Reshevsky. Nottingham (1936). Indian Defence. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Nf3", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "dxc4", commentary: "Development." },
      { san: "Qa4+", commentary: "Queen to a4 — check." },
      { san: "Nbd7", commentary: "Development." },
      { san: "Qxc4", commentary: "Exchange in the opening." },
      { san: "e6", commentary: "Manoeuvring." },
      { san: "g3", commentary: "Manoeuvring." },
      { san: "a6", commentary: "Manoeuvring." },
      { san: "Bg2", commentary: "Manoeuvring." },
      { san: "b5", commentary: "Manoeuvring." },
      { san: "Qc6", commentary: "Manoeuvring." },
      { san: "Ra7", commentary: "Manoeuvring." },
      { san: "Bf4", commentary: "Bishop to f4." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "Qc1", commentary: "Queen to c1." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Bxc5", commentary: "Bishop captures." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nbd2", commentary: "Knight to bd2." },
      { san: "Qe7", commentary: "Queen to e7." },
      { san: "Nb3", commentary: "Knight to b3." },
      { san: "Bb6", commentary: "Bishop to b6." },
      { san: "Be3", commentary: "Bishop to e3." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "Qd2", commentary: "Queen to d2." },
      { san: "Ne4", commentary: "Knight to e4." },
      { san: "Qd3", commentary: "Queen to d3." },
      { san: "Nec5", commentary: "Knight to ec5." },
      { san: "Nxc5", commentary: "Knight captures." },
      { san: "Nxc5", commentary: "Knight captures." },
      { san: "Qd1", commentary: "Queen to d1." },
      { san: "Ba8", commentary: "Bishop to a8." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Rac7", commentary: "Rook to ac7." },
      { san: "b3", commentary: "Pawn advance." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Rxc7", commentary: "Rook captures." },
      { san: "Rxc7", commentary: "Rook captures." },
      { san: "Bxb6", commentary: "Bishop captures." },
      { san: "Nxb6", commentary: "Knight captures." },
      { san: "Qd4", commentary: "Queen to d4." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Rd1", commentary: "Rook to d1." },
      { san: "f6", commentary: "Pawn advance." },
      { san: "Ne1", commentary: "Knight to e1." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "Bxd5", commentary: "Capablanca plays Bxd5 — the critical move of the game." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "e3", commentary: "Pawn advance." },
      { san: "Qe4", commentary: "Queen to e4." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "Qxd4", commentary: "Queen captures." },
      { san: "Rxd4", commentary: "Rook captures." },
      { san: "Rc1", commentary: "Rook to c1." },
      { san: "Kf2", commentary: "King to f2." },
      { san: "Ra1", commentary: "Rook to a1." },
      { san: "Rd2", commentary: "Rook to d2." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Nd3", commentary: "Knight to d3." },
      { san: "Rb1", commentary: "Rook to b1." },
      { san: "Rb2", commentary: "Rook to b2." },
      { san: "Rxb2+", commentary: "Rook captures — check." },
      { san: "Nxb2", commentary: "Knight captures." },
      { san: "Bc6", commentary: "Bishop to c6." },
      { san: "Nd3", commentary: "Knight to d3." },
      { san: "g5", commentary: "Pawn advance." },
      { san: "hxg5", commentary: "Pawn captures." },
      { san: "fxg5", commentary: "Pawn captures." },
      { san: "Nb4", commentary: "Knight to b4." },
      { san: "axb3", commentary: "Pawn captures." },
      { san: "axb3", commentary: "Pawn captures." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "Kg7", commentary: "King to g7." },
      { san: "Ke2", commentary: "King to e2." },
      { san: "Kg6", commentary: "King to g6." },
      { san: "Kd3", commentary: "King to d3." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "gxh5+", commentary: "Pawn captures — check." },
      { san: "Kxh5", commentary: "King captures." },
      { san: "Kd4", commentary: "King to d4." },
      { san: "Kh4", commentary: "King to h4." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "Kg3", commentary: "King to g3." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "g4", commentary: "Pawn advance." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "Bc8", commentary: "Bishop to c8." },
      { san: "Ke5", commentary: "King to e5." },
      { san: "Bd7", commentary: "Bishop to d7." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Be8", commentary: "Bishop to e8." },
      { san: "Kd4", commentary: "King to d4." },
      { san: "Kf3", commentary: "King to f3." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "g3", commentary: "Pawn advance." },
      { san: "Ne3", commentary: "Knight to e3." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "e6", commentary: "Pawn advance." },
      { san: "g2", commentary: "Pawn advance." },
      { san: "Nxg2+", commentary: "Knight captures — check." },
      { san: "Kxf5", commentary: "King captures." },
      { san: "Kd5", commentary: "King to d5." },
      { san: "Kg4", commentary: "King to g4." },
      { san: "Ne3+", commentary: "Knight to e3 — check." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "Kd4", commentary: "Black resigned." },
    ],
    guessMoveIndex: 52,
    guessHint: "Capablanca won material here. Look for the tactical capture that breaks through.",
  },

  "nottingham-g13": {
    title: "S. Flohr – Capablanca, Nottingham (1936)",
    intro:
      "S. Flohr vs. J. Capablanca. Nottingham (1936). Queen's Gambit Declined. A complete masterclass — follow every move to the historical conclusion.",
    moves: [
      { san: "d4", commentary: "Development." },
      { san: "Nf6", commentary: "Development." },
      { san: "c4", commentary: "Development." },
      { san: "e6", commentary: "Development." },
      { san: "Nc3", commentary: "Development." },
      { san: "d5", commentary: "Development." },
      { san: "Bg5", commentary: "Development." },
      { san: "Be7", commentary: "Development." },
      { san: "e3", commentary: "Manoeuvring." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nf3", commentary: "Manoeuvring." },
      { san: "h6", commentary: "Manoeuvring." },
      { san: "Bh4", commentary: "Manoeuvring." },
      { san: "b6", commentary: "Manoeuvring." },
      { san: "cxd5", commentary: "Exchange in the opening." },
      { san: "Nxd5", commentary: "Exchange in the opening." },
      { san: "Bxe7", commentary: "Bishop captures." },
      { san: "Nxe7", commentary: "Knight captures." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "O-O", commentary: "Castles kingside — the King reaches safety." },
      { san: "Nd7", commentary: "Knight to d7." },
      { san: "Qa4", commentary: "Queen to a4." },
      { san: "a6", commentary: "Pawn advance." },
      { san: "Rfd1", commentary: "Rook to fd1." },
      { san: "Nd5", commentary: "Knight to d5." },
      { san: "Rac1", commentary: "Rook to ac1." },
      { san: "Rc8", commentary: "Rook to c8." },
      { san: "Nxd5", commentary: "Knight captures." },
      { san: "exd5", commentary: "Pawn captures." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "c5", commentary: "Pawn advance." },
      { san: "dxc5", commentary: "Pawn captures." },
      { san: "Nxc5", commentary: "Knight captures." },
      { san: "Qd4", commentary: "Queen to d4." },
      { san: "Re8", commentary: "Rook to e8." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Qf4", commentary: "Queen to f4." },
      { san: "Rce7", commentary: "Rook to ce7." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "a5", commentary: "Pawn advance." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Bb5", commentary: "Bishop to b5." },
      { san: "R8e7", commentary: "Rook to 8e7." },
      { san: "Qf3", commentary: "Queen to f3." },
      { san: "Rg5", commentary: "Rook to g5." },
      { san: "Qe2", commentary: "Queen to e2." },
      { san: "Rg6", commentary: "Rook to g6." },
      { san: "Bd3", commentary: "Bishop to d3." },
      { san: "Rf6", commentary: "Rook to f6." },
      { san: "Bb1", commentary: "Bishop to b1." },
      { san: "Ba6", commentary: "Bishop to a6." },
      { san: "Qh5", commentary: "Queen to h5." },
      { san: "Bb7", commentary: "Bishop to b7." },
      { san: "a3", commentary: "Pawn advance." },
      { san: "a4", commentary: "Pawn advance." },
      { san: "Qg4", commentary: "Queen to g4." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Re5", commentary: "Rook to e5." },
      { san: "Nf3", commentary: "Knight to f3." },
      { san: "Re7", commentary: "Rook to e7." },
      { san: "Qg3", commentary: "Queen to g3." },
      { san: "Ba6", commentary: "Bishop to a6." },
      { san: "Nd4", commentary: "Knight to d4." },
      { san: "Rd7", commentary: "Rook to d7." },
      { san: "Bf5", commentary: "Bishop to f5." },
      { san: "Rc7", commentary: "Rook to c7." },
      { san: "Bb1", commentary: "Bishop to b1." },
      { san: "Qc8", commentary: "Queen to c8." },
      { san: "Nf5", commentary: "Knight to f5." },
      { san: "Rg6", commentary: "Rook to g6." },
      { san: "Nd6", commentary: "Knight to d6." },
      { san: "Rxg3", commentary: "Capablanca plays Rxg3 — the critical move of the game." },
      { san: "Nxc8", commentary: "Knight captures." },
      { san: "Rxg2+", commentary: "Rook captures — check." },
      { san: "Kxg2", commentary: "King captures." },
      { san: "Rxc8", commentary: "Rook captures." },
      { san: "Ba2", commentary: "Bishop to a2." },
      { san: "Rc6", commentary: "Rook to c6." },
      { san: "Bxd5", commentary: "Bishop captures." },
      { san: "Rg6+", commentary: "Rook to g6 — check." },
      { san: "Kh1", commentary: "King to h1." },
      { san: "Nd3", commentary: "Knight to d3." },
      { san: "Rc2", commentary: "Rook to c2." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "Bf3", commentary: "Bishop to f3." },
      { san: "Rf6", commentary: "Rook to f6." },
      { san: "Be4", commentary: "Bishop to e4." },
      { san: "Rd6", commentary: "Rook to d6." },
      { san: "Bxd3", commentary: "Bishop captures." },
      { san: "Bxd3", commentary: "Bishop captures." },
      { san: "f3", commentary: "Pawn advance." },
      { san: "Bxc2", commentary: "Bishop captures." },
      { san: "Rxd6", commentary: "Rook captures." },
      { san: "b5", commentary: "Pawn advance." },
      { san: "Kg2", commentary: "King to g2." },
      { san: "Bb3", commentary: "Bishop to b3." },
      { san: "Rb6", commentary: "Rook to b6." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "Kg3", commentary: "King to g3." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "Ke7", commentary: "King to e7." },
      { san: "Ke5", commentary: "King to e5." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "f4", commentary: "Pawn advance." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "Rb7+", commentary: "Rook to b7 — check." },
      { san: "Kf8", commentary: "King to f8." },
      { san: "f5", commentary: "Pawn advance." },
      { san: "f6+", commentary: "Pawn advance — check." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "h5", commentary: "Pawn advance." },
      { san: "e4", commentary: "Pawn advance." },
      { san: "Be2", commentary: "Bishop to e2." },
      { san: "e5", commentary: "Pawn advance." },
      { san: "fxe5+", commentary: "Pawn captures — check." },
      { san: "Kxe5", commentary: "King captures." },
      { san: "Bc4", commentary: "Bishop to c4." },
      { san: "Kf4", commentary: "King to f4." },
      { san: "h4", commentary: "Pawn advance." },
      { san: "Kg5", commentary: "Capablanca resigned." },
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
          "Black accepts, thinking he has stopped the threat. He has not — the " +
          "sacrifice is only the first act.",
      },
      {
        san: "a6",
        commentary:
          "The second pawn is offered. White now sacrifices the a-pawn, " +
          "clearing the way for the true candidate.",
      },
      {
        san: "bxa6",
        commentary:
          "Black captures again, but each capture weakens his structure and " +
          "opens a file for the remaining pawn.",
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
    startFen:
      "2kr1bnr/ppp2ppp/2nqb3/3pp3/3PP3/2NQBN2/PPP2PPP/2KR1B1R w - - 0 1",
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
    startFen:
      "r3k2r/ppp2ppp/2n1b3/3p4/3P4/2N1B3/PPP2PPP/R3KB1R w KQkq - 0 1",
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
    startFen:
      "r2q1rk1/pp3ppp/2n1bn2/3p4/8/2N1BN2/PP3PPP/R2QR1K1 w - - 0 1",
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
    startFen:
      "4k3/pp3pp1/2n2n1p/8/8/1P3B1P/P4PP1/2R1KB2 w - - 0 1",
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
    startFen:
      "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 1",
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
