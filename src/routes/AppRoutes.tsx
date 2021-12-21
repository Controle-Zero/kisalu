import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="DashboardCliente" component={Dashboard} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
