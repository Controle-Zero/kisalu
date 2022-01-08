import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Formik, FormikHelpers } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

import TextField from "../input/TextField";
import ErrorText from "./ErrorText";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";
import { Colors, TextStyles } from "../../styles/appTheme";
import { cadastroProvedorSchema } from "../../utils/validation/cadastroProvedorFormValidation";
import TextButton from "../buttons/TextButton";
import { formatDate } from "../../utils/dateFormatter";
import TextArea from "../input/TextArea";

export type CadastroProvedorFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
  address: string;
  iban: string;
  description: string;
};

const initialValues = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  address: "",
  iban: "",
  description: "",
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
  const [addressError, setAddressError] = useState(false);
  const [ibanError, setIbanError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const spaceBetweenInputs = 20;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={cadastroProvedorSchema}
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
        setAddressError(errors.address && touched.address ? true : false);
        setIbanError(errors.iban && touched.iban ? true : false);
        setDescriptionError(
          errors.description && touched.description ? true : false
        );
        return (
          <>
            {/* Full name */}
            <TextField
              label="Nome Completo"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              hasError={fullNameError}
              placeholder="O seu nome completo"
            />
            {fullNameError && <ErrorText>{errors.fullName}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* Birthday */}
            <View style={styles.row}>
              <TextButton
                onPress={() => setShowDatePicker(true)}
                text="Data de nascimento"
              />
              <Text style={styles.label}>{formatDate(values.birthDay)}</Text>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={values.birthDay}
                mode="date"
                maximumDate={new Date()}
                onChange={(_: any, date?: Date | undefined) => {
                  values.birthDay = date || values.birthDay;
                  setShowDatePicker(false);
                }}
              />
            )}
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Morada"
              value={values.address}
              onChangeText={handleChange("address")}
              hasError={addressError}
              placeholder="Província, Município, Rua"
            />
            {addressError && <ErrorText>{errors.address}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* BI */}
            <TextField
              label="BI"
              value={values.bi}
              onChangeText={handleChange("bi")}
              hasError={biError}
              placeholder="O seu número do BI"
            />
            {biError && <ErrorText>{errors.bi}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* Email */}
            <TextField
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              hasError={emailError}
              placeholder="exemplo@exemplo.com"
            />
            {emailError && <ErrorText>{errors.email}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* Phone number */}
            <TextField
              keyboardType="phone-pad"
              label="Nº de Telefone"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              hasError={phoneNumberError}
              placeholder="XXX XXX XXX"
            />
            {phoneNumberError && <ErrorText>{errors.phoneNumber}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="IBAN"
              value={values.iban}
              onChangeText={handleChange("iban")}
              hasError={ibanError}
              placeholder="AO06.XXXX.XXXX.XXXX.XXXX.XXXX.X"
            />
            {ibanError && <ErrorText>{errors.iban}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* Descrição */}
            <TextArea
              label="Descrição"
              value={values.description}
              onChangeText={handleChange("description")}
              hasError={descriptionError}
              placeholder="Conte-nos sobre o que faz..."
            />
            {descriptionError && <ErrorText>{errors.description}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />
            {/* Password */}
            <TextField
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              hasError={passwordError}
              secureText
            />
            {passwordError ? (
              <ErrorText>{errors.password}</ErrorText>
            ) : (
              <Text style={styles.small}>
                A password deve ter pelo menos 7 caracteres
              </Text>
            )}
            <Spacer height={spaceBetweenInputs} />
            {/* Password confirmation */}
            <TextField
              label="Confirmar a password"
              value={values.passwordConfirmation}
              onChangeText={handleChange("passwordConfirmation")}
              secureText
              hasError={passwordConfirmationError}
            />
            {passwordConfirmationError && (
              <ErrorText>{errors.passwordConfirmation}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs + 30} />
            {/* Submit */}
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: TextStyles.label.font,
    fontSize: TextStyles.label.fontSize,
    color: Colors.black,
  },
});
