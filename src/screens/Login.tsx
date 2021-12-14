import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Formik, FormikHelpers } from "formik";

import { loginImage } from "../styles/imageConstants";
import { Colors, TextStyles } from "../styles/appTheme";
import TextField from "../components/input/TextField";
import Spacer from "../components/layout/Spacer";
import Button from "../components/buttons/Button";
import CreateAccountTypeModal from "../components/modals/CreateAccountTypeModal";

type formType = {
  email: string;
  password: string;
};

const Login = () => {
  const onLogin = (
    { email, password }: formType,
    actions: FormikHelpers<formType>
  ) => {
    actions.resetForm();
    console.log({ email, password });
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onModalShown = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View>
        <ScrollView style={styles.container}>
          <Image source={loginImage} style={styles.image} />
          <Text style={styles.heading1}>Bem-vindo de Volta</Text>
          <Text style={styles.heading2}>Sentimos a sua falta</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={onLogin}
          >
            {({ handleChange, values, handleSubmit }) => (
              <View>
                <TextField
                  label="Email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <Spacer height={12} />
                <TextField
                  label="Password"
                  secureText
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                <Spacer height={22} />
                <Button text="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>

          <Text style={styles.paragraph}>Não possui uma conta?</Text>
          <Text style={styles.linkText} onPress={onModalShown}>
            Cadastre já
          </Text>
        </ScrollView>
      </View>
      <CreateAccountTypeModal reference={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 38,
  },
  image: {
    marginTop: 30,
    alignSelf: "center",
    width: 190,
    height: 190,
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
    marginBottom: 30,
    textAlign: "center",
    color: Colors.greyText,
  },
  paragraph: {
    marginTop: 22,
    textAlign: "center",
    fontFamily: TextStyles.paragraph.font,
    fontSize: TextStyles.paragraph.fontSize,
  },
  linkText: {
    fontFamily: TextStyles.linkText.font,
    fontSize: TextStyles.linkText.fontSize,
    color: Colors.linkText,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
