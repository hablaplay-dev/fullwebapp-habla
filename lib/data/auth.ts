import { hasEnvVars } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";

export async function getSessionUser() {
  if (!hasEnvVars) {
    return null;
  }

  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}

export async function getOptionalUser() {
  if (!hasEnvVars) {
    return null;
  }

  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}
