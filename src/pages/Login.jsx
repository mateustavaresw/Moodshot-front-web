import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";

function validateLogin(values) {
  const errors = {};

  if (!values.username.trim()) errors.username = "Informe o usuário.";
  if (!values.password) errors.password = "Informe a senha.";

  return errors;
}

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const { values, errors, handleChange, handleSubmit } = useForm(
    { username: "", password: "" },
    validateLogin,
  );

  // se veio do PrivateRoute volta pra pagina que tentou abrir
  const redirectTo = location.state?.from || "/painel";

  // ja ta logado, nao precisa ver o login
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  async function onSubmit({ username, password }) {
    setLoading(true);
    setApiError("");

    try {
      await login(username.trim(), password);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center px-6 pb-16 pt-32">
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#168BFF]/20 blur-[140px]" />

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0B101C] p-8 sm:p-10">
        <h1 className="text-3xl font-black">Entrar no MoodShot</h1>
        <p className="mt-3 text-slate-400">
          Acesse seu painel para registrar e organizar seus momentos.
        </p>

        {location.state?.from && (
          <p className="mt-6 rounded-lg border border-[#FF7A00]/40 bg-[#FF7A00]/10 p-3 text-sm text-orange-200">
            Faça login para acessar essa página.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-5">
          <FormField
            label="Usuário"
            id="username"
            type="text"
            autoComplete="username"
            placeholder="Digite seu usuário"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
          />

          <FormField
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
          />

          {apiError && (
            <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-sm text-red-300">
              {apiError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#168BFF] px-6 py-3 font-bold transition hover:bg-[#0874df] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          <p className="font-bold text-white">Usuário de teste</p>
          <p className="mt-1">
            Usuário: <code className="text-[#6BB5FF]">teste</code> · Senha:{" "}
            <code className="text-[#6BB5FF]">teste123</code>
          </p>
        </div>

        <Link to="/" className="mt-6 block text-center text-sm text-slate-400 hover:text-white">
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}

export default Login;
