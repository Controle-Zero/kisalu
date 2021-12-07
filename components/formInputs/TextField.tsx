import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Fonts from "../../styles/fontsConstants";

interface Props {
  label: string;
  leftIcon?: {
    name: string;
    color?: string;
    size?: number;
  };
  onChangeText: (text: string) => void;
  fieldValue: string;
  isSecret?: boolean;
}

const TextField: FC<Props> = ({
  label,
  leftIcon,
  isSecret = false,
  onChangeText,
  fieldValue,
}) => {
  return (
    <TextInput
      style={styles.input}
      label={label}
      secureTextEntry={isSecret}
      activeOutlineColor="#60DBDA"
      left={
        leftIcon && (
          <TextInput.Icon
            style={styles.icon}
            name={leftIcon.name}
            color={leftIcon.color || "#666"}
            size={leftIcon.size || 20}
          />
        )
      }
      mode="outlined"
      autoComplete={false}
      value={fieldValue}
      onChangeText={onChangeText}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: Fonts.Poppins_400Regular,
  },
  icon: {
    marginTop: 16,
  },
});
