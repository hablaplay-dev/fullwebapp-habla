import PageShell from "@/components/habla/page-shell";
import { getMatches } from "@/lib/data/matches";
import Link from "next/link";

export default async function ResultsPage() {
  const matches = await getMatches();
  const finishedMatches = matches.filter((match) => match.status === "terminado");

  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Resultados</h1>
          <p className="text-sm text-habla-600 mt-1">
            Partidos finalizados y acceso al leaderboard final.
          </p>
        </div>

        <div className="space-y-4">
          {finishedMatches.map((match) => (
            <article key={match.id} className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="tag">Finalizado</span>
                  <h3 className="mt-2 text-lg font-bold">
                    {match.home} <span className="text-habla-400">VS</span> {match.away}
                  </h3>
                  <div className="text-sm text-habla-600 mt-1">
                    {match.kickoffLabel} · Marcador final: {match.score ?? "—"}
                  </div>
                </div>
                <div className="text-sm text-habla-600 text-right">
                  <Link
                    className="link text-xs"
                    href={`/matches/${match.id}?tab=leaderboard`}
                  >
                    Ver leaderboard
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
