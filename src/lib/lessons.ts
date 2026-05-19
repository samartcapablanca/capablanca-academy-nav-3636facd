// Lesson content: predefined move sequences with Master's Commentary.
// Move SAN strings are validated by chess.js at runtime.

export type LessonMove = {
  san: string;
  commentary: string;
};

export type LessonContent = {
  title: string;
  intro: string;
  moves: LessonMove[];
};

export const LESSONS: Record<string, LessonContent> = {
  "1-1": {
    title: "Simple Mates",
    intro:
      "We open with the simplest of all checkmates — the queen and king vs. king. Capablanca teaches that the lone king must be driven to the edge of the board.",
    moves: [
      { san: "e4", commentary: "We begin in a standard opening posture; the lesson will continue from a tactical position." },
      { san: "e5", commentary: "Black mirrors, contesting the centre. The principle: occupy and control the centre." },
      { san: "Nf3", commentary: "Develop a knight and threaten the pawn. Every move should develop a piece or improve a position." },
      { san: "Nc6", commentary: "Black defends the pawn while also developing — efficient play." },
      { san: "Bc4", commentary: "The Italian setup. The bishop eyes f7 — the weakest square in Black's camp." },
      { san: "Bc5", commentary: "Symmetry. Both sides have completed minor-piece development on the kingside." },
      { san: "d3", commentary: "A quiet move, supporting e4 and preparing to develop the dark-squared bishop." },
      { san: "Nf6", commentary: "Black completes minor-piece development. We are reaching a balanced middle-game." },
    ],
  },
  "1-2": {
    title: "Pawn Promotion",
    intro:
      "A passed pawn is a hero in disguise. Capablanca shows how a single advanced pawn, properly supported, decides the game.",
    moves: [
      { san: "e4", commentary: "The king's pawn — controls d5 and f5, opens lines for bishop and queen." },
      { san: "c5", commentary: "The Sicilian. Black contests the centre without committing the e-pawn." },
      { san: "Nf3", commentary: "Standard development, eyeing e5 and d4." },
      { san: "d6", commentary: "Black supports a future ...e5 and prepares to develop the king's knight." },
      { san: "d4", commentary: "The classical break. White must open the centre to exploit lead in development." },
      { san: "cxd4", commentary: "Black accepts the exchange — now White will recapture and dominate the centre." },
      { san: "Nxd4", commentary: "A central knight — strong, flexible. Capablanca: 'A knight in the centre is worth two on the rim.'" },
    ],
  },
  "1-3": {
    title: "Control of the Centre",
    intro:
      "Capablanca: 'The centre is the heart of the position.' Every plan in the opening flows from this principle.",
    moves: [
      { san: "d4", commentary: "Queen's pawn — claims the centre with the d-pawn, supports c5 and e5." },
      { san: "d5", commentary: "Black contests immediately. A classical reply." },
      { san: "c4", commentary: "The Queen's Gambit — offering a pawn to deflect Black's d-pawn from the centre." },
      { san: "e6", commentary: "Black declines, supporting d5 with the e-pawn. Solid but slightly passive." },
      { san: "Nc3", commentary: "Adds a third attacker on d5. White piles pressure on the central square." },
      { san: "Nf6", commentary: "Black develops and defends d5 once more." },
      { san: "Bg5", commentary: "Pinning the knight to the queen — a Capablanca favourite in the QGD." },
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
