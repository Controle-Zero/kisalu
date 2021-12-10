import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import CadastroCliente from "./screens/CadastroCliente";
import CadastroProvedor from "./screens/CadastroProvedor";

const AuthStack = createNativeStackNavigator();

export default function App() {
  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // Se as fontes não carregarem, apresenta a aplicação a carregar
  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="CadastroCliente" component={CadastroCliente} />
        <AuthStack.Screen
          name="CadastroProvedor"
          component={CadastroProvedor}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
