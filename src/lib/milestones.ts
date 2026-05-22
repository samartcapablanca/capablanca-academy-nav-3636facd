// Milestone archive data: three career era nodes, each containing tournaments,
// each tournament containing individual games whose IDs map into LESSONS.

export type ArchiveGame = {
  id: string; // matches a key in LESSONS for the replay
  num: number;
  white: string;
  black: string;
  opening: string;
  result: "1-0" | "0-1" | "½-½";
  // Optional puzzle data — mirrors the Open Archive shape. When present, the
  // game joins the shared PUZZLE_POOL and can surface as the Daily Capablanca
  // Position on the dashboard.
  puzzleFen?: string;
  winningMove?: string;
  hint?: string;
  successText?: string;
};

export type ArchiveTournament = {
  id: string;
  name: string;
  year: string;
  place: string;
  blurb: string;
  games: ArchiveGame[];
};

export type ArchiveNode = {
  id: string;
  era: string;
  range: string;
  title: string;
  tagline: string;
  tournaments: ArchiveTournament[];
};

export const ARCHIVE: ArchiveNode[] = [
  {
    id: "rise",
    era: "Node I",
    range: "1909 — 1914",
    title: "The Rise",
    tagline:
      "A young Cuban announces himself to the chess world, dispatching America's champion and conquering Europe's elite.",
    tournaments: [
      {
        id: "marshall-1909",
        name: "Marshall — Capablanca Match",
        year: "1909",
        place: "United States",
        blurb: "+8 −1 =14. A 20-year-old outclasses the U.S. champion.",
        games: [
          { id: "marshall-g1", num: 1, white: "F. Marshall", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "½-½" },
          { id: "marshall-g7", num: 7, white: "F. Marshall", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "1-0" },
          { id: "marshall-g10", num: 10, white: "J. Capablanca", black: "F. Marshall", opening: "Open Game", result: "½-½" },
          { id: "marshall-g23", num: 23, white: "F. Marshall", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "0-1" },
        ],
      },
      {
        id: "sansebastian-1911",
        name: "San Sebastián Tournament",
        year: "1911",
        place: "Spain",
        blurb: "First international super-tournament. Clear first place ahead of Rubinstein and Vidmar.",
        games: [
          { id: "sansebastian-g1", num: 1, white: "J. Capablanca", black: "O. Bernstein", opening: "Open Game", result: "1-0" },
          { id: "sansebastian-g4", num: 4, white: "J. Capablanca", black: "A. Burn", opening: "Ruy López", result: "1-0" },
          { id: "sansebastian-g9", num: 9, white: "J. Capablanca", black: "D. Janowski", opening: "Queen's Gambit Declined", result: "1-0" },
          { id: "sansebastian-g14", num: 14, white: "A. Rubinstein", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "1-0" },
        ],
      },
    ],
  },
  {
    id: "champion",
    era: "Node II",
    range: "1915 — 1926",
    title: "The World Championship Era",
    tagline:
      "From challenger to undisputed champion. Capablanca crafts a style so precise contemporaries call it 'the chess machine.'",
    tournaments: [
      {
        id: "havana-1921",
        name: "Lasker — Capablanca World Championship",
        year: "1921",
        place: "Havana",
        blurb: "+4 −0 =10. The crown changes hands without Capablanca losing a single game.",
        games: [
          { id: "havana-g1", num: 1, white: "J. Capablanca", black: "E. Lasker", opening: "Queen's Gambit Declined", result: "½-½" },
          { id: "havana-g5", num: 5, white: "J. Capablanca", black: "E. Lasker", opening: "Queen's Gambit Declined", result: "1-0" },
          { id: "havana-g10", num: 10, white: "E. Lasker", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "0-1" },
          { id: "havana-g11", num: 11, white: "J. Capablanca", black: "E. Lasker", opening: "Queen's Gambit Declined", result: "1-0" },
          { id: "havana-g14", num: 14, white: "E. Lasker", black: "J. Capablanca", opening: "Open Game", result: "0-1" },
        ],
      },
      {
        id: "london-1922",
        name: "London International Tournament",
        year: "1922",
        place: "London",
        blurb: "Undefeated first place. Drafts the famous 'London Rules' for future title matches.",
        games: [
          { id: "london-g1", num: 1, white: "A. Alekhine", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "½-½" },
          { id: "london-g5", num: 5, white: "J. Capablanca", black: "E. Bogoljubov", opening: "Open Game", result: "1-0" },
          { id: "london-g8", num: 8, white: "A. Rubinstein", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "½-½" },
          { id: "london-g13", num: 13, white: "J. Capablanca", black: "M. Vidmar", opening: "Queen's Gambit Declined", result: "1-0" },
        ],
      },
    ],
  },
  {
    id: "rivalry",
    era: "Node III",
    range: "1927 — 1941",
    title: "Rivalry & Later Career",
    tagline:
      "The crown lost in Buenos Aires becomes a lifelong rivalry. Yet the master's brilliance burns brightest in his final tournaments.",
    tournaments: [
      {
        id: "alekhine-1927",
        name: "Alekhine — Capablanca World Championship",
        year: "1927",
        place: "Buenos Aires",
        blurb: "+3 −6 =25. A grueling 34-game match; the title passes to Alekhine.",
        games: [
          { id: "alekhine-g1", num: 1, white: "J. Capablanca", black: "A. Alekhine", opening: "Open Game", result: "0-1" },
          { id: "alekhine-g11", num: 11, white: "J. Capablanca", black: "A. Alekhine", opening: "Queen's Gambit Declined", result: "0-1" },
          { id: "alekhine-g21", num: 21, white: "J. Capablanca", black: "A. Alekhine", opening: "Queen's Gambit Declined", result: "0-1" },
          { id: "alekhine-g32", num: 32, white: "A. Alekhine", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "1-0" },
          { id: "alekhine-g34", num: 34, white: "A. Alekhine", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "1-0" },
        ],
      },
      {
        id: "nottingham-1936",
        name: "Nottingham International",
        year: "1936",
        place: "England",
        blurb: "Shared first with Botvinnik; defeats both reigning and former champions.",
        games: [
          { id: "nottingham-g1", num: 1, white: "J. Capablanca", black: "M. Botvinnik", opening: "Flank Opening", result: "½-½" },
          { id: "nottingham-g4", num: 4, white: "J. Capablanca", black: "A. Alekhine", opening: "Flank Opening", result: "1-0" },
          { id: "nottingham-g9", num: 9, white: "J. Capablanca", black: "S. Reshevsky", opening: "Indian Defence", result: "1-0" },
          { id: "nottingham-g13", num: 13, white: "S. Flohr", black: "J. Capablanca", opening: "Queen's Gambit Declined", result: "1-0" },
        ],
      },
    ],
  },
];
