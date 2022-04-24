import styled from "styled-components/native";
import { ToggleButton as TB } from "react-native-paper";
import { ToggleButtonStyle } from "./types";

export const ToggleButtonRow = styled(TB.Row)`
  justify-content: center;
  width: 100%;
`;

export const ToggleButton = styled(TB)<ToggleButtonStyle>`
  width: 100px;
  height: 50px;
  background-color: ${({ isClient, theme }) =>
    isClient ? theme.COLORS.WHITE : theme.COLORS.PRIMARY};
`;
