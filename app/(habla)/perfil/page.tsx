import PageShell from "@/components/habla/page-shell";

export default function PerfilPage() {
  return (
    <PageShell>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Mi perfil</h1>
        <p className="text-sm text-habla-600">
          Estamos preparando tu perfil. Pronto podrás ver tu información y
          ajustes desde aquí.
        </p>
      </div>
    </PageShell>
  );
}
