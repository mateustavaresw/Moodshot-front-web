import { useState } from "react";
import FormField from "./FormField";
import useForm from "../hooks/useForm";
import { moods } from "../data/conteudo";

const initialValues = { mood: "", legenda: "", local: "" };

function validateMomento(values) {
  const errors = {};

  if (!values.mood) errors.mood = "Escolha um mood.";
  if (values.legenda.trim().length < 3) errors.legenda = "A legenda precisa ter pelo menos 3 letras.";
  if (!values.local.trim()) errors.local = "Informe onde foi o momento.";

  return errors;
}

// o form nao sabe de api, so entrega os dados pro onSave
function MomentoForm({ onSave }) {
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const { values, errors, handleChange, handleSubmit, reset } = useForm(
    initialValues,
    validateMomento,
  );

  async function onSubmit(dados) {
    setSaving(true);
    setSaveError("");

    try {
      await onSave({
        mood: dados.mood,
        legenda: dados.legenda.trim(),
        local: dados.local.trim(),
      });
      reset();
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 border border-white/10 bg-panel p-6 sm:p-8"
    >
      <div>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-laranja">
          <span className="rec-dot h-2 w-2 rounded-full bg-laranja" />
          Novo registro
        </p>
        <h2 className="condensed mt-3 text-3xl font-extrabold uppercase">Novo momento</h2>
      </div>

      <FormField
        as="select"
        label="Mood"
        id="mood"
        value={values.mood}
        onChange={handleChange}
        error={errors.mood}
      >
        <option value="">Selecione...</option>
        {moods.map((mood) => (
          <option key={mood.id} value={mood.id}>
            {mood.emoji} {mood.label}
          </option>
        ))}
      </FormField>

      <FormField
        as="textarea"
        label="Legenda"
        id="legenda"
        rows="3"
        placeholder="Ex.: Pôr do sol com a turma"
        value={values.legenda}
        onChange={handleChange}
        error={errors.legenda}
      />

      <FormField
        label="Local"
        id="local"
        type="text"
        placeholder="Ex.: Parque Ibirapuera"
        value={values.local}
        onChange={handleChange}
        error={errors.local}
      />

      {saveError && <p className="text-sm text-red-300">{saveError}</p>}

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-azul px-6 py-4 font-bold transition hover:bg-[#0874df] disabled:opacity-60"
      >
        {saving ? "Salvando..." : "Salvar momento"}
      </button>
    </form>
  );
}

export default MomentoForm;
