import React from "react";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "../screens/other/LoadingScreen";
import AuthRoutes from "./AuthRoute";
import ClienteRoutes from "./ClientRoutes";
import ProvedorRoutes from "./ProvedorRoutes";

// Armazena todas as rotas da aplicação
const Routes: React.FC = () => {
  const { loading, error, userType, user } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    alert(error);
    return <AuthRoutes />;
  }

  if (!user) {
    return userType === "client" ? <ClienteRoutes /> : <ProvedorRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
