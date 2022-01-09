import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardProvedor from "../screens/DashboardProvedor";
import PerfilProvedor from "../screens/PerfilProvedor";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, TextStyles } from "../styles/appTheme";

const BottomTab = createBottomTabNavigator();
const ProvedorRoutes = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName = "";

          switch (route.name) {
            case "DashboardProvedor":
              iconName = "home";
              break;
            case "PerfilProvedor":
              iconName = "person-circle-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarLabelStyle: {
          fontSize: TextStyles.smallText.fontSize,
          fontFamily: TextStyles.smallText.font,
        },
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
          backgroundColor: Colors.primary,
        },
      })}
      backBehavior="none"
    >
      <BottomTab.Screen
        name="DashboardProvedor"
        component={DashboardProvedor}
      />
      <BottomTab.Screen name="PerfilProvedor" component={PerfilProvedor} />
    </BottomTab.Navigator>
  );
};

export default ProvedorRoutes;
