import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import { ClientSignUpFormType, Props } from "./types";
import { FlexRow, Label, SmallText } from "./style";
import { clientSignUpSchema } from "./clientFormValidation";
import TextField from "../../Input/TextField";
import Spacer from "../../layout/Spacer";
import ErrorText from "../ErrorText";
import TextButton from "../../Button/TextButton";
import * as DateFormatter from "../../../utils/dateFormatter";
import Button from "../../Button";

const initialValues: ClientSignUpFormType = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  address: "",
};

const ClientSignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const [fullNameError, setFullNameError] = useState(false);
  const [biError, setBiError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false);
  const [addressError, setAddressError] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const spaceBetweenInputs = 20;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={clientSignUpSchema}
    >
      {({ handleChange, values, handleSubmit, errors, touched }) => {
        const errorOnFullName = (errors.fullName &&
          touched.fullName) as boolean;
        const errorOnBI = (errors.bi && touched.bi) as boolean;
        const errorOnEmail = (errors.email && touched.email) as boolean;
        const errorOnPhoneNumber = (errors.phoneNumber &&
          touched.phoneNumber) as boolean;
        const errorOnPassword = (errors.password &&
          touched.password) as boolean;
        const errorOnPasswordConfirmation = (errors.passwordConfirmation &&
          touched.passwordConfirmation) as boolean;
        const errorOnAddress = (errors.address && touched.address) as boolean;
        setFullNameError(errorOnFullName);
        setBiError(errorOnBI);
        setEmailError(errorOnEmail);
        setPhoneNumberError(errorOnPhoneNumber);
        setPasswordError(errorOnPassword);
        setPasswordConfirmationError(errorOnPasswordConfirmation);
        setAddressError(errorOnAddress);

        return (
          <>
            <TextField
              label="Nome Completo"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              hasError={fullNameError}
              placeholder="O seu nome completo"
            />
            {fullNameError && <ErrorText text={errors.fullName as string} />}
            <Spacer height={spaceBetweenInputs} />
            {/* Birthday */}
            <FlexRow>
              <TextButton
                onPress={() => setShowDatePicker(true)}
                text="Data de nascimento"
              />
              <Label>{DateFormatter.formatDate(values.birthDay)}</Label>
            </FlexRow>
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
            {/* Morada */}
            <Spacer height={spaceBetweenInputs} />
            <TextField
              label="Morada"
              value={values.address}
              onChangeText={handleChange("address")}
              hasError={addressError}
              placeholder="Província, Município, Rua"
            />
            {addressError && <ErrorText text={errors.address as string} />}
            <Spacer height={spaceBetweenInputs} />
            {/* BI */}
            <TextField
              label="BI"
              value={values.bi}
              onChangeText={handleChange("bi")}
              hasError={biError}
              placeholder="O seu número do BI"
            />
            {biError && <ErrorText text={errors.bi as string} />}
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
            {emailError && <ErrorText text={errors.email as string} />}
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
            {phoneNumberError && (
              <ErrorText text={errors.phoneNumber as string} />
            )}
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
              <ErrorText text={errors.password as string} />
            ) : (
              <SmallText>A password deve ter pelo menos 7 caracteres</SmallText>
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
              <ErrorText text={errors.passwordConfirmation as string} />
            )}
            <Spacer height={spaceBetweenInputs + 10} />
            {/* Submit */}
            <Button text="Criar Conta" onPress={handleSubmit} />
          </>
        );
      }}
    </Formik>
  );
};

export default ClientSignUpForm;
