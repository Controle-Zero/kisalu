import React, { useContext, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ThemeContext } from "styled-components";
import { useQuery } from "react-query";
import { DropdownActivityStateType, NavigableFC } from "./types";
import { dropdown, Label } from "./style";
import * as ClientAPI from "../../../API/client";
import useAuth from "../../../hooks/useAuth";
import LoadingScreen from "../../other/LoadingScreen";
import { ActivityState } from "../../../models/Atividade";
import ListEmpty from "../../../components/ListEmpty";
import ClientActivityCard from "../../../components/Cards/ClientActivityCard";
import Spacer from "../../../components/layout/Spacer";

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
    return activities;
  }

  function handleSelectActivityState({ value }: DropdownActivityStateType) {
    setActivityState(value);
  }

  function handleFlatListRefresh() {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleFlatListRefresh}
        />
      }
      data={activities}
      ListEmptyComponent={() => (
        <ListEmpty text="Não foram encontradas atividades" />
      )}
      ListHeaderComponent={() => (
        <>
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
          <Spacer height={10} />
        </>
      )}
      ListFooterComponent={() => (
        <Spacer height={10} />
      )}
      renderItem={({ item }) => (
        <ClientActivityCard
          activity={item}
          onActivityCancel={() => { }}
          onActivityEvaluate={() => { }}
        />
      )}
    />
  );
};

export default Activities;
