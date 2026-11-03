function Persona() {
  return (
    <section id="publico-alvo" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">
          Público-Alvo
        </span>
        <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Para quem quer capturar o momento sem perder o momento.
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-[2rem] bg-gradient-to-br from-[#8B5CF6] via-[#168BFF] to-[#07101F] p-[1px]">
          <div className="h-full rounded-[2rem] bg-[#0B101C] p-8 sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">
              Persona
            </span>

            <h3 className="mt-5 text-4xl font-black">Mariana</h3>
            <p className="mt-2 text-lg text-[#6BB5FF]">
              21 anos · Universitária · Fotografia e redes sociais
            </p>

            <p className="mt-7 leading-7 text-slate-300">
              Frequentemente perco oportunidades de registrar momentos importantes porque a câmera do meu celular possui configurações complexas e pouco intuitivas. Além disso, o aparelho não oferece recomendações automáticas de ajustes para diferentes situações, o que dificulta capturar fotos com rapidez e qualidade. Como resultado, muitas vezes o momento passa antes que eu consiga configurar a câmera adequadamente.
            </p>
          </div>
        </article>

        <div className="flex flex-col justify-center">
          <h3 className="sr-only">Por que a solução é relevante para esse público</h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Busca praticidade ao fotografar.",
              "Quer resultados mais personalizados.",
              "Usa a câmera para se expressar.",
              "Valoriza o compartilhamento rápido.",
            ].map((text, index) => (
              <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="font-black text-[#FF7A00]">0{index + 1}</span>
                <p className="mt-3 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persona;