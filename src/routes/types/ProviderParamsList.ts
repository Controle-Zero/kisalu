import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProviderParamsList = {
  Home: undefined;
  Perfil: undefined;
};

export type ProviderNavProps<T extends keyof ProviderParamsList> = {
  navigation: NativeStackNavigationProp<ProviderParamsList, T>;
  route: RouteProp<ProviderParamsList, T>;
};
