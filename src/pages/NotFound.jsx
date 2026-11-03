import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <span className="text-8xl font-black text-[#168BFF]/40">404</span>
      <h1 className="mt-4 text-3xl font-black sm:text-4xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-slate-400">
        Esse endereço não existe ou foi removido. Que tal voltar para o início?
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-[#168BFF] px-7 py-4 font-bold transition hover:bg-[#0874df]"
      >
        Voltar ao início
      </Link>
    </section>
  );
}

export default NotFound;
