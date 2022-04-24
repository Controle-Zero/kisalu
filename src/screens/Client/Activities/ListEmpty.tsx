import React from "react";
import { Container, Image, Text } from "./style";
import Spacer from "../../../components/layout/Spacer";

const ListEmpty = () => {
  return (
    <Container>
      <Image />
      <Spacer height={50} />
      <Text>Não possui atividades</Text>
    </Container>
  );
};

export default ListEmpty;
