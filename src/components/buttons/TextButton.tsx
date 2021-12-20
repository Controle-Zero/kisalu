import React from "react";
import { GestureResponderEvent, StyleSheet, Text } from "react-native";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const TextButton: React.FC<Props> = ({ onPress, text }) => {
  return (
    <Text style={styles.text} onPress={onPress}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.linkText,
    fontSize: TextStyles.linkText.fontSize - 1,
    fontFamily: TextStyles.linkText.font,
    textDecorationLine: "underline",
  },
});

export default TextButton;
