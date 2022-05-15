import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.Pressable`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f1f1;
`;

export const ProfilePicture = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 60%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const RatingContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  flex: 1;
  align-self: center;
  align-items: center;
`;

export const RateStar = styled(Icon)`
  color: ${({ theme }) => theme.COLORS.GOLD};
  margin: 0 2px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
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
    height: 280,
    width: "47.5%",
  },
});
