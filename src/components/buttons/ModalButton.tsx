import React from "react";
import { Text, StyleSheet, GestureResponderEvent } from "react-native";

import { TouchableHighlight } from "@gorhom/bottom-sheet";
import { Colors, TextStyles } from "../../styles/appTheme";
import dropShadow from "../../styles/dropShadow";

interface Props {
  isPrimary?: boolean;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
}

/* Esse botão é equivalente ao PrimaryButton. A diferença é o uso do 
    TouchableHighlight do bottom-sheet. O Pressable não funciona no bottom-sheet
*/
const ModalButton: React.FC<Props> = ({ isPrimary = true, text, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: isPrimary ? Colors.primary : Colors.secondary,
      height: 45,
      justifyContent: "center",
      borderRadius: 10,
      shadowColor: Colors.black,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
    },
    text: {
      fontSize: TextStyles.button.fontSize,
      lineHeight: TextStyles.button.lineHeight,
      textAlign: "center",
      fontFamily: TextStyles.button.font,
      color: isPrimary ? Colors.black : Colors.white,
    },
  });
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#f4f4f4"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default ModalButton;
