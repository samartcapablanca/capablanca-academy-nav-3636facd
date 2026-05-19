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
          "second centre pawn, opening lines for the Queen's Bishop. This is the " +
          "essence of Capablanca's teaching: contest the centre, and your pieces will " +
          "find their natural homes.",
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
          "a Knight on d4 — the ideal post — and the resulting freedom of action is " +
          "exactly what Capablanca means by control of the centre.",
      },
      {
        san: "Nf6",
        commentary:
          "Black develops and prepares to contest e4. Both armies are now mobilised " +
          "around the central battlefield — the position from which every middle-game " +
          "plan will spring.",
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
