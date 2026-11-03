import useAuth from "../hooks/useAuth";

function Painel() {
  const { user } = useAuth();
  const firstName = user.name.split(" ")[0];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
        Área do usuário
      </span>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">Olá, {firstName}!</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Aqui vão aparecer os momentos que você registrar no MoodShot.
      </p>
    </section>
  );
}

export default Painel;
