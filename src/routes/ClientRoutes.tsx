import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/Client/Profile";
import { ClienteParamsList } from "./types/ClienteParamsList";
import HomeStack from "./ClientStack/HomeStack";
import ActivityStack from "./ClientStack/ActivityStack";
import { ThemeContext } from "styled-components";
import SocketContext from "../contexts/SocketContext";

const BottomTab = createBottomTabNavigator<ClienteParamsList>();

const ClienteRoutes = () => {
  const { COLORS, FONTS } = useContext(ThemeContext);
  const { initSocket } = useContext(SocketContext);

  useEffect(() => initSocket(), []);

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
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONTS.POPPINS_REGULAR,
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
      <BottomTab.Screen name="Perfil" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default ClienteRoutes;
