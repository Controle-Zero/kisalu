import React, { useContext } from "react";
import { Avatar } from "react-native-paper";
import { ThemeContext } from "styled-components";
import Spacer from "../layout/Spacer";
import { ButtonContainer, ButtonText } from "./style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonColor,
  onPress,
  text,
  icon,
  textColor,
  width,
}) => {
  const { COLORS } = useContext(ThemeContext);
  return (
    <ButtonContainer
      backgroundColor={buttonColor || COLORS.PRIMARY}
      width={width || "100%"}
      onPress={onPress}
      android_ripple={{ color: "#f0f0f0" }}
    >
      {icon && (
        <>
          <Avatar.Icon icon={icon} size={35} />
          <Spacer width={10} />
        </>
      )}
      <ButtonText textColor={textColor || COLORS.BLACK}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
