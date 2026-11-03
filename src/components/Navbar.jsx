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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070A12]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link to="/" onClick={closeMenu} className="shrink-0 text-xl font-black tracking-tight">
          Mood <span className="text-[#168BFF]">Shot</span>
        </Link>

        {/* mudei de md pra lg pq com 6 links nao cabia no tablet */}
        <ul className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-300 lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.hash}>
              <Link to={{ pathname: "/", hash: link.hash }} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {isAuthenticated ? (
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <NavLink
              to="/painel"
              className="flex items-center gap-2 rounded-full border border-white/15 py-1 pl-1 pr-4 text-sm font-bold transition hover:border-white/40"
            >
              <img src={user.image} alt="" className="h-8 w-8 rounded-full bg-white/10" />
              Meu painel
            </NavLink>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Sair
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="hidden shrink-0 rounded-full bg-[#168BFF] px-5 py-2.5 text-sm font-bold whitespace-nowrap transition hover:bg-[#0874df] lg:inline-block"
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
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 lg:hidden"
        >
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-[#070A12] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-base font-medium text-slate-200">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                to={{ pathname: "/", hash: link.hash }}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <li className="pt-2">
                <Link
                  to="/painel"
                  onClick={closeMenu}
                  className="block rounded-lg bg-[#168BFF] px-3 py-3 text-center font-bold"
                >
                  Meu painel
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full rounded-lg px-3 py-3 text-center text-slate-400 hover:bg-white/5 hover:text-white"
                >
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li className="pt-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block rounded-lg bg-[#168BFF] px-3 py-3 text-center font-bold"
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
