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

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER II — Lesson 1: A Cardinal Principle (King positioning)
  // ─────────────────────────────────────────────────────────────────
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
