import { FAB } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
`;

export const Wrapper = styled.View`
  margin-top: 10px;
  padding: 40px 37px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const RatingContainer = styled.View`
  align-items: center;
`;

export const Heading2 = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const StarImage = styled.Image`
  height: 40px;
  width: 40px;
  object-fit: cover;
`;

export const FloatingActionButton = styled(FAB)`
  position: absolute;
  margin: 30px;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const RatingBar = styled.View`
  justify-content: center;
  flex-direction: row;
`;
