import React, { useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { Container, Heading1, Heading2, Wrapper } from "./style";
import { loginBackground } from "../../../styles/imageConstants";
import LoginForm from "../../../components/Forms/LoginForm";
import { handleLogin } from "./types";
import useAuth from "../../../hooks/useAuth";
import { LoginFormValues } from "../../../components/Forms/LoginForm/types";
import { loginSchema } from "../../../components/Forms/LoginForm/loginFormValidation";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
  userType: "client",
};

const Login = () => {
  useEffect(() => {
    setStatusBarStyle("light");
    return () => setStatusBarStyle("dark");
  }, []);

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
