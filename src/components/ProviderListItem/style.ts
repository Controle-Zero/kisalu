import { List } from "react-native-paper";
import styled from "styled-components/native";
import { LeadingIconStyleProps } from "./type";

export const LeadingIcon = styled(List.Icon)<LeadingIconStyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-top: 5px;
  margin-right: 10px;
`;
