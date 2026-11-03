import { useState } from "react";
import AuthContext from "./AuthContext";
import { loginRequest } from "../services/authService";

const STORAGE_KEY = "moodshot:user";

function getSavedUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function AuthProvider({ children }) {
  // passando a funcao direto pra ler o localStorage so na primeira vez
  const [user, setUser] = useState(getSavedUser);

  async function login(username, password) {
    const loggedUser = await loginRequest(username, password);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
    setUser(loggedUser);
    return loggedUser;
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
