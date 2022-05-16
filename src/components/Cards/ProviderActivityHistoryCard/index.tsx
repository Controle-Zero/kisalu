import { View, Text } from "react-native";
import React, { FC, useContext, useEffect, useState } from "react";
import { Props } from "./type";
import DropShadow from "react-native-drop-shadow";
import {
  ColoredText,
  Container,
  Row,
  StatusColor,
  style,
  TextCenter,
} from "./style";
import Spacer from "../../layout/Spacer";
import { ActivityState } from "../../../models/Atividade";
import { ThemeContext } from "styled-components/native";
import { formatDate } from "../../../utils/dateFormatter";

const ProviderActivityHistoryCard: FC<Props> = ({ activity, onNavigate }) => {
  const {
    Categoria: { titulo },
    dataCriado,
    Cliente,
    estado,
  } = activity;
  const { COLORS } = useContext(ThemeContext);
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    switch (estado) {
      case ActivityState.FINALIZADA:
        setStatusColor("#0f0");
        break;
      case ActivityState.CANCELADA:
        setStatusColor("#f00");
        break;
      case ActivityState.PENDENTE:
        setStatusColor("#c4c4c4");
        break;
      case ActivityState.ATIVA:
        setStatusColor(COLORS.PRIMARY);
        break;
    }
  }, []);

  return (
    <DropShadow style={style.container}>
      <Container color={statusColor}>
        <ColoredText>{titulo}</ColoredText>
        <Spacer height={15} />
        <Text>{Cliente?.nome}</Text>
        {/* TODO: Mudar para a data da API */}
        <Spacer height={15} />
        <Row>
          <Text>{formatDate(new Date(dataCriado))}</Text>
          <Text>
            Preço:<StatusColor color={statusColor}>{}</StatusColor>
          </Text>
        </Row>
        <Spacer height={15} />
        <TextCenter>
          Situação:
          <StatusColor color={statusColor}>{estado}</StatusColor>
        </TextCenter>
      </Container>
    </DropShadow>
  );
};

export default ProviderActivityHistoryCard;
