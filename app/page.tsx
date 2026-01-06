"use client";

import { useState } from "react";

type MatchStatus = "open" | "locked" | "in_play" | "finished";

type Match = {
  id: string;
  home: string;
  away: string;
  kickoffLabel: string;
  entryFee: number;
  prizePool: number;
  players: number;
  status: MatchStatus;
  score: string | null;
  closeLabel?: string;
};

type StoreItem = {
  id: string;
  name: string;
  price: number;
  type: "physical" | "digital";
  stock: number;
};

const matches: Match[] = [
  {
    id: "m1",
    home: "Manchester United",
    away: "Liverpool FC",
    kickoffLabel: "07/02/2025, 7:48 p. m.",
    entryFee: 50,
    prizePool: 4800,
    players: 142,
    status: "open",
    score: null,
    closeLabel: "48m",
  },
  {
    id: "m2",
    home: "FC Barcelona",
    away: "Real Madrid",
    kickoffLabel: "07/02/2025, 6:48 p. m.",
    entryFee: 30,
    prizePool: 2490,
    players: 80,
    status: "locked",
    score: "1-0 12'",
  },
  {
    id: "m3",
    home: "Chelsea FC",
    away: "Arsenal FC",
    kickoffLabel: "07/02/2025, 6:10 p. m.",
    entryFee: 25,
    prizePool: 1575,
    players: 67,
    status: "in_play",
    score: "2-1 HT",
  },
];

const topPlayersToday = [
  { name: "PlayerOne", pts: 18 },
  { name: "FootballFan", pts: 16 },
  { name: "PredictoPro", pts: 15 },
];

const storeHighlights: StoreItem[] = [
  {
    id: "s1",
    name: "Camiseta de fútbol",
    price: 5000,
    type: "physical",
    stock: 5,
  },
  {
    id: "s2",
    name: "Entradas al partido (regalo)",
    price: 1200,
    type: "digital",
    stock: 25,
  },
];

const tabs: { id: MatchStatus; label: string }[] = [
  { id: "open", label: "Abiertos" },
  { id: "locked", label: "Bloqueados" },
  { id: "in_play", label: "En juego" },
  { id: "finished", label: "Finalizados" },
];

