import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {
  text: string;
  isPrimaryColor?: boolean;
  width?: number | string;
  onPress: () => void;
}

const Button: FC<Props> = ({
  text,
  isPrimaryColor = true,
  width = "100%",
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: isPrimaryColor ? Colors.primary : Colors.secondary,
      width,
      shadowColor: Colors.black,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
    },
    text: {
      fontFamily: TextStyles.button.font,
      fontSize: TextStyles.button.fontSize,
      lineHeight: TextStyles.button.lineHeight,
      color: isPrimaryColor ? Colors.black : Colors.white,
      textAlign: "center",
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{ color: "#f0f0f0" }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
