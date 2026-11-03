import MoodIcon from "./MoodIcon";
import FrameCorners from "./FrameCorners";
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
    <article className="flex flex-col border border-white/10 bg-panel transition hover:border-white/25">
      <div
        className="relative flex aspect-[4/3] flex-col justify-between p-5"
        style={{ background: `linear-gradient(150deg, ${mood.from}, ${mood.to})` }}
      >
        <FrameCorners className="inset-3 text-white/60" />

        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-widest text-white/85">{mood.exif}</span>
          <button
            type="button"
            onClick={() => onToggleFavorito(momento)}
            aria-label={momento.favorito ? "Remover dos favoritos" : "Marcar como favorito"}
            className={`relative z-10 -mr-1 -mt-1 px-2 text-2xl leading-none transition hover:scale-110 ${
              momento.favorito ? "text-white" : "text-white/60"
            }`}
          >
            {momento.favorito ? "★" : "☆"}
          </button>
        </div>

        <div className="flex items-end gap-3">
          <MoodIcon type={mood.id} />
          <span className="condensed text-3xl font-extrabold uppercase leading-none">{mood.label}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-lg font-bold">{momento.legenda}</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          {momento.local} · {formatDate(momento.createdAt)}
        </p>

        <button
          type="button"
          onClick={() => onRemove(momento.id)}
          className="mt-5 self-start font-mono text-xs uppercase tracking-widest text-red-300 transition hover:text-red-200"
        >
          Excluir
        </button>
      </div>
    </article>
  );
}

export default MomentoCard;
