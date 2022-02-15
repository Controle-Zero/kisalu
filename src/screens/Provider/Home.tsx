import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, TextStyles } from "../../styles/appTheme";
import Spacer from "../../components/layout/Spacer";
import Atividade from "../../models/Atividade";
import NoDataSVG from "../../assets/svg/NoDataSVG";
import * as ProvedorServices from "../../services/provedor.services";
import useAuth from "../../contexts/AuthContext";
import ProviderActivityCard from "../../components/cards/ProviderActivityCard";

const Home = () => {
  const [activities, setActivities] = useState<Atividade[]>([]);

  const { token } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const data = await ProvedorServices.retornarAtividades(token);
      console.log(data);
      setActivities(data);
    };
    fetchData();
  }, []);

  const handleApplyActivity = (activityId: string) => {
    console.log(activityId);
  };

  const handleRejectActivity = (activityId: string) => {
    console.log(activityId);
  };
  return (
    <View>
      <Spacer height={10} />
      <Text style={style.heading1}>Atividades</Text>
      <FlatList
        data={activities}
        renderItem={({ item: activity }) => (
          <ProviderActivityCard
            activity={activity}
            onApplyActivity={handleApplyActivity}
            onRejectActivity={handleRejectActivity}
          />
        )}
        ItemSeparatorComponent={() => <Spacer height={26} />}
        endFillColor={Colors.primary}
        ListHeaderComponent={() => <Spacer height={10} />}
        ListFooterComponent={() => <Spacer height={60} />}
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

export default Home;

const style = StyleSheet.create({
  heading1: {
    marginLeft: 10,
    fontSize: TextStyles.heading1.fontSize,
    fontFamily: TextStyles.heading1.fontRegular,
  },
});

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
