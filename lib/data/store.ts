import { storeItems } from "@/lib/mock/store";
import type { StoreItem } from "@/lib/types/habla";

export async function getStoreItems(): Promise<StoreItem[]> {
  // TODO: replace mock with Supabase query.
  return storeItems;
}
