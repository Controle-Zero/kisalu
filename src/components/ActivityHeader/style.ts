import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const size = 65;

export const ProfilePicture = styled.Image`
  width: ${size}px;
  height: ${size}px;
  border-radius: 100;
`;

export const CreationDateText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
