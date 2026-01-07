import PageShell from "@/components/habla/page-shell";
import { getFaq } from "@/lib/data/content";

export default async function FaqPage() {
  const faq = await getFaq();

  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Preguntas frecuentes</h1>
          <p className="text-sm text-habla-600 mt-1">
            Resolvemos las dudas más comunes sobre Habla!.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.id} className="card p-4">
              <div className="font-semibold">{item.question}</div>
              <p className="text-sm text-habla-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
