import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import NoDataSVG from "../../../assets/svg/NoDataSVG";

export const Container = styled.View`
  /* align-items: center; */
  margin-top: 30%;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 24px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 15px;
  margin-top: 5px;
  color: ${({ theme }) => theme.COLORS.GREY_TEXT};
  text-align: center;
`;

export const dropdown = StyleSheet.create({
  dropdown: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
