import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { ProviderParamsList } from "./types/ProviderParamsList";
import Home from "../screens/Provider/Home";
import ProfileStack from "./ProviderStack/ProfileStack";
import useAuth from "../hooks/useAuth";
import { ThemeContext } from "styled-components";

const BottomTab = createBottomTabNavigator<ProviderParamsList>();

const ProvedorRoutes = () => {
  const { user } = useAuth();
  const { COLORS, FONTS } = useContext(ThemeContext);
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
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true, headerTitle: user?.nome }}
      />
      <BottomTab.Screen name="Perfil" component={ProfileStack} />
    </BottomTab.Navigator>
  );
};

export default ProvedorRoutes;
