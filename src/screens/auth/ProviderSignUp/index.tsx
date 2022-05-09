import { View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../../../hooks/useAuth";
import { ProviderSignUpHandler } from "./type";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ProviderSignUpForm from "../../../components/Forms/ProviderSignUpForm";
import ProfilePictureSelector from "../../../components/ProfilePictureSelector";

const ProviderSignUp = () => {
  const { signUpProvider } = useAuth();
  const [image, setImage] = useState("");

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

  const handleProfilePictureSelection = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
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
          onSelectPhoto={handleProfilePictureSelection}
          imageUrl={image}
        />
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
