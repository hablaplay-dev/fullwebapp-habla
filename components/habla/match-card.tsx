import Link from "next/link";
import type { Match } from "@/lib/types/habla";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("es-ES").format(value);

const statusLabels: Record<Match["status"], string> = {
  open: "Abierto",
  en_juego: "En juego",
  terminado: "Finalizado",
  cancelado: "Cancelado",
};

type MatchCardProps = {
  match: Match;
};

export default function MatchCard({ match }: MatchCardProps) {
  const statusTag =
    match.status === "open"
      ? `${statusLabels[match.status]} · Cierra en ${match.closeLabel ?? "—"}`
      : statusLabels[match.status];

  return (
    <article className="card p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="tag">{statusTag}</span>
          <h3 className="mt-2 text-lg font-bold">
            {match.home} <span className="text-habla-400">VS</span> {match.away}
          </h3>
          <div className="text-sm text-habla-600 mt-1">
            Costo de entrada <strong>{match.entryFee} Lukas</strong>
            <span className="ml-2">· Jugadores: {match.players}</span>
            <span className="ml-2">
              · Pozo: {formatNumber(match.prizePool)} Lukas
            </span>
            {match.score ? (
              <span className="ml-2">· En vivo: {match.score}</span>
            ) : null}
          </div>
        </div>
        <div className="text-sm text-habla-600 text-right">
          <div>{match.kickoffLabel}</div>
          <Link className="link text-xs" href={`/matches/${match.id}`}>
            Detalle del partido
          </Link>
        </div>
      </div>
      <Link
        className="btn-primary w-full mt-3 inline-flex justify-center"
        href={`/matches/${match.id}/crear`}
      >
        Crear combinada
      </Link>
    </article>
  );
}
