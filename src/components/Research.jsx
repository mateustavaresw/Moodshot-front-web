import SectionHeader from "./SectionHeader";

function Research({ items }) {
  return (
    <section id="problema" className="border-y border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <SectionHeader
          label="Pesquisa"
          color="#FF7A00"
          title="Registrar momentos não deveria ser complicado."
          description="A pesquisa evidencia a importância de uma experiência mais intuitiva, personalizada e alinhada ao ritmo de quem cria e compartilha conteúdo."
        />

        <div className="grid gap-4 sm:grid-cols-3 lg:mt-10">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <strong className="text-4xl font-black text-[#168BFF]">{item.value}</strong>
              <h3 className="mt-5 font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
