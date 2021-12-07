import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";

import Fonts from "../../styles/fontsConstants";

interface Props {
  text: string;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const FormButton: FC<Props> = ({ color, text, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 10,
      height: 45,
      flex: 1,
      fontFamily: Fonts.Poppins_400Regular,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      elevation: 5,
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
    },
    text: {
      fontSize: 18,
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

export default FormButton;
