import styled from "styled-components/native";
import { ButtonContainerStyle, ButtonTextStyle } from "./types";

export const ButtonContainer = styled.Pressable<ButtonContainerStyle>`
  border-radius: 10px;
  padding: 10px 0;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width || "100%"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-self: ${(props) => (props.width == "100%" ? "auto" : "center")};
`;

export const ButtonText = styled.Text<ButtonTextStyle>`
  color: ${(props) => props.textColor};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
  text-align: center;
`;

export const ModalButtonContainer = styled.TouchableHighlight<ButtonContainerStyle>`
  background-color: ${(props) => props.backgroundColor};
  height: 45;
  justify-content: center;
  border-radius: 10;
`;

export const StyledTextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.LINK_TEXT};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  text-decoration: underline;
`;
