import styled from "styled-components/native";
import { ButtonContainerProps } from "./types";

export const ButtonContainer = styled.Pressable<ButtonContainerProps>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY};
  padding: 15px 0;
  border-radius: 45px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
