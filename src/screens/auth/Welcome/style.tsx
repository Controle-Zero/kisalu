import styled from "styled-components/native";

export const Container = styled.View`
  margin: 5% auto;
  width: 90%;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  justify-content: space-between;
  padding-top: 90px;
`;

export const WelcomeText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 27px;
  text-transform: uppercase;
  text-align: center;
`;

export const AppDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
`;
