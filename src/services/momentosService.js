// TODO: trocar pela url do nosso projeto no mockapi (sem a barra no final)
const API_URL = "https://SEU-ID.mockapi.io/api/v1";

const MOMENTOS_URL = `${API_URL}/momentos`;

async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  // o mockapi responde 404 quando o filtro nao acha nada, entao no GET vira lista vazia
  if (response.status === 404 && (!options.method || options.method === "GET")) {
    return [];
  }

  if (!response.ok) {
    throw new Error("Não foi possível falar com o servidor. Tente de novo.");
  }

  return response.json();
}

export async function listarMomentos(userId) {
  const data = await request(`${MOMENTOS_URL}?userId=${userId}&sortBy=createdAt&order=desc`);
  // o filtro do mockapi eh tipo "contem", userId=1 traz o 10, 11... por isso filtro de novo
  return data.filter((momento) => String(momento.userId) === String(userId));
}

export function criarMomento(momento) {
  return request(MOMENTOS_URL, {
    method: "POST",
    body: JSON.stringify(momento),
  });
}

export function atualizarMomento(id, dados) {
  return request(`${MOMENTOS_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(dados),
  });
}

export function excluirMomento(id) {
  return request(`${MOMENTOS_URL}/${id}`, { method: "DELETE" });
}
