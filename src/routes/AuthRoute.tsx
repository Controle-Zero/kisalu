import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientSignUp from "../screens/auth/ClientSignUp";
import ProviderSignUp from "../screens/auth/ProviderSignUp";
import Login from "../screens/auth/Login";
import Welcome from "../screens/auth/Welcome";
import { AuthParamsList } from "./types/AuthParamsList";

const AuthStack = createNativeStackNavigator<AuthParamsList>();

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
        component={ClientSignUp}
        options={{ title: "" }}
      />
      <AuthStack.Screen
        name="CadastroProvedor"
        component={ProviderSignUp}
        options={{ title: "" }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoute;
