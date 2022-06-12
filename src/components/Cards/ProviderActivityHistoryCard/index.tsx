import { Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import DropShadow from "react-native-drop-shadow";
import { Props } from "./type";
import {
  ColoredText,
  Container,
  Row,
  StatusColor,
  style,
  TextCenter,
} from "./style";
import Spacer from "../../layout/Spacer";
import { formatDate } from "../../../utils/dateFormatter";
import ActivityColor from "../../../styles/ActivityColor";

const ProviderActivityHistoryCard: FC<Props> = ({ activity, onNavigate }) => {
  const {
    Categoria: { titulo },
    dataCriado,
    Cliente,
    estado,
  } = activity;

  const statusColor = ActivityColor[estado];

  return (
    <DropShadow style={style.container}>
      <Container color={statusColor}>
        <ColoredText>{titulo}</ColoredText>
        <Spacer height={15} />
        <Text>{Cliente?.nome}</Text>
        <Spacer height={15} />
        <Row>
          <Text>{formatDate(new Date(dataCriado))}</Text>
          <Text>
            {/* TODO: Colocar o preço serviço caso tenha */}
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
