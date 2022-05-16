import React, { useContext, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownActivityStateType, NavigableFC } from "./types";
import { dropdown, Label } from "./style";
import { useQuery } from "react-query";
import * as ClientAPI from "../../../API/client";
import useAuth from "../../../hooks/useAuth";
import LoadingScreen from "../../other/LoadingScreen";
import { ActivityState } from "../../../models/Atividade";
import { ThemeContext } from "styled-components/native";
import ListEmpty from "../../../components/ListEmpty";
import ClientActivityCard from "../../../components/Cards/ClientActivityCard";

const Activities: NavigableFC = ({ navigation }) => {
  const { token } = useAuth();
  const [activityState, setActivityState] = useState<ActivityState>(
    ActivityState.ATIVA
  );
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery(["clientActivities", activityState], getActivities);
  const { COLORS, FONTS } = useContext(ThemeContext);

  const activityStateDropdownData: DropdownActivityStateType[] = [
    { label: "Ativa", value: ActivityState.ATIVA },
    { label: "Pendente", value: ActivityState.PENDENTE },
    { label: "Finalizada", value: ActivityState.FINALIZADA },
    { label: "Cancelada", value: ActivityState.CANCELADA },
  ];

  async function getActivities() {
    const activities = await ClientAPI.getFilteredActivitiesFromClient(
      token,
      activityState
    );
    console.log(activities);
    return activities;
  }

  function handleSelectActivityState({ value }: DropdownActivityStateType) {
    setActivityState(value);
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <View>
      <Label>Filtrar atividades por estado</Label>
      <Dropdown
        search={false}
        data={activityStateDropdownData}
        style={dropdown.dropdown}
        placeholderStyle={dropdown.placeholderStyle}
        selectedTextStyle={dropdown.selectedTextStyle}
        activeColor={COLORS.LIGHT_PRIMARY}
        dropdownPosition="bottom"
        fontFamily={FONTS.POPPINS_REGULAR}
        labelField="label"
        valueField="value"
        onChange={handleSelectActivityState}
        value={activityState}
        placeholder="Selecione o estado da atividade"
        maxHeight={180}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              refetch();
              setRefreshing(false);
            }}
          />
        }
        data={activities}
        ListEmptyComponent={() => (
          <ListEmpty text="Não foram encontradas atividades" />
        )}
        renderItem={({ item }) => (
          <ClientActivityCard
            activity={item}
            onActivityCancel={() => {}}
            onActivityEvaluate={() => {}}
          />
        )}
      />
    </View>
  );
};

export default Activities;
