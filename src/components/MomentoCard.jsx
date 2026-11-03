import MoodIcon from "./MoodIcon";
import { moods } from "../data/conteudo";

function formatDate(isoDate) {
  if (!isoDate) return "";
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function MomentoCard({ momento, onToggleFavorito, onRemove }) {
  // se vier um mood que nao existe usa o primeiro
  const mood = moods.find((item) => item.id === momento.mood) || moods[0];

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101827]">
      <div
        className="flex items-center justify-between p-5"
        style={{ background: `linear-gradient(135deg, ${mood.from}, ${mood.to})` }}
      >
        <div className="flex items-center gap-3">
          <MoodIcon type={mood.id} />
          <span className="text-lg font-black">{mood.label}</span>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavorito(momento)}
          aria-label={momento.favorito ? "Remover dos favoritos" : "Marcar como favorito"}
          className="rounded-full bg-black/25 px-3 py-1 text-xl transition hover:scale-110"
        >
          {momento.favorito ? "★" : "☆"}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-lg font-bold">{momento.legenda}</p>
        <p className="mt-2 text-sm text-slate-400">
          📍 {momento.local} · {formatDate(momento.createdAt)}
        </p>

        <button
          type="button"
          onClick={() => onRemove(momento.id)}
          className="mt-5 self-start text-sm font-medium text-red-300 transition hover:text-red-200"
        >
          Excluir
        </button>
      </div>
    </article>
  );
}

export default MomentoCard;
