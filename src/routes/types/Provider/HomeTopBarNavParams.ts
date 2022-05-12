import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { RouteProp } from "@react-navigation/native";

export type HomeTabParamsList = {
  RequestsScreen: undefined;
  HistoryScreen: undefined;
};

export type HomeTabProps<T extends keyof HomeTabParamsList> = {
  navigation: MaterialTopTabNavigationProp<HomeTabParamsList, T>;
  route: RouteProp<HomeTabParamsList, T>;
};
