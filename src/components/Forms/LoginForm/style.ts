import styled from "styled-components/native";
import { ToggleButton as TB } from "react-native-paper";
import { ToggleButtonStyle } from "./types";

export const ToggleButtonRow = styled(TB.Row)`
  justify-content: center;
  width: 100%;
`;

export const ToggleButton = styled(TB)<ToggleButtonStyle>`
  width: 35%;
  height: 50px;
  background-color: ${({ isClient, theme }) =>
    isClient ? theme.COLORS.TEXT_FIELD_BACKGROUND : theme.COLORS.PRIMARY};
`;

export const ToggleButtonText = styled.Text<ToggleButtonStyle>`
  color: ${({ isClient, theme }) =>
    isClient ? theme.COLORS.WHITE : theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
