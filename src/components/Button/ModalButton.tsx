import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonText, ModalButtonContainer } from "./style";
import { ButtonProps } from "./types";

const ModalButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  buttonColor,
  textColor,
}) => {
  const { COLORS } = useContext(ThemeContext);
  return (
    <ModalButtonContainer
      backgroundColor={buttonColor || COLORS.PRIMARY}
      onPress={onPress}
      underlayColor="#f4f4f4"
    >
      <ButtonText textColor={textColor || COLORS.WHITE}>{text}</ButtonText>
    </ModalButtonContainer>
  );
};

export default ModalButton;
