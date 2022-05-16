import React from "react";
import { Alert } from "react-native";
import { SocketContextProvider } from "../contexts/SocketContext";
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
    Alert.alert("Erro no Login", error.message);
    return <AuthRoutes />;
  }

  if (user) {
    return userType === "client" ? (
      <SocketContextProvider>
        <ClienteRoutes />
      </SocketContextProvider>
    ) : (
      <SocketContextProvider>
        <ProvedorRoutes />
      </SocketContextProvider>
    );
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
