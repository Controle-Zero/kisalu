import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-left-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-left-width: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
`;
export const TextContainer = styled.View``;

export const ColoredText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Text = styled.Text`
  margin-top: 30px;
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
