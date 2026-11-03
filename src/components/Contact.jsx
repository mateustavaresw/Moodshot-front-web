// campo com so a linha de baixo, fica mais limpo
const inputClass =
  "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 outline-none transition placeholder:text-slate-600 focus:border-azul";

function Contact() {
  return (
    <section id="contato" className="bg-panel px-6 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            <span className="h-2 w-2 bg-azul" />
            <span className="text-slate-500">08</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-azul">Contato</span>
          </p>
          <h2 className="condensed mt-6 text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl">
            Entre em contato
          </h2>
          <p className="mt-6 max-w-md leading-7 text-slate-300">
            Envie uma mensagem para a equipe MoodShot.
          </p>
          <a
            href="mailto:Apexxon.consultorio@gmail.com"
            className="mt-8 inline-block font-mono text-sm text-azul-claro underline decoration-white/20 underline-offset-8 transition hover:decoration-azul"
          >
            Apexxon.consultorio@gmail.com
          </a>
        </div>

        <form
          action="mailto:Apexxon.consultorio@gmail.com"
          method="post"
          encType="text/plain"
          className="space-y-8"
        >
          <div>
            <label htmlFor="nome" className="block font-mono text-xs uppercase tracking-widest text-slate-400">
              Nome
            </label>
            <input
              id="nome"
              name="Nome"
              type="text"
              required
              placeholder="Digite seu nome"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-slate-400">
              E-mail
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block font-mono text-xs uppercase tracking-widest text-slate-400">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="Mensagem"
              required
              rows="4"
              placeholder="Digite sua mensagem"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="bg-azul px-7 py-4 font-bold transition hover:bg-[#0874df]"
          >
            Enviar mensagem →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
