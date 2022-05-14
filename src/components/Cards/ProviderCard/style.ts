import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f1f1;
`;

export const ProfilePicture = styled.Image`
  height: 60%;
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const dropShadowStyle = StyleSheet.create({
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
