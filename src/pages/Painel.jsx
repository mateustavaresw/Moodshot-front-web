import { useState } from "react";
import MomentoCard from "../components/MomentoCard";
import MomentoForm from "../components/MomentoForm";
import useAuth from "../hooks/useAuth";
import useMomentos from "../hooks/useMomentos";
import { moods } from "../data/conteudo";

function Painel() {
  const { user } = useAuth();
  const { momentos, loading, error, adicionar, alternarFavorito, remover } = useMomentos(user.id);
  const [filtro, setFiltro] = useState("todos");
  const [actionError, setActionError] = useState("");

  const firstName = user.name.split(" ")[0];
  // calculado direto da lista pra nunca ficar desatualizado
  const totalFavoritos = momentos.filter((momento) => momento.favorito).length;

  const momentosFiltrados = momentos.filter((momento) => {
    if (filtro === "todos") return true;
    if (filtro === "favoritos") return momento.favorito;
    return momento.mood === filtro;
  });

  // roda favoritar/excluir e mostra o erro se der ruim
  async function runAction(action) {
    setActionError("");
    try {
      await action();
    } catch (err) {
      setActionError(err.message);
    }
  }

  function handleRemove(id) {
    if (window.confirm("Quer mesmo excluir esse momento?")) {
      runAction(() => remover(id));
    }
  }

  const filtros = [
    { id: "todos", label: "Todos" },
    { id: "favoritos", label: "★ Favoritos" },
    ...moods.map((mood) => ({ id: mood.id, label: `${mood.emoji} ${mood.label}` })),
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
        Área do usuário
      </span>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">Olá, {firstName}!</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Registre seus momentos, escolha o mood de cada um e marque os favoritos.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong className="text-3xl font-black text-[#168BFF]">{momentos.length}</strong>
          <p className="mt-1 text-sm text-slate-400">momentos</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong className="text-3xl font-black text-[#FF7A00]">{totalFavoritos}</strong>
          <p className="mt-1 text-sm text-slate-400">favoritos</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <MomentoForm onSave={adicionar} />
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {filtros.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFiltro(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  filtro === item.id
                    ? "border-[#168BFF] bg-[#168BFF] text-white"
                    : "border-white/15 text-slate-300 hover:border-white/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {actionError && (
            <p className="mt-6 rounded-lg bg-red-500/10 p-3 text-sm text-red-300">{actionError}</p>
          )}

          {loading && <p className="mt-10 text-slate-400">Carregando seus momentos...</p>}

          {!loading && error && (
            <p className="mt-10 rounded-lg bg-red-500/10 p-4 text-red-300">{error}</p>
          )}

          {!loading && !error && momentosFiltrados.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-white/15 p-10 text-center text-slate-400">
              {momentos.length === 0
                ? "Você ainda não registrou nenhum momento. Use o formulário ao lado para começar."
                : "Nenhum momento com esse filtro."}
            </div>
          )}

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {momentosFiltrados.map((momento) => (
              <MomentoCard
                key={momento.id}
                momento={momento}
                onToggleFavorito={(item) => runAction(() => alternarFavorito(item))}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Painel;
