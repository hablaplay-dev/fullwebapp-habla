import type { LeaderboardEntry } from "@/lib/types/habla";

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
};

export default function LeaderboardTable({ entries }: LeaderboardTableProps) {
  return (
    <div className="card p-4">
      <div className="font-semibold mb-3">Leaderboard</div>
      <div className="space-y-2 text-sm">
        {entries.map((entry, index) => (
          <div key={entry.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="tag">#{index + 1}</span>
              <div>
                <div className="font-medium">{entry.name}</div>
                <div className="text-xs text-habla-500">
                  {entry.hits} aciertos
                </div>
              </div>
            </div>
            <div className="font-semibold">{entry.points} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
}
