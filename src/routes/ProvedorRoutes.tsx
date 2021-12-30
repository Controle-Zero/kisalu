import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardProvedor from "../screens/DashboardProvedor";

const ProvedorStack = createNativeStackNavigator();

// TODO: Alterar o AppBar das rotas

// TODO: Adicionar rota do DashboardProvedor
const ProvedorRoutes = () => {
  return (
    <ProvedorStack.Navigator initialRouteName="DashboardProvedor">
      <ProvedorStack.Screen
        name="DashboardProvedor"
        component={DashboardProvedor}
      />
    </ProvedorStack.Navigator>
  );
};

export default ProvedorRoutes;
