import SectionHeader from "./SectionHeader";

function Team({ members }) {
  return (
    <section id="equipe" className="border-t border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader center label="Equipe" color="#FF7A00" title="Quem criou o MoodShot" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member, index) => (
            <article
              key={member.rm}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#168BFF] to-[#8B5CF6] text-2xl font-black">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-black">{member.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{member.rm}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
