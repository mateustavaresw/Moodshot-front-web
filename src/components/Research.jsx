import SectionHeader from "./SectionHeader";

function Research({ items }) {
  return (
    <section id="problema" className="border-b border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <SectionHeader
          number="01"
          label="Pesquisa"
          color="#FF7A00"
          title="Registrar momentos não deveria ser complicado."
          description="A pesquisa evidencia a importância de uma experiência mais intuitiva, personalizada e alinhada ao ritmo de quem cria e compartilha conteúdo."
        />

        {/* numeros em lista, tipo leitura de dados */}
        <dl className="divide-y divide-white/10 border-y border-white/10 lg:mt-4">
          {items.map((item) => (
            <div key={item.title} className="grid grid-cols-[7rem_1fr] items-baseline gap-6 py-7 sm:grid-cols-[10rem_1fr]">
              <dt className="condensed text-6xl font-extrabold leading-none text-azul sm:text-7xl">
                {item.value}
              </dt>
              <dd>
                <p className="font-bold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Research;
