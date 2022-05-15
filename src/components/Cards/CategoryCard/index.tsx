import React from "react";
import { Text, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import {
  Container,
  GreenDot,
  Image,
  NumberOfProvidersContainer,
  NumberOfProvidersText,
  RedDot,
  styles,
  Title,
} from "./style";
import { CategoryCardProps } from "./type";

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const { imageUrl, titulo, prestadores } = category;
  const numberOfProviderText =
    prestadores.length == 0
      ? "Não existem prestadores"
      : `Disponíveis ${prestadores.length}`;
  return (
    <DropShadow style={styles.container}>
      <Container onPress={() => onPress(category)}>
        <Image source={{ uri: imageUrl }} />
        <Title>{titulo}</Title>
        <NumberOfProvidersContainer>
          {prestadores.length == 0 ? <RedDot /> : <GreenDot />}
          <NumberOfProvidersText>{numberOfProviderText}</NumberOfProvidersText>
        </NumberOfProvidersContainer>
      </Container>
    </DropShadow>
  );
};

export default CategoryCard;
