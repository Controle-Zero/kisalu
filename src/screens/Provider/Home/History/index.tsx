import React from "react";
import { FlatList, Text } from "react-native";
import { Container } from "./style";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "react-query";
import * as ProviderAPI from "../../../../API/provider";
import LoadingScreen from "../../../other/LoadingScreen";
import Spacer from "../../../../components/layout/Spacer";
import ListEmpty from "../../../../components/ListEmpty";
import ProviderActivityHistoryCard from "../../../../components/Cards/ProviderActivityHistoryCard";

const History = () => {
  const { token } = useAuth();
  const { data: activities, isLoading } = useQuery(
    "activitiesHistory",
    getActivities
  );

  async function getActivities() {
    const activities = await ProviderAPI.getActivities(token);
    return activities;
  }

  function onNavigate(activityID: string) {
    console.log(activityID);
  }

  if (isLoading) {
    return <LoadingScreen />;
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
          <ProviderActivityHistoryCard
            activity={item}
            onNavigate={onNavigate}
          />
        )}
      />
    </Container>
  );
};

export default History;
