import { View, Text } from "react-native";
import React, { FC } from "react";
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

const ProviderActivityHistoryCard: FC<Props> = ({ activity, onNavigate }) => {
  const {
    Categoria: { titulo },
    dataCriado,
    Cliente,
  } = activity;

  const statusColor = "#0f0";

  return (
    <DropShadow style={style.container}>
      <Container color={statusColor}>
        <ColoredText>{titulo}</ColoredText>
        <Spacer height={15} />
        <Text>{Cliente?.nome}</Text>
        {/* TODO: Mudar para a data da API */}
        <Spacer height={15} />
        <Row>
          <Text>{dataCriado}</Text>
          <Text>
            Preço:<StatusColor color={statusColor}>50.000kzs</StatusColor>
          </Text>
        </Row>
        <Spacer height={15} />
        <TextCenter>
          Situação:
          <StatusColor color={statusColor}>Finalizada</StatusColor>
        </TextCenter>
      </Container>
    </DropShadow>
  );
};

export default ProviderActivityHistoryCard;
