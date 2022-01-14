import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { appLogo } from "../styles/imageConstants";
import { Colors, TextStyles } from "../styles/appTheme";
import Button from "../components/buttons/Button";
import Spacer from "../components/layout/Spacer";
import CreateAccountTypeModal from "../components/modals/CreateAccountTypeModal";
import { useCustomBottomSheetModal } from "../hooks/useCustomBottomSheetModal";
import { AuthNavProps } from "../routes/types/AuthParamsList";

export default function Welcome({ navigation }: AuthNavProps<"Welcome">) {
  const { reference, onModalShown } = useCustomBottomSheetModal();

  const openLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Image source={appLogo} style={styles.image} />
        <Text style={styles.heading1}>BEM VINDO</Text>
        <Text style={styles.heading2}>
          Uma app que te ajuda a encontrar e providenciar serviços
        </Text>
        <View style={styles.buttonsContainer}>
          <Button onPress={openLogin} text="Login" />
          <Spacer height={20} />
          <Button
            onPress={onModalShown}
            text="Cadastrar"
            isPrimaryColor={false}
          />
        </View>
      </View>
      <CreateAccountTypeModal reference={reference} />
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    paddingTop: 50,
    paddingHorizontal: 37,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 35,
  },
  heading1: {
    fontFamily: TextStyles.heading1.fontRegular,
    fontSize: TextStyles.heading1.fontSize,
    lineHeight: TextStyles.heading1.lineHeight,
  },
  heading2: {
    fontFamily: TextStyles.heading2.font,
    fontSize: TextStyles.heading1.fontSize,
    lineHeight: TextStyles.heading1.lineHeight,
    textAlign: "center",
    marginTop: 20,
    color: Colors.greyText,
  },
  buttonsContainer: {
    marginTop: "25%",
    width: "100%",
  },
});
