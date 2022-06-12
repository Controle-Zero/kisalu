import { View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../../../hooks/useAuth";
import { ClientSignUpHandler } from "./types";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ClientSignUpForm from "../../../components/Forms/ClientSignUpForm";
import ProfilePictureSelector from "../../../components/ProfilePictureSelector";
import { ClientSignUpFormType } from "../../../components/Forms/ClientSignUpForm/types";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSignUpSchema } from "../../../components/Forms/ClientSignUpForm/clientFormValidation";

const initialValues: ClientSignUpFormType = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  province: "Luanda",
  complementaryAddress: "",
  county: "Luanda",
  district: "",
  neighbor: "",
};

const ClientSignUp = () => {
  const { signUpClient } = useAuth();
  const [image, setImage] = useState("");
  const formMethods = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(clientSignUpSchema),
  });

  const handleSignUp: ClientSignUpHandler = (data) => {
    const { password, passwordConfirmation } = data;
    if (password !== passwordConfirmation)
      formMethods.setError("passwordConfirmation", {
        message: "As duas passwords não são iguais",
      });
    else signUpClient(data, image);
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
        <FormProvider {...formMethods}>
          <FormContainer>
            <ClientSignUpForm onSubmit={handleSignUp} />
          </FormContainer>
        </FormProvider>
      </Container>
    </View>
  );
};

export default ClientSignUp;
