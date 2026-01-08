import MatchCard from "@/components/habla/match-card";
import PageShell from "@/components/habla/page-shell";
import SegmentedTabs from "@/components/habla/segmented-tabs";
import { getLeaderboardByMatchId, getMatches } from "@/lib/data/matches";
import { getStoreItems } from "@/lib/data/store";
import type { MatchStatus } from "@/lib/types/habla";
import Link from "next/link";

const tabs: { id: MatchStatus; label: string }[] = [
  { id: "open", label: "Abiertos" },
  { id: "en_juego", label: "En juego" },
  { id: "terminado", label: "Finalizados" },
  { id: "cancelado", label: "Cancelados" },
];

type MatchesPageProps = {
  searchParams?: Promise<{ status?: string }>;
};

export default async function MatchesPage({ searchParams }: MatchesPageProps) {
  const matches = await getMatches();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const statusParam = resolvedSearchParams?.status;
  const activeStatus = tabs.some((tab) => tab.id === statusParam)
    ? (statusParam as MatchStatus)
    : "open";

  const matchesByTab = matches.filter((match) => match.status === activeStatus);
  const nextClosingLabel = matches.find((match) => match.status === "open")
    ?.closeLabel;
  const nextMatchId = matches.find((match) => match.status === "open")?.id;

  const leaderboardSeed = matches[0]?.id
    ? await getLeaderboardByMatchId(matches[0].id)
    : [];
  const topPlayersToday = leaderboardSeed.slice(0, 3);

  const storeHighlights = (await getStoreItems()).slice(0, 2);

  return (
    <PageShell>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h1 className="text-xl font-bold">Partidos de fútbol</h1>
            <SegmentedTabs
              items={tabs.map((tab) => ({
                id: tab.id,
                label: tab.label,
                href: `/matches?status=${tab.id}`,
              }))}
              activeId={activeStatus}
            />
          </div>
          <div id="matchesList" className="space-y-4">
            {matchesByTab.length ? (
              matchesByTab.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
              <div className="text-sm text-habla-600">
                No hay partidos en esta pestaña.
              </div>
            )}
          </div>
        </section>
        <aside className="hidden lg:block lg:col-span-4">
          <div className="card p-4">
            <div className="text-sm text-habla-600">Próximo cierre</div>
            <div className="text-3xl font-black mt-1">
              {nextClosingLabel ?? "—"}
            </div>
            <div className="text-xs text-habla-500">Hasta el cierre más próximo</div>
            {nextMatchId ? (
              <Link
                className="btn-primary w-full mt-4 inline-flex justify-center"
                href={`/matches/${nextMatchId}/crear`}
              >
                Crear combinada rápida
              </Link>
            ) : (
              <button className="btn-primary w-full mt-4" type="button" disabled>
                Crear combinada rápida
              </button>
            )}
          </div>
          <div className="card p-4 mt-4">
            <div className="font-semibold mb-2">Mejores jugadores hoy</div>
            <ul className="text-sm space-y-1">
              {topPlayersToday.map((player) => (
                <li key={player.id} className="flex justify-between">
                  <span>{player.name}</span>
                  <span className="font-semibold">{player.points} pts</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-4 mt-4">
            <div className="font-semibold mb-3">Destacados de la tienda</div>
            {storeHighlights.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-habla-500">{item.price} Lukas</div>
                </div>
                <Link href="/tienda" className="btn">
                  Ver
                </Link>
              </div>
            ))}
            <Link href="/tienda" className="btn-primary w-full mt-2">
              Ver tienda
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
