import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeParamsList } from "../types/Cliente/HomeParamsList";
import Home from "../../screens/Client/Home";

const NativeHomeStack = createNativeStackNavigator<HomeParamsList>();

function HomeStack() {
  return (
    <NativeHomeStack.Navigator initialRouteName="HomeScreen">
      <NativeHomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
    </NativeHomeStack.Navigator>
  );
}

export default HomeStack;
