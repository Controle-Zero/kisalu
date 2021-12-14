import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {
  label: string;
  placeholder?: string;
  icon?: string;
  secureText?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const TextField: React.FC<Props> = ({
  label,
  placeholder = "",
  icon,
  secureText = false,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
    borderStyle: "solid",
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: TextStyles.label.font,
    fontSize: TextStyles.label.fontSize,
    lineHeight: TextStyles.label.lineHeight,
    marginBottom: 5,
  },
});

export default TextField;
