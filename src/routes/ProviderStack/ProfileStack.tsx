import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Perfil from "../../screens/Provider/Perfil";
import { ProfileParamsList } from "../types/Provider/ProfileParamsList";
import SelectService from "../../screens/Provider/SelectService";

const ProfileStackNavigator = createNativeStackNavigator<ProfileParamsList>();

const ProfileStack: FC = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="ProfileScreen"
        component={Perfil}
        options={{ headerShown: false }}
      />
      <ProfileStackNavigator.Screen
        name="SelectServiceScreen"
        component={SelectService}
        options={{ headerTitle: "" }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileStack;
