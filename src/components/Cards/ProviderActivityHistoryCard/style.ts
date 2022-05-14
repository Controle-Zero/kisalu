import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { StatusColorProps } from "./type";

export const Container = styled.View<StatusColorProps>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-left-color: ${({ theme, color }) => color || theme.COLORS.PRIMARY};
  border-left-width: 7px;
  padding: 30px;
  border-radius: 15px;
`;
export const TextContainer = styled.View``;

export const ColoredText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const Text = styled.Text`
  margin-top: 30px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextCenter = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const StatusColor = styled.Text<StatusColorProps>`
  color: ${({ color }) => color || "#000"};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const ProfilePicture = styled.Image``;

export const style = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
});
