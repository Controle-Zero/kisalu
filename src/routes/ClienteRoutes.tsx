import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Perfil from "../screens/Client/Perfil";
import { ClienteParamsList } from "./types/ClienteParamsList";
import { Colors, TextStyles } from "../styles/appTheme";
import HomeStack from "./ClienteStack/HomeStack";
import ActivityStack from "./ClienteStack/ActivityStack";
import ClientProvedor from "../screens/Client/ClientProvedor";

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
        tabBarLabelStyle: {
          fontSize: TextStyles.smallText.fontSize,
          fontFamily: TextStyles.smallText.font,
        },
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
        },
        headerShown: false,
      })}
      backBehavior="none"
    >
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Atividades" component={ActivityStack} />
      <BottomTab.Screen name="Perfil" component={Perfil} />
    </BottomTab.Navigator>
  );
};

export default ClienteRoutes;
