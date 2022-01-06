import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Atividades from "../../screens/Client/Atividades";
import { ActivityParamsList } from "../types/Cliente/ActivityParamsList";

const NativeActivityStack = createNativeStackNavigator<ActivityParamsList>();

function ActivityStack() {
  return (
    <NativeActivityStack.Navigator initialRouteName="AtividadesScreen">
      <NativeActivityStack.Screen
        name="AtividadesScreen"
        component={Atividades}
        options={{ headerShown: false }}
      />
    </NativeActivityStack.Navigator>
  );
}

export default ActivityStack;
