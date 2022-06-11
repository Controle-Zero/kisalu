import { View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../../../hooks/useAuth";
import { ProviderSignUpHandler } from "./type";
import { Container, FormContainer, Heading1, Paragraph } from "./style";
import ProviderSignUpForm from "../../../components/Forms/ProviderSignUpForm";
import ProfilePictureSelector from "../../../components/ProfilePictureSelector";
import { FormProvider, useForm } from "react-hook-form";
import { ProviderSignUpFormType } from "../../../components/Forms/ProviderSignUpForm/type";

const initialValues: ProviderSignUpFormType = {
  fullName: "",
  birthDay: new Date(),
  bi: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  address: "",
  IBAN: "",
  description: "",
  province: "Luanda",
  complementaryAddress: "",
  county: "Luanda",
  district: "",
  neighbor: "",
};

const ProviderSignUp = () => {
  const { signUpProvider } = useAuth();
  const [image, setImage] = useState("");
  const formMethods = useForm({ defaultValues: initialValues });

  const signUpProviderHandler: ProviderSignUpHandler = async (data) => {
    const { password, passwordConfirmation } = data;
    console.log(data);
    // if (password !== passwordConfirmation)
    //   formMethods.setError("passwordConfirmation", {
    //     message: "As duas passwords não são iguais"
    //   });
    // else signUpProvider(data);
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
        <FormProvider {...formMethods}>
          <FormContainer>
            <ProviderSignUpForm onSubmit={signUpProviderHandler} />
          </FormContainer>
        </FormProvider>
      </Container>
    </View>
  );
};

export default ProviderSignUp;
