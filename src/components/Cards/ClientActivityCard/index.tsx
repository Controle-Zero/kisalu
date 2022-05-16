import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  ActionsContainer,
  Container,
  ContentContainer,
  LeftContent,
  PrimaryText,
  RightContent,
  Text,
} from "./style";
import { ClientActivityCardProps } from "./type";
import Button from "../../Button";
import Spacer from "../../layout/Spacer";
import { ActivityState } from "../../../models/Atividade";
import { formatDate } from "../../../utils/dateFormatter";

const ClientActivityCard: React.FC<ClientActivityCardProps> = ({
  activity,
  onActivityCancel,
  onActivityEvaluate,
}) => {
  const { COLORS } = useContext(ThemeContext);
  const { Categoria, Prestador, estado, valorAssociado, dataCriado, id } =
    activity;

  const handleGenerateReport = () => {
    console.log("Generate PDF");
  };

  return (
    <Container>
      <ContentContainer>
        <LeftContent>
          <PrimaryText>{Categoria.titulo}</PrimaryText>
          <Text>{Prestador?.nome}</Text>
        </LeftContent>
        <RightContent>
          <Text>
            Estado: <PrimaryText>{estado}</PrimaryText>
          </Text>
          {estado != ActivityState.PENDENTE ? (
            <Text>{valorAssociado} Kzs</Text>
          ) : (
            <Text>Valor não informado</Text>
          )}
          <Text>{formatDate(new Date(dataCriado))}</Text>
        </RightContent>
      </ContentContainer>
      <ActionsContainer>
        {estado !== ActivityState.FINALIZADA ? (
          <Button
            text="Cancelar"
            width="40%"
            onPress={() => onActivityCancel(id)}
            buttonColor={COLORS.DANGER}
          />
        ) : (
          <>
            <Button
              text="Avaliar"
              width="40%"
              onPress={() => onActivityEvaluate(id)}
              buttonColor={COLORS.PRIMARY}
            />
            <Spacer width={20} />
            <Button
              width="50%"
              text="Comprovativo"
              onPress={handleGenerateReport}
            />
          </>
        )}
      </ActionsContainer>
    </Container>
  );
};

export default ClientActivityCard;
