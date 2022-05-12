import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTabParamsList } from "../types/Provider/HomeTopBarNavParams";
import Requests from "../../screens/Provider/Home/Requests";
import History from "../../screens/Provider/Home/History";

const HomeTab = createMaterialTopTabNavigator<HomeTabParamsList>();

const HomeTopBarNav = () => {
  return (
    <HomeTab.Navigator initialRouteName="RequestsScreen">
      <HomeTab.Screen name="RequestsScreen" component={Requests} />
      <HomeTab.Screen name="HistoryScreen" component={History} />
    </HomeTab.Navigator>
  );
};

export default HomeTopBarNav;
