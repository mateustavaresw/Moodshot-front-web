import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { navLinks } from "../data/conteudo";
import useScrollToHash from "../hooks/useScrollToHash";

function Layout() {
  useScrollToHash();

  return (
    // overflow-x-clip em vez de hidden pq o hidden quebrava o sticky do painel
    <div className="flex min-h-screen flex-col overflow-x-clip bg-ink text-white">
      <div className="grain" aria-hidden="true" />
      <Navbar links={navLinks} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
