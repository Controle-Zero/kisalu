import React, { FC, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import Activities from "../../screens/Client/Activities";
import { ActivityParamsList } from "../types/Cliente/ActivityParamsList";
import Spacer from "../../components/layout/Spacer";
import Rating from "../../screens/Client/Rating";
import { ThemeContext } from "styled-components";

const NativeActivityStack = createNativeStackNavigator<ActivityParamsList>();

function ActivityStack() {
  const { COLORS } = useContext(ThemeContext);
  return (
    <NativeActivityStack.Navigator initialRouteName="AtividadesScreen">
      <NativeActivityStack.Screen
        name="AtividadesScreen"
        component={Activities}
        options={{
          headerTitle: "Atividades",
          contentStyle: {
            borderTopColor: COLORS.PRIMARY,
            borderTopWidth: 1,
          },
        }}
      />
      <NativeActivityStack.Screen
        name="Rating"
        component={Rating}
        options={{
          headerTitle: "Avaliação",
          contentStyle: {
            borderTopColor: COLORS.PRIMARY,
            borderTopWidth: 1,
          },
        }}
      />
    </NativeActivityStack.Navigator>
  );
}

const HeaderLeft: FC = () => (
  <>
    <Icon name="list" size={35} />
    <Spacer width={20} />
  </>
);

export default ActivityStack;
