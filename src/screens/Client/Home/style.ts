import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 5%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Input = styled(TextInput)`
  margin-bottom: 10px;
`;

export const ListHeading = styled.Text`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 16px;
`;
