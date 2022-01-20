import { View, Text, Image, StyleSheet } from "react-native";
import React, { FC } from "react";
import Categoria from "../models/Categoria";
import { Colors } from "../styles/appTheme";

interface Props {
  category: Categoria;
  onPress?: () => void;
}

const CategoryCard: FC<Props> = ({ category }) => {
  const { imageUrl, titulo } = category;
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: imageUrl }} />
      <Text>{titulo}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 100,
    height: 70,
  },
});

export default CategoryCard;
