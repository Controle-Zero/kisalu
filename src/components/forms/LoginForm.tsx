import { Formik, FormikHelpers } from "formik";
import React from "react";
import { View, Text } from "react-native";
import Button from "../buttons/Button";
import TextField from "../input/TextField";
import Spacer from "../layout/Spacer";

interface Props {
  onSubmit: (
    values: { email: string; password: string },
    actions: FormikHelpers<{ email: string; password: string }>
  ) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({ handleChange, values, handleSubmit }) => (
        <View>
          <TextField
            label="Email"
            onChangeText={handleChange("email")}
            value={values.email}
            keyboardType="email-address"
          />
          <Spacer height={12} />
          <TextField
            label="Password"
            secureText
            onChangeText={handleChange("password")}
            value={values.password}
          />
          <Spacer height={22} />
          <Button text="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
