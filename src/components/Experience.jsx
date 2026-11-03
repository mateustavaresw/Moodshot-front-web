import SectionHeader from "./SectionHeader";

function Experience({ steps }) {
  return (
    <section id="experiencia" className="bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Como funciona"
          color="#FF7A00"
          title="Quatro passos para transformar um clique em expressão."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121A29] p-7"
            >
              <span className="text-5xl font-black text-[#168BFF]/35">{step.number}</span>
              <div className="mt-16 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#8B5CF6]" />
              <h3 className="mt-6 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
