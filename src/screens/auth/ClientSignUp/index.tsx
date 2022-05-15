import { View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../../../hooks/useAuth";
import { ClientSignUpHandler } from "./types";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ClientSignUpForm from "../../../components/Forms/ClientSignUpForm";
import ProfilePictureSelector from "../../../components/ProfilePictureSelector";

const ClientSignUp = () => {
  const { signUpClient } = useAuth();
  const [image, setImage] = useState("");

  const handleSignUp: ClientSignUpHandler = async (values, actions) => {
    const { password, passwordConfirmation } = values;
    if (password !== passwordConfirmation)
      actions.setFieldError(
        "passwordConfirmation",
        "As duas passwords não são iguais"
      );
    else signUpClient(values, image);
  };

  const handleSelectProfilePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSelectProfilePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <Container>
        <ProfilePictureSelector
          onSelectPhoto={handleSelectProfilePicture}
          imageUrl={image}
        />
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
