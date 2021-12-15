import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import TextField from "../input/TextField";
import ErrorText from "./ErrorText";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";
import { Colors, TextStyles } from "../../styles/appTheme";

export type CadastroProvedorFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  personalInformation: string;
  password: string;
  passwordConfirmation: string;
};

interface Props {
  onSubmit: (
    values: CadastroProvedorFormType,
    actions: FormikHelpers<CadastroProvedorFormType>
  ) => void;
}

const CadastroProvedorForm: React.FC<Props> = ({ onSubmit }) => {
  const [fullNameError, setFullNameError] = useState(false);
  const [biError, setBiError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false);

  const [password, setPassword] = useState("");

  const spaceBetweenInputs = 20;

  const provedorSchema = yup.object({
    fullName: yup.string().required("Nome completo não deve estar vazio"),
    // TODO: Add regex for BI
    bi: yup.string().required("BI não deve estar vazio"),
    email: yup
      .string()
      .required("Email não deve estar vazio")
      .email("Deve ser um email"),
    // TODO: Add regex for phone number +244
    phoneNumber: yup.string().required("Nº de telefone não deve estar vazio"),
    password: yup
      .string()
      .required("Password não pode estar vazia")
      .min(7, "Deve ter pelo menos 7 caracteres"),
    // TODO: Check equality of original password
    passwordConfirmation: yup
      .string()
      .required("A confirmação não pode estar vazia"),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        //   TODO: Add birthday
        bi: "",
        // TODO: Add habilites
        email: "",
        phoneNumber: "",
        personalInformation: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={onSubmit}
      validationSchema={provedorSchema}
    >
      {({ handleChange, values, handleSubmit, errors, touched }) => {
        setFullNameError(errors.fullName && touched.fullName ? true : false);
        setBiError(errors.bi && touched.bi ? true : false);
        setEmailError(errors.email && touched.email ? true : false);
        setPhoneNumberError(
          errors.phoneNumber && touched.phoneNumber ? true : false
        );
        setPasswordError(errors.password && touched.password ? true : false);
        setPasswordConfirmationError(
          errors.passwordConfirmation && touched.passwordConfirmation
            ? true
            : false
        );
        setPassword(values.password);
        return (
          <>
            <TextField
              label="Nome Completo"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              hasError={fullNameError}
            />
            {errors.fullName && touched.fullName && (
              <ErrorText>{errors.fullName}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs} />
            {/* TODO: Add date field */}

            <TextField
              label="BI"
              value={values.bi}
              onChangeText={handleChange("bi")}
              hasError={biError}
            />
            {errors.bi && touched.bi && <ErrorText>{errors.bi}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />

            {/* TODO: Add habilites chips  */}
            <TextField
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              hasError={emailError}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Nº de Telefone"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              hasError={phoneNumberError}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs} />
            {/* TODO: Add personalInformation text area */}
            <TextField
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              hasError={passwordError}
              secureText
            />
            {errors.password && touched.password ? (
              <ErrorText>{errors.password}</ErrorText>
            ) : (
              <Text style={styles.small}>
                A password deve ter pelo menos 7 caracteres
              </Text>
            )}
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Confirmar a password"
              value={values.passwordConfirmation}
              onChangeText={handleChange("passwordConfirmation")}
              secureText
              hasError={passwordConfirmationError}
            />
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <ErrorText>{errors.passwordConfirmation}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs + 30} />
            <Button text="Criar Conta" onPress={handleSubmit} />
          </>
        );
      }}
    </Formik>
  );
};

export default CadastroProvedorForm;

const styles = StyleSheet.create({
  small: {
    fontSize: TextStyles.smallText.fontSize,
    fontFamily: TextStyles.smallText.font,
    color: Colors.greyText,
  },
});
