import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 10px;
`;
export const Image = styled.Image`
  width: 150px;
  height: 90px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
export const SmallText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
