import AuthCallout from "@/components/habla/auth-callout";
import PageShell from "@/components/habla/page-shell";
import TicketCard from "@/components/habla/ticket-card";
import { getSessionUser } from "@/lib/data/auth";
import { getMyTickets } from "@/lib/data/tickets";

export default async function MyTicketsPage() {
  const tickets = await getMyTickets();
  const hasSession = Boolean(await getSessionUser());

  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Mis combinadas</h1>
          <p className="text-sm text-habla-600 mt-1">
            Revisa el estado de tus tickets y los puntos obtenidos.
          </p>
        </div>

        {!hasSession ? <AuthCallout /> : null}

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
