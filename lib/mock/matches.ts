import type { LeaderboardEntry, Match } from "@/lib/types/habla";

export const matches: Match[] = [
  {
    id: "m1",
    home: "Manchester United",
    away: "Liverpool FC",
    kickoffLabel: "07/02/2025, 7:48 p. m.",
    entryFee: 50,
    prizePool: 4800,
    players: 142,
    status: "open",
    score: null,
    closeLabel: "48m",
    venue: "Old Trafford",
  },
  {
    id: "m2",
    home: "FC Barcelona",
    away: "Real Madrid",
    kickoffLabel: "07/02/2025, 6:48 p. m.",
    entryFee: 30,
    prizePool: 2490,
    players: 80,
    status: "en_juego",
    score: "1-0 12'",
    venue: "Estadi Olímpic",
  },
  {
    id: "m3",
    home: "Chelsea FC",
    away: "Arsenal FC",
    kickoffLabel: "07/02/2025, 6:10 p. m.",
    entryFee: 25,
    prizePool: 1575,
    players: 67,
    status: "terminado",
    score: "2-1 FT",
    venue: "Stamford Bridge",
  },
  {
    id: "m4",
    home: "AC Milan",
    away: "Inter",
    kickoffLabel: "08/02/2025, 9:00 p. m.",
    entryFee: 40,
    prizePool: 3200,
    players: 95,
    status: "cancelado",
    score: null,
    venue: "San Siro",
  },
];

export const leaderboardByMatchId: Record<string, LeaderboardEntry[]> = {
  m1: [
    { id: "p1", name: "PlayerOne", points: 18, hits: 3 },
    { id: "p2", name: "FootballFan", points: 16, hits: 3 },
    { id: "p3", name: "PredictoPro", points: 15, hits: 2 },
  ],
  m2: [
    { id: "p4", name: "LukasQueen", points: 12, hits: 2 },
    { id: "p5", name: "GolMaster", points: 11, hits: 2 },
    { id: "p6", name: "Tridente", points: 9, hits: 1 },
  ],
  m3: [
    { id: "p7", name: "ChelseaTrue", points: 22, hits: 4 },
    { id: "p8", name: "RivalCity", points: 20, hits: 4 },
    { id: "p9", name: "MarcadorExacto", points: 18, hits: 3 },
  ],
  m4: [
    { id: "p10", name: "DerbyFan", points: 0, hits: 0 },
  ],
};
