import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
`;

export const Heading1 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 25px;
  margin-top: 32px;
  max-width: 326px;
  align-self: center;
`;

export const Paragraph = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
  align-self: center;
  margin-top: 10;
  max-width: 267px;
`;

export const FormContainer = styled.View`
  margin-top: 50px;
  padding: 40px 37px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;
