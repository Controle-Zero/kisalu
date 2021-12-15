import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import CadastroCliente from "../screens/CadastroCliente";
import CadastroProvedor from "../screens/CadastroProvedor";
import Login from "../screens/Login";
import PerfilProvedor from "../screens/PerfilProvedor";
import Welcome from "../screens/Welcome";

const AuthStack = createNativeStackNavigator();

function AuthStackRoute() {
  const screensHeaderOptions: NativeStackNavigationOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: "#fff",
    },
  };
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={screensHeaderOptions}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={screensHeaderOptions}
      />
      <AuthStack.Screen
        name="CadastroCliente"
        component={CadastroCliente}
        options={screensHeaderOptions}
      />
      <AuthStack.Screen
        name="CadastroProvedor"
        component={CadastroProvedor}
        options={screensHeaderOptions}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackRoute;
