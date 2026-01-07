"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/matches", label: "Partidos" },
  { href: "/mis-combinadas", label: "Mis combinadas" },
  { href: "/resultados", label: "Resultados" },
  { href: "/tienda", label: "Tienda" },
  { href: "/wallet", label: "Billetera" },
  { href: "/como-jugar", label: "Cómo jugar" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

type TopBarProps = {
  hasSession: boolean;
};

export default function TopBar({ hasSession }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-habla-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/matches" className="flex items-center gap-2 font-black text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              H!
            </span>
            Habla!
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {hasSession ? (
            <div className="pill hidden sm:inline-flex">
              <span>0</span> Lukas
            </div>
          ) : null}
          <Link className="btn" href={hasSession ? "/wallet" : "/login"}>
            Recargar
          </Link>
          <div className="ml-2">
            <Link className="btn" href={hasSession ? "/protected" : "/login"}>
              {hasSession ? "Mi cuenta" : "Iniciar sesión / Registrarse"}
            </Link>
          </div>
          <button
            className="md:hidden btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>
      <div
        id="mobileMenu"
        className={`md:hidden border-t border-habla-200 bg-white ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="px-4 py-3 flex flex-col gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
