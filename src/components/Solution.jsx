function Solution() {
  return (
    <section id="solucao" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(22,139,255,.18),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#168BFF]">
          A solução
        </span>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          MoodShot transforma contexto em uma experiência de câmera mais fluida.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
          A proposta une IA contextual, uma jornada simplificada e integração com
          redes sociais para tornar cada registro mais pessoal.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["IA contextual", "Reconhece o contexto do momento para orientar a experiência."],
            ["Experiência simples", "Menos etapas entre a intenção, o clique e o resultado."],
            ["Pronto para compartilhar", "Um fluxo pensado para acompanhar a criação de conteúdo."],
          ].map(([title, text], index) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-[#101827] p-8 text-left transition hover:-translate-y-2 hover:border-[#168BFF]/60"
            >
              <span className="text-4xl font-black text-[#FF7A00]">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
