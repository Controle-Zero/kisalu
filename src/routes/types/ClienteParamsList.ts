import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ClienteParamsList = {
  Home: undefined;
  Atividades: undefined;
  Perfil: undefined;
};

export type ClienteNavProps<T extends keyof ClienteParamsList> = {
  navigation: NativeStackNavigationProp<ClienteParamsList, T>;
  route: RouteProp<ClienteParamsList, T>;
};
