export type MatchStatus = "open" | "en_juego" | "terminado" | "cancelado";

export type Match = {
  id: string;
  home: string;
  away: string;
  kickoffLabel: string;
  entryFee: number;
  prizePool: number;
  players: number;
  status: MatchStatus;
  score: string | null;
  closeLabel?: string;
  venue?: string;
};

export type LeaderboardEntry = {
  id: string;
  name: string;
  points: number;
  hits: number;
};

export type TicketStatus = "pendiente" | "en_juego" | "finalizado";

export type Ticket = {
  id: string;
  matchId: string;
  matchLabel: string;
  status: TicketStatus;
  points: number;
  createdAt: string;
};

export type WalletMovementType = "topup" | "fee" | "premio";

export type WalletMovement = {
  id: string;
  label: string;
  amount: number;
  type: WalletMovementType;
  date: string;
};

export type Wallet = {
  balance: number;
  movements: WalletMovement[];
};

export type StoreItem = {
  id: string;
  name: string;
  price: number;
  type: "physical" | "digital";
  stock: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
