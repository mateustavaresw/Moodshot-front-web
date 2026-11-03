import SectionHeader from "./SectionHeader";

function Solution({ items }) {
  return (
    <section id="solucao" className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          number="03"
          label="A solução"
          title="MoodShot transforma contexto em uma experiência de câmera mais fluida."
          description="A proposta une IA contextual, uma jornada simplificada e integração com redes sociais para tornar cada registro mais pessoal."
        />

        <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group border-b border-white/10 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-laranja">
                Recurso 0{index + 1}
              </span>
              <h3 className="condensed mt-6 text-3xl font-extrabold uppercase transition group-hover:text-azul">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
