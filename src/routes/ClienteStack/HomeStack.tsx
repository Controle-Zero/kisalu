import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeParamsList } from "../types/Cliente/HomeParamsList";
import Home from "../../screens/Client/Home";
import useAuth from "../../contexts/AuthContext";
import AppBar from "../../components/appbar/Appbar";

const NativeHomeStack = createNativeStackNavigator<HomeParamsList>();

function HomeStack() {
  const { user } = useAuth();
  return (
    <NativeHomeStack.Navigator initialRouteName="HomeScreen">
      <NativeHomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          header: ({ options }) => {
            return <AppBar title={user?.nome} />;
          },
        }}
      />
    </NativeHomeStack.Navigator>
  );
}

export default HomeStack;
