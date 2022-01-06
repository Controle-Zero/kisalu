import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Client/Home";
import Atividades from "../screens/Client/Atividades";
import Perfil from "../screens/Client/Perfil";
import { ClienteParamsList } from "./types/ClienteParamsList";
import { Colors } from "../styles/appTheme";

const BottomTab = createBottomTabNavigator<ClienteParamsList>();

const ClienteRoutes = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName = "";

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Atividades":
              iconName = "list";
              break;
            case "Perfil":
              iconName = "person-circle-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Atividades" component={Atividades} />
      <BottomTab.Screen name="Perfil" component={Perfil} />
    </BottomTab.Navigator>
  );
};

export default ClienteRoutes;
