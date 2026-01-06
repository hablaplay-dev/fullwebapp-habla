import { wallet } from "@/lib/mock/wallet";
import type { Wallet } from "@/lib/types/habla";

export async function getWallet(): Promise<Wallet> {
  // TODO: replace mock with Supabase query.
  return wallet;
}
