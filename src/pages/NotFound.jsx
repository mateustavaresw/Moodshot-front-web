import { Link } from "react-router-dom";
import FrameCorners from "../components/FrameCorners";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28">
      <div className="relative w-full max-w-2xl px-6 py-16 text-center sm:px-12">
        <FrameCorners className="inset-0 text-white/40" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-laranja">
          Erro · sem sinal
        </p>
        <span className="condensed mt-4 block text-[9rem] font-extrabold leading-none text-azul/40 sm:text-[12rem]">
          404
        </span>
        <h1 className="condensed text-4xl font-extrabold uppercase sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          Esse endereço não existe ou foi removido. Que tal voltar para o início?
        </p>
        <Link
          to="/"
          className="mt-10 inline-block bg-azul px-7 py-4 font-bold transition hover:bg-[#0874df]"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
