import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import TextField from "../input/TextField";
import ErrorText from "./ErrorText";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";

interface Props {
  onSubmit: () => void;
}

const CadastroProvedorForm = () => {
  const [fullNameError, setFullNameError] = useState(false);
  const [biError, setBiError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false);

  const spaceBetweenInputs = 20;

  const onSubmit = () => {};
  const provedorSchema = () => {};

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
        return (
          <>
            <TextField
              label="Nome Completo"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
            />
            <Spacer height={spaceBetweenInputs} />
            {/* TODO: Add date field */}

            <TextField
              label="BI"
              value={values.bi}
              onChangeText={handleChange("bi")}
            />
            <Spacer height={spaceBetweenInputs} />

            {/* TODO: Add habilites chips  */}
            <TextField
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Nº de Telefone"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
            />
            <Spacer height={spaceBetweenInputs} />
            {/* TODO: Add personalInformation text area */}
            <TextField
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              secureText
            />
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Confirmar a password"
              value={values.passwordConfirmation}
              onChangeText={handleChange("passwordConfirmation")}
              secureText
            />
            <Spacer height={spaceBetweenInputs + 30} />
            <Button text="Criar Conta" onPress={handleSubmit} />
          </>
        );
      }}
    </Formik>
  );
};

export default CadastroProvedorForm;

const styles = StyleSheet.create({});
