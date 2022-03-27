import React from "react";
import { View } from "react-native";
import Spacer from "../../layout/Spacer";
import { CardTitle, Container, Image, SmallText } from "./style";
import { CategoryCardProps } from "./type";

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const { imageUrl, titulo, prestadores } = category;
  const numberOfProviderText =
    prestadores.length == 0
      ? "Não existem prestadores"
      : `Possui ${prestadores.length} prestadores`;
  return (
    <Container onPress={onPress} android_ripple={{ color: "#f0f0f0" }}>
      <Image source={{ uri: imageUrl }} />
      <Spacer width={15} />
      <View>
        <CardTitle>{titulo}</CardTitle>
        <SmallText>{numberOfProviderText}</SmallText>
      </View>
    </Container>
  );
};

export default CategoryCard;
