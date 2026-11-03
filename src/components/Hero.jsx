function Hero() {
  return (
    <section id="inicio" className="relative isolate pt-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#168BFF]/20 blur-[140px]" />
      <div className="absolute right-0 top-52 -z-10 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 pb-16 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex rounded-full border border-[#168BFF]/40 bg-[#168BFF]/10 px-4 py-2 text-sm font-semibold text-[#6BB5FF]">
            Uma nova forma de registrar momentos
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            A câmera que entende o seu{" "}
            <span className="text-[#168BFF]">jeito.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            MoodShot é uma proposta de experiência de câmera para o próximo
            smartphone Jovi: mais contextual, simples e pronta para compartilhar.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#solucao"
              className="rounded-full bg-[#168BFF] px-7 py-4 text-center font-bold transition hover:-translate-y-1 hover:bg-[#0874df]"
            >
              Descobrir a solução
            </a>

            <a
              href="#experiencia"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-bold transition hover:border-white hover:bg-white/5"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-[#168BFF]/30 via-[#8B5CF6]/20 to-[#FF7A00]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-[#111827] p-4 shadow-2xl">
            <div className="rounded-[2.4rem] bg-gradient-to-b from-[#1B2942] to-[#080D18] p-6">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>09:41</span>
                <span>JOVI</span>
              </div>

              <div className="mt-6 flex min-h-[420px] flex-col justify-between rounded-[2rem] bg-[radial-gradient(circle_at_top,#8B5CF6_0%,#168BFF_35%,#0C1220_72%)] p-6">
                <div className="flex justify-between">
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs backdrop-blur">
                    MoodShot
                  </span>
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs backdrop-blur">
                    IA ativa
                  </span>
                </div>

                <div>
                  <span className="rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-bold">
                    Golden Hour
                  </span>
                  <h2 className="mt-3 text-3xl font-black">Seu momento, sua vibe.</h2>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">Personalize seu clique</span>
                <div className="h-14 w-14 rounded-full border-4 border-white bg-[#168BFF]" />
                <span className="text-sm text-slate-400">Compartilhe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;