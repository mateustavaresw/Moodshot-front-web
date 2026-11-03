import { useEffect, useState } from "react";
import {
  atualizarMomento,
  criarMomento,
  excluirMomento,
  listarMomentos,
} from "../services/momentosService";

function useMomentos(userId) {
  const [momentos, setMomentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ativo = true;

    listarMomentos(userId)
      .then((data) => {
        if (ativo) setMomentos(data);
      })
      .catch((err) => {
        if (ativo) setError(err.message);
      })
      .finally(() => {
        if (ativo) setLoading(false);
      });

    // se sair da pagina antes da resposta chegar, ignora
    return () => {
      ativo = false;
    };
  }, [userId]);

  async function adicionar(dados) {
    const novo = await criarMomento({
      ...dados,
      userId,
      favorito: false,
      createdAt: new Date().toISOString(),
    });
    // coloca o novo no comeco sem buscar tudo de novo
    setMomentos((prev) => [novo, ...prev]);
  }

  async function alternarFavorito(momento) {
    const atualizado = await atualizarMomento(momento.id, {
      ...momento,
      favorito: !momento.favorito,
    });
    setMomentos((prev) => prev.map((item) => (item.id === momento.id ? atualizado : item)));
  }

  async function remover(id) {
    await excluirMomento(id);
    setMomentos((prev) => prev.filter((item) => item.id !== id));
  }

  // sem try/catch aqui, quem chama que mostra o erro
  return { momentos, loading, error, adicionar, alternarFavorito, remover };
}

export default useMomentos;
