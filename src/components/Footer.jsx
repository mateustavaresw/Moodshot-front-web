function Footer() {
  return (
    <footer className="px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="condensed max-w-3xl text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl">
            Cada momento tem uma vibe. Cada vibe merece um{" "}
            <span className="text-laranja">MoodShot.</span>
          </h2>

          <a
            href="#inicio"
            className="shrink-0 self-start border border-white/25 px-7 py-4 font-mono text-xs uppercase tracking-widest transition hover:border-white hover:bg-white hover:text-ink lg:self-auto"
          >
            ↑ Voltar ao início
          </a>
        </div>

        {/* marca grandona no rodape */}
        <p
          aria-hidden="true"
          className="condensed mt-20 select-none text-center text-[22vw] font-extrabold uppercase leading-[0.8] tracking-tighter text-white/[0.06] lg:text-[16rem]"
        >
          MoodShot
        </p>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-8 font-mono text-xs uppercase tracking-widest text-slate-500 sm:flex-row">
          <p>© 2026 MoodShot · Projeto conceitual</p>
          <p>Apexxon Consultoria × Jovi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
