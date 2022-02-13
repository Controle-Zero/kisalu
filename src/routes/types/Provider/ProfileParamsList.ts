import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProfileParamsList = {
  ProfileScreen: undefined;
  SelectServiceScreen: undefined;
};

export type ProfileNavProps<T extends keyof ProfileParamsList> = {
  navigation: NativeStackNavigationProp<ProfileParamsList, T>;
  route: RouteProp<ProfileParamsList, T>;
};
