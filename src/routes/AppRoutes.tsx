import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";

const AppStack = createNativeStackNavigator();

// TODO: Alterar o AppBar das rotas

// TODO: Adicionar rota do DashboardProvedor
const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="DashboardCliente" component={Dashboard} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
