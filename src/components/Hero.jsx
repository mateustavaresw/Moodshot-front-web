import { useState } from "react";
import FrameCorners from "./FrameCorners";
import MoodIcon from "./MoodIcon";

function Hero({ moods }) {
  // mood selecionado no visor, comeca no primeiro
  const [ativo, setAtivo] = useState(moods[0]);

  return (
    <section id="inicio" className="relative border-b border-white/10 pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            <span className="flex items-center gap-2 text-laranja">
              <span className="rec-dot h-2 w-2 rounded-full bg-laranja" />
              Rec
            </span>
            <span>Apexxon Consultoria × Jovi</span>
          </p>

          <h1 className="condensed mt-8 text-6xl font-extrabold leading-[0.86] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            A câmera que entende o seu <span className="text-azul">jeito.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">
            MoodShot é uma proposta de experiência de câmera para o próximo
            smartphone Jovi: mais contextual, simples e pronta para compartilhar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#solucao"
              className="bg-azul px-7 py-4 font-bold transition hover:bg-[#0874df]"
            >
              Descobrir a solução
            </a>

            <a
              href="#experiencia"
              className="group font-mono text-sm uppercase tracking-[0.15em] text-slate-300 transition hover:text-white"
            >
              Ver como funciona{" "}
              <span className="inline-block transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          {/* visor da camera */}
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{ background: `linear-gradient(160deg, ${ativo.from}, ${ativo.to} 85%)` }}
          >
            {/* linhas da regra dos tercos */}
            <div className="absolute inset-y-0 left-1/3 right-1/3 border-x border-white/20" />
            <div className="absolute inset-x-0 top-1/3 bottom-1/3 border-y border-white/20" />

            <FrameCorners className="inset-4 text-white" />

            <div className="absolute inset-x-8 top-8 flex items-center justify-between font-mono text-[11px] tracking-widest text-white/90">
              <span>{ativo.exif}</span>
              <span className="flex items-center gap-1.5">
                <span className="rec-dot h-1.5 w-1.5 rounded-full bg-white" />
                AI
              </span>
            </div>

            {/* quadradinho de foco */}
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-laranja" />

            <div className="absolute inset-x-8 bottom-8">
              <MoodIcon type={ativo.id} />
              <p className="condensed mt-3 text-4xl font-extrabold uppercase">
                Modo {ativo.label}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">{ativo.caption}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-px bg-white/10" role="group" aria-label="Escolha um mood">
            {moods.map((mood) => (
              <button
                key={mood.id}
                type="button"
                onClick={() => setAtivo(mood)}
                aria-pressed={ativo.id === mood.id}
                className={`px-2 py-3 font-mono text-[11px] uppercase tracking-wider transition ${
                  ativo.id === mood.id
                    ? "bg-white text-ink"
                    : "bg-ink text-slate-400 hover:text-white"
                }`}
              >
                {mood.label}
              </button>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-slate-500">
            ↑ toque num mood e veja o visor mudar
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
