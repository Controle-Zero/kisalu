import styled from "styled-components/native";

export const SmallText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
`;

export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
