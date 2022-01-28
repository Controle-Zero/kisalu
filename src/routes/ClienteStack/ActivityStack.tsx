import React, { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";

import Atividades from "../../screens/Client/Atividades";
import { ActivityParamsList } from "../types/Cliente/ActivityParamsList";
import { Colors } from "../../styles/appTheme";
import Spacer from "../../components/layout/Spacer";

const NativeActivityStack = createNativeStackNavigator<ActivityParamsList>();

function ActivityStack() {
  return (
    <NativeActivityStack.Navigator initialRouteName="AtividadesScreen">
      <NativeActivityStack.Screen
        name="AtividadesScreen"
        component={Atividades}
        options={{
          headerTitle: "Atividades",
          headerLeft: () => <HeaderLeft />,
          contentStyle: {
            borderTopColor: Colors.primary,
            borderTopWidth: 1,
          },
        }}
      />
    </NativeActivityStack.Navigator>
  );
}

const HeaderLeft: FC = () => (
  <>
    <Icon name="list" size={35} color={Colors.secondary} />
    <Spacer width={20} />
  </>
);

export default ActivityStack;
