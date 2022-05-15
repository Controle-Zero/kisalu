import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  justify-content: flex-end;
  background-color: #000;
  flex: 1;
`;

export const Wrapper = styled.View`
  border-radius: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
`;

export const Heading1 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 25px;
  margin-top: 10px;
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
