import { View } from "react-native";
import React from "react";
import { Container, Heading1, Heading2, Wrapper } from "./style";
import { loginBackground } from "../../../styles/imageConstants";
import LoginForm from "../../../components/Forms/LoginForm";
import { handleLogin } from "./types";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();

  const handleLogin: handleLogin = async (
    { email, password, userType },
    actions
  ) => {
    actions.resetForm();
    await signIn(email, password, userType);
  };

  return (
    <Container source={loginBackground} resizeMode="stretch">
      <Wrapper>
        <Heading1>Bem-vindo de Volta</Heading1>
        <Heading2>Sentimos a sua falta</Heading2>
        <LoginForm onSubmit={handleLogin} />
      </Wrapper>
    </Container>
  );
};

export default Login;
