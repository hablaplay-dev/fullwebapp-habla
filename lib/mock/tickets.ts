import type { Ticket } from "@/lib/types/habla";

export const tickets: Ticket[] = [
  {
    id: "t1",
    matchId: "m1",
    matchLabel: "Manchester United vs Liverpool FC",
    status: "pendiente",
    points: 0,
    createdAt: "07/02/2025 5:10 p. m.",
  },
  {
    id: "t2",
    matchId: "m2",
    matchLabel: "FC Barcelona vs Real Madrid",
    status: "en_juego",
    points: 6,
    createdAt: "07/02/2025 4:45 p. m.",
  },
  {
    id: "t3",
    matchId: "m3",
    matchLabel: "Chelsea FC vs Arsenal FC",
    status: "finalizado",
    points: 14,
    createdAt: "07/02/2025 3:20 p. m.",
  },
];
