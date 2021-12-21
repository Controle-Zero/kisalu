import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import { AuthProvider } from "./src/context/auth";

export default function App() {
  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // Se as fontes não carregarem, apresenta a aplicação a carregar
  if (!fontsLoaded) return <AppLoading />;
  // Passando o NavigationContainer para navegação e AuthProvider para autenticação
  // O Routes armazena todas as rotas
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
