import LeaderboardTable from "@/components/habla/leaderboard-table";
import PageShell from "@/components/habla/page-shell";
import SegmentedTabs from "@/components/habla/segmented-tabs";
import { getLeaderboardByMatchId, getMatchById } from "@/lib/data/matches";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusLabels = {
  open: "Abierto",
  en_juego: "En juego",
  terminado: "Finalizado",
  cancelado: "Cancelado",
};

type MatchDetailPageProps = {
  params: Promise<{ matchId: string }>;
  searchParams?: { tab?: string };
};

export default async function MatchDetailPage({
  params,
  searchParams,
}: MatchDetailPageProps) {
  const { matchId } = await params;
  const match = await getMatchById(matchId);

  if (!match) {
    notFound();
  }

  const tabParam =
    searchParams?.tab === "leaderboard" ? "leaderboard" : "transparencia";
  const leaderboard = await getLeaderboardByMatchId(match.id);

  return (
    <PageShell>
      <div className="space-y-6">
        <section className="card p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="tag">{statusLabels[match.status]}</span>
              <h1 className="text-2xl font-bold mt-2">
                {match.home} <span className="text-habla-400">VS</span> {match.away}
              </h1>
              <div className="text-sm text-habla-600 mt-1">
                {match.kickoffLabel}
                {match.score ? ` · En vivo: ${match.score}` : ""}
                {match.venue ? ` · ${match.venue}` : ""}
              </div>
            </div>
            <Link
              className="btn-primary inline-flex justify-center"
              href={`/matches/${match.id}/crear`}
            >
              Crear combinada
            </Link>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold">Detalle del partido</h2>
          <SegmentedTabs
            items={[
              {
                id: "transparencia",
                label: "Transparencia",
                href: `/matches/${match.id}?tab=transparencia`,
              },
              {
                id: "leaderboard",
                label: "Leaderboard / Resultados",
                href: `/matches/${match.id}?tab=leaderboard`,
              },
            ]}
            activeId={tabParam}
          />
        </section>

        {tabParam === "transparencia" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-sm text-habla-600">Costo de entrada</div>
              <div className="text-2xl font-black mt-1">{match.entryFee} Lukas</div>
            </div>
            <div className="card p-4">
              <div className="text-sm text-habla-600">Pozo actual</div>
              <div className="text-2xl font-black mt-1">{match.prizePool} Lukas</div>
            </div>
            <div className="card p-4">
              <div className="text-sm text-habla-600">Jugadores</div>
              <div className="text-2xl font-black mt-1">{match.players}</div>
            </div>
            <div className="card p-4 lg:col-span-2">
              <div className="font-semibold mb-2">Reglas de puntaje</div>
              <ul className="text-sm text-habla-600 space-y-1">
                <li>1X2 · 3 pts</li>
                <li>Ambos anotan · 2 pts</li>
                <li>Más de 2.5 goles · 2 pts</li>
                <li>Tarjeta roja · 6 pts</li>
                <li>Marcador exacto · 8 pts</li>
              </ul>
            </div>
            <div className="card p-4">
              <div className="font-semibold mb-2">Estado del match</div>
              <p className="text-sm text-habla-600">
                {match.status === "open"
                  ? `Cierra en ${match.closeLabel ?? "—"}`
                  : "Marcador en curso / cerrado."}
              </p>
            </div>
          </div>
        ) : (
          <LeaderboardTable entries={leaderboard} />
        )}
      </div>
    </PageShell>
  );
}
