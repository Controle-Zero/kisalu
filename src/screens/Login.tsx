import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { loginImage } from "../styles/imageConstants";
import { Colors, TextStyles } from "../styles/appTheme";
import { Formik } from "formik";
import TextField from "../components/input/TextField";

const Login = () => {
  const onLogin = () => {};

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onModalShown = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <ScrollView>
          <Image source={loginImage} style={styles.image} />
          <Text style={styles.heading1}>Bem-vindo de Volta</Text>
          <Text style={styles.heading2}>Sentimos a sua falta</Text>
          <View>
            <TextField label="Email" />
          </View>
        </ScrollView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 38,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 203,
    height: 203,
  },
  heading1: {
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: TextStyles.heading1.fontSize,
    lineHeight: TextStyles.heading1.lineHeight,
    marginTop: 40,
    textAlign: "center",
  },
  heading2: {
    fontFamily: TextStyles.heading2.font,
    fontSize: TextStyles.heading2.fontSize,
    lineHeight: TextStyles.heading2.lineHeight,
    marginTop: 20,
    textAlign: "center",
    color: Colors.greyText,
  },
});
