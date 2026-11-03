import MoodIcon from "./MoodIcon";

function MoodCard({ mood }) {
  return (
    <figure className="gallery-item group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition hover:-translate-y-2 hover:border-white/30">
      <div
        className="flex aspect-[4/5] flex-col justify-between p-6"
        style={{ background: `linear-gradient(160deg, ${mood.from}, ${mood.to} 80%)` }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            MoodShot
          </span>
          <span className="text-2xl" aria-hidden="true">
            {mood.emoji}
          </span>
        </div>

        <div>
          <MoodIcon type={mood.id} />
          <p className="mt-4 text-2xl font-black text-white">{mood.label}</p>
        </div>
      </div>

      <figcaption className="p-6">
        <p className="text-sm leading-6 text-slate-400">{mood.caption}</p>
      </figcaption>
    </figure>
  );
}

export default MoodCard;
