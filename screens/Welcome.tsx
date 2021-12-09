import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import Fonts from "../styles/fontsConstants";
import PrimaryButton from "../components/buttons/PrimaryButton";
import welcomeimage from "../assets/images/logooficial.png";
import Spacer from "../components/layout/Spacer";
import CreateAccountTypeModal from "../components/modals/CreateAccountTypeModal";
export default function Welcome() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onModalShown = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const openLogin = () => {
    // TODO: Roberto implementar navegação para a tela de login
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Image style={styles.direction} source={welcomeimage} />
        <Text style={styles.welcome}>BEM VINDO</Text>
        <Text style={styles.introdu}>
          Uma app que te ajuda a encontrar e providenciar serviços
        </Text>
        <View style={styles.alinharbotao}>
          <PrimaryButton text="Login" color="#383D3B" onPress={openLogin} />
          <Spacer width={10} height={0} />
          <PrimaryButton
            text="Cadastro"
            color="#60DBDA"
            onPress={onModalShown}
          />
        </View>
        <CreateAccountTypeModal reference={bottomSheetModalRef} />
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  alinharbotao: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btntxtLogin: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  btntxtCadastro: {
    color: "#000000",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  direction: {
    paddingTop: 200,
    height: 200,
    width: 200,
  },
  welcome: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
  },
  introdu: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 15,
    fontFamily: Fonts.Poppins_400Regular,
  },
});
