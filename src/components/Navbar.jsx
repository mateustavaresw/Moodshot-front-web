import { useState } from "react";

const links = [
  { href: "#problema", label: "Pesquisa" },
  { href: "#publico-alvo", label: "Público-Alvo" },
  { href: "#solucao", label: "Solução" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Nossa Equipe" },
  { href: "#contato", label: "Contato" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070A12]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="shrink-0 text-xl font-black tracking-tight">
          Mood <span className="text-[#168BFF]">Shot</span>
        </a>

        <ul className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-300 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden shrink-0 rounded-full bg-[#168BFF] px-4 py-2.5 text-sm font-bold whitespace-nowrap transition hover:bg-[#0874df] sm:px-5 md:inline-block"
        >
          Conheça o MoodShot
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-[#070A12] transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-base font-medium text-slate-200">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
