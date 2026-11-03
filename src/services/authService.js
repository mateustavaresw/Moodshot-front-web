const AUTH_URL = "https://dummyjson.com/auth/login";

// usuario de teste do nosso app
const TEST_USER = { username: "teste", password: "teste123" };

// a dummyjson so aceita os usuarios dela, entao o teste usa essa conta por tras
const API_USER = { username: "emilys", password: "emilyspass" };

export async function loginRequest(username, password) {
  if (username !== TEST_USER.username || password !== TEST_USER.password) {
    throw new Error("Usuário ou senha inválidos.");
  }

  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...API_USER, expiresInMins: 60 }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Não foi possível fazer login agora. Tente de novo.");
  }

  // so pego o que vou usar no app
  return {
    id: data.id,
    username: TEST_USER.username,
    name: "Teste",
    email: data.email,
    image: data.image,
    token: data.accessToken,
  };
}
