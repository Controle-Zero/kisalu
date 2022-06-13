import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useQuery } from "react-query";
import { ThemeContext } from "styled-components/native";
import * as yup from "yup";
import * as ProviderAPI from "../../../../API/provider";
import ActivityHeader from "../../../../components/ActivityHeader";
import Button from "../../../../components/Button";
import Spacer from "../../../../components/layout/Spacer";
import SocketContext from "../../../../contexts/SocketContext";
import {
  ActivityResponsePayload,
  Roles,
} from "../../../../contexts/SocketContext/types";
import useAuth from "../../../../hooks/useAuth";
import { ActivityState } from "../../../../models/Atividade";
import Categoria from "../../../../models/Categoria";
import Cliente from "../../../../models/Cliente";
import Prestador from "../../../../models/Provedor";
import { ActivityNavProps } from "../../../../routes/types/Provider/ActivityParamList";
import { formatDate } from "../../../../utils/dateFormatter";
import LoadingScreen from "../../../other/LoadingScreen";
import {
  Container,
  DescriptionContainer,
  DescriptionText,
  Heading,
  Text,
} from "./style";

const Activity = ({ route: { params } }: ActivityNavProps<"Activity">) => {
  const { activityId } = params;
  const { token, user } = useAuth();
  const [priceValue, setPriceValue] = useState("");
  const { COLORS } = useContext(ThemeContext);
  const { onActivityResponse } = useContext(SocketContext);
  const {
    data: activity,
    isLoading,
    error,
  } = useQuery("activity", getActivity);

  async function getActivity() {
    const activities = await ProviderAPI.getActivities(token);
    const activity = activities.find((activity) => activity.id === activityId);
    return activity;
  }

  async function handleConfirmation() {
    const yupSchema = yup.number().positive("Digite um custo positivo");

    try {
      const cost = await yupSchema.validate(priceValue);
      console.log(cost);
      const activityPayload: ActivityResponsePayload = {
        Prestador: user as Prestador,
        ...activity,
        estado: ActivityState.ATIVA,
        valorAssociado: cost as number,
      };
      onActivityResponse({
        TriggeredBy: {
          id: user?.id as string,
          role: Roles.PRESTADOR,
        },
        atividade: activityPayload,
      });
    } catch (error) {
      Alert.alert(
        "Erro no inserção do custo",
        "Verifique se está a inserir um número"
      );
    }
  }

  if (error) console.error(error);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ActivityHeader
        clientProfilePicture={activity?.Cliente.imageUrl as string}
        creationDate={activity?.dataCriado as Date}
        providerProfilePicture={user?.imageUrl as string}
      />
      <Container>
        <Heading>Detalhes do Pedido</Heading>
        <Spacer height={20} />
        <Text>Nome do Cliente: {activity?.Cliente.nome}</Text>
        <Text>
          Data de Criação: {formatDate(new Date(activity?.dataCriado as Date))}
        </Text>
        <Text>Estado do Pedido: {activity?.estado}</Text>
        {activity?.valorAssociado && (
          <Text>Valor a ser pago: {activity.valorAssociado}</Text>
        )}
        <Spacer height={20} />
        <Heading>Descrição</Heading>
        <DescriptionContainer>
          <DescriptionText>{activity?.descricao}</DescriptionText>
        </DescriptionContainer>
        {!activity?.valorAssociado && (
          <TextInput
            value={priceValue}
            onChangeText={setPriceValue}
            keyboardType="numeric"
            label="Custo da atividade"
            activeOutlineColor={COLORS.PRIMARY}
            placeholder="Digite o custo da atividade"
            mode="outlined"
          />
        )}
        <Spacer height={10} />
        <Button text="Aceitar" onPress={handleConfirmation} />
      </Container>
    </View>
  );
};

export default Activity;
