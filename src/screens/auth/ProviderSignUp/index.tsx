import { View } from "react-native";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { ProviderSignUpHandler } from "./type";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ProviderSignUpForm from "../../../components/Forms/ProviderSignUpForm";
import ProfilePictureSelector from "../../../components/ProfilePictureSelector";

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

  const handleProfilePictureSelection = () => {};

  return (
    <View>
      <Container>
        <ProfilePictureSelector onSelectPhoto={handleProfilePictureSelection} />
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
