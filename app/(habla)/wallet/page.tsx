import AuthCallout from "@/components/habla/auth-callout";
import PageShell from "@/components/habla/page-shell";
import { getWallet } from "@/lib/data/wallet";
import Link from "next/link";

const movementStyles = {
  topup: "text-emerald-600",
  fee: "text-red-500",
  premio: "text-emerald-600",
};

export default async function WalletPage() {
  const wallet = await getWallet();
  const hasSession = false;

  return (
    <PageShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Billetera</h1>
            <p className="text-sm text-habla-600 mt-1">
              Gestiona tu saldo de Lukas y revisa movimientos recientes.
            </p>
          </div>
          <Link
            className={`btn ${hasSession ? "btn-primary" : ""}`}
            href={hasSession ? "/wallet" : "/auth/login"}
          >
            Recargar Lukas
          </Link>
        </div>

        {!hasSession ? <AuthCallout /> : null}

        <div className="card p-4">
          <div className="text-sm text-habla-600">Saldo disponible</div>
          <div className="text-3xl font-black mt-1">{wallet.balance} Lukas</div>
        </div>

        <div className="card p-4">
          <div className="font-semibold mb-3">Movimientos</div>
          <div className="space-y-3 text-sm">
            {wallet.movements.map((movement) => (
              <div key={movement.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{movement.label}</div>
                  <div className="text-xs text-habla-500">{movement.date}</div>
                </div>
                <span className={movementStyles[movement.type]}>
                  {movement.amount > 0 ? "+" : ""}
                  {movement.amount} Lukas
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
