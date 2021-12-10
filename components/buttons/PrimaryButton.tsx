import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ColorValue,
} from "react-native";

import Fonts from "../../styles/fontsConstants";

interface Props {
  text: ColorValue;
  color: ColorValue;
  textColor?: ColorValue;
  width?: number | string;
  onPress: (event: GestureResponderEvent) => void;
}

const PrimaryButton: FC<Props> = ({
  color,
  text,
  textColor = "#000",
  width = "100%",
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 10,
      height: 45,
      fontFamily: Fonts.Poppins_400Regular,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      paddingHorizontal: 30,
      width,
    },
    text: {
      fontSize: 18,
      color: textColor,
    },
  });
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{ color: "#f4f4f4" }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
