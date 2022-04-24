import React, { FC } from "react";
import { Avatar } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeParamsList } from "../types/Cliente/HomeParamsList";
import Home from "../../screens/Client/Home";
import ProvidersList from "../../screens/Client/ProvidersList";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../hooks/useAuth";

const NativeHomeStack = createNativeStackNavigator<HomeParamsList>();

function HomeStack() {
  const { user } = useAuth();
  return (
    <NativeHomeStack.Navigator initialRouteName="HomeScreen">
      <NativeHomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: user?.nome,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <NativeHomeStack.Screen
        name="ProvidersList"
        component={ProvidersList}
        options={({ route }) => {
          return {
            title: route.params.category.titulo,
          };
        }}
      />
      {/* <NativeHomeStack.Screen
        name="ProviderProfile"
        component={ClientProvedor}
        options={{ title: "" }}
      /> */}
    </NativeHomeStack.Navigator>
  );
}

const HeaderLeft: FC = () => (
  <>
    <Avatar.Image
      size={35}
      source={require("../../assets/images/no-profile.png")}
    />
    <Spacer width={20} />
  </>
);

export default HomeStack;
