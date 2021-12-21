import React, { createContext, useState } from "react";

import * as auth from "../services/auth";

/**
 * A interface do contexto que define os dados que são passados para os
 * fornecedores de contexto
 */
interface AuthContextData {
  // Se o utilizador está autenticado ou não
  signed: boolean;
  // O objeto que contém os dados do utilizador. É nulo se não estiver autenticado
  user: object | null;
  // Método para iniciar sessão
  //TODO: Passar o email e password
  signIn(): Promise<void>;
  //Método para finalizar a sessão
  signOut(): void;
}

// O contexto da autenticação
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  // Estado do utilizador
  const [user, setUser] = useState<object | null>(null);

  // Método de iniciar sessão
  async function signIn() {
    //   TODO: Melhorar a lógica deste método
    const response = await auth.signIn();
    setUser(response.user);
  }

  // Método para finalizar a sessão
  function signOut() {
    // É necessário apenas colocar o utilizador como null
    setUser(null);
  }

  // Retorna o componente do Provedor com os dados
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
