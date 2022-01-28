import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import useAuth from "../contexts/AuthContext";
import { ProviderParamsList } from "./types/ProviderParamsList";
import { Colors, TextStyles } from "../styles/appTheme";
import Home from "../screens/Provider/Home";
import Perfil from "../screens/Provider/Perfil";

const BottomTab = createBottomTabNavigator<ProviderParamsList>();

const ProvedorRoutes = () => {
  const { user } = useAuth();
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
            case "Perfil":
              iconName = "person-circle-outline";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
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
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Perfil" component={Perfil} />
    </BottomTab.Navigator>
  );
};

export default ProvedorRoutes;
