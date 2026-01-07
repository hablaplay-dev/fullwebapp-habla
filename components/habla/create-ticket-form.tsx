"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CreateTicketFormProps = {
  hasSession: boolean;
};

type FormState = {
  resultado: string;
  ambosAnotan: string;
  mas25: string;
  roja: string;
  marcador: string;
};

const initialState: FormState = {
  resultado: "",
  ambosAnotan: "",
  mas25: "",
  roja: "",
  marcador: "",
};

export default function CreateTicketForm({ hasSession }: CreateTicketFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formState.resultado) {
      nextErrors.resultado = "Selecciona un resultado 1X2.";
    }
    if (!formState.ambosAnotan) {
      nextErrors.ambosAnotan = "Selecciona una opción.";
    }
    if (!formState.mas25) {
      nextErrors.mas25 = "Selecciona una opción.";
    }
    if (!formState.roja) {
      nextErrors.roja = "Selecciona una opción.";
    }
    if (!formState.marcador) {
      nextErrors.marcador = "Ingresa un marcador exacto.";
    } else if (!/^\d+-\d+$/.test(formState.marcador)) {
      nextErrors.marcador = "El formato debe ser 2-1.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!hasSession) {
      return;
    }

    if (!validate()) {
      return;
    }

    console.info("Ticket mock creado", formState);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="card p-4">
        <div className="font-semibold mb-3">1X2 (3 pts)</div>
        <div className="grid grid-cols-3 gap-2">
          {["1", "X", "2"].map((option) => (
            <label
              key={option}
              className={cn(
                "btn text-sm",
                formState.resultado === option && "btn-primary",
              )}
            >
              <input
                type="radio"
                name="resultado"
                value={option}
                className="sr"
                checked={formState.resultado === option}
                onChange={() => updateField("resultado", option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
        {submitted && errors.resultado ? (
          <p className="text-xs text-red-500 mt-2">{errors.resultado}</p>
        ) : null}
      </div>

      <div className="card p-4">
        <div className="font-semibold mb-3">Ambos anotan (2 pts)</div>
        <div className="flex gap-2">
          {["Sí", "No"].map((option) => (
            <label
              key={option}
              className={cn(
                "btn text-sm",
                formState.ambosAnotan === option && "btn-primary",
              )}
            >
              <input
                type="radio"
                name="ambosAnotan"
                value={option}
                className="sr"
                checked={formState.ambosAnotan === option}
                onChange={() => updateField("ambosAnotan", option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
        {submitted && errors.ambosAnotan ? (
          <p className="text-xs text-red-500 mt-2">{errors.ambosAnotan}</p>
        ) : null}
      </div>

      <div className="card p-4">
        <div className="font-semibold mb-3">Más de 2.5 goles (2 pts)</div>
        <div className="flex gap-2">
          {["Sí", "No"].map((option) => (
            <label
              key={option}
              className={cn(
                "btn text-sm",
                formState.mas25 === option && "btn-primary",
              )}
            >
              <input
                type="radio"
                name="mas25"
                value={option}
                className="sr"
                checked={formState.mas25 === option}
                onChange={() => updateField("mas25", option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
        {submitted && errors.mas25 ? (
          <p className="text-xs text-red-500 mt-2">{errors.mas25}</p>
        ) : null}
      </div>

      <div className="card p-4">
        <div className="font-semibold mb-3">Tarjeta roja (6 pts)</div>
        <div className="flex gap-2">
          {["Sí", "No"].map((option) => (
            <label
              key={option}
              className={cn(
                "btn text-sm",
                formState.roja === option && "btn-primary",
              )}
            >
              <input
                type="radio"
                name="roja"
                value={option}
                className="sr"
                checked={formState.roja === option}
                onChange={() => updateField("roja", option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
        {submitted && errors.roja ? (
          <p className="text-xs text-red-500 mt-2">{errors.roja}</p>
        ) : null}
      </div>

      <div className="card p-4">
        <div className="font-semibold mb-3">Marcador exacto (8 pts)</div>
        <input
          className="input"
          name="marcador"
          placeholder="Ej: 2-1"
          value={formState.marcador}
          onChange={(event) => updateField("marcador", event.target.value)}
          required
        />
        {submitted && errors.marcador ? (
          <p className="text-xs text-red-500 mt-2">{errors.marcador}</p>
        ) : (
          <p className="text-xs text-habla-500 mt-2">
            Formato requerido: 2-1
          </p>
        )}
      </div>

      {!hasSession ? (
        <div className="card p-4 bg-habla-100">
          <div className="font-semibold">Necesitas iniciar sesión</div>
          <p className="text-sm text-habla-600 mt-1">
            Inicia sesión para guardar tu combinada y competir por premios.
          </p>
          <Link href="/login" className="btn-primary mt-3 inline-flex">
            Ir a login
          </Link>
        </div>
      ) : null}

      {hasSession ? (
        <button className="btn-primary w-full" type="submit">
          Guardar combinada
        </button>
      ) : (
        <Link className="btn-primary w-full justify-center inline-flex" href="/login">
          Inicia sesión para guardar
        </Link>
      )}
    </form>
  );
}
