import styled from "styled-components/native";

export const ListEmptyContainer = styled.View`
  margin-top: 25%;
  justify-content: center;
  align-items: center;
`;

export const ListEmptyText = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
