import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import NoDataSVG from "../../assets/svg/NoDataSVG";
import ClientActivityCard from "../../components/cards/ClientActivityCard";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import Atividade from "../../models/Atividade";
import { retornarAtividades } from "../../services/cliente.services";
import { Colors, TextStyles } from "../../styles/appTheme";

const Atividades = () => {
  const { token } = useAuth();
  const [activities, setActivities] = useState<Atividade[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await retornarAtividades(token);
      console.log(data);

      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={activities}
        renderItem={({ item: activity }) => (
          <ClientActivityCard activity={activity} />
        )}
        ItemSeparatorComponent={() => <Spacer height={26} />}
        endFillColor={Colors.primary}
        ListHeaderComponent={() => <Spacer height={10} />}
        ListFooterComponent={() => <Spacer height={10} />}
        keyExtractor={(activity) => (activity as Atividade).id}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
};

const ListEmpty = () => (
  <View style={emptyActivitiesStyle.container}>
    <NoDataSVG style={emptyActivitiesStyle.image} />
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
  image: {
    height: 208,
    width: "60%",
  },
});

export default Atividades;
