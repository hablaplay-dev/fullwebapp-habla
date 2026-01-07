import type { ReactNode } from "react";
import BottomNav from "@/components/habla/bottom-nav";
import Footer from "@/components/habla/footer";
import TopBar from "@/components/habla/top-bar";

export default async function HablaLayout({
  children,
}: {
  children: ReactNode;
}) {
  const hasSession = false;

  return (
    <div className="min-h-screen bg-habla-50 text-habla-900 flex flex-col">
      <TopBar hasSession={hasSession} />
      <main className="flex-1 pb-24">{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
}
