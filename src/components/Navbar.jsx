import { startTransition, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  function handleLogout() {
    closeMenu();

    // navega e desloga junto, senao o PrivateRoute joga pro /login em vez da home
    startTransition(() => {
      navigate("/");
      logout();
    });
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="condensed flex shrink-0 items-center gap-2 text-2xl font-extrabold uppercase tracking-tight"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-laranja" aria-hidden="true" />
          Mood<span className="text-azul">Shot</span>
        </Link>

        {/* mudei de md pra lg pq com 6 links nao cabia no tablet */}
        <ul className="hidden items-center gap-7 whitespace-nowrap text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link to={{ pathname: "/", hash: link.hash }} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {isAuthenticated ? (
          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            <NavLink
              to="/painel"
              className="flex items-center gap-2 border border-white/20 py-1 pl-1 pr-4 text-sm font-bold transition hover:border-white/50"
            >
              <img src={user.image} alt="" className="h-7 w-7 bg-white/10" />
              Meu painel
            </NavLink>
            <button
              type="button"
              onClick={handleLogout}
              className="font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-white"
            >
              Sair
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="hidden shrink-0 bg-azul px-5 py-2.5 text-sm font-bold whitespace-nowrap transition hover:bg-[#0874df] lg:inline-block"
          >
            Entrar
          </NavLink>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 lg:hidden"
        >
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 text-base text-slate-200">
          {links.map((link, index) => (
            <li key={link.hash} className="border-b border-white/5">
              <Link
                to={{ pathname: "/", hash: link.hash }}
                onClick={closeMenu}
                className="flex items-baseline gap-4 py-3 transition hover:text-white"
              >
                <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                {link.label}
              </Link>
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <li className="pt-4">
                <Link
                  to="/painel"
                  onClick={closeMenu}
                  className="block bg-azul px-3 py-3 text-center font-bold"
                >
                  Meu painel
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full px-3 py-3 text-center font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-white"
                >
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li className="pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block bg-azul px-3 py-3 text-center font-bold"
              >
                Entrar
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
