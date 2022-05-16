import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 40px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex: 1;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin-bottom: 20px;
`;

export const TimeWithUsContainer = styled.View`
  margin-bottom: 20px;
  border-left-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-left-width: 3px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
`;

export const TextBold = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 16px;
`;

export const BigName = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  color: #000;
  text-align: center;
`;

export const RatingContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Star = styled(Icon)`
  color: ${({ theme }) => theme.COLORS.GOLD};
`;

export const Heading = styled.Text`
  margin-top: 25px;
  margin-left: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const Field = styled.View`
  flex-direction: row;
  padding: 10px 5px;
  align-items: center;
  margin-bottom: 18px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-bottom-width: 1px;
`;

export const DescriptionContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.TEXT_FIELD_BACKGROUND};
  border-radius: 15px;
  padding: 20px;
  min-height: 150px;
  margin-bottom: 20px;
`;
