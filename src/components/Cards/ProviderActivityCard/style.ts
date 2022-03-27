import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 15px;
  padding: 20px 26px;
  margin: 0 2%;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const DescriptionContainer = styled.View`
  background-color: #c4c4c433;
  max-height: 100px;
  padding: 10px;
  height: 80px;
  border-radius: 20px;
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
  margin-top: 10px;
  justify-content: center;
  flex-direction: row;
`;
