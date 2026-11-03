import SectionHeader from "./SectionHeader";
import FrameCorners from "./FrameCorners";

function Persona({ persona }) {
  // "21 anos · Universitária · ..." vira uma lista
  const detalhes = persona.details.split(" · ");

  return (
    <section id="publico-alvo" className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          number="02"
          label="Público-Alvo"
          color="#8B5CF6"
          title="Para quem quer capturar o momento sem perder o momento."
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ficha da persona estilo polaroid */}
          <article className="mx-auto w-full max-w-sm -rotate-2 bg-papel p-4 pb-6 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)]">
            <div className="relative flex aspect-square items-end bg-gradient-to-br from-roxo via-azul to-[#07101F] p-5">
              <FrameCorners className="inset-3 text-white/70" />
              <span className="condensed text-[9rem] font-extrabold leading-[0.75] text-white/90">
                {persona.name[0]}
              </span>
            </div>
            <h3 className="condensed mt-5 text-4xl font-extrabold uppercase">{persona.name}</h3>
            <ul className="mt-3 space-y-1 font-mono text-xs uppercase tracking-wider text-black/60">
              {detalhes.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-roxo">Persona</span>
            <blockquote className="relative mt-4 text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
              <span className="condensed absolute -left-1 -top-8 text-8xl font-extrabold text-laranja/80 sm:-left-8">
                “
              </span>
              {persona.story}
            </blockquote>

            <h3 className="sr-only">Por que a solução é relevante para esse público</h3>

            <ul className="mt-12 grid border-t border-white/10 sm:grid-cols-2">
              {persona.needs.map((text, index) => (
                <li key={text} className="flex gap-4 border-b border-white/10 py-5 sm:odd:pr-6">
                  <span className="font-mono text-sm text-laranja">0{index + 1}</span>
                  <span className="text-slate-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persona;
