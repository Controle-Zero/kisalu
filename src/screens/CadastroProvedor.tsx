import { FormikHelpers } from "formik";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import CadastroProvedorForm, {
  CadastroProvedorFormType,
} from "../components/forms/CadastroProvedorForm";
import { Colors, TextStyles } from "../styles/appTheme";

const CadastroProvedor = () => {
  const onCadastrarProvedor = (
    values: CadastroProvedorFormType,
    actions: FormikHelpers<CadastroProvedorFormType>
  ) => {
    console.log(values);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        {/* <ProfilePictureSelect /> */}
        <Text style={styles.heading1}>Cadastro do Provedor</Text>
        <Text style={styles.paragraph}>
          Cadastre como provedor para começar a fornecer serviços
        </Text>
        <View style={styles.formContainer}>
          <CadastroProvedorForm onSubmit={onCadastrarProvedor} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroProvedor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightPrimary,
    // TODO: Remove this after done styling the form
    borderBottomColor: "black",
    borderBottomWidth: 1,
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
