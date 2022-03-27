import React from "react";
import { InputFieldProps } from "../types";
import { Container, InputField, Label } from "./style";

const TextField: React.FC<InputFieldProps> = ({
  hasError = false,
  label,
  onChangeText,
  value,
  secureText = false,
  placeholder = "",
  keyboardType = "default",
}) => {
  return (
    <Container>
      <Label hasError={hasError}>{label}</Label>
      <InputField
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        hasError={hasError}
      />
    </Container>
  );
};

export default TextField;
