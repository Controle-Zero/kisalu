import styled from "styled-components/native";
import _Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PROFILE_IMAGE_SIZE = 125;

export const Container = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px 50px 25px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const Wrapper = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  width: ${PROFILE_IMAGE_SIZE}px;
  height: ${PROFILE_IMAGE_SIZE}px;
  border-radius: 100px;
`;

export const Icon = styled(_Icon)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #c4c4c4;
  color: #666;
  border-radius: 50px;
  padding: 5px;
`;
