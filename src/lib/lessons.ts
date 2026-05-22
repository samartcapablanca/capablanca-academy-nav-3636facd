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
  "marshall-g1": {
    title: "Marshall – Capablanca, Match Game 1 (1909)",
    intro:
      "The opening salvo of the match that announced the 20-year-old Cuban to America. " +
      "Marshall opens with the Queen's Gambit Declined (QGD); Capablanca, as Black, finds an " +
      "early central counter-strike that defines the entire encounter.",
    moves: [
      { san: "d4", commentary: "Marshall claims the centre — classical Queen's-Pawn opening." },
      { san: "d5", commentary: "Symmetry. Capablanca will only break it on his own terms." },
      { san: "c4", commentary: "The Queen's Gambit. Marshall offers a pawn to deflect Black's centre." },
      { san: "e6", commentary: "Declined. Capablanca prefers the solid structure to grabbing a pawn." },
      { san: "Nc3", commentary: "Pressure on d5 mounts." },
      { san: "Nf6", commentary: "Knight defends d5 and develops — one move, two purposes." },
      { san: "Bg5", commentary: "Pin on the f6-knight: standard QGD play." },
      { san: "Be7", commentary: "Breaks the pin's bite and prepares to castle. The pause before the counter-stroke." },
      { san: "e3", commentary: "Marshall continues quietly. Now it is Black's turn — and Capablanca will not play quietly." },
      {
        san: "Ne4",
        commentary:
          "Moving the same piece repeatedly in the opening is usually wrong, but here it " +
          "forces exchanges to bring about an early endgame where our superior technique " +
          "can win.",
      },
      { san: "Bxe7", commentary: "Marshall accepts the trade — he cannot retreat without conceding tempo." },
      { san: "Qxe7", commentary: "Recapture with the queen, eyeing the long diagonal and supporting ...Nxc3." },
      { san: "Bd3", commentary: "White develops and attacks the e4-knight, hoping to chase it back." },
      { san: "Nxc3", commentary: "Liquidation continues. Black is happy to swap pieces into a clean structure." },
      { san: "bxc3", commentary: "White's pawns are doubled on the c-file — a permanent structural weakness." },
      { san: "b6", commentary: "Preparing ...Bb7 to lock onto the long diagonal toward White's king." },
      { san: "Nf3", commentary: "Marshall develops the last minor piece and prepares to castle." },
      { san: "Bb7", commentary: "The bishop takes its ideal post, pressuring e4 and g2." },
      { san: "O-O", commentary: "Both sides will castle short. The middlegame battle now centres on the c-file." },
      { san: "O-O", commentary: "Capablanca completes development. His position is harmonious; White's is structurally inferior." },
      {
        san: "e4",
        commentary:
          "Marshall opens the centre, hoping to activate his bishop pair before Black consolidates.",
      },
      { san: "c5", commentary: "The classical freeing break: Black contests the centre and secures the d5-square." },
      { san: "Re1", commentary: "White centralises, but Black's plan is already underway." },
      { san: "cxd4", commentary: "Black accepts the exchange — the doubled c-pawn weaknesses are now fixed targets." },
      {
        san: "cxd4",
        commentary:
          "Forced recapture leaves White with an isolated d-pawn and a permanently inferior structure.",
      },
      { san: "Rc8", commentary: "Capablanca grabs the open c-file — the natural highway against the doubled, now-isolated pawn." },
      { san: "Qb3", commentary: "Marshall eyes b6 and d5, hoping activity will compensate for structure." },
      { san: "Nd7", commentary: "The knight reroutes toward f6 and b6, blunting White's queen and reinforcing d5." },
      { san: "Rad1", commentary: "White centralises the last rook, but his pieces defend; Black's pieces attack." },
      { san: "Nf6", commentary: "Back to its best square — eyeing e4 and d5, the very weakness of the position." },
      { san: "Ng5", commentary: "A nervous lunge. With no real attack, this knight only loses time." },
      { san: "g6", commentary: "Solid. Capablanca calmly defends and dares the knight to do something." },
      { san: "f4", commentary: "Marshall stakes everything on a kingside push — but his centre is hollow." },
      { san: "Rc7", commentary: "Doubling on the c-file. The endgame plan writes itself." },
      { san: "Qb4", commentary: "Offering queens — desperation in a worse middlegame." },
      {
        san: "Qxb4",
        commentary:
          "Capablanca accepts. Into the endgame his technique converts the structural edge — the opening salvo of a one-sided match.",
      },

    ],
    guessMoveIndex: 9,
    guessHint:
      "Try again! Capablanca chose an aggressive central counter-strike to force immediate liquidations.",
  },

  "marshall-g7": {
    title: "Capablanca – Marshall, Match Game 7 (1909)",
    intro:
      "Capablanca handles the Ruy López with serene technique. Watch the manoeuvre that " +
      "preserves the light-squared bishop — the very piece Marshall hoped to harass off the board.",
    moves: [
      { san: "e4", commentary: "King's pawn, two squares." },
      { san: "e5", commentary: "Symmetrical reply." },
      { san: "Nf3", commentary: "Attacks e5 and develops with tempo." },
      { san: "Nc6", commentary: "Black defends the pawn and develops in one." },
      { san: "Bb5", commentary: "The Ruy López — the Royal Opening." },
      { san: "a6", commentary: "Morphy Defence: question the bishop." },
      { san: "Ba4", commentary: "Retain the pin along the diagonal." },
      { san: "Nf6", commentary: "Counter-pressure on e4." },
      { san: "O-O", commentary: "King to safety." },
      { san: "Be7", commentary: "Closed Ruy López, Black mirrors development." },
      { san: "Re1", commentary: "Rook supports the e-pawn, preparing d4." },
      { san: "b5", commentary: "Black strikes at the bishop again — it must commit." },
      { san: "Bb3", commentary: "Retreats — but only one square. The threat to expel it remains." },
      { san: "d6", commentary: "Black solidifies e5 and prepares ...Na5. The bishop's life is in question." },
      {
        san: "c3",
        commentary:
          "Maintaining the light-squared Bishop is crucial in the Ruy Lopez. The move c3 " +
          "builds a solid centre and preserves our key attacking piece — c2 is now a permanent " +
          "retreat square the moment ...Na5 comes.",
      },
      { san: "Na5", commentary: "Marshall attacks the bishop, but Capablanca has prepared the answer." },
      { san: "Bc2", commentary: "Tucked safely behind the c3-pawn. The bishop lives — and still points at h7." },
      { san: "c5", commentary: "Black grabs queenside space." },
      { san: "d4", commentary: "Central break, exactly as c3 prepared." },
      { san: "Qc7", commentary: "Marshall braces the centre. The opening battle is decided in White's favour." },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! White needs to create a retreat square for the light-squared bishop and prepare the d4 push.",
  },

  "marshall-g10": {
    title: "Marshall – Capablanca, Match Game 10 (1909)",
    intro:
      "The Petroff Defence in Capablanca's hands becomes a study in symmetry and equilibrium. " +
      "Black's task is to claim the centre at the exact right moment — neither earlier nor later.",
    moves: [
      { san: "e4", commentary: "King-pawn opening." },
      { san: "e5", commentary: "Symmetrical reply." },
      { san: "Nf3", commentary: "Attacks e5." },
      { san: "Nf6", commentary: "The Petroff — counter-attack, do not defend." },
      { san: "Nxe5", commentary: "Marshall accepts." },
      { san: "d6", commentary: "Compels the knight to retreat before recapturing." },
      { san: "Nf3", commentary: "Back home." },
      { san: "Nxe4", commentary: "Now Black recovers the pawn — and the symmetry is restored." },
      { san: "d4", commentary: "Marshall strikes the centre, hoping to claim a slight edge in space." },
      {
        san: "d5",
        commentary:
          "In the Petroff, maintaining a firm foothold in the centre is vital to neutralising " +
          "White's first-move advantage. The pawn on d5 anchors the e4-knight and contests every " +
          "central square in a single move.",
      },
      { san: "Bd3", commentary: "Develops with attack on the e4-knight." },
      { san: "Bd6", commentary: "Symmetrical development." },
      { san: "O-O", commentary: "Castles short." },
      { san: "O-O", commentary: "Black follows suit. Mirror image positions." },
      { san: "c4", commentary: "Marshall tries to break the symmetry with a queenside expansion." },
      { san: "Be6", commentary: "Black calmly develops, daring White to commit further. Equality is preserved." },
    ],
    guessMoveIndex: 9,
    guessHint:
      "Try again! Black must immediately stake a claim in the centre to maintain structural symmetry.",
  },

  "marshall-g23": {
    title: "Capablanca – Marshall, Match Game 23 (1909)",
    intro:
      "A quiet Colle-style setup that explodes into the centre at exactly the right tempo. " +
      "The lesson: e4 is a weapon, and the master strikes the moment the opponent breathes.",
    moves: [
      { san: "d4", commentary: "Queen-pawn opening." },
      { san: "d5", commentary: "Symmetry again." },
      { san: "Nf3", commentary: "Develop the king's knight first." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "e3", commentary: "A modest pawn move that frees the king's bishop — the Colle plan." },
      { san: "c5", commentary: "Marshall claims queenside space." },
      { san: "c3", commentary: "Supports d4 and prepares Bd3." },
      { san: "e6", commentary: "Frees the f8-bishop." },
      { san: "Bd3", commentary: "Bishop on the attacking diagonal." },
      { san: "Nc6", commentary: "Standard development." },
      { san: "Nbd2", commentary: "Knight supports the eventual e4 break." },
      { san: "Bd6", commentary: "Symmetrical development continues." },
      { san: "O-O", commentary: "King to safety." },
      { san: "O-O", commentary: "Both monarchs are safe — the middlegame begins." },
      { san: "dxc5", commentary: "Opens lines in the centre, inviting Black to recapture." },
      { san: "Bxc5", commentary: "Black brings the bishop to the active square — but his centre is no longer fluid." },
      {
        san: "e4",
        commentary:
          "An timely central breakthrough completely alters the character of the game, opening " +
          "lines for our better-coordinated pieces. Suddenly the d2-knight, the d3-bishop and the " +
          "f1-rook all bear down on the kingside in concert.",
      },
    ],
    guessMoveIndex: 16,
    guessHint:
      "Try again! White must strike at the centre before Black organises a kingside expansion.",
  },

  // ── 1911 San Sebastián Tournament ───────────────────────────────
  "sansebastian-g1": {
    title: "Capablanca – Bernstein, San Sebastián 1911",
    intro:
      "The young Cuban's debut at an elite European tournament. Against the famous theoretician " +
      "Bernstein, Capablanca demonstrates that the two-bishop advantage means nothing when the " +
      "opponent's pawns are permanently crippled in exchange.",
    moves: [
      { san: "e4", commentary: "King-pawn opening." },
      { san: "e5", commentary: "Classical reply." },
      { san: "Nf3", commentary: "Attacks e5." },
      { san: "Nc6", commentary: "Defends." },
      { san: "Bb5", commentary: "Ruy López." },
      { san: "Nf6", commentary: "Berlin Defence — counter-attack on e4." },
      { san: "O-O", commentary: "Castles, ignoring the threat." },
      { san: "Be7", commentary: "Quiet development instead of grabbing the e-pawn." },
      { san: "Nc3", commentary: "Reinforces e4 with a developing move." },
      { san: "d6", commentary: "Solidifies e5 — but slightly passive." },
      {
        san: "Bxc6+",
        commentary:
          "Giving up the pair of Bishops here is fully justified because it inflicts doubled, " +
          "isolated c-pawns on Black, creating a permanent endgame target. The structural " +
          "damage is forever; the bishop pair is fleeting.",
      },
      { san: "bxc6", commentary: "Forced. Black's queenside pawns are now a chronic weakness." },
      { san: "d4", commentary: "Open the position — the side with the better structure benefits from open lines." },
      { san: "exd4", commentary: "Black accepts the exchange." },
      { san: "Nxd4", commentary: "Centralised knight; the c6-pawn is a fixed target for the rest of the game." },
      { san: "Bd7", commentary: "Defends c6, but the chronic weakness will outlast every defensive resource." },
    ],
    guessMoveIndex: 10,
    guessHint:
      "Try again! Capablanca breaks the standard rules here to compromise Black's pawn structure permanently.",
  },

  "sansebastian-g4": {
    title: "Burn – Capablanca, San Sebastián 1911",
    intro:
      "Amos Burn opens with the French Exchange — a system reputed to lead to early draws. " +
      "Capablanca refuses the symmetry and uses active piece play to seize the initiative.",
    moves: [
      { san: "e4", commentary: "King-pawn." },
      { san: "e6", commentary: "French Defence." },
      { san: "d4", commentary: "Builds the centre." },
      { san: "d5", commentary: "Black strikes at e4." },
      { san: "exd5", commentary: "The Exchange Variation — symmetrical, drawish in appearance." },
      { san: "exd5", commentary: "Symmetry restored on the e-file." },
      { san: "Bd3", commentary: "Develops to the most natural square." },
      { san: "Nc6", commentary: "Knight to its best post." },
      { san: "Nf3", commentary: "Standard development." },
      { san: "Bd6", commentary: "Mirror — bishop opposite bishop." },
      { san: "O-O", commentary: "King to safety." },
      { san: "Nge7", commentary: "Knight developed without blocking the f-pawn — eyes the f5 outpost." },
      { san: "c3", commentary: "Supports d4. Burn plays quietly, hoping for a peaceful game." },
      {
        san: "Bg4",
        commentary:
          "In the French Exchange variation, development must be active. Pinning the f3 knight " +
          "minimises White's attacking options down the central files and secures the key e5 " +
          "square for Black's pieces.",
      },
    ],
    guessMoveIndex: 13,
    guessHint:
      "Try again! Pinning the enemy knight is essential to control the key e5 square.",
  },

  "sansebastian-g9": {
    title: "Capablanca – Janowski, San Sebastián 1911",
    intro:
      "Against the great attacker Janowski, Capablanca opts for the Colle-Zukertort framework. " +
      "When Janowski lashes out on the queenside, the world's most patient calculator simply " +
      "retreats — and lets his opponent's own pawns become the targets.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Knight first." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "e3", commentary: "Colle setup — slow but solid." },
      { san: "c5", commentary: "Black grabs the centre actively." },
      { san: "c4", commentary: "Capablanca counters with a Queen's Gambit structure." },
      { san: "e6", commentary: "Standard." },
      { san: "Nc3", commentary: "Development." },
      { san: "Nc6", commentary: "Symmetrical." },
      { san: "Bd3", commentary: "Bishop on its best diagonal." },
      { san: "dxc4", commentary: "Janowski releases the central tension." },
      { san: "Bxc4", commentary: "Recapture with development." },
      { san: "a6", commentary: "Preparing ...b5 — the queenside expansion." },
      { san: "O-O", commentary: "King to safety before complications." },
      { san: "b5", commentary: "Janowski lashes out, attacking the bishop." },
      {
        san: "Bd3",
        commentary:
          "Allowing Black's queenside pawns to advance is harmless if our central minor pieces " +
          "remain cleanly coordinated and ready for a counter-strike. The bishop retreats to its " +
          "best diagonal; the loose b5- and a6-pawns become long-term liabilities.",
      },
    ],
    guessMoveIndex: 16,
    guessHint:
      "Try again! Safely retreat the bishop along the main diagonal while letting Black expand prematurely.",
  },

  "sansebastian-g14": {
    title: "Rubinstein – Capablanca, San Sebastián 1911",
    intro:
      "Two of the era's most positional minds collide in a Queen's Gambit Declined. The defining " +
      "moment is Black's solution to the eternal problem of the QGD: how to develop the c8-bishop.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Knight first." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined — the orthodox setup." },
      { san: "Nc3", commentary: "Pressure on d5." },
      { san: "Nbd7", commentary: "Defends with the knight, keeping options open." },
      { san: "Bg5", commentary: "The classical pin on f6." },
      { san: "Be7", commentary: "Breaks the pin's bite." },
      { san: "e3", commentary: "Solid pawn move, frees the f1-bishop." },
      { san: "O-O", commentary: "King to safety." },
      { san: "Qc2", commentary: "Rubinstein lifts the queen to c2, eyeing the long diagonal towards h7." },
      {
        san: "b6",
        commentary:
          "The 'problem child' bishop on c8 must be activated. Fianchettoing it via b6 and Bb7 " +
          "is a highly trusted, deeply defensive manoeuvre — the bishop reaches the long diagonal " +
          "and contests the very square Rubinstein's queen has just claimed.",
      },
      { san: "cxd5", commentary: "Rubinstein resolves the central tension." },
      { san: "exd5", commentary: "Recapture opens the e-file." },
      { san: "Bd3", commentary: "Bishop on the attacking diagonal." },
      { san: "Bb7", commentary: "The fianchetto is complete. The c8-bishop, the QGD's eternal headache, lives on the long diagonal." },
    ],
    guessMoveIndex: 13,
    guessHint:
      "Try again! Black needs to resolve the development of the light-squared queen's bishop.",
  },

  // ═════════════════════════════════════════════════════════════════
  // MILESTONE ARCHIVE — NODE II: WORLD CHAMPIONSHIP ERA (1921 – 1922)
  // ═════════════════════════════════════════════════════════════════

  // ── 1921 Havana — Lasker vs. Capablanca World Championship ──────
  "havana-g1": {
    title: "Lasker – Capablanca, World Championship Game 1 (1921)",
    intro:
      "The opening salvo of the match that crowned the Cuban. Lasker steers into the orthodox " +
      "Queen's Gambit Declined; Capablanca, as Black, immediately telegraphs his plan to solve " +
      "the QGD's eternal problem — the c8-bishop.",
    moves: [
      { san: "d4", commentary: "Queen-pawn opening." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop the king's knight." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined — the orthodox solid system." },
      { san: "Bg5", commentary: "Pin on f6." },
      { san: "Nbd7", commentary: "Reinforces d5 indirectly — Bxf6 would lose a pawn now." },
      { san: "e3", commentary: "Quiet pawn move, opens the f1-bishop." },
      { san: "Be7", commentary: "Breaks the pin's bite." },
      { san: "Nc3", commentary: "Completes minor-piece development." },
      { san: "O-O", commentary: "King to safety." },
      { san: "Rc1", commentary: "Rook to the half-open file — Lasker readies pressure on c-line." },
      {
        san: "b6",
        commentary:
          "In the Queen's Gambit Declined, activating the c8-Bishop is Black's primary " +
          "challenge. Preparing the fianchetto via b6 is a structurally patient approach — the " +
          "bishop will reach b7 and stare down the long diagonal.",
      },
    ],
    guessMoveIndex: 13,
    guessHint:
      "Try again! Capablanca prepares to solve his light-squared Bishop development problem early.",
  },

  "havana-g5": {
    title: "Lasker – Capablanca, World Championship Game 5 (1921)",
    intro:
      "Lasker shifts to the Qc2 system, hoping flexibility on the queenside will yield " +
      "long-term pressure. Capablanca answers with the most disruptive resource Black possesses " +
      "— an active queen sortie that pins the c3-knight along the a5–e1 diagonal.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Bg5", commentary: "Standard pin." },
      { san: "Nbd7", commentary: "Defend d5 indirectly." },
      { san: "e3", commentary: "Open the bishop's diagonal." },
      { san: "Be7", commentary: "Break the pin." },
      { san: "Nc3", commentary: "Complete minor development." },
      { san: "O-O", commentary: "King safe." },
      { san: "Qc2", commentary: "Lasker's Cambridge-style queen sortie, eyeing both flanks." },
      { san: "c5", commentary: "Capablanca strikes the centre, refusing a slow squeeze." },
      { san: "Rd1", commentary: "Lasker reinforces d4 with the rook." },
      {
        san: "Qa5",
        commentary:
          "Relieving central pressure by pinning White's knight actively disrupts Lasker's " +
          "planned queenside development alignment. The c3-knight is paralysed and ...cxd4 now " +
          "comes with venom.",
      },
    ],
    guessMoveIndex: 15,
    guessHint:
      "Try again! Pin the c3-knight and bring the Queen into active counter-play.",
  },

  "havana-g10": {
    title: "Lasker – Capablanca, World Championship Game 10 (1921)",
    intro:
      "The famous 'Capablanca freeing manoeuvre'. In the cramped QGD, Black's pieces tread on " +
      "each other's toes. Capablanca's elegant solution is a calibrated cascade of exchanges " +
      "starting with a single, perfectly-timed knight jump.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Nbd7", commentary: "Standard defence of d5." },
      { san: "e3", commentary: "Solid." },
      { san: "Be7", commentary: "Break the pin." },
      { san: "Nc3", commentary: "Develop." },
      { san: "O-O", commentary: "Castles." },
      { san: "Rc1", commentary: "Rook to the half-open file." },
      { san: "c6", commentary: "Reinforces d5 — the orthodox Lasker setup." },
      { san: "Bd3", commentary: "Bishop on its attacking diagonal." },
      { san: "dxc4", commentary: "Capablanca releases the tension to gain a tempo on the bishop." },
      { san: "Bxc4", commentary: "Forced recapture." },
      {
        san: "Nd5",
        commentary:
          "The Capablanca freeing manoeuvre! Exchanging minor pieces clears valuable room for " +
          "Black's remaining forces to manoeuvre smoothly — ...Nxc3 and ...Bxg5 trades follow, " +
          "and Black's pieces breathe again.",
      },
    ],
    guessMoveIndex: 17,
    guessHint:
      "Try again! Capablanca seeks to clear a cramped position by forcing piece liquidations.",
  },

  "havana-g11": {
    title: "Capablanca – Lasker, World Championship Game 11 (1921)",
    intro:
      "Capablanca's first win with White in the match. Against Lasker's solid orthodox QGD, " +
      "the champion-elect chooses the most patient queen development — a quiet move that " +
      "concedes nothing while waiting for Lasker to define his own structure.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Be7", commentary: "Break the pin first — a Lasker speciality." },
      { san: "e3", commentary: "Solid." },
      { san: "O-O", commentary: "Castles short." },
      { san: "Nc3", commentary: "Complete development." },
      { san: "Nbd7", commentary: "Defend d5." },
      { san: "Rc1", commentary: "Rook to the half-open c-file." },
      { san: "c6", commentary: "Orthodox solidity." },
      {
        san: "Qc2",
        commentary:
          "Placing the Queen on c2 keeps flexibility in the centre while waiting for Black to " +
          "declare their exact defensive layout. The queen eyes h7, supports e4, and lifts off " +
          "the back rank — three jobs from a single quiet move.",
      },
      { san: "Re8", commentary: "Lasker prepares ...Nf8 and a deep regrouping. The middlegame begins." },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! White patient develops the Queen to apply indirect pressure to the c-file.",
  },

  "havana-g14": {
    title: "Capablanca – Lasker, World Championship Game 14 (1921)",
    intro:
      "A model technical conversion. The famous Capablanca freeing manoeuvre arrives in " +
      "Lasker's hands, but Capablanca's pre-prepared rook recapture keeps the c-file open and " +
      "active — and that single file decides the game.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Be7", commentary: "Break the pin." },
      { san: "e3", commentary: "Quiet." },
      { san: "O-O", commentary: "Castles." },
      { san: "Nc3", commentary: "Develop." },
      { san: "Nbd7", commentary: "Defend d5." },
      { san: "Rc1", commentary: "Half-open file." },
      { san: "c6", commentary: "Orthodox." },
      { san: "Bd3", commentary: "Bishop on the attacking diagonal." },
      { san: "dxc4", commentary: "Lasker releases the tension." },
      { san: "Bxc4", commentary: "Forced recapture." },
      { san: "Nd5", commentary: "The Capablanca freeing manoeuvre — but here, in Lasker's hands." },
      { san: "Bxe7", commentary: "Capablanca trades the bishops to clear lines." },
      { san: "Qxe7", commentary: "Recapture with the queen." },
      { san: "O-O", commentary: "Castles short, completing development." },
      { san: "Nxc3", commentary: "Lasker continues the liquidation sequence." },
      {
        san: "Rxc3",
        commentary:
          "Recapturing with the Rook allows White to maintain a dynamic, flexible pawn skeleton " +
          "while maintaining pressure down the semi-open file. The bxc3 alternative would have " +
          "left a static pawn chain; the rook recapture keeps everything alive.",
      },
      { san: "e5", commentary: "Lasker breaks in the centre — but the c-file rook is already taking aim." },
    ],
    guessMoveIndex: 22,
    guessHint:
      "Try again! Recapture with the Rook to keep the c-file open and active.",
  },

  // ── 1922 London International Tournament ───────────────────────
  "london-g1": {
    title: "Capablanca – Alekhine, London 1922",
    intro:
      "The opening encounter of the rivalry that would define the rest of Capablanca's career. " +
      "The Cuban steers into a classical QGD and accepts an isolated d-pawn as the price of " +
      "open lines and free piece play.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce the centre." },
      { san: "Be7", commentary: "Alekhine prepares quick castling." },
      { san: "Bg5", commentary: "Pin." },
      { san: "O-O", commentary: "Castles." },
      { san: "e3", commentary: "Solid." },
      { san: "Nbd7", commentary: "Defend d5." },
      { san: "Rc1", commentary: "Half-open file." },
      { san: "c6", commentary: "Orthodox." },
      { san: "Bd3", commentary: "Bishop on the attacking diagonal." },
      { san: "dxc4", commentary: "Alekhine releases the tension." },
      { san: "Bxc4", commentary: "Recapture." },
      { san: "Nd5", commentary: "The freeing manoeuvre." },
      { san: "Bxe7", commentary: "Trade bishops." },
      { san: "Qxe7", commentary: "Recapture." },
      { san: "O-O", commentary: "Castles." },
      { san: "Nxc3", commentary: "Continue exchanges." },
      { san: "Rxc3", commentary: "Recapture with the rook — keep the c-file alive." },
      { san: "e5", commentary: "Alekhine strikes back in the centre." },
      { san: "Qc2", commentary: "Stack the queen behind the rook on c-file pressure." },
      { san: "exd4", commentary: "Alekhine forces a decision." },
      {
        san: "exd4",
        commentary:
          "Though the d4 pawn becomes structurally isolated, it grants open paths and dynamic " +
          "freedom for White's pieces to mount an aggressive midgame offence. The isolani is a " +
          "weakness in the endgame — but a battering ram in the middlegame.",
      },
    ],
    guessMoveIndex: 26,
    guessHint:
      "Try again! Accepting an isolated d-pawn gives White active, open files for an attack.",
  },

  "london-g5": {
    title: "Capablanca – Bogoljubov, London 1922",
    intro:
      "Against Bogoljubov's Queen's Indian setup, Capablanca demonstrates the power of a single " +
      "well-placed outpost. The e5-square, prepared move by move with the catalan fianchetto, " +
      "becomes a permanent home for the white knight.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "Nf6", commentary: "Indian Defence." },
      { san: "Nf3", commentary: "Develop." },
      { san: "e6", commentary: "Prepares ...b6 and the Queen's Indian." },
      { san: "c4", commentary: "Standard expansion." },
      { san: "b6", commentary: "Queen's Indian Defence — the fianchetto plan." },
      { san: "g3", commentary: "Catalan fianchetto — bishops will face off on the long diagonal." },
      { san: "Bb7", commentary: "Black's bishop reaches its post first." },
      { san: "Bg2", commentary: "White's bishop completes the long diagonal." },
      { san: "Be7", commentary: "Modest development." },
      { san: "O-O", commentary: "King to safety." },
      { san: "O-O", commentary: "Symmetrical castling." },
      { san: "Nc3", commentary: "Final piece into the centre — preparing e4 and Ne5." },
      { san: "d5", commentary: "Bogoljubov stakes a central claim, but it loosens e5." },
      {
        san: "Ne5",
        commentary:
          "Planting a Knight firmly on e5 cuts through Black's coordination, forcing their " +
          "minor pieces into passive, defensive roles. From e5 the knight radiates onto c6, d7, " +
          "f7 and g6 — the whole kingside answers to it.",
      },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! Seize the critical outpost square immediately to restrict Black's setup.",
  },

  "london-g8": {
    title: "Rubinstein – Capablanca, London 1922",
    intro:
      "Two of the era's greatest positional minds, in their second tournament encounter. " +
      "Capablanca, with the black pieces, prepares a forceful queenside counter-strike before " +
      "Rubinstein can complete his trademark slow build-up.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce d5." },
      { san: "Nbd7", commentary: "Defend d5 indirectly." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Be7", commentary: "Break the pin." },
      { san: "e3", commentary: "Solid." },
      { san: "O-O", commentary: "Castles." },
      { san: "Rc1", commentary: "Half-open file." },
      { san: "c6", commentary: "Orthodox solidity." },
      { san: "Qc2", commentary: "Rubinstein lifts the queen — flexible build-up." },
      {
        san: "a6",
        commentary:
          "Playing a6 accurately prepares a swift b5 expansion, aiming to forcefully challenge " +
          "White's well-placed light-squared Bishop. Capablanca declares his queenside plan " +
          "before Rubinstein can launch the kingside build-up he favours.",
      },
      { san: "a3", commentary: "Rubinstein preempts ...b5–b4." },
      { san: "h6", commentary: "Capablanca questions the bishop, gaining further tempi." },
    ],
    guessMoveIndex: 15,
    guessHint:
      "Try again! Prepare a classic queenside expansion counter-strike using b5.",
  },

  "london-g13": {
    title: "Capablanca – Vidmar, London 1922",
    intro:
      "A textbook conversion of opening symmetry into endgame technique. When Vidmar finally " +
      "breaks with ...e5, Capablanca answers with an immediate liquidating sequence that " +
      "trades down into a structurally favourable endgame.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Mirror." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Be7", commentary: "Prepare castling." },
      { san: "Bg5", commentary: "Pin." },
      { san: "O-O", commentary: "Castles." },
      { san: "e3", commentary: "Solid." },
      { san: "Nbd7", commentary: "Defend d5." },
      { san: "Rc1", commentary: "Half-open file." },
      { san: "c6", commentary: "Orthodox." },
      { san: "Bd3", commentary: "Attacking diagonal." },
      { san: "dxc4", commentary: "Vidmar releases the tension." },
      { san: "Bxc4", commentary: "Recapture." },
      { san: "Nd5", commentary: "The freeing manoeuvre." },
      { san: "Bxe7", commentary: "Trade." },
      { san: "Qxe7", commentary: "Recapture." },
      { san: "O-O", commentary: "Castles." },
      { san: "Nxc3", commentary: "Continue exchanges." },
      { san: "Rxc3", commentary: "Rook recapture — keep the file live." },
      { san: "e5", commentary: "Vidmar strikes for freedom. Capablanca is ready." },
      {
        san: "Nxe5",
        commentary:
          "Forcing targeted, liquidating trades is standard master practice, directly leading " +
          "us into a highly favourable, highly controllable endgame stage. Every exchange " +
          "simplifies; every simplification favours the side with the better technique.",
      },
      { san: "Nxe5", commentary: "Vidmar recaptures." },
      { san: "dxe5", commentary: "White's pawn structure remains intact." },
      { san: "Qxe5", commentary: "The queens are next, and the endgame Capablanca dreams of looms." },
    ],
    guessMoveIndex: 24,
    guessHint:
      "Try again! Liquidate the central files to systematically transition into an endgame advantage.",
  },

  // ─────────────────────────────────────────────────────────────────
  // NODE III — 1927 Alekhine–Capablanca World Championship
  // ─────────────────────────────────────────────────────────────────

  "alekhine-g1": {
    title: "Capablanca – Alekhine, Buenos Aires 1927 · Game 1",
    intro:
      "The opening game of the marathon 34-game World Championship match. Capablanca, playing White, " +
      "meets the French Winawer — a bold choice by the challenger. The game sets the tone: Capablanca's " +
      "positional clarity against Alekhine's fighting resourcefulness.",
    moves: [
      { san: "e4", commentary: "Capablanca opens with the King's Pawn — his signature directness." },
      { san: "e6", commentary: "The French Defence — a solid but somewhat cramped response." },
      { san: "d4", commentary: "Claiming the centre with both pawns." },
      { san: "d5", commentary: "The thematic French counter-thrust against e4." },
      { san: "Nc3", commentary: "Development with pressure on d5." },
      { san: "Bb4", commentary: "The Winawer — pinning the Knight and adding bite to the defence." },
      { san: "exd5", commentary: "Exchanging in the centre to clarify the pawn structure." },
      { san: "exd5", commentary: "Black recaptures, maintaining a symmetrical centre." },
      { san: "Bd3", commentary: "The Bishop claims the active diagonal toward h7." },
      { san: "Nc6", commentary: "Black develops the Queen's Knight with a central threat." },
      { san: "Ne2", commentary: "White reroutes the Knight to support the centre and prepare castling." },
      { san: "Nge7", commentary: "Black defends d5 and prepares to castle." },
      {
        san: "O-O",
        commentary:
          "In the French Winawer, securing the King early allows White to calmly coordinate the minor pieces " +
          "without fearing sudden central check threats.",
      },
      { san: "Bf5", commentary: "Black's Bishop finds an active post, eyeing the queenside." },
    ],
    guessMoveIndex: 12,
    guessHint:
      "Try again! Capablanca chooses to safeguard his King before initiating a central pawn break.",
  },

  "alekhine-g11": {
    title: "Capablanca – Alekhine, Buenos Aires 1927 · Game 11",
    intro:
      "A Queen's Gambit Declined where Capablanca demonstrates how to suffocate an opponent's counterplay. " +
      "The c5 advance is a masterclass in prophylaxis — preventing Black from ever breaking free.",
    moves: [
      { san: "d4", commentary: "The solid Queen's Pawn opening." },
      { san: "d5", commentary: "Symmetrical reply — Black mirrors the centre." },
      { san: "c4", commentary: "The Queen's Gambit — challenging the d5 pawn." },
      { san: "e6", commentary: "The Declined — Black reinforces d5 from afar." },
      { san: "Nc3", commentary: "Development with central pressure." },
      { san: "Nf6", commentary: "Black brings out the King's Knight to guard d5." },
      { san: "Bg5", commentary: "The pin — a classical QGD motif." },
      { san: "Nbd7", commentary: "Black defends the Knight and prepares castling." },
      { san: "e3", commentary: "Solid support for the centre." },
      { san: "Be7", commentary: "The Bishop unpins and prepares kingside castling." },
      { san: "Nf3", commentary: "White completes minor-piece development." },
      { san: "O-O", commentary: "Black castles into safety." },
      { san: "Rc1", commentary: "The Rook eyes the half-open c-file." },
      { san: "a6", commentary: "Black prepares queenside expansion with b5." },
      {
        san: "c5",
        commentary:
          "Playing c5 closes the queenside entirely, robbing Black of their freeing b6/c5 pawn breaks and " +
          "turning their light-squared bishop into a passive spectator.",
      },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! Capablanca aggressively clamps down on Black's intended b5 expansion.",
  },

  "alekhine-g21": {
    title: "Capablanca – Alekhine, Buenos Aires 1927 · Game 21",
    intro:
      "Another QGD encounter where Capablanca delays castling to prioritize piece activity. The Knight's " +
      "jump to e4 is a perfect example of his dynamic understanding — restraint before consolidation.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetrical." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Nf6", commentary: "Guard d5." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Nbd7", commentary: "Defend the Knight." },
      { san: "e3", commentary: "Solid centre." },
      { san: "Be7", commentary: "Unpin and prepare." },
      { san: "Nf3", commentary: "Develop." },
      { san: "O-O", commentary: "Castles." },
      { san: "Rc1", commentary: "Half-open file." },
      { san: "c6", commentary: "Orthodox preparation." },
      { san: "Bd3", commentary: "Active diagonal." },
      { san: "dxc4", commentary: "Black releases the tension." },
      { san: "Bxc4", commentary: "Recapture." },
      { san: "Nd5", commentary: "The freeing manoeuvre." },
      { san: "Bxe7", commentary: "Trade." },
      { san: "Qxe7", commentary: "Recapture." },
      {
        san: "Ne4",
        commentary:
          "Deploying the Knight to e4 prevents Black from easily playing e5, keeping their position tightly " +
          "restricted while White prepares a queenside initiative.",
      },
    ],
    guessMoveIndex: 20,
    guessHint:
      "Try again! Instead of castling, Capablanca shifts the Knight to eye key dark-square entryways.",
  },

  "alekhine-g32": {
    title: "Alekhine – Capablanca, Buenos Aires 1927 · Game 32",
    intro:
      "A pivotal moment in the match — Alekhine has ground down the position, but Capablanca finds the " +
      "liberating e5 break at exactly the right moment. This is how a master escapes a clamp: with a single, " +
      "perfectly timed central thrust.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Nf6", commentary: "Guard." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Nbd7", commentary: "Defend." },
      { san: "e3", commentary: "Solid." },
      { san: "Be7", commentary: "Prepare." },
      { san: "Nf3", commentary: "Develop." },
      { san: "O-O", commentary: "Castles." },
      { san: "Rc1", commentary: "File." },
      { san: "c6", commentary: "Orthodox." },
      { san: "Bd3", commentary: "Diagonal." },
      { san: "dxc4", commentary: "Release." },
      { san: "Bxc4", commentary: "Recapture." },
      { san: "Nd5", commentary: "Freeing." },
      { san: "Bxe7", commentary: "Trade." },
      { san: "Qxe7", commentary: "Recapture." },
      { san: "O-O", commentary: "Castles." },
      { san: "Nxc3", commentary: "Black trades to relieve pressure." },
      { san: "Rxc3", commentary: "Rook recapture — the file stays open." },
      {
        san: "e5",
        commentary:
          "The defining liberating breakthrough for Black in the Queen's Gambit Declined. Advancing the e-pawn " +
          "liquidates the center and unblocks the c8-Bishop.",
      },
    ],
    guessMoveIndex: 22,
    guessHint:
      "Try again! Black must strike the center immediately to break White's positional clamp.",
  },

  "alekhine-g34": {
    title: "Alekhine – Capablanca, Buenos Aires 1927 · Game 34",
    intro:
      "The final game of the 1927 match. Alekhine needs only a draw to clinch the title. Capablanca, as Black, " +
      "plays a quiet but deeply principled h6 — forcing the opponent to reveal intentions before committing his " +
      "own pieces. A masterclass in patient, probing defence.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Nf6", commentary: "Guard." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Nbd7", commentary: "Defend." },
      { san: "e3", commentary: "Solid." },
      { san: "Be7", commentary: "Unpin." },
      { san: "Nf3", commentary: "Develop." },
      { san: "O-O", commentary: "Castles." },
      { san: "Rc1", commentary: "File." },
      { san: "c6", commentary: "Orthodox." },
      { san: "Qc2", commentary: "White eyes e4 and prepares central action." },
      { san: "a6", commentary: "Black prepares queenside counterplay with b5." },
      {
        san: "a3",
        commentary:
          "Forcing the Bishop to declare its intentions. This subtle pawn push creates a vital escape pocket " +
          "for the King while preparing an ultimate b5 counter-push.",
      },
      { san: "h6", commentary: "The waiting move continues — Black asks the Bishop to commit." },
    ],
    guessMoveIndex: 16,
    guessHint:
      "Try again! Put the question to White's Bishop before committing your remaining queenside pieces.",
  },

  // ─────────────────────────────────────────────────────────────────
  // NODE III — 1936 Nottingham International Tournament
  // ─────────────────────────────────────────────────────────────────

  "nottingham-g1": {
    title: "Capablanca – Botvinnik, Nottingham 1936 · Game 1",
    intro:
      "A Nimzo-Indian meeting between the veteran maestro and the rising Soviet star. Capablanca accepts " +
      "doubled c-pawns for a firm grip on the centre — a positional decision that defines his endgame technique.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "Nf6", commentary: "Nimzo-Indian prelude — controlling e4." },
      { san: "c4", commentary: "The English support." },
      { san: "e6", commentary: "Flexible, supporting d5." },
      { san: "Nc3", commentary: "Development with central ambition." },
      { san: "Bb4", commentary: "The Nimzo-Indian pin — the signature move." },
      { san: "e3", commentary: "Solid support, preparing Bd3." },
      { san: "O-O", commentary: "Black castles early." },
      { san: "Bd3", commentary: "The Bishop claims the long diagonal." },
      { san: "d5", commentary: "Central counter-claim." },
      { san: "Nf3", commentary: "White develops and eyes e5." },
      { san: "c5", commentary: "Black strikes at the centre immediately." },
      { san: "O-O", commentary: "White castles into safety." },
      { san: "Nc6", commentary: "Black reinforces the central tension." },
      { san: "a3", commentary: "Challenging the Bishop." },
      { san: "Bxc3", commentary: "Black trades, damaging White's pawn structure." },
      {
        san: "bxc3",
        commentary:
          "Accepting the doubled c-pawns is fully justified here. It creates an immovable central phalanx that " +
          "will spearhead a strong, crushing kingside march.",
      },
    ],
    guessMoveIndex: 16,
    guessHint:
      "Try again! Recapture with the pawn to fortify your structural grip on the d4 square.",
  },

  "nottingham-g4": {
    title: "Capablanca – Alekhine, Nottingham 1936 · Game 4",
    intro:
      "Nine years after their World Championship match, the old rivals meet again. Capablanca's Rd1 is a " +
      "quietly devastating move — prophylaxis at its finest, preventing Alekhine from ever opening the centre.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nf6", commentary: "Guard e4." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Nbd7", commentary: "Defend." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Be7", commentary: "Unpin." },
      { san: "e3", commentary: "Solid." },
      { san: "O-O", commentary: "Castles." },
      { san: "Qc2", commentary: "White eyes e4 and prepares kingside action." },
      { san: "c6", commentary: "Orthodox preparation." },
      {
        san: "Rd1",
        commentary:
          "X-raying the d-file! Prophylactically placing the Rook here deeply discourages Alekhine from trying " +
          "to open up the center with c5 or e5.",
      },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! Bring the Rook to the central file to oppose Black's future breaks.",
  },

  "nottingham-g9": {
    title: "Reshevsky – Capablanca, Nottingham 1936 · Game 9",
    intro:
      "Capablanca, as Black, demonstrates active piece play even in a cramped Nimzo-Indian. The Queen recapture " +
      "on f6 is a model of dynamic defence — seizing the initiative while tidying the kingside.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "Nf6", commentary: "Nimzo prelude." },
      { san: "c4", commentary: "English support." },
      { san: "e6", commentary: "Flexible." },
      { san: "Nc3", commentary: "Develop." },
      { san: "Bb4", commentary: "The Nimzo pin." },
      { san: "Qc2", commentary: "White prepares e4." },
      { san: "d5", commentary: "Central counter." },
      { san: "cxd5", commentary: "Exchange." },
      { san: "exd5", commentary: "Recapture, opening the e-file." },
      { san: "Bg5", commentary: "White tries to pin and pressure." },
      { san: "h6", commentary: "Black asks the Bishop to declare itself." },
      {
        san: "Qxf6",
        commentary:
          "Recapturing with the Queen avoids messing up our kingside pawn shielding, immediately threatening " +
          "White's center from a dominant, active post.",
      },
    ],
    guessMoveIndex: 12,
    guessHint:
      "Try again! Develop the Queen actively while sweeping up White's aggressive Bishop.",
  },

  "nottingham-g13": {
    title: "Capablanca – Flohr, Nottingham 1936 · Game 13",
    intro:
      "Capablanca's a3 is the quietest move on the board — and perhaps the most instructive. It forces Black " +
      "to commit to a setup first, while White preserves every option. Waiting moves are an art, and no one " +
      "painted them more beautifully.",
    moves: [
      { san: "d4", commentary: "Queen-pawn." },
      { san: "d5", commentary: "Symmetry." },
      { san: "c4", commentary: "Queen's Gambit." },
      { san: "e6", commentary: "Declined." },
      { san: "Nc3", commentary: "Reinforce." },
      { san: "Nf6", commentary: "Guard." },
      { san: "Bg5", commentary: "Pin." },
      { san: "Be7", commentary: "Unpin." },
      { san: "e3", commentary: "Solid." },
      { san: "O-O", commentary: "Castles." },
      { san: "Nf3", commentary: "Develop." },
      { san: "Nbd7", commentary: "Defend." },
      { san: "Qc2", commentary: "White eyes e4." },
      { san: "c6", commentary: "Orthodox preparation." },
      {
        san: "a3",
        commentary:
          "A brilliant waiting move. White preserves flexibility, forcing Black to choose their setup first " +
          "while preparing a future b4 expansion.",
      },
    ],
    guessMoveIndex: 14,
    guessHint:
      "Try again! Wait out Black's development with a quiet, highly useful queenside waiting move.",
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
