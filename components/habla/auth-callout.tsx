import Link from "next/link";

export default function AuthCallout() {
  return (
    <div className="card p-4 bg-habla-100">
      <div className="font-semibold">Inicia sesión para continuar</div>
      <p className="text-sm text-habla-600 mt-1">
        Necesitas una cuenta para crear combinadas, recargar o canjear premios.
      </p>
      <Link className="btn-primary mt-3 inline-flex" href="/login">
        Inicia sesión
      </Link>
    </div>
  );
}
