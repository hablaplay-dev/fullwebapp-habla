import AuthCallout from "@/components/habla/auth-callout";
import PageShell from "@/components/habla/page-shell";
import { getSessionUser } from "@/lib/data/auth";
import { getStoreItems } from "@/lib/data/store";

export default async function StorePage() {
  const items = await getStoreItems();
  const hasSession = Boolean(await getSessionUser());

  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Tienda de premios</h1>
          <p className="text-sm text-habla-600 mt-1">
            Canjea tus Lukas por recompensas físicas o digitales.
          </p>
        </div>

        {!hasSession ? <AuthCallout /> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="card p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <div className="text-sm text-habla-600 mt-1">
                    {item.price} Lukas · {item.type === "physical" ? "Físico" : "Digital"}
                  </div>
                  <div className="text-xs text-habla-500 mt-1">
                    Stock: {item.stock}
                  </div>
                </div>
                <button
                  className="btn-primary"
                  type="button"
                  disabled={!hasSession}
                >
                  Canjear
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
