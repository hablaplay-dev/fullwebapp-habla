import { faqItems } from "@/lib/mock/faq";
import { howToPlaySteps } from "@/lib/mock/how-to-play";
import type { FaqItem } from "@/lib/types/habla";

export type HowToPlayStep = {
  id: string;
  title: string;
  description: string;
};

export async function getFaq(): Promise<FaqItem[]> {
  // TODO: replace mock with Supabase query.
  return faqItems;
}

export async function getHowToPlay(): Promise<HowToPlayStep[]> {
  // TODO: replace mock with Supabase query.
  return howToPlaySteps;
}
