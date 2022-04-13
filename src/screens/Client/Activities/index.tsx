import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import PickerSelect, { Item } from "react-native-picker-select";
import { NavigableFC } from "./types";
import { Label, Text } from "./style";
import useAuth from "../../../hooks/useAuth";
import LoadingScreen from "../../other/LoadingScreen";
import Spacer from "../../../components/layout/Spacer";
import ListEmpty from "./ListEmpty";
import ClientActivityCard from "../../../components/Cards/ClientActivityCard";
import Atividade, { ActivityState } from "../../../models/Atividade";
import { getFilteredActivitiesFromClient } from "../../../API/client";
import { ThemeContext } from "styled-components";

const Activities: NavigableFC = ({ navigation }) => {
  const { token } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  const [filteredStatus, setFilteredStatus] = useState<ActivityState>(
    ActivityState.ATIVA
  );
  const {
    data: filteredActivities,
    isLoading,
    error,
  } = useQuery(
    "activities",
    async () => await getFilteredActivitiesFromClient(token, filteredStatus)
  );

  const pickerSelectValues: Item[] = [
    {
      value: ActivityState.ATIVA,
      label: "Em curso",
    },
    {
      value: ActivityState.FINALIZADA,
      label: "Finalizada",
    },
  ];

  const handleActivityCancel = (activityId: string) => {
    const newActivity = filteredActivities?.find(
      (activity) => activity.id == activityId
    );
    if (!newActivity) return;
    //   TODO: Implement socket logic
    console.log("Canceled " + activityId);
  };

  const handleActivityEvaluation = (activityId: string) =>
    navigation.navigate("Rating", { activityId });

  if (error) console.error(error);
  return (
    <View>
      <Label>Filtrar atividades por estado</Label>
      <PickerSelect
        items={pickerSelectValues}
        onValueChange={setFilteredStatus}
        value={filteredStatus}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <Text>Ocorreu um erro</Text>
      ) : (
        <FlatList
          data={filteredActivities}
          endFillColor={COLORS.PRIMARY}
          keyExtractor={(activity) => (activity as Atividade).id}
          ListFooterComponent={() => <Spacer height={10} />}
          ListHeaderComponent={() => <Spacer height={10} />}
          ListEmptyComponent={() => <ListEmpty />}
          ItemSeparatorComponent={() => <Spacer height={26} />}
          renderItem={({ item: activity }) => (
            <ClientActivityCard
              activity={activity}
              onActivityCancel={handleActivityCancel}
              onActivityEvaluate={handleActivityEvaluation}
            />
          )}
        />
      )}
    </View>
  );
};

export default Activities;
