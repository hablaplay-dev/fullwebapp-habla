import type { StoreItem } from "@/lib/types/habla";

export const storeItems: StoreItem[] = [
  {
    id: "s1",
    name: "Camiseta de fútbol",
    price: 5000,
    type: "physical",
    stock: 5,
  },
  {
    id: "s2",
    name: "Entradas al partido (regalo)",
    price: 1200,
    type: "digital",
    stock: 25,
  },
  {
    id: "s3",
    name: "Balón oficial edición especial",
    price: 3200,
    type: "physical",
    stock: 8,
  },
  {
    id: "s4",
    name: "Experiencia VIP en estadio",
    price: 8000,
    type: "digital",
    stock: 2,
  },
];
