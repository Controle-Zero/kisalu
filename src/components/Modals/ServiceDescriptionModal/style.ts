import { BottomSheetModal } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";

export const Modal = styled(BottomSheetModal)`
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Content = styled.View`
  padding: 30px 42px;
`;

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 20px;
  text-align: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 14px;
  margin: 10px 0;
`;

export const BackgroundOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
