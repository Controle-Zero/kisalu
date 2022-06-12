import React, { useState } from "react";
import { View } from "react-native";
import { LoginFormValues, Props } from "./types";
import { ToggleButton, ToggleButtonRow, ToggleButtonText } from "./style";
import Spacer from "../../layout/Spacer";
import TextField from "../../Input/TextField";
import ErrorText from "../ErrorText";
import Button from "../../Button";
import { Controller, useFormContext } from "react-hook-form";
import { UserType } from "../../../contexts/AuthContext/types";

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<LoginFormValues>();

  const [isClient, setIsClient] = useState(true);

  return (
    <View>
      <Controller
        control={control}
        name="userType"
        render={() => (
          <ToggleButtonRow
            onValueChange={(value) => {
              const selectedUser = value as UserType;
              setValue("userType", selectedUser);
              if (selectedUser == "client" && !isClient)
                setIsClient((value as UserType) == "client");
              else if (selectedUser == "provider" && isClient)
                setIsClient((value as UserType) == "client");
            }}
            value={getValues("userType")}
          >
            <ToggleButton
              icon={() => (
                <ToggleButtonText isClient={isClient}>Cliente</ToggleButtonText>
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
        )}
      />
      <Spacer height={12} />
      <Controller
        control={control}
        name="email"
        render={() => (
          <TextField
            label="Email"
            onChangeText={(value) => setValue("email", value)}
            value={getValues("email")}
            hasError={!!errors.email}
          />
        )}
      />
      {errors.email && <ErrorText text={errors.email.message as string} />}
      <Spacer height={12} />
      <Controller
        control={control}
        name="password"
        render={() => (
          <TextField
            label="Password"
            onChangeText={(value) => setValue("password", value)}
            value={getValues("password")}
            hasError={!!errors.password}
            secureText
          />
        )}
      />
      {errors.password && (
        <ErrorText text={errors.password.message as string} />
      )}
      <Spacer height={22} />
      <Button
        text="Login"
        onPress={handleSubmit<LoginFormValues>(onSubmit, (error) =>
          console.error(error)
        )}
      />
      <Spacer height={22} />
    </View>
  );
};

export default LoginForm;
