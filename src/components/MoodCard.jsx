import MoodIcon from "./MoodIcon";
import FrameCorners from "./FrameCorners";

// card do mood em formato de polaroid
function MoodCard({ mood }) {
  return (
    <figure className="gallery-item bg-papel p-3 pb-5 text-ink shadow-[0_25px_50px_-25px_rgba(0,0,0,0.9)] transition duration-300 odd:-rotate-1 even:rotate-1 hover:-translate-y-2 hover:rotate-0">
      <div
        className="relative flex aspect-[4/5] flex-col justify-between p-5 text-white"
        style={{ background: `linear-gradient(160deg, ${mood.from}, ${mood.to} 80%)` }}
      >
        <FrameCorners className="inset-3 text-white/70" />

        <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-white/85">
          <span>{mood.exif}</span>
          <span className="text-lg" aria-hidden="true">
            {mood.emoji}
          </span>
        </div>

        <div>
          <MoodIcon type={mood.id} />
          <p className="condensed mt-3 text-4xl font-extrabold uppercase">{mood.label}</p>
        </div>
      </div>

      <figcaption className="px-1 pt-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-black/45">
          MoodShot · {mood.label}
        </p>
        <p className="mt-2 text-sm leading-6 text-black/75">{mood.caption}</p>
      </figcaption>
    </figure>
  );
}

export default MoodCard;
