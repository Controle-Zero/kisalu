import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const DOT_SIZE = 8;

export const Container = styled.Pressable`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f1f1;
`;

export const Image = styled.Image`
  height: 60%;
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const GreenDot = styled.View`
  background: #00ff00;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 100px;
`;

export const RedDot = styled.View`
  background: #ff0000;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 100px;
`;

export const NumberOfProvidersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  flex: 1;
`;

export const NumberOfProvidersText = styled.Text`
  margin-left: 15px;
  text-align: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    height: 250,
    width: "47.5%",
  },
});
