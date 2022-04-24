import { View, Text } from "react-native";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { ClientSignUpHandler } from "./types";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ClientSignUpForm from "../../../components/Forms/ClientSignUpForm";

const ClientSignUp = () => {
  const { signUpClient } = useAuth();

  const handleSignUp: ClientSignUpHandler = async (values, actions) => {
    const { password, passwordConfirmation } = values;
    if (password !== passwordConfirmation)
      actions.setFieldError(
        "passwordConfirmation",
        "As duas passwords não são iguais"
      );
    else signUpClient(values);
  };

  return (
    <View>
      <Container>
        <Heading1>Cadastro do Cliente</Heading1>
        <Paragraph>
          Cadastre como cliente para começar a requisitar serviços
        </Paragraph>
        <FormContainer>
          <ClientSignUpForm onSubmit={handleSignUp} />
        </FormContainer>
      </Container>
    </View>
  );
};

export default ClientSignUp;
