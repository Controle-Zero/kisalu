import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding-top: 40px;
`;

export const Wrapper = styled.View`
  margin-top: 55px;
  height: 100%;
  padding: 45px 37px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Heading2 = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  margin-bottom: 30px;
`;

export const ModalHeading = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 20px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  margin-top: 26px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  height: 20px;
`;
