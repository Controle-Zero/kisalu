import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Categoria from "../../../models/Categoria";
import Prestador from "../../../models/Provedor";

export type HomeParamsList = {
  HomeScreen: undefined;
  ProvidersList: {
    category: Categoria;
  };
  ProviderProfile: {
    provider: Prestador;
    categoryId: string;
  };
};

export type HomeNavProps<T extends keyof HomeParamsList> = {
  navigation: NativeStackNavigationProp<HomeParamsList, T>;
  route: RouteProp<HomeParamsList, T>;
};
