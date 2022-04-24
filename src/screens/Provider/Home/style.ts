import styled from "styled-components/native";
import NoDataSVG from "../../../assets/svg/NoDataSVG";

export const Heading1 = styled.Text`
  margin-left: 10px;
  font-size: 25px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;

export const Container = styled.View`
  align-items: center;
  margin-top: 30%;
`;

export const EmptyActivityText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 24px;
`;

export const EmptyActivityImage = styled(NoDataSVG)`
  height: 208px;
  width: 60%;
`;
