import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";
import * as ProviderAPI from "../../../../API/provider";
import ProviderActivityCard from "../../../../components/Cards/ProviderActivityCard";
import Spacer from "../../../../components/layout/Spacer";
import ListEmpty from "../../../../components/ListEmpty";
import useAuth from "../../../../hooks/useAuth";
import { ActivityParamsList } from "../../../../routes/types/Provider/ActivityParamList";
import LoadingScreen from "../../../other/LoadingScreen";
import { Container } from "./styles";

const Requests = () => {
  const { token } = useAuth();
  const { data: activities, isLoading } = useQuery("activities", getActivities);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ActivityParamsList, "Activities">
    >();

  async function getActivities() {
    const activities = await ProviderAPI.getActivities(token);
    return activities;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  function onNavigate(activityId: string) {
    navigation.navigate("Activity", {
      activityId,
    });
  }

  return (
    <Container>
      <FlatList
        data={activities}
        ListHeaderComponent={() => <Spacer height={30} />}
        ListFooterComponent={() => <Spacer height={30} />}
        ListEmptyComponent={() => <ListEmpty text="Não existem atividades" />}
        ItemSeparatorComponent={() => <Spacer height={18} />}
        renderItem={({ item }) => (
          <ProviderActivityCard activity={item} onNavigate={onNavigate} />
        )}
      />
    </Container>
  );
};

export default Requests;
