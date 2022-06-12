import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC, useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "styled-components";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../hooks/useAuth";
import Activity from "../../screens/Provider/Home/Activity";
import { ActivityParamsList } from "../types/Provider/ActivityParamList";
import HomeTopBarNav from "./HomeTopBarNav";

const NativeActivityStack = createNativeStackNavigator<ActivityParamsList>();

function ActivityStack() {
  const { user } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  return (
    <NativeActivityStack.Navigator initialRouteName="Activities">
      <NativeActivityStack.Screen
        name="Activities"
        component={HomeTopBarNav}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: user?.nome,
        }}
      />
      <NativeActivityStack.Screen
        name="Activity"
        component={Activity}
        options={{
          headerTitle: "",
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
