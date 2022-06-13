import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const Heading = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 18px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 15px;
  margin: 5px 0;
`;

export const DescriptionContainer = styled.ScrollView`
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  padding: 15px;
  margin: 10px 0;
  border-radius: 20px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  text-align: justify;
  font-size: 14px;
  line-height: 20px;
`;
