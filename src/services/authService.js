const AUTH_URL = "https://dummyjson.com/auth/login";

export async function loginRequest(username, password) {
  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins: 60 }),
  });

  const data = await response.json();

  // dummyjson devolve 400 quando o login ta errado
  if (!response.ok) {
    throw new Error("Usuário ou senha inválidos.");
  }

  // so pego o que vou usar no app
  return {
    id: data.id,
    username: data.username,
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    image: data.image,
    token: data.accessToken,
  };
}
