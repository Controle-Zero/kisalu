import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthParamsList = {
  Login: undefined;
  Welcome: undefined;
  CadastroCliente: undefined;
  CadastroProvedor: undefined;
};

export type AuthNavProps<T extends keyof AuthParamsList> = {
  navigation: NativeStackNavigationProp<AuthParamsList, T>;
  route: RouteProp<AuthParamsList, T>;
};
