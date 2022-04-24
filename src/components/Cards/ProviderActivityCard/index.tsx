import React, { useContext } from "react";
import { ProviderActivityCardProps } from "./type";
import {
  ActionsContainer,
  Container,
  ContentContainer,
  DescriptionContainer,
  PrimaryText,
  Text,
} from "./style";
import Button from "../../Button";
import Spacer from "../../layout/Spacer";
import { ThemeContext } from "styled-components";

const ProviderActivityCard: React.FC<ProviderActivityCardProps> = ({
  activity,
  onActivityApply,
  onActivityDone,
  onActivityReject,
}) => {
  const { COLORS } = useContext(ThemeContext);
  const { Categoria, Cliente, descricao, dataCriado, id, estado } = activity;
  return (
    <Container>
      <ContentContainer>
        <PrimaryText>{Categoria.titulo}</PrimaryText>
      </ContentContainer>
      <ContentContainer>
        <Text>{Cliente?.nome}</Text>
        <Text>DATE</Text>
      </ContentContainer>
      <DescriptionContainer>
        <Text>{descricao ? descricao : "Sem descrição"}</Text>
      </DescriptionContainer>
      <ActionsContainer>
        {estado === "ATIVA" ? (
          <Button
            text="Aplicar"
            onPress={() => onActivityApply(id)}
            width="40%"
          />
        ) : (
          <Button
            text="Finalizar"
            onPress={() => onActivityDone(id)}
            width="40%"
          />
        )}
        <Spacer width={20} />
        <Button
          text="Rejeitar"
          buttonColor={COLORS.DANGER}
          textColor={COLORS.WHITE}
          onPress={() => onActivityReject(id)}
          width="40%"
        />
      </ActionsContainer>
    </Container>
  );
};

export default ProviderActivityCard;
