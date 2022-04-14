import React, { useState } from "react";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FlexRow, Label, SmallText } from "./style";
import { Props, ProviderSignUpFormType } from "./type";
import TextField from "../../Input/TextField";
import Spacer from "../../layout/Spacer";
import ErrorText from "../ErrorText";
import { providerSignUpSchema } from "./providerFormValidation";
import * as DateFormatter from "../../../utils/dateFormatter";
import TextArea from "../../Input/TextArea";
import TextButton from "../../Button/TextButton";
import Button from "../../Button";

const initialValues: ProviderSignUpFormType = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  address: "",
  IBAN: "",
  description: "",
};

const ProviderSignUpForm: React.FC<Props> = ({ onSubmit }) => {
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
      validationSchema={providerSignUpSchema}
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
        setIbanError(errors.IBAN && touched.IBAN ? true : false);
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
            <TextField
              label="IBAN"
              value={values.IBAN}
              onChangeText={handleChange("IBAN")}
              hasError={ibanError}
              placeholder="AO06.XXXX.XXXX.XXXX.XXXX.XXXX.X"
            />
            {ibanError && <ErrorText text={errors.IBAN as string} />}
            <Spacer height={spaceBetweenInputs} />
            {/* Descrição */}
            <TextArea
              label="Descrição"
              value={values.description}
              onChangeText={handleChange("description")}
              hasError={descriptionError}
              placeholder="Conte-nos sobre o que faz..."
            />
            {descriptionError && (
              <ErrorText text={errors.description as string} />
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
            <Spacer height={spaceBetweenInputs + 30} />
            {/* Submit */}
            <Button
              text="Criar Conta"
              onPress={() => {
                console.log("Hello");
                handleSubmit();
              }}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default ProviderSignUpForm;
