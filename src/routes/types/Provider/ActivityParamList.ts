import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Atividade from "../../../models/Atividade";

export type ActivityParamsList = {
  Activities: undefined;
  Activity: {
    activityId: string;
  };
};

export type ActivityNavProps<T extends keyof ActivityParamsList> = {
  navigation: NativeStackNavigationProp<ActivityParamsList, T>;
  route: RouteProp<ActivityParamsList, T>;
};
