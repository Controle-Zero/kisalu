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
  value: string;
  onChangeText: (text: string) => void;
  hasError?: boolean;
}

const TextArea: React.FC<Props> = ({
  label,
  placeholder = "",
  value,
  onChangeText,
  hasError = false,
}) => {
  return (
    <View>
      <Text style={[styles.label, hasError && styles.labelError]}>{label}</Text>
      <TextInput
        style={[styles.input, hasError && styles.inputError]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 200,
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 20,
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

export default TextArea;
