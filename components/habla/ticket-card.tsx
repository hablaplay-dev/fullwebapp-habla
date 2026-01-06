import Link from "next/link";
import type { Ticket } from "@/lib/types/habla";

const statusLabel: Record<Ticket["status"], string> = {
  pendiente: "Pendiente",
  en_juego: "En juego",
  finalizado: "Finalizado",
};

type TicketCardProps = {
  ticket: Ticket;
};

export default function TicketCard({ ticket }: TicketCardProps) {
  return (
    <article className="card p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="tag">{statusLabel[ticket.status]}</span>
          <h3 className="mt-2 text-lg font-bold">{ticket.matchLabel}</h3>
          <div className="text-sm text-habla-600 mt-1">
            {ticket.createdAt} · {ticket.points} pts
          </div>
        </div>
        <Link className="link text-xs" href={`/matches/${ticket.matchId}`}>
          Ver partido
        </Link>
      </div>
    </article>
  );
}
