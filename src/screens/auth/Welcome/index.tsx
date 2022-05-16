import React, { useContext } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeContext } from "styled-components";
import {
  Container,
  AppDescription,
  ButtonsContainer,
  WelcomeText,
} from "./style";
import Button from "../../../components/Button";
import Spacer from "../../../components/layout/Spacer";
import AppLogo from "../../../components/AppLogo";
import AccountTypeModal from "../../../components/Modals/AccountTypeModal";
import { useCustomBottomSheetModal } from "../../../hooks/useCustomBottomSheetModal";
import { AuthNavProps } from "../../../routes/types/AuthParamsList";
import { View } from "react-native";

export default function Welcome({ navigation }: AuthNavProps<"Welcome">) {
  const { COLORS } = useContext(ThemeContext);
  const { reference, showModal: onModalShown } = useCustomBottomSheetModal();

  const openLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <BottomSheetModalProvider>
      <Container>
        <AppLogo />
        <View>
          <WelcomeText>Bem Vindo</WelcomeText>
          <AppDescription>
            Uma app que te ajuda a encontrar e providenciar serviços
          </AppDescription>
        </View>
        <ButtonsContainer>
          <Button onPress={openLogin} text="Login" />
          <Spacer height={20} />
          <Button
            onPress={onModalShown}
            text="Cadastrar"
            buttonColor={COLORS.SECONDARY}
            textColor={COLORS.WHITE}
          />
        </ButtonsContainer>
      </Container>
      <AccountTypeModal reference={reference} />
    </BottomSheetModalProvider>
  );
}
