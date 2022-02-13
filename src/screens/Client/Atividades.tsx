import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import NoDataSVG from "../../assets/svg/NoDataSVG";
import ActivityCard from "../../components/cards/ActivityCard";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import Atividade from "../../models/Atividade";
import { Colors, TextStyles } from "../../styles/appTheme";

const Atividades = () => {
  const { user } = useAuth();

  return (
    <View>
      <FlatList
        data={user?.atividades}
        renderItem={({ item: activity }) => (
          <ActivityCard activity={activity} />
        )}
        ItemSeparatorComponent={() => <Spacer height={26} />}
        endFillColor={Colors.primary}
        ListHeaderComponent={() => <Spacer height={10} />}
        ListFooterComponent={() => <Spacer height={10} />}
        keyExtractor={(activity) => (activity as Atividade).categoriaId}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
};

const ListEmpty = () => (
  <View style={emptyActivitiesStyle.container}>
    <NoDataSVG width={213} height={208} />
    <Spacer height={50} />
    <Text style={emptyActivitiesStyle.text}>Não possui atividades</Text>
  </View>
);

const emptyActivitiesStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "30%",
  },
  text: {
    fontFamily: TextStyles.heading1.fontRegular,
    fontSize: 24,
  },
});

export default Atividades;
