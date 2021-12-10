import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import Fonts from "../styles/fontsConstants";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Spacer from "../components/layout/Spacer";
import CreateAccountTypeModal from "../components/modals/CreateAccountTypeModal";

import welcomeimage from "../assets/images/logooficial.png";

export default function Welcome({ navigation }) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onModalShown = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const openLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Image style={styles.imagem} source={welcomeimage} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading1}>BEM VINDO</Text>
          <Text style={styles.heading2}>
            Uma app que te ajuda a encontrar e providenciar serviços
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            text="Login"
            color="#383D3B"
            width={150}
            textColor="#fff"
            onPress={openLogin}
          />
          <Spacer width={30} />
          <PrimaryButton
            text="Cadastro"
            color="#60DBDA"
            width={150}
            onPress={onModalShown}
          />
        </View>
        <CreateAccountTypeModal reference={bottomSheetModalRef} />
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headingContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 70,
  },
  imagem: {
    marginVertical: 80,
    height: 208,
    width: 208,
  },
  heading1: {
    fontSize: 30,
    fontFamily: Fonts.Poppins_400Regular,
    lineHeight: 45,
    marginBottom: 26,
  },
  heading2: {
    fontSize: 20,
    textAlign: "center",
    color: "#757575",
    fontFamily: Fonts.Poppins_400Regular,
  },
});
