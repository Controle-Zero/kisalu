import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
`;

export const Wrapper = styled.View`
  margin-top: 50px;
  padding: 40px 37px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Heading2 = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  margin-bottom: 30px;
`;
