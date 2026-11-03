// cabecalho que se repetia em todas as secoes (etiqueta + titulo + texto)
function SectionHeader({ label, title, description, color = "#168BFF", center = false }) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {/* cor vai no style pq o tailwind nao gera classe com valor dinamico */}
      <span
        className="text-sm font-bold uppercase tracking-[0.2em]"
        style={{ color }}
      >
        {label}
      </span>

      <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 leading-7 text-slate-300">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
