function Footer() {
  return (
    <footer className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-[#168BFF] via-[#357CF5] to-[#8B5CF6] p-8 text-center sm:p-14">
        <p className="font-bold text-white/80">MoodShot para Jovi</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Cada momento tem uma vibe. Cada vibe merece um MoodShot.
        </h2>

        <a
          href="#inicio"
          className="mt-8 inline-block rounded-full bg-[#070A12] px-7 py-4 font-bold transition hover:scale-105"
        >
          Voltar ao início
        </a>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 MoodShot. Projeto conceitual.</p>
        <p>Jovi · MoodShot</p>
      </div>
    </footer>
  );
}

export default Footer;