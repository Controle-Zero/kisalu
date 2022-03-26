import styled from "styled-components/native";

export const Container = styled.View`
  margin: 5% auto;
  width: 90%;
  align-items: center;
  justify-content: flex-end;
`;

export const WelcomeText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 27px;
  text-transform: uppercase;
`;

export const AppDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  margin-top: 50%;
  width: 100%;
`;
