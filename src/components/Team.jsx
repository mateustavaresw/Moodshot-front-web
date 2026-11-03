const members = [
  ["José Henrique", "Rm 569037"],
  ["Rafael Rosatti ", "Rm 571280"],
  ["Mateus Rodrigues", "Rm 571189"],
  ["Matheus Donas", "Rm 568626"],
  ["Enzo Cassiano", "Rm 569630"]
];

function Team() {
  return (
    <section id="equipe" className="border-t border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
            Equipe
          </span>
          <h2 className="mt-5 text-4xl font-black">Quem criou o MoodShot</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(([name, rm], index) => (
            <article key={name} className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#168BFF] to-[#8B5CF6] text-2xl font-black">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-black">{name}</h3>
              <p className="mt-2 text-sm text-slate-400">{rm}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;