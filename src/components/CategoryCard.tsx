import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";
import Categoria from "../models/Categoria";
import { Colors, TextStyles } from "../styles/appTheme";

interface Props {
  category: Categoria;
  onPress?: () => void;
}

const CategoryCard: FC<Props> = ({ category, onPress }) => {
  const { imageUrl, titulo, prestadores } = category;
  return (
    <Pressable
      onPress={onPress}
      style={style.container}
      android_ripple={{ color: "#f0f0f0" }}
    >
      <Image style={style.image} source={{ uri: imageUrl }} />
      <View style={style.textContainer}>
        <Text style={style.text}>{titulo}</Text>
        <Text style={style.small}>Possui {prestadores.length}</Text>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: TextStyles.paragraph.fontSize,
    fontFamily: TextStyles.paragraph.font,
  },
  small: {
    color: Colors.white,
    fontSize: TextStyles.smallText.fontSize,
    fontFamily: TextStyles.smallText.font,
  },
  textContainer: {
    marginLeft: 15,
  },
});

export default CategoryCard;
