import React, { useContext } from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { HomeTabParamsList } from "../types/Provider/HomeTopBarNavParams";
import Requests from "../../screens/Provider/Home/Requests";
import History from "../../screens/Provider/Home/History";
import { ThemeContext } from "styled-components/native";

const HomeTab = createMaterialTopTabNavigator<HomeTabParamsList>();

const HomeTopBarNav = () => {
  const { COLORS, FONTS } = useContext(ThemeContext);

  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarPressColor: COLORS.PRIMARY,
    tabBarLabelStyle: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      textTransform: "capitalize",
      fontSize: 14,
    },
    tabBarIndicatorStyle: {
      backgroundColor: COLORS.PRIMARY,
    },
  };

  return (
    <HomeTab.Navigator initialRouteName="RequestsScreen" backBehavior="none">
      <HomeTab.Screen
        name="RequestsScreen"
        component={Requests}
        options={{ ...screenOptions, title: "Pedidos" }}
      />
      <HomeTab.Screen
        name="HistoryScreen"
        component={History}
        options={{ ...screenOptions, title: "Histórico" }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTopBarNav;
