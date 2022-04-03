import { View, Text } from "react-native";
import React from "react";
import useAuth from "../../../contexts/AuthContext";
import { ProviderSignUpHandler } from "./type";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ProviderSignUpForm from "../../../components/Forms/ProviderSignUpForm";

const ProviderSignUp = () => {
  const { signUpProvider } = useAuth();

  const signUpProviderHandler: ProviderSignUpHandler = async (
    values,
    actions
  ) => {
    const { password, passwordConfirmation } = values;
    if (password !== passwordConfirmation)
      actions.setFieldError(
        "passwordConfirmation",
        "As duas passwords não são iguais"
      );
    else signUpProvider(values);
  };

  return (
    <View>
      <Container>
        <Heading1>Cadastro do Provedor</Heading1>
        <Paragraph>
          Cadastre como provedor para começar a fornecer serviços
        </Paragraph>
        <FormContainer>
          <ProviderSignUpForm onSubmit={signUpProviderHandler} />
        </FormContainer>
      </Container>
    </View>
  );
};

export default ProviderSignUp;
