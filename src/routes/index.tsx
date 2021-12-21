import React, { useContext } from "react";

import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthStackRoute";
import AuthContext from "../context/auth";

/**
 * Tem dois tipos de rotas:
 * - Autenticação
 * - Rota da aplicação
 */

// Armazena todas as rotas da aplicação
const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
