import React from "react";
import { Text, StyleSheet, GestureResponderEvent } from "react-native";

import { TouchableHighlight } from "@gorhom/bottom-sheet";

import Fonts from "../../styles/fontsConstants";

interface Props {
  text: string;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
}

/* Esse botão é equivalente ao PrimaryButton. A diferença é o uso do 
    TouchableHighlight do bottom-sheet. O Pressable não funciona no bottom-sheet
*/
const BottomSheetModalButton: React.FC<Props> = ({ color, text, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 10,
      height: 45,
      fontFamily: Fonts.Poppins_400Regular,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
    },
    text: {
      fontSize: 18,
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

export default BottomSheetModalButton;
