import { tickets } from "@/lib/mock/tickets";
import type { Ticket } from "@/lib/types/habla";

export async function getMyTickets(): Promise<Ticket[]> {
  // TODO: replace mock with Supabase query.
  return tickets;
}
