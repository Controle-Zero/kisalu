import styled from "styled-components/native";

type ButtonContainerProps = {
  backgroundColor: string;
  width: number | string;
};

type ButtonTextProps = {
  textColor: string;
};

export const ButtonContainer = styled.Pressable<ButtonContainerProps>`
  border-radius: 10px;
  padding: 10px 0;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-self: ${(props) => (props.width == "100%" ? "auto" : "center")};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.textColor};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 16px;
  text-align: center;
`;
