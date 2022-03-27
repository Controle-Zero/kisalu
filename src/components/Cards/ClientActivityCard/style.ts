import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 15px;
  padding: 20px 26px;
  margin: 2% 0;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 14px;
`;

export const LeftContent = styled.View`
  width: 50%;
`;

export const RightContent = styled.View`
  width: 50%;
  align-items: flex-end;
`;

export const PrimaryText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  margin-bottom: 10px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
