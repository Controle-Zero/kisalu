import React from "react";
import { Container, Heading1, Heading2, Wrapper } from "./style";
import { loginBackground } from "../../../styles/imageConstants";
import LoginForm from "../../../components/Forms/LoginForm";
import { handleLogin } from "./types";
import useAuth from "../../../hooks/useAuth";
import { useForm, FormProvider } from "react-hook-form";
import { LoginFormValues } from "../../../components/Forms/LoginForm/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../components/Forms/LoginForm/loginFormValidation";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
  userType: "client",
};

const Login = () => {
  const { signIn } = useAuth();
  const formMethods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: handleLogin = async ({ email, password, userType }) => {
    formMethods.reset();
    await signIn(email, password, userType);
  };

  return (
    <Container source={loginBackground} resizeMode="stretch">
      <Wrapper>
        <Heading1>Bem-vindo de Volta</Heading1>
        <Heading2>Sentimos a sua falta</Heading2>
        <FormProvider {...formMethods}>
          <LoginForm onSubmit={handleLogin} />
        </FormProvider>
      </Wrapper>
    </Container>
  );
};

export default Login;
