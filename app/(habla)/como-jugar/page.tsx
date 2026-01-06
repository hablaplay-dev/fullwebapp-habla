import PageShell from "@/components/habla/page-shell";
import { getHowToPlay } from "@/lib/data/content";

export default async function HowToPlayPage() {
  const steps = await getHowToPlay();

  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Cómo jugar</h1>
          <p className="text-sm text-habla-600 mt-1">
            Aprende cómo crear combinadas y sumar Lukas en Habla!.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div key={step.id} className="card p-4">
              <div className="font-semibold">{step.title}</div>
              <p className="text-sm text-habla-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
