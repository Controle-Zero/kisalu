import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PickerSelect from "react-native-picker-select";

import NoDataSVG from "../../assets/svg/NoDataSVG";
import ClientActivityCard from "../../components/cards/ClientActivityCard";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import Atividade from "../../models/Atividade";
import { retornarAtividades } from "../../services/cliente.services";
import { Colors, TextStyles } from "../../styles/appTheme";
import * as WebSocket from "../../config/webSocket";
import LoadingScreen from "../LoadingScreen";

const Atividades = () => {
  const { token } = useAuth();
  const [activities, setActivities] = useState<Atividade[]>([]);
  const [filteredStatus, setFilteredStatus] = useState("EM CURSO");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await retornarAtividades(token);
      console.log(data);

      const filteredActivities = data.filter((activity) => {
        if (
          (activity.estado === "ATIVA" || activity.estado === "PENDENTE") &&
          filteredStatus === "EM CURSO"
        ) {
          return activity;
        } else if (
          activity.estado === "FINALIZADA" &&
          filteredStatus === "FINALIZADA"
        )
          return activity;
      });
      setActivities(filteredActivities);
      setIsLoading(false);
    };

    fetchData();
  }, [token, filteredStatus]);

  const handleActivityCancel = (activityId: string) => {
    const newActivity = activities.find(
      (activity) => activity.id === activityId
    );
    if (!newActivity) return;

    const socket = WebSocket.initConnection({
      idCliente: newActivity.Cliente?.id,
      idProvedor: undefined,
    });

    newActivity.estado = "CANCELADA";
    socket.emit("response", newActivity);
  };

  return (
    <View>
      <Text style={emptyActivitiesStyle.label}>
        Filtrar atividades por estado
      </Text>
      <PickerSelect
        items={[
          { value: "EM CURSO", label: "Em curso" },
          { value: "FINALIZADO", label: "Finalizado" },
        ]}
        onValueChange={(newValue) => setFilteredStatus(newValue)}
        value={filteredStatus}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={activities}
          renderItem={({ item: activity }) => (
            <ClientActivityCard
              activity={activity}
              onActivityCancel={handleActivityCancel}
            />
          )}
          ItemSeparatorComponent={() => <Spacer height={26} />}
          endFillColor={Colors.primary}
          ListHeaderComponent={() => <Spacer height={10} />}
          ListFooterComponent={() => <Spacer height={10} />}
          keyExtractor={(activity) => (activity as Atividade).id}
          ListEmptyComponent={() => <ListEmpty />}
        />
      )}
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
  label: {
    fontFamily: TextStyles.label.font,
    fontSize: TextStyles.label.fontSize,
    lineHeight: TextStyles.label.lineHeight,
    marginTop: 5,
    color: Colors.greyText,
    textAlign: "center",
  },
});

export default Atividades;
