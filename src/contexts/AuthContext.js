import { createContext } from "react";

// separado do provider pq o eslint reclama de .jsx exportando coisa que nao eh componente
const AuthContext = createContext(null);

export default AuthContext;
