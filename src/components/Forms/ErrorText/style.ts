import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  color: ${({ theme }) => theme.COLORS.DANGER};
  font-size: 12px;
`;
