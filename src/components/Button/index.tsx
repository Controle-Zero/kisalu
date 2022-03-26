import React, { useContext } from "react";
import { Avatar } from "react-native-paper";
import { ThemeContext } from "styled-components";
import Spacer from "../layout/Spacer";
import { ButtonContainer, ButtonText } from "./style";

type Props = {
  text: string;
  buttonColor?: string;
  textColor?: string;
  width?: number | string;
  icon?: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({
  buttonColor,
  onPress,
  text,
  icon,
  textColor,
  width,
}) => {
  const {
    COLORS: { PRIMARY, BLACK },
  } = useContext(ThemeContext);
  return (
    <ButtonContainer
      backgroundColor={buttonColor || PRIMARY}
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
      <ButtonText textColor={textColor || BLACK}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
