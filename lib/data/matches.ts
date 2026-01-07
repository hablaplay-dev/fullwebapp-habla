import { leaderboardByMatchId, matches } from "@/lib/mock/matches";
import type { LeaderboardEntry, Match, MatchStatus } from "@/lib/types/habla";

export async function getMatches(): Promise<Match[]> {
  // TODO: replace mock with Supabase query.
  return matches;
}

export async function getMatchById(matchId: string): Promise<Match | null> {
  // TODO: replace mock with Supabase query.
  return matches.find((match) => match.id === matchId) ?? null;
}

export async function getMatchesByStatus(
  status: MatchStatus,
): Promise<Match[]> {
  // TODO: replace mock with Supabase query.
  return matches.filter((match) => match.status === status);
}

export async function getLeaderboardByMatchId(
  matchId: string,
): Promise<LeaderboardEntry[]> {
  // TODO: replace mock with Supabase query.
  return leaderboardByMatchId[matchId] ?? [];
}
