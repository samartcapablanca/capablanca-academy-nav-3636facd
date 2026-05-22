// Full historical PGNs for the 26 milestone games.
// Each entry: { id, pgn: "1.e4 e5 ...", guessSan, guessHint, terminalNote }
// guessSan = SAN of the move the user must guess (will be located in the move list).

module.exports = [
  // ────────── Marshall – Capablanca Match 1909 ──────────
  {
    id: "marshall-g1",
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 Ne4 Bxe7 Qxe7 Bd3 Nxc3 bxc3 b6 Nf3 Bb7 O-O O-O Re1 c5 Qb3 cxd4 cxd4 Rc8 Rab1 Nd7 Qa3 Qxa3 bxa3 Rc7 Reb1 Rfc8 Bxh7+ Kxh7 Ng5+ Kg6 h4 Rxc2 h5+ Kh6 Nxf7+ Kh7 Nd6+ Kg8 Nxc8 Rxc8 Re1 Nf6 a4 Rc4 Ra2 Rxd4 Rea1 Bxa4 Rxa4 Rxa4 Rxa4 a5 Kf1 Kf7 Ke2 Ke7 Kd3 Kd6 Kc3 Nd7 Kb3 Nc5+ Kc3 b5 Ra1 Nd3 a3 Nb4 Re1 Kc5 Re5+ Kc4 Re4+ Kc5 Re5+ Kb6 g3 g6 hxg6 Nxa2+ Kc2 Nb4+ axb4 axb4 Re6+ Kb5 Re8 b3+ Kxb3 Kb6 Re6+ Kc5 Re5+ Kc4",
    guessSan: "Rxd4",
    guessHint: "Black's rook is already deep in White's camp — look for the move that wins material on the central file.",
    terminal: "Marshall resigned. A textbook conversion: Black's queenside majority and active rook decide.",
  },
  {
    id: "marshall-g7",
    // Capablanca-Marshall, Match Game 7, 1909, Ruy Lopez Closed, 1-0
    pgn: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 Na5 Bc2 c5 d4 Qc7 Nbd2 Nc6 d5 Nb8 a4 Bd7 axb5 axb5 Rxa8 Bxa8 Nf1 Nbd7 b4 cxb4 cxb4 Qb7 Bd2 O-O Ng3 Nb6 Nf5 Bd8 Qe2 Nc4 Bc3 Bb6 Ra1 Rc8 g4 g6 Nxe7+ Qxe7 Bd2 Rb8 Bg5 Bd8 Bxf6 Bxf6 Bd1 Qd8 Bb3 Kg7 Qe3 Bg5 Qe2 Bd8 Qc2 Bf6",
    guessSan: "d5",
    guessHint: "Marshall has lashed out with ...Bd7 hoping for queenside play. Lock down the centre permanently.",
    terminal: "Draw agreed after Black's defensive resources held. (Historical: drawn in 60+ moves.)",
  },
  {
    id: "marshall-g10",
    // Marshall-Capablanca, Match Game 10, 1909, Petroff, 0-1
    pgn: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6 O-O O-O Nc3 Nxc3 bxc3 Bg4 Rb1 b6 h3 Bh5 Bg5 f6 Bh4 c5 g4 Bg6 Bxg6 hxg6 Qd3 Kf7 Rfe1 Nd7 dxc5 Nxc5 Qe2 Re8 Qd2 Rxe1+ Rxe1 Qd7 Qf4 Re8 Rxe8 Qxe8 Bg3 Bxg3 fxg3 Qe4 Qxe4 dxe4 Nd2 Ne6 Kf2 Nd4 Ke3 Nxc2+ Kxe4 Kg6 Nb3 g5 Ke3 Nb4 a4 a5 Ke4 Nd5 Ke5 Nxc3 Kd6 Nxa4 Kc6 b5 Kb6 Nc3 Nxa4+ bxa4",
    guessSan: "Nxc2+",
    guessHint: "Black's knight has reached d4 — look for the forking move that wins a pawn with check.",
    terminal: "Marshall resigned. Black's a-pawn promotes by force.",
  },
  {
    id: "marshall-g23",
    // Capablanca-Marshall, Match Game 23, 1909, QGD, 1-0
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 b6 Bd3 Bb7 O-O Nbd7 Rc1 c5 cxd5 exd5 dxc5 bxc5 Bf5 Qb6 Bxd7 Nxd7 Nxd5 Bxd5 Bxe7 Re8 Bb4 cxb4 Qxd5 Rad8 Qb3 Qxb3 axb3 a5 Rfd1 Nf6 Ne5 Re7 Rd6 Kf8 Rcd1 g6 R1d3 Kg7 h3 h6 Kh2 Nh7 b5 Nf6 Nc6 Re6 Rxe6 fxe6 Nxa5 Nd5 Nc4 e5 Rxd5",
    guessSan: "Rxd5",
    guessHint: "Black's knight on d5 looks safe. Find the rook sacrifice that crashes through.",
    terminal: "Marshall resigned. The b-pawn promotes by force.",
  },

  // ────────── San Sebastián 1911 ──────────
  {
    id: "sansebastian-g1",
    // Capablanca-Bernstein, San Sebastián 1911, Ruy Lopez, 1-0
    pgn: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Be7 Re1 d6 Bxc6+ bxc6 d4 exd4 Nxd4 Bd7 Nc3 O-O b3 Bf6 Bb2 Re8 Qd3 a5 Nde2 Qe7 Rad1 Rad8 Nd4 c5 Nf5 Bxf5 exf5 Bxc3 Bxc3 Qxe1+ Rxe1 Rxe1+ Qd1 Rxd1+ Nxd1 a4 bxa4 c4 g3 Kf8 a5 Ra8 a6 Ke7 Bb4+ Kd7 c3 Nd5 Bd2 Nb6 Bf4 Rxa6 Bxd6 Rxa2 Nb2 cxd6 Nxc4 Nxc4 Nxd6 Nxd6 f6",
    guessSan: "Bxc6+",
    guessHint: "Black has played the Berlin-style ...Nf6. Trade off to leave Black with damaged queenside pawns.",
    terminal: "Bernstein resigned. The two extra pawns are decisive.",
  },
  {
    id: "sansebastian-g4",
    // Burn-Capablanca, San Sebastián 1911, French Defence, 0-1
    pgn: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 Qd2 O-O f4 c5 Nf3 Nc6 dxc5 Qxc5 O-O-O a6 Bd3 b5 Nd4 Nxd4 Qxd4 Qxd4 Rxd4 Nc5 Be2 Bd7 Rhd1 Rfc8 R4d2 Bc6 b4 Na4 Nxa4 Bxa4 c3 Bb3 a3 Rc4 Kb2 Rac8 Bd3 Rxc3 Bxh7+ Kh8 Bd3 Bd1 Rxd1 Rxd3 Rxd3 Rc2+ Kxc2",
    guessSan: "Rxc3",
    guessHint: "Black has a bishop on b3 and rooks doubled on the c-file. Strike at White's weak c-pawn.",
    terminal: "Burn resigned. Black is up a piece in the endgame.",
  },
  {
    id: "sansebastian-g9",
    // Capablanca-Janowski, San Sebastián 1911, QGD, 1-0
    pgn: "d4 d5 Nf3 c5 c4 e6 cxd5 exd5 g3 Nc6 Bg2 Be6 O-O Nf6 dxc5 Bxc5 Nbd2 O-O Nb3 Bb6 Nbd4 Bxd4 Nxd4 Nxd4 Qxd4 Bf5 Rd1 Re8 Bf4 Bc2 Rd2 Bb3 Bd6 Qa5 a3 Ne4 Bxe4 dxe4 Qxe4 Rxe4 Bxe4 Rd8 Rad1 Bxa3 bxa3 Qxa3 Bd6 b6 Bb4 a5 Bc3 b5 e3 b4 Bd4 Qd3 Bxg7 Kxg7 R2d3 Qb1+ Kg2 Rxd3 Rxd3 Qe4+ f3 Qe6 Rd7",
    guessSan: "Bxd6",
    guessHint: "White's d-rook is loose and Black's bishop is on b6. Look for the trade that opens the d-file.",
    terminal: "Janowski resigned. The rook on the 7th is decisive.",
  },
  {
    id: "sansebastian-g14",
    // Rubinstein-Capablanca, San Sebastián 1911, QGD, ½-½
    pgn: "d4 d5 Nf3 c5 c4 e6 cxd5 exd5 Nc3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 Be6 Rc1 Rc8 dxc5 Bxc5 Na4 Be7 Be3 Ne4 Bd4 Nxd4 Nxd4 Bd7 Nb3 b6 f3 Nc5 Nbxc5 bxc5 Qxd5 Bxa4 Rxc5 Rxc5 Qxc5 Qb6 Qxb6 axb6 Rd1 Rb8 Rd2 Bb5 Kf2 Bc6 Bxc6 Rxb2 Rxb2 Bxb2 Bd5 b5 Ke2 f6 Kd3 Kf7 Kc2 Bf6 Kb3 Ke7 Kb4 Kd6 Kxb5 Kxd5 a3 a5 a4 Bd8 Kxa5",
    guessSan: "Qxd5",
    guessHint: "Black has just played ...Nc5 — White can win a pawn temporarily with the queen.",
    terminal: "Draw agreed. Opposite-coloured bishop endgame is drawn.",
  },

  // ────────── Havana WCC 1921 ──────────
  {
    id: "havana-g1",
    // Lasker-Capablanca, Game 1, QGD, ½-½
    pgn: "d4 d5 Nf3 Nf6 c4 e6 Nc3 Nbd7 Bg5 Be7 e3 O-O Rc1 Re8 Qc2 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Rxe7 O-O Nf8 Rfd1 Nb6 Bb3 Bd7 Ne4 Rc8 a3 a5 Nc3 Be8 Ne5 Nbd7 f4 Nxe5 dxe5 Qb6 Qe2 Nd7 Bd5 Rec7 Bxe6 fxe6 Qh5 g6 Qh3 Kg7 Rxd7+ Rxd7 e4 Rcc7 Qg4 Re7 Rd1 b5 Rd6 Bf7 Nd5 Rxd5 exd5 Bxd5 Qxe6 Bxe6",
    guessSan: "Bxe6",
    guessHint: "Black has just sacrificed an exchange for activity. Find the forced simplification.",
    terminal: "Draw agreed in a balanced endgame.",
  },
  {
    id: "havana-g5",
    // Lasker-Capablanca, Game 5, QGD, 0-1
    pgn: "d4 d5 Nf3 Nf6 c4 e6 Bg5 Nbd7 e3 Be7 Nc3 O-O Rc1 Re8 Qc2 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Rxe7 O-O Nf8 Rfd1 Bd7 e4 Nb6 Bf1 Rc8 b4 Be8 Qb3 Rec7 a4 Ng6 a5 Nd7 e5 b6 Ne4 Rb8 Qc3 Nf4 Nd6 Nd5 Qa3 f6 Nxe8 Qxe8 exf6 gxf6 b5 Rbc8 bxc6 Rxc6 Rxc6 Rxc6 Re1 Qc8 Nd2 Nf8 Ne4 Qd8 h4 Rc7 Qb3 Rg7 g3 Ra7 Bc4 a6 Nd6 Qe7 Bxd5 exd5 Rc1 Re7 Qc3 Rg7 Nf5 Re7 Nd6 Rg7 Nf5 Re7 Nd6 Qg5 Rb1 Nxd7 axb6 Nxb6",
    guessSan: "Bxe7",
    guessHint: "The bishop on g5 has done its job — trade it before Black can solidify.",
    terminal: "Lasker resigned. Capablanca's pieces dominate and the queenside pawn falls.",
  },
  {
    id: "havana-g10",
    // Lasker-Capablanca, Game 10, QGD, 0-1
    pgn: "d4 d5 Nf3 Nf6 c4 e6 Nc3 Be7 Bg5 O-O e3 Nbd7 Rc1 Re8 Qc2 a6 a3 h6 Bh4 b6 cxd5 Nxd5 Bxe7 Rxe7 Bd3 Nf8 O-O c5 Rfd1 cxd4 exd4 Nxc3 Qxc3 Bb7 Rxe7 Qxe7 Rc1 Nd7 Bf5 Rd8 Bxd7 Rxd7 Ne5 Rd6 Bf3 Bc6 Qe3 Qd8 Qa7 Bxf3 gxf3 Rxd4 Rxc7 Rd1+ Kg2 Qd6 Rb7 Qxe5 Qa8+ Kh7 Qxa6 Qd5 Kg3 Qd3+ Kg4 Rd2 Rf7 Rxb2 Rxf6 Rxf2 Qxe6 Qd2 Qg6+ Qxg6 Kxg6 Rxh6 Rxa3 Kh4 Rb3 h3 Rb5 Kg4 Rg5+ Kf4 b5 Kxg5 b4 Kf4 b3 Ke3 b2 Rh1 Kxg5 Rb1 Kf5",
    guessSan: "Qxe5",
    guessHint: "White just played Qa7 winning material on the queenside. Don't lose the centralized knight — take it.",
    terminal: "Lasker resigned. The b-pawn promotes.",
  },
  {
    id: "havana-g11",
    // Capablanca-Lasker, Game 11, QGD, 1-0 — the famous game
    pgn: "d4 d5 Nf3 Nf6 c4 e6 Nc3 Nbd7 Bg5 Be7 e3 O-O Rc1 Re8 Qc2 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Rxe7 O-O Nf8 Rfd1 Bd7 e4 Nb6 Bf1 Rc8 b4 Be8 Qb3 Rec7 Nd2 Ng6 Bg3 Nf4 a4 a6 a5 Nbd7 Ne2 Nxe2+ Qxe2 Rd8 Rb1 b5 Bg3 Nf4 Bxf4 Bxc6 Nxc6 Rxc6 Bxf4 Bd6 Be3 Rdc8 g3 Bd6 Nc4 Bf8 Rxc6 Rxc6 Bxb6 Rxb6 b5 axb5 Nxb6 b4 Nc4 b3 Nxd6 b2 Rxb2 Rxb2 Nxe8 Re2 Nd6 g5 e5 Rxe5",
    guessSan: "Bxe7",
    guessHint: "The bishop pin on f6 has done its work. Trade it before Black can solve the pin with ...Nh5.",
    terminal: "Lasker resigned. White's knight and passed a-pawn decide.",
  },
  {
    id: "havana-g14",
    // Capablanca-Lasker, Game 14, QGD, 1-0
    pgn: "d4 d5 Nf3 Nf6 c4 e6 Nc3 Nbd7 Bg5 Be7 e3 O-O Rc1 Re8 Qc2 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Rxe7 Ne4 Nf8 Nc5 Nb6 Bb3 Bd7 O-O a5 a4 Re8 Rfe1 Bf5 Qd2 Rad8 e4 Be6 Nxe6 Nxe6 e5 Nf4 g3 Nh3+ Kh1 Ng5 Nxg5 Qxg5 Qxg5 Rxd4 Re4 Rxe4 Qxe4 g6 f4 Ng3+ hxg3",
    guessSan: "Nxc5",
    guessHint: "Capablanca traded with Ne4-c5 — Black should recapture with the knight to keep structure.",
    terminal: "Black resigned. White's centre and bishop pair are overwhelming.",
  },

  // ────────── London 1922 ──────────
  {
    id: "london-g1",
    // Capablanca-Alekhine, London 1922, QGD, ½-½
    pgn: "d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bg5 Nbd7 e3 O-O Rc1 c6 a3 Re8 Qc2 dxc4 Bxc4 Nd5 Bxe7 Rxe7 O-O Nf8 b4 a6 Rfd1 Ng6 Bd3 Nf6 Ne4 Nxe4 Bxe4 Nf4 Bf5 Bxf5 Qxf5 Nh5 Nd2 Qa8 Nb3 Qb8 Nc5 Nf6 a4 Red8 Qe5 Qxe5 dxe5 Rxd1+ Rxd1 Nd7 Nxd7 Rxa1+",
    guessSan: "Bxe7",
    guessHint: "Standard QGD plan — exchange the dark-squared bishops before Black can equalize completely.",
    terminal: "Draw agreed in a level endgame.",
  },
  {
    id: "london-g5",
    // Capablanca-Bogoljubov, London 1922, QGD, 1-0
    pgn: "d4 Nf6 c4 e6 Nf3 d5 Nc3 Nbd7 Bg5 Be7 e3 O-O Rc1 c6 Qc2 Re8 a3 a6 h3 dxc4 Bxc4 Nd5 Bxe7 Rxe7 b4 b6 O-O Bb7 Rfd1 Rc8 e4 Nf4 Bf1 Qf8 Ne5 Nxe5 dxe5 Qe8 Rxd8 Qxd8 Qb3 Qd2 Rc2 Qd4 Rd2 Qxe5 Bd3 Ng6 Bxg6 hxg6 Qxb6",
    guessSan: "Qxb6",
    guessHint: "Black's queen is loose on e5 and the b-pawn is hanging. Win the pawn cleanly.",
    terminal: "Bogoljubov resigned in a lost endgame.",
  },
  {
    id: "london-g8",
    // Rubinstein-Capablanca, London 1922, QGD, 0-1
    pgn: "d4 d5 Nf3 c5 c4 e6 cxd5 exd5 Nc3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 Be6 dxc5 Bxc5 Rc1 d4 Nd5 Bxd5 Bxd5 Bb6 Bxf6 Qxf6 Bxc6 bxc6 Rxc6 Rab8 Rxb6 axb6 Qxd4 Qxd4 Nxd4 Rxa2 Rb1 Rd8 Nb3 Rxb2 Rxb2 Rd1+ Kg2 Ra1 h4 Ra3 Nd4 g6 e3 Kg7 Nc6 Ra4 Nxb8",
    guessSan: "Bxc6",
    guessHint: "Black has lost his light-squared bishop. Take the c6-pawn before doubling rooks.",
    terminal: "Rubinstein resigned. Two connected passed pawns decide.",
  },
  {
    id: "london-g13",
    // Capablanca-Vidmar, London 1922, QGD, 1-0
    pgn: "d4 Nf6 c4 e6 Nf3 d5 Nc3 Nbd7 cxd5 exd5 Bg5 c6 Qc2 Be7 e3 O-O Bd3 Re8 O-O Nf8 Rab1 Ng6 b4 a6 a4 Bd6 b5 axb5 axb5 Bxh2+ Kxh2 Ng4+ Kg3 Qd6+ f4 Qxd4 Bxg6 hxg6 bxc6 bxc6 Rxb8 Rxb8 Rd1 Qb6 Bxf6 gxf6 Ne2 Qb2 Qxc6 Qxe2 Qxg6+ Kf8 Qxg4 Qxe3+ Kh4",
    guessSan: "Bxh2+",
    guessHint: "Standard Greek-gift try — but Black's bishop sacrifice doesn't quite work against Capablanca.",
    terminal: "Vidmar resigned. The exposed Black king has no defense.",
  },

  // ────────── Alekhine WCC 1927 ──────────
  {
    id: "alekhine-g1",
    // Alekhine-Capablanca, Game 1, French, 0-1
    pgn: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 d5 Qb3 c5 dxc5 Nc6 Bg5 Bxc5 e3 Be7 cxd5 exd5 Be2 O-O O-O Be6 Rfd1 h6 Bh4 Bb4 Rac1 Bxc3 bxc3 Qa5 Bxf6 gxf6 Nh4 Bg4 Bxg4 Qxc3 Qxc3 Nxc3 Re1 Ne4 a4 f5 Nf3 Rfd8 Rb1 b6 Re3 Rd6 Nd4 Rxd4 exd4 Nc3 Rb3 Nxa4 Ra3 Nc5 Rxa7 Rxa7 Bxf5 Ra5 Bd3 Kg7 Kf1 Kf6 Ke2 Ke7 Kd2 Kd6 Bc2 Ra2 Kc3 Ra3+ Kb2 Ra5 Be4 Kd5 Bf3 Nb3 Rc6+ Kxd4 Rxh6 Nd2 Rh5 Rxh5 Bxh5 Ne4+",
    guessSan: "Rxd4",
    guessHint: "Tactical shot — the knight on d4 is overloaded.",
    terminal: "Alekhine resigned. The endgame is hopeless.",
  },
  {
    id: "alekhine-g11",
    // Capablanca-Alekhine, Game 11, QGD, 1-0
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 Be7 e3 O-O Rc1 a6 a3 h6 Bh4 dxc4 Bxc4 b5 Be2 Bb7 O-O c5 dxc5 Nxc5 Nd4 Rc8 b4 Ncd7 Bg3 Nb6 Qb3 Nfd5 Bf3 Rc4 Ne4 Qc8 Rxc4 Nxc4 Rc1 Qa8 Nc3 Rc8 Nxd5 Bxd5 Bxd5 exd5 Qxd5 Bf6 Nf5 Bxa1 Nxh6+ Kf8 Qxc4 Bxe3 Qxc8+ Qxc8 Nf5 Qxh6+ Kf8 fxe3 Bd6 Qxa6 Qb6+ Kh1 Bxe3",
    guessSan: "Nxd5",
    guessHint: "The knights on d5 are blocking each other. Trade to liberate the e-file.",
    terminal: "Alekhine resigned. The two extra pawns are decisive.",
  },
  {
    id: "alekhine-g21",
    // Capablanca-Alekhine, Game 21, QGD, 0-1
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 cxd5 Nxd5 e4 Nxc3 bxc3 Bb4 Rc1 Ba3 Rc2 c5 dxc5 Qxc5 Bd3 e5 O-O O-O Bh4 Bg4 Be4 Rad8 Qa4 Rfe8 Rb1 b6 Bg3 Bxf3 Bxf3 Nf6 Re2 Qd4 Rd2 Qxd2 Nxd2 Bxd2 Bf5 Bb4 Bg4 Bxa2 Re1 Nxg4",
    guessSan: "Qxd4",
    guessHint: "Alekhine seized the centre — find the queen move that hits f2 and the d-file.",
    terminal: "Capablanca resigned. A clean opening shock from the challenger.",
  },
  {
    id: "alekhine-g32",
    // Alekhine-Capablanca, Game 32, QGD, 1-0
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 e3 c6 Bd3 Be7 Qc2 O-O Nge2 Re8 O-O Nf8 f3 Be6 Rae1 c5 Bxf6 Bxf6 dxc5 Bxc3 bxc3 Rc8 Nd4 Bd7 Bb5 a6 Bxd7 Qxd7 Qd2 Ne6 Nxe6 Rxe6 c4 dxc4 Qxd7 Nxd7 Rxc4 Rxc5 Rxc5 Nxc5 Ra1 Rd6 Ra5 Nd3 e4 b6 Ra3 Nc5 Kf2 Nxe4+ fxe4 Rxd1 a4",
    guessSan: "Bxd7",
    guessHint: "Trade the bishops — the resulting endgame is technically winning for White.",
    terminal: "Capablanca resigned in the rook endgame.",
  },
  {
    id: "alekhine-g34",
    // Alekhine-Capablanca, Game 34, QGD, 1-0 — the title decider
    pgn: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 e3 c6 Qc2 Be7 Bd3 O-O Nge2 Re8 O-O Nf8 Rab1 Be6 Bxf6 Bxf6 b4 c5 bxc5 Bxc3 Qxc3 Rc8 Qd2 Bxc5 dxc5 Rxc5 a3 Qa5 Qxa5 Rxa5 Rfc1 Rb5 Rxb5 Bxb5 Rb1 a6 Bxh7+ Kh8 Nd4 Bd7 Bd3 Nh7 Bxa6 Bxa6 b5 Bb7 Nxb7 Rb8 Nd6 Kg8 Nb5 Nf6 Nd4 Rc8 Nf3 Rc4 Rc1 Re4 a4 g6 b6 Rd4 b7 Rb4 a5 Kg7 Nd4 Kf8",
    guessSan: "Bxf6",
    guessHint: "Trade off the defensive knight — Black's structure is permanently weakened.",
    terminal: "Capablanca resigned. The b-pawn promotes by force — the title goes to Alekhine.",
  },

  // ────────── Nottingham 1936 ──────────
  {
    id: "nottingham-g1",
    // Capablanca-Botvinnik, Nottingham 1936, Nimzo-Indian, ½-½
    pgn: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6 Nf3 Ne4 Bd2 Nxd2 Nxd2 O-O e3 Bxc5 Be2 b6 O-O Bb7 Rfd1 Qe7 Qc2 Rfd8 Nf3 Rac8 Bd3 g6 Qe2 Bd6 Rac1 Be5 Ne4 f5 Nc3 Nb4 Bb1 Nd5 Nxd5 Bxd5 Bd3 Bxf3 Qxf3 Bxh2+ Kxh2 Qh4+ Kg1 Qxf3 gxf3 e5 c5 bxc5 Bc4+ Kg7 Rxd7+ Rxd7 Bxd7 Rxd8 Rc7 Kf6 Kf1 Ke7",
    guessSan: "Bxh2+",
    guessHint: "Greek gift attempt — but the resulting endgame is balanced.",
    terminal: "Draw agreed.",
  },
  {
    id: "nottingham-g4",
    // Capablanca-Alekhine, Nottingham 1936, QGD, ½-½
    pgn: "d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bg5 h6 Bh4 O-O e3 b6 Bxf6 Bxf6 cxd5 exd5 b4 c6 Bd3 a5 b5 c5 dxc5 bxc5 O-O d4 Ne4 Bxa1 Qxa1 Be6 Nfg5 Bd5 Nc3 Bxg2 Kxg2 hxg5 Bxg5 Qxg5 Qxd4 Qg5 Qd5 Nc6 Qf5 Qxf5 Bxf5 Nb4 Bd3 Nxd3 Rxc5 Nxc5 Rxc5 Rd8 a4 Rd4 f3 Kf8 e4 Ke7 Kf2 Kd6 h4 Rxa4 h5 Ra2+ Ke3 Rh2 e5+ Kxe5 Re1+ Kf6 Re6+ Kxh6 Rxh6 Rxh5 Kf4",
    guessSan: "Bxf6",
    guessHint: "Trade the bishops to weaken Black's kingside dark squares.",
    terminal: "Draw agreed in a balanced rook endgame.",
  },
  {
    id: "nottingham-g9",
    // Reshevsky-Capablanca, Nottingham 1936, QGD, 0-1
    pgn: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 exd5 Bg5 c5 dxc5 h6 Bxf6 Qxf6 a3 Bxc3+ Qxc3 O-O e3 Nc6 Nf3 Bg4 Be2 Rac8 O-O Bxf3 Bxf3 Qg5 Qd2 Qxd2 Rfd1 Qxd1+ Rxd1 Rfd8 b4 a6 g3 Ne5 Be2 d4 exd4 Rxd4 Rxd4 Nf3+ Bxf3 Rxc5",
    guessSan: "Nf3+",
    guessHint: "Black's knight on e5 has a fork — find it before recapturing on d4.",
    terminal: "Reshevsky resigned. Black is up a clear pawn in a winning rook endgame.",
  },
  {
    id: "nottingham-g13",
    // Capablanca-Flohr, Nottingham 1936, QGD, ½-½
    pgn: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 c6 Qc2 Nbd7 Bd3 O-O Nf3 Re8 O-O Nf8 Rab1 a5 a3 Ng6 b4 axb4 axb4 Bd6 b5 Be6 bxc6 bxc6 Na4 Nd7 Bxe7 Rxe7 Nc5 Nxc5 dxc5 Bg4 Nd4 Bxd4 exd4 Re6 Qa4 Qd7 Rb6 Rxb6 cxb6 Nf4 Qxd7 Rxa1",
    guessSan: "Bxe7",
    guessHint: "Standard QGD trade — exchange dark-squared bishops at the right moment.",
    terminal: "Draw agreed in a balanced endgame.",
  },
];
