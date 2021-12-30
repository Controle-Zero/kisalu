import React from "react";
import { View } from "react-native";
import useAuth from "../contexts/AuthContext";

import LoadingScreen from "../screens/LoadingScreen";
import AuthRoutes from "./AuthRoute";
import ClienteRoutes from "./ClienteRoutes";
import ProvedorRoutes from "./ProvedorRoutes";

/**
 * Tem dois tipos de rotas:
 * - Autenticação
 * - Rota da aplicação
 */

// Armazena todas as rotas da aplicação
const Routes: React.FC = () => {
  const { signed, loading, user, error } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    alert(error);
    return <AuthRoutes />;
  }

  if (signed) {
    return user?.type === "client" ? <ClienteRoutes /> : <ProvedorRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
