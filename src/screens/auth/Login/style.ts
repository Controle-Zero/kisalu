import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 0 38px;
`;

export const Image = styled.Image`
  margin-top: 30px;
  align-self: center;
  width: 190px;
  height: 190px;
`;

export const Heading1 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 25px;
  margin-top: 40px;
  text-align: center;
`;

export const Heading2 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
`;

export const Paragraph = styled.Text`
  margin-top: 22px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
`;

export const LinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.LINK_TEXT};
  text-decoration: underline;
  text-align: center;
`;
