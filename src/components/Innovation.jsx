function Innovation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">
              Proposta de valor
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Mais que uma câmera: uma experiência pensada para o usuário.
            </h2>

            <p className="mt-6 leading-7 text-slate-300">
              MoodShot propõe uma forma de registrar e compartilhar momentos com
              mais contexto, simplicidade e personalidade.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["Inovação de produto", "Uma experiência de câmera orientada pelo mood do usuário."],
              ["Inovação de experiência", "Uma jornada mais direta, intuitiva e visual."],
              ["Inovação de valor", "Tecnologia conectada aos hábitos de criação e compartilhamento."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-black text-[#6BB5FF]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
