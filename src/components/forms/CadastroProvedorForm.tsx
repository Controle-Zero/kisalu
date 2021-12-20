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

export type CadastroProvedorFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  personalInformation: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
};

const initialValues = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  // TODO: Add habilites
  email: "",
  phoneNumber: "",
  personalInformation: "",
  password: "",
  passwordConfirmation: "",
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

  const [showDatePicker, setShowDatePicker] = useState(false);

  const spaceBetweenInputs = 20;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={cadastroProvedorSchema}
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
            {/* Full name */}
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
            {/* BI */}
            <TextField
              label="BI"
              value={values.bi}
              onChangeText={handleChange("bi")}
              hasError={biError}
            />
            {errors.bi && touched.bi && <ErrorText>{errors.bi}</ErrorText>}
            <Spacer height={spaceBetweenInputs} />

            {/* TODO: Add habilites chips  */}
            {/* Email */}
            <TextField
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              hasError={emailError}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs} />
            {/* Phone number */}
            <TextField
              keyboardType="phone-pad"
              label="Nº de Telefone"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              hasError={phoneNumberError}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <ErrorText>{errors.phoneNumber}</ErrorText>
            )}
            <Spacer height={spaceBetweenInputs} />
            {/* TODO: Add personalInformation text area */}
            {/* Password */}
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
            {/* Password confirmation */}
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
