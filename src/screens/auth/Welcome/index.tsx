import React, { useContext } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Button from "../../../components/Button";
import Spacer from "../../../components/layout/Spacer";
import AppLogo from "../../../components/AppLogo";
import CreateAccountTypeModal from "../../../components/modals/CreateAccountTypeModal";
import { useCustomBottomSheetModal } from "../../../hooks/useCustomBottomSheetModal";
import { AuthNavProps } from "../../../routes/types/AuthParamsList";
import {
  Container,
  AppDescription,
  ButtonsContainer,
  WelcomeText,
} from "./style";
import { ThemeContext } from "styled-components";

export default function Welcome({ navigation }: AuthNavProps<"Welcome">) {
  const { COLORS } = useContext(ThemeContext);
  const { reference, onModalShown } = useCustomBottomSheetModal();

  const openLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <BottomSheetModalProvider>
      <Container>
        <AppLogo />
        <WelcomeText>Bem Vindo</WelcomeText>
        <AppDescription>
          Uma app que te ajuda a encontrar e providenciar serviços
        </AppDescription>
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
      <CreateAccountTypeModal reference={reference} />
    </BottomSheetModalProvider>
  );
}
