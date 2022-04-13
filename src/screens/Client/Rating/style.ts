import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RatingContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const CenteredParagraph = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  margin-top: 10%;
  font-size: 18px;
`;

export const Paragraph = styled.Text`
  padding: 15px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 18px;
`;

export const BottomView = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60px;
`;
