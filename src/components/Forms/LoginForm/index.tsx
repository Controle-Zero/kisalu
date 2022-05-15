import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text } from "react-native";
import { LoginFormValues, Props } from "./types";
import { loginSchema } from "./loginFormValidation";
import { ToggleButton, ToggleButtonRow, ToggleButtonText } from "./style";
import Spacer from "../../layout/Spacer";
import TextField from "../../Input/TextField";
import ErrorText from "../ErrorText";
import Button from "../../Button";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
  userType: "client",
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ handleChange, values, handleSubmit, errors, touched }) => {
        const invalidEmail = (errors.email && touched.email) as boolean;
        const invalidPassword = (errors.password &&
          touched.password) as boolean;
        setEmailError(invalidEmail);
        setPasswordError(invalidPassword);
        const isClient = values.userType === "client";
        return (
          <View>
            <ToggleButtonRow
              onValueChange={handleChange("userType")}
              value={values.userType}
            >
              <ToggleButton
                icon={() => (
                  <ToggleButtonText isClient={isClient}>
                    Cliente
                  </ToggleButtonText>
                )}
                value="client"
                isClient={!isClient}
              />
              <ToggleButton
                icon={() => (
                  <ToggleButtonText isClient={!isClient}>
                    Provedor
                  </ToggleButtonText>
                )}
                value="provider"
                isClient={isClient}
              />
            </ToggleButtonRow>
            <Spacer height={12} />
            <TextField
              label="Email"
              onChangeText={handleChange("email")}
              value={values.email}
              hasError={emailError}
            />
            {emailError && <ErrorText text={errors.email as string} />}
            <Spacer height={12} />
            <TextField
              label="Password"
              onChangeText={handleChange("password")}
              value={values.password}
              hasError={passwordError}
              secureText
            />
            {passwordError && <ErrorText text={errors.password as string} />}
            <Spacer height={22} />
            <Button text="Login" onPress={handleSubmit} />
            <Spacer height={22} />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
