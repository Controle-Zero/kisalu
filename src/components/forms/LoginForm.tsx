import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Formik, FormikHelpers } from "formik";
import { ToggleButton } from 'react-native-paper';

import Button from "../buttons/Button";
import TextField from "../input/TextField";
import Spacer from "../layout/Spacer";
import ErrorText from "./ErrorText";
import { loginSchema } from "../../utils/validation/loginFormValidation";
import { Colors } from "../../styles/appTheme";

type UserType = "client" | "provider";
interface Props {
  onSubmit: (
    values: { email: string; password: string, userType: UserType },
    actions: FormikHelpers<{ email: string; password: string; userType: UserType }>
  ) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        userType: "client",
      }}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ handleChange, values, handleSubmit, errors, touched }) => {
        setEmailError(errors.email && touched.email ? true : false);
        setPasswordError(errors.password && touched.email ? true : false);
        const isClient = values.userType === "client";
        return (
          <View>
            <ToggleButton.Row onValueChange={handleChange("userType")} value={values.userType} style={styles.toggleButtonRow}>
              <ToggleButton icon={() => (<Text>Cliente</Text>)} value="client" style={[styles.toggleButton, { backgroundColor: isClient ? Colors.primary : "white" }]} />
              <ToggleButton icon={() => (<Text>Provedor</Text>)} value="provider" style={[styles.toggleButton, { backgroundColor: isClient ? "white" : Colors.primary }]} />
            </ToggleButton.Row>
            <Spacer height={12} />
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
            <Spacer height={22} />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  toggleButtonRow: {
    justifyContent: "center",
    width: "100%",
  },
  toggleButton: {
    width: 100,
    height: 50,
  }

})

export default LoginForm;
