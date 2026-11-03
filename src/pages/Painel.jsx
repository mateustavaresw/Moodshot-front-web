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
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8">
      <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            <span className="h-2 w-2 bg-laranja" />
            <span className="text-laranja">Área do usuário</span>
          </p>
          <h1 className="condensed mt-5 text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
            Olá, {firstName}!
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Registre seus momentos, escolha o mood de cada um e marque os favoritos.
          </p>
        </div>

        {/* contadores tipo leitura do visor */}
        <dl className="flex gap-10 font-mono">
          <div>
            <dt className="text-xs uppercase tracking-widest text-slate-500">Momentos</dt>
            <dd className="condensed mt-1 font-sans text-5xl font-extrabold text-azul">
              {String(momentos.length).padStart(2, "0")}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-slate-500">Favoritos</dt>
            <dd className="condensed mt-1 font-sans text-5xl font-extrabold text-laranja">
              {String(totalFavoritos).padStart(2, "0")}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <MomentoForm onSave={adicionar} />
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {filtros.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFiltro(item.id)}
                aria-pressed={filtro === item.id}
                className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                  filtro === item.id
                    ? "border-white bg-white text-ink"
                    : "border-white/15 text-slate-300 hover:border-white/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {actionError && (
            <p className="mt-6 border-l-2 border-red-400 bg-red-500/10 p-3 text-sm text-red-300">
              {actionError}
            </p>
          )}

          {loading && (
            <p className="mt-10 font-mono text-sm uppercase tracking-widest text-slate-400">
              Carregando seus momentos...
            </p>
          )}

          {!loading && error && (
            <p className="mt-10 border-l-2 border-red-400 bg-red-500/10 p-4 text-red-300">{error}</p>
          )}

          {!loading && !error && momentosFiltrados.length === 0 && (
            <div className="mt-6 border border-dashed border-white/15 p-12 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Rolo vazio</p>
              <p className="mt-3 text-slate-400">
                {momentos.length === 0
                  ? "Você ainda não registrou nenhum momento. Use o formulário ao lado para começar."
                  : "Nenhum momento com esse filtro."}
              </p>
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
