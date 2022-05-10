import styled from "styled-components/native";

export const Heading1 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 20px;
  text-align: center;
`;

export const Heading2 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
  margin: 10px 5%;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
`;

export const Container = styled.View`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
  flex: 1;
`;

export const Wrapper = styled.View`
  margin-top: 10px;
  padding: 30px 20px 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  flex: 1;
`;

export const NoServicesContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

export const NoServicesText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
