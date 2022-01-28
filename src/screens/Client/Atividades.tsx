import React from "react";
import { View, Text, StyleSheet } from "react-native";

import NoDataSVG from "../../assets/svg/NoDataSVG";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import { TextStyles } from "../../styles/appTheme";

const Atividades = () => {
  const { user } = useAuth();

  if (user?.atividades?.length == 0) {
    return (
      <View style={emptyActivitiesStyle.container}>
        <NoDataSVG width={213} height={208} />
        <Spacer height={50} />
        <Text style={emptyActivitiesStyle.text}>Não possui atividades</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Atividade</Text>
    </View>
  );
};

const emptyActivitiesStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: TextStyles.heading1.fontRegular,
    fontSize: 24,
  },
  image: {},
});

export default Atividades;
