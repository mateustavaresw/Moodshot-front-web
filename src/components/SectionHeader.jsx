// cabecalho que se repetia em todas as secoes (numero + etiqueta + titulo + texto)
function SectionHeader({ number, label, title, description, color = "#168BFF", center = false }) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 ${
          center ? "justify-center" : ""
        }`}
      >
        {/* cor vai no style pq o tailwind nao gera classe com valor dinamico */}
        <span className="h-2 w-2" style={{ background: color }} />
        {number && <span className="text-slate-500">{number}</span>}
        <span className="h-px w-8 bg-white/20" />
        <span style={{ color }}>{label}</span>
      </p>

      <h2 className="condensed mt-6 text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl">
        {title}
      </h2>

      {description && (
        <p className={`mt-6 max-w-2xl leading-7 text-slate-300 ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
