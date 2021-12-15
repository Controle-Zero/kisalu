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
  hasError?: boolean;
}

const TextField: React.FC<Props> = ({
  label,
  placeholder = "",
  icon,
  secureText = false,
  value,
  onChangeText,
  keyboardType,
  hasError = false,
}) => {
  return (
    <View>
      <Text style={[styles.label, hasError && styles.labelError]}>{label}</Text>
      <TextInput
        style={[styles.input, hasError && styles.inputError]}
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
    fontFamily: TextStyles.paragraph.font,
  },
  label: {
    fontFamily: TextStyles.label.font,
    fontSize: TextStyles.label.fontSize,
    lineHeight: TextStyles.label.lineHeight,
    marginBottom: 5,
    color: Colors.black,
  },
  inputError: {
    borderColor: Colors.danger,
  },
  labelError: {
    color: Colors.danger,
  },
});

export default TextField;
