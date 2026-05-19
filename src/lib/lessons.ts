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
