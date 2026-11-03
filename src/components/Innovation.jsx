import SectionHeader from "./SectionHeader";

function Innovation({ items }) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <SectionHeader
          label="Proposta de valor"
          color="#8B5CF6"
          title="Mais que uma câmera: uma experiência pensada para o usuário."
          description="MoodShot propõe uma forma de registrar e compartilhar momentos com mais contexto, simplicidade e personalidade."
        />

        <div className="grid gap-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-black text-[#6BB5FF]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Innovation;
