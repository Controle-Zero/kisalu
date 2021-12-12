import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { appLogo } from "../styles/imageConstants";
import { Colors, TextStyles } from "../styles/appTheme";
import Button from "../components/buttons/Button";
import Spacer from "../components/layout/Spacer";
import CreateAccountTypeModal from "../components/modals/CreateAccountTypeModal";

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
      <CreateAccountTypeModal reference={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginTop: 50,
    width: "100%",
  },
});
