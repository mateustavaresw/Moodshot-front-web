import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    // espera a página renderizar antes de procurar a seção
    const timer = setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, hash]);
}

export default useScrollToHash;