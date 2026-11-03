import SectionHeader from "./SectionHeader";
import FrameCorners from "./FrameCorners";

// "José Henrique" -> "JH"
function iniciais(nome) {
  return nome
    .split(" ")
    .map((parte) => parte[0])
    .join("");
}

function Team({ members }) {
  return (
    <section id="equipe" className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader number="07" label="Equipe" color="#FF7A00" title="Quem criou o MoodShot" />

        {/* tipo uma folha de contato de fotografia */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {members.map((member, index) => (
            <article key={member.rm}>
              <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-azul/25 via-roxo/20 to-transparent">
                <FrameCorners className="inset-3 text-white/40" />
                <span className="condensed text-6xl font-extrabold text-white/90">
                  {iniciais(member.name)}
                </span>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                Frame {index + 1}/{members.length}
              </p>
              <h3 className="mt-1 text-lg font-bold">{member.name}</h3>
              <p className="font-mono text-xs text-slate-400">{member.rm}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
