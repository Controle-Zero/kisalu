import React from "react";
import { TextInputProps } from "../types";
import { Container, InputArea, Label } from "./style";

const TextArea: React.FC<TextInputProps> = ({
  hasError = false,
  label,
  onChangeText,
  value,
  placeholder = "",
}) => {
  return (
    <Container>
      <Label hasError={hasError}>{label}</Label>
      <InputArea
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        hasError={hasError}
      />
    </Container>
  );
};

export default TextArea;
