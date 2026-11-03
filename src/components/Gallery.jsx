const moments = [
  {
    label: "Festa",
    emoji: "🎉",
    from: "#FF7A00",
    to: "#8B5CF6",
    caption: "Filtros vibrantes e enquadramento automático para não perder o clima da balada.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
        <path d="M10 54 24 22l18 18-32 14Z" fill="#fff" fillOpacity="0.9" />
        <circle cx="46" cy="12" r="3" fill="#fff" />
        <circle cx="54" cy="24" r="2.5" fill="#fff" />
        <circle cx="38" cy="8" r="2" fill="#fff" />
        <path d="M28 20l4-4M34 26l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Estudo",
    emoji: "📚",
    from: "#168BFF",
    to: "#6BB5FF",
    caption: "Modo foco com boa nitidez para registrar anotações, slides e quadros.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
        <path
          d="M12 16c6-4 14-4 20 0v32c-6-4-14-4-20 0V16ZM52 16c-6-4-14-4-20 0v32c6-4 14-4 20 0V16Z"
          fill="#fff"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    label: "Viagem",
    emoji: "✈️",
    from: "#8B5CF6",
    to: "#168BFF",
    caption: "Sugestão de composição para paisagens e pontos turísticos em segundos.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
        <path
          d="M8 34l48-18-16 20 4 16-10-8-6 8-2-12-12-4 8-6-14 4Z"
          fill="#fff"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    label: "Encontro",
    emoji: "❤️",
    from: "#FF7A00",
    to: "#FF5CA8",
    caption: "Retratos com profundidade e tons quentes para momentos a dois.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
        <path
          d="M32 50 12 32c-5-5-5-13 0-18 5-4 12-4 16 2 4-6 11-6 16-2 5 5 5 13 0 18L32 50Z"
          fill="#fff"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
];

function Gallery() {
  return (
    <section id="galeria" className="border-t border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#168BFF]">
            Galeria
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Cada mood, uma experiência visual diferente.
          </h2>
          <p className="mt-6 leading-7 text-slate-300">
            Um preview de como a interface do MoodShot se adapta ao contexto
            escolhido pelo usuário antes de tirar a foto.
          </p>
        </div>

        <div className="gallery-grid mt-14">
          {moments.map((moment) => (
            <figure
              key={moment.label}
              className="gallery-item group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition hover:-translate-y-2 hover:border-white/30"
            >
              <div
                className="flex aspect-[4/5] flex-col justify-between p-6"
                style={{
                  background: `linear-gradient(160deg, ${moment.from}, ${moment.to} 80%)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    MoodShot
                  </span>
                  <span className="text-2xl" aria-hidden="true">
                    {moment.emoji}
                  </span>
                </div>

                <div>
                  {moment.icon}
                  <p className="mt-4 text-2xl font-black text-white">{moment.label}</p>
                </div>
              </div>

              <figcaption className="p-6">
                <p className="text-sm leading-6 text-slate-400">{moment.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
