import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 15px 20px;
`;

export const Text = styled.Text`
  margin-left: 33px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-weight: bold;
`;
