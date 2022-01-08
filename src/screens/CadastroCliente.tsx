import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { FormikHelpers } from "formik";

import CadastroClienteForm, {
  CadastroClienteFormType,
} from "../components/forms/CadastroClienteForm";
import { Colors, TextStyles } from "../styles/appTheme";
import useAuth from "../contexts/AuthContext";

const CadastroCliente = () => {
  const { signUpClient } = useAuth();

  const onCadastrarCliente = (
    values: CadastroClienteFormType,
    actions: FormikHelpers<CadastroClienteFormType>
  ) => {
    const { password, passwordConfirmation } = values;

    if (password !== passwordConfirmation) {
      actions.setFieldError(
        "passwordConfirmation",
        "As duas passwords não são iguais"
      );
      return;
    }
    signUpClient(values);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        {/* <ProfilePictureSelect /> */}
        <Text style={styles.heading1}>Cadastro do Cliente</Text>
        <Text style={styles.paragraph}>
          Cadastre como cliente para começar a requisitar serviços
        </Text>
        <View style={styles.formContainer}>
          <CadastroClienteForm onSubmit={onCadastrarCliente} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroCliente;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightPrimary,
  },
  heading1: {
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: TextStyles.heading1.fontSize,
    marginTop: 32,
    maxWidth: 326,
    alignSelf: "center",
  },
  paragraph: {
    fontFamily: TextStyles.paragraph.font,
    fontSize: TextStyles.paragraph.fontSize,
    color: Colors.greyText,
    alignSelf: "center",
    marginTop: 10,
    maxWidth: 267,
  },
  formContainer: {
    marginTop: 50,
    paddingVertical: 40,
    paddingHorizontal: 37,
    backgroundColor: Colors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
});
