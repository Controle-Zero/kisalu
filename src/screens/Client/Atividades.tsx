import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import NoDataSVG from "../../assets/svg/NoDataSVG";
import ActivityCard from "../../components/cards/ActivityCard";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import { Colors, TextStyles } from "../../styles/appTheme";

const Atividades = () => {
  const { user } = useAuth();

  if (user?.atividades?.length != 0) {
    return (
      <View style={emptyActivitiesStyle.container}>
        <NoDataSVG width={213} height={208} />
        <Spacer height={50} />
        <Text style={emptyActivitiesStyle.text}>Não possui atividades</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <ActivityCard />}
        ItemSeparatorComponent={() => <Spacer height={26} />}
        endFillColor={Colors.primary}
        ListHeaderComponent={() => <Spacer height={10} />}
        ListFooterComponent={() => <Spacer height={10} />}
        keyExtractor={(item) => item}
      />
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

const styles = StyleSheet.create({
  container: {},
});

export default Atividades;