const formatNumber = (value: number) =>
  new Intl.NumberFormat("es-ES").format(value);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeTab: MatchStatus = "open";

  const matchesByTab = matches.filter((match) => match.status === activeTab);
  const nextClosingLabel = matches.find((match) => match.status === "open")
    ?.closeLabel;

  const handleTopUp = () => {
    console.info("Top up stub: conectar a pagos.");
  };

  const handleLogin = () => {
    console.info("Auth stub: conectar con login/registro.");
  };

  const handleQuickCombo = () => {
    console.info("Combinada rápida stub: conectar a creación de tickets.");
  };

  return (
    <div className="min-h-screen bg-habla-50 text-habla-900">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-habla-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="#/matches"
              className="flex items-center gap-2 font-black text-xl"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                H!
              </span>
              Habla!
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#/matches" className="link">
                Partidos
              </a>
              <a href="#/tickets" className="link">
                Mis combinadas
              </a>
              <a href="#/results" className="link">
                Resultados
              </a>
              <a href="#/store" className="link">
                Tienda
              </a>
              <a href="#/wallet" className="link">
                Billetera
              </a>
              <a href="#/how-to-play" className="link">
                Cómo jugar
              </a>
              <a href="#/faq" className="link">
                Preguntas frecuentes
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="pill hidden">
              <span>0</span> Lukas
            </div>
            <button className="btn" onClick={handleTopUp} title="Recargar Lukas">
              Recargar
            </button>
            <div className="ml-2">
              <button className="btn" onClick={handleLogin}>
                Iniciar sesión / Registrarse
              </button>
            </div>
            <button
              className="md:hidden btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobileMenu"
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
            <a href="#/matches" className="link">
              Partidos
            </a>
            <a href="#/tickets" className="link">
              Mis combinadas
            </a>
            <a href="#/results" className="link">
              Resultados
            </a>
            <a href="#/store" className="link">
              Tienda
            </a>
            <a href="#/wallet" className="link">
              Billetera
            </a>
            <a href="#/how-to-play" className="link">
              Cómo jugar
            </a>
            <a href="#/faq" className="link">
              Preguntas frecuentes
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">Partidos de fútbol</h1>
              <div className="flex gap-2">
                {tabs.map((tab) => (
                  <a
                    key={tab.id}
                    className={`btn ${activeTab === tab.id ? "btn-primary" : ""}`}
                    href={`#/matches/${tab.id}`}
                  >
                    {tab.label}
                  </a>
                ))}
              </div>
            </div>
            <div id="matchesList" className="space-y-4">
              {matchesByTab.length ? (
                matchesByTab.map((match) => {
                  const statusTag =
                    match.status === "open"
                      ? `Abierto · Cierra en ${match.closeLabel ?? ""}`
                      : match.status === "locked"
                      ? "Bloqueado · iniciado"
                      : match.status === "in_play"
                      ? "En juego"
                      : "Finalizado";

                  return (
                    <article key={match.id} className="card p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="tag">{statusTag}</span>
                          <h3 className="mt-2 text-lg font-bold">
                            {match.home} <span className="text-habla-400">VS</span>{" "}
                            {match.away}
                          </h3>
                          <div className="text-sm text-habla-600 mt-1">
                            Costo de entrada <strong>{match.entryFee} Lukas</strong>
                            <span className="ml-2">
                              · Jugadores: {match.players}
                            </span>
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
                          <a className="link text-xs" href={`#/match/${match.id}`}>
                            Detalle del partido
                          </a>
                        </div>
                      </div>
                      <button className="btn-primary w-full mt-3" type="button">
                        Crear combinada
                      </button>
                    </article>
                  );
                })
              ) : (
                <div className="text-sm text-habla-600">
                  No hay partidos en esta pestaña.
                </div>
              )}
            </div>
          </section>
          <aside className="hidden lg:block lg:col-span-4">
            <div className="card p-4">
              <div className="text-sm text-habla-600">Próximo cierre</div>
              <div className="text-3xl font-black mt-1">
                {nextClosingLabel ?? "—"}
              </div>
              <div className="text-xs text-habla-500">Hasta el cierre más próximo</div>
              <button
                className="btn-primary w-full mt-4"
                type="button"
                onClick={handleQuickCombo}
              >
                Crear combinada rápida
              </button>
            </div>
            <div className="card p-4 mt-4">
              <div className="font-semibold mb-2">Mejores jugadores hoy</div>
              <ul className="text-sm space-y-1">
                {topPlayersToday.map((player) => (
                  <li key={player.name} className="flex justify-between">
                    <span>{player.name}</span>
                    <span className="font-semibold">{player.pts} pts</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4 mt-4">
              <div className="font-semibold mb-3">Destacados de la tienda</div>
              {storeHighlights.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-habla-500">
                      {formatNumber(item.price)} Lukas
                    </div>
                  </div>
                  <a href="#/store" className="btn">
                    Ver
                  </a>
                </div>
              ))}
              <a href="#/store" className="btn-primary w-full mt-2">
                Ver tienda
              </a>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-habla-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-2">Juego</div>
            <ul className="space-y-1">
              <li>
                <a href="#/how-to-play" className="link">
                  Cómo jugar
                </a>
              </li>
              <li>
                <a href="#/rules" className="link">
                  Reglas y puntajes
                </a>
              </li>
              <li>
                <a href="#/transparency" className="link">
                  Transparencia
                </a>
              </li>
              <li>
                <a href="#/faq" className="link">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Cuenta</div>
            <ul className="space-y-1">
              <li>
                <a href="#/profile" className="link">
                  Mi perfil
                </a>
              </li>
              <li>
                <a href="#/wallet" className="link">
                  Billetera
                </a>
              </li>
              <li>
                <a href="#/history" className="link">
                  Historial de movimientos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Soporte</div>
            <ul className="space-y-1">
              <li>
                <a href="#/help" className="link">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#/contact" className="link">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#/report" className="link">
                  Reportar problema
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-1">
              <li>
                <a href="#/terms" className="link">
                  Términos del servicio
                </a>
              </li>
              <li>
                <a href="#/privacy" className="link">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#/responsible" className="link">
                  Juego responsable
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-habla-500 pb-8">
          © Habla! 2025 · Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
