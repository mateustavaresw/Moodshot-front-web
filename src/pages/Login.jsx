import { Link } from "react-router-dom";

// por enquanto so o visual, a logica do login fica pra etapa 2
function Login() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center px-6 pb-16 pt-32">
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#168BFF]/20 blur-[140px]" />

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0B101C] p-8 sm:p-10">
        <h1 className="text-3xl font-black">Entrar no MoodShot</h1>
        <p className="mt-3 text-slate-400">
          Acesse seu painel para registrar e organizar seus momentos.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="usuario" className="mb-2 block font-bold">
              Usuário
            </label>
            <input
              id="usuario"
              type="text"
              placeholder="Digite seu usuário"
              className="w-full rounded-lg border border-white/20 bg-[#070A12] p-3 outline-none focus:border-[#168BFF]"
            />
          </div>

          <div>
            <label htmlFor="senha" className="mb-2 block font-bold">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-white/20 bg-[#070A12] p-3 outline-none focus:border-[#168BFF]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#168BFF] px-6 py-3 font-bold transition hover:bg-[#0874df]"
          >
            Entrar
          </button>
        </form>

        <Link to="/" className="mt-6 block text-center text-sm text-slate-400 hover:text-white">
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}

export default Login;
