const research = [
  {
    value: "80%",
    title: "dos participantes",
    text: "Sentem dificuldade em registrar momentos importantes devido à complexidade das câmeras atuais.",
  },
  {
    value: "95%",
    title: "valorizam praticidade",
    text: "Praticamente todos os participantes consideram a praticidade um fator essencial na hora de registrar momentos.",
  },
  {
    value: "60%",
    title: "compartilham momentos",
    text: "A maioria dos participantes compartilha seus momentos nas redes sociais.",
  },
];

function Research() {
  return (
    <section id="problema" className="border-y border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
          Pesquisa
        </span>

        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Registrar momentos não deveria ser complicado.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-slate-300">
              A pesquisa evidencia a importância de uma experiência mais intuitiva,
              personalizada e alinhada ao ritmo de quem cria e compartilha conteúdo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {research.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <strong className="text-4xl font-black text-[#168BFF]">
                  {item.value}
                </strong>
                <h3 className="mt-5 font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;