import React from "react";
import { ButtonProps } from "./types";
import { StyledTextButton } from "./style";

const TextButton: React.FC<ButtonProps> = ({ onPress, text }) => {
  return <StyledTextButton onPress={onPress}>{text}</StyledTextButton>;
};

export default TextButton;
