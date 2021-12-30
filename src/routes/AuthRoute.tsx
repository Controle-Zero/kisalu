import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroCliente from "../screens/CadastroCliente";
import CadastroProvedor from "../screens/CadastroProvedor";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const AuthStack = createNativeStackNavigator();

function AuthRoute() {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ title: "" }}
      />
      <AuthStack.Screen
        name="CadastroCliente"
        component={CadastroCliente}
        options={{ title: "" }}
      />
      <AuthStack.Screen
        name="CadastroProvedor"
        component={CadastroProvedor}
        options={{ title: "" }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoute;
