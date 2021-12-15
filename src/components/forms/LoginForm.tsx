import React, { useState } from "react";
import { View } from "react-native";

import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import Button from "../buttons/Button";
import TextField from "../input/TextField";
import Spacer from "../layout/Spacer";
import ErrorText from "./ErrorText";

interface Props {
  onSubmit: (
    values: { email: string; password: string },
    actions: FormikHelpers<{ email: string; password: string }>
  ) => void;
}

const reviewSchema = yup.object({
  email: yup
    .string()
    .required("Email não deve estar vazio")
    .email("Deve ser um email"),
  password: yup
    .string()
    .required("Password não deve estar vazia")
    .min(7, "Deve ter pelo menos 7 caracteres"),
});

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
      validationSchema={reviewSchema}
    >
      {({ handleChange, values, handleSubmit, errors, touched }) => {
        setEmailError(errors.email && touched.email ? true : false);
        setPasswordError(errors.password && touched.email ? true : false);
        return (
          <View>
            <TextField
              label="Email"
              onChangeText={handleChange("email")}
              value={values.email}
              keyboardType="email-address"
              hasError={emailError}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <Spacer height={12} />
            <TextField
              label="Password"
              secureText
              onChangeText={handleChange("password")}
              value={values.password}
              hasError={passwordError}
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}
            <Spacer height={22} />
            <Button text="Login" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
