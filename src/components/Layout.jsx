import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { navLinks } from "../data/conteudo";
import useScrollToHash from "../hooks/useScrollToHash";

function Layout() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#070a12] text-white">
      <Navbar links={navLinks} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;