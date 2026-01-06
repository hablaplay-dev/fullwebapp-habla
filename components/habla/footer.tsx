import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-habla-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-semibold mb-2">Juego</div>
          <ul className="space-y-1">
            <li>
              <Link href="/como-jugar" className="link">
                Cómo jugar
              </Link>
            </li>
            <li>
              <Link href="/matches" className="link">
                Reglas y puntajes
              </Link>
            </li>
            <li>
              <Link href="/matches" className="link">
                Transparencia
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Cuenta</div>
          <ul className="space-y-1">
            <li>
              <Link href="/protected" className="link">
                Mi perfil
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="link">
                Billetera
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="link">
                Historial de movimientos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Soporte</div>
          <ul className="space-y-1">
            <li>
              <Link href="/faq" className="link">
                Centro de ayuda
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link">
                Contáctanos
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link">
                Reportar problema
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            <li>
              <Link href="/faq" className="link">
                Términos del servicio
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link">
                Juego responsable
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-habla-500 pb-8">
        © Habla! 2025 · Todos los derechos reservados
      </div>
    </footer>
  );
}
