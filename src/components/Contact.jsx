function Contact() {
  return (
    <section id="contato" className="bg-[#0B101C] px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold">Entre em contato</h2>

        <p className="mt-4 text-slate-300">
          Envie uma mensagem para a equipe MoodShot.
        </p>

        <form
          action="mailto:Apexxon.consultorio@gmail.com"
          method="post"
          encType="text/plain"
          className="mt-8 space-y-5"
        >
          <div>
            <label htmlFor="nome" className="mb-2 block font-bold">
              Nome
            </label>

            <input
              id="nome"
              name="Nome"
              type="text"
              required
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-white/20 bg-[#070A12] p-3 outline-none focus:border-[#168BFF]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-bold">
              E-mail
            </label>

            <input
              id="email"
              name="Email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              className="w-full rounded-lg border border-white/20 bg-[#070A12] p-3 outline-none focus:border-[#168BFF]"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="mb-2 block font-bold">
              Mensagem
            </label>

            <textarea
              id="mensagem"
              name="Mensagem"
              required
              rows="5"
              placeholder="Digite sua mensagem"
              className="w-full rounded-lg border border-white/20 bg-[#070A12] p-3 outline-none focus:border-[#168BFF]"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#168BFF] px-6 py-3 font-bold hover:bg-blue-700"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;