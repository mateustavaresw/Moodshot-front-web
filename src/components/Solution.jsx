import SectionHeader from "./SectionHeader";

function Solution({ items }) {
  return (
    <section id="solucao" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(22,139,255,.18),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          center
          label="A solução"
          title="MoodShot transforma contexto em uma experiência de câmera mais fluida."
          description="A proposta une IA contextual, uma jornada simplificada e integração com redes sociais para tornar cada registro mais pessoal."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#101827] p-8 transition hover:-translate-y-2 hover:border-[#168BFF]/60"
            >
              <span className="text-4xl font-black text-[#FF7A00]">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
