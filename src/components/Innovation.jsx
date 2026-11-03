import SectionHeader from "./SectionHeader";

function Innovation({ items }) {
  return (
    <section className="border-b border-white/10 bg-panel py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <SectionHeader
          number="06"
          label="Proposta de valor"
          color="#8B5CF6"
          title="Mais que uma câmera: uma experiência pensada para o usuário."
          description="MoodShot propõe uma forma de registrar e compartilhar momentos com mais contexto, simplicidade e personalidade."
        />

        <ol className="border-t border-white/10">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-7"
            >
              <span className="font-mono text-sm text-roxo">0{index + 1}</span>
              <div>
                <h3 className="condensed text-3xl font-extrabold uppercase text-azul-claro">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Innovation;
