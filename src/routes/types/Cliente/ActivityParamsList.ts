import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ActivityParamsList = {
  AtividadesScreen: undefined;
};

export type ActivityNavProps<T extends keyof ActivityParamsList> = {
  navigation: NativeStackNavigationProp<ActivityParamsList, T>;
  route: RouteProp<ActivityParamsList, T>;
};
