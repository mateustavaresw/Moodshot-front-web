import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import FrameCorners from "../components/FrameCorners";
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
    <section className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28">
      <div className="relative w-full max-w-md border border-white/10 bg-panel p-8 sm:p-10">
        <FrameCorners className="-inset-3 text-azul" />

        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-laranja">
          <span className="rec-dot h-2 w-2 rounded-full bg-laranja" />
          Acesso
        </p>
        <h1 className="condensed mt-4 text-5xl font-extrabold leading-[0.92] tracking-tight">
          Entrar no MoodShot
        </h1>
        <p className="mt-3 text-slate-400">
          Acesse seu painel para registrar e organizar seus momentos.
        </p>

        {location.state?.from && (
          <p className="mt-6 border-l-2 border-laranja bg-laranja/10 p-3 text-sm text-orange-200">
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
            <p role="alert" className="border-l-2 border-red-400 bg-red-500/10 p-3 text-sm text-red-300">
              {apiError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-azul px-6 py-4 font-bold transition hover:bg-[#0874df] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6 border border-dashed border-white/15 p-4 font-mono text-xs text-slate-400">
          <p className="uppercase tracking-widest text-slate-500">Usuário de teste</p>
          <p className="mt-2">
            usuário: <span className="text-azul-claro">teste</span> · senha:{" "}
            <span className="text-azul-claro">teste123</span>
          </p>
        </div>

        <Link to="/" className="mt-6 block text-center text-sm text-slate-400 hover:text-white">
          ← Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}

export default Login;
