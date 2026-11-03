const steps = [
  ["01", "Abra a câmera", "Inicie a experiência MoodShot diretamente pela câmera."],
  ["02", "Escolha o momento", "Selecione o mood que representa o que você quer registrar."],
  ["03", "Veja o preview", "Tenha acesso ao preview e à sugestão de legenda."],
  ["04", "Compartilhe", "Finalize o momento e compartilhe com facilidade."],
];

function Experience() {
  return (
    <section id="experiencia" className="bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
            Como funciona
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Quatro passos para transformar um clique em expressão.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <article
              key={number}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121A29] p-7"
            >
              <span className="text-5xl font-black text-[#168BFF]/35">{number}</span>
              <div className="mt-16 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#8B5CF6]" />
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;