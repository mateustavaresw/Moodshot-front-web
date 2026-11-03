import SectionHeader from "./SectionHeader";

function Experience({ steps }) {
  return (
    <section id="experiencia" className="border-b border-white/10 bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          number="04"
          label="Como funciona"
          color="#FF7A00"
          title="Quatro passos para transformar um clique em expressão."
        />
      </div>

      {/* passos numa tira de filme */}
      <div className="mt-14 border-y border-white/10 bg-black/50">
        <div className="sprockets" aria-hidden="true" />
        <ol className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="bg-[#05070d] p-7">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-slate-500">
                <span>Frame {step.number}</span>
                <span className="text-azul">▶</span>
              </div>
              <p className="condensed mt-10 text-7xl font-extrabold leading-none text-white/10">
                {step.number}
              </p>
              <h3 className="condensed mt-4 text-2xl font-extrabold uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="sprockets" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Experience;
