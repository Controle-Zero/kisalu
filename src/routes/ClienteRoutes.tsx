import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardCliente from "../screens/DashboardCliente";

const ClienteStack = createNativeStackNavigator();

// TODO: Alterar o AppBar das rotas

// TODO: Adicionar rota do DashboardProvedor
const ClienteRoutes = () => {
  return (
    <ClienteStack.Navigator initialRouteName="DashboardCliente">
      <ClienteStack.Screen
        name="DashboardCliente"
        component={DashboardCliente}
      />
    </ClienteStack.Navigator>
  );
};

export default ClienteRoutes;
