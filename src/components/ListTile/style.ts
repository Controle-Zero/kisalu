import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GREY};
  padding-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-weight: bold;
`;
