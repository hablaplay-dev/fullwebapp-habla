import CreateTicketForm from "@/components/habla/create-ticket-form";
import PageShell from "@/components/habla/page-shell";
import { getMatchById } from "@/lib/data/matches";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ matchId: string }>;
};

export default async function CreateTicketPage({ params }: Props) {
  const { matchId } = await params;
  const match = await getMatchById(matchId);

  if (!match) {
    notFound();
  }

  const hasSession = false;

  return (
    <PageShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Crear combinada</h1>
            <p className="text-sm text-habla-600 mt-1">
              {match.home} vs {match.away}
            </p>
          </div>
          <Link className="link text-sm" href={`/matches/${match.id}`}>
            Volver al partido
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CreateTicketForm hasSession={hasSession} />
          </div>
          <aside className="space-y-4">
            <div className="card p-4">
              <div className="text-sm text-habla-600">Costo de entrada</div>
              <div className="text-2xl font-black mt-1">{match.entryFee} Lukas</div>
              <p className="text-xs text-habla-500 mt-2">
                Recuerda confirmar tu ticket antes del cierre.
              </p>
            </div>
            <div className="card p-4">
              <div className="font-semibold mb-2">Puntajes por acierto</div>
              <ul className="text-sm text-habla-600 space-y-1">
                <li>1X2 · 3 pts</li>
                <li>Ambos anotan · 2 pts</li>
                <li>Más de 2.5 goles · 2 pts</li>
                <li>Tarjeta roja · 6 pts</li>
                <li>Marcador exacto · 8 pts</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
