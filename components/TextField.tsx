import React, { FC, ReactNode, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  label: string;
  leftIcon?: {
    name: string;
    color?: string;
    size?: number;
  };
  isSecret?: boolean;
  //   value: string | number;
}

const TextField: FC<Props> = ({ label, leftIcon, isSecret = false }) => {
  const [value, setValue] = useState("");
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
      value={value}
      autoComplete={false}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 10,
    fontSize: 15,
  },
  icon: {
    marginTop: 16,
  },
});
