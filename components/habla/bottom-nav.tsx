"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/matches", label: "Partidos" },
  { href: "/mis-combinadas", label: "Mis combinadas" },
  { href: "/resultados", label: "Resultados" },
  { href: "/wallet", label: "Billetera" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-habla-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-xs">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-habla-600",
                isActive && "text-black font-semibold",
              )}
            >
              <span className="h-2 w-2 rounded-full bg-habla-300" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
