import type { Wallet } from "@/lib/types/habla";

export const wallet: Wallet = {
  balance: 1240,
  movements: [
    {
      id: "w1",
      label: "Recarga con tarjeta",
      amount: 1000,
      type: "topup",
      date: "06/02/2025",
    },
    {
      id: "w2",
      label: "Entrada combinada Manchester vs Liverpool",
      amount: -50,
      type: "fee",
      date: "07/02/2025",
    },
    {
      id: "w3",
      label: "Premio combinada Chelsea vs Arsenal",
      amount: 290,
      type: "premio",
      date: "07/02/2025",
    },
  ],
};
