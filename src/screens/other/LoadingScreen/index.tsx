import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { Container } from "./style";

const LoadingScreen = () => {
  const { COLORS } = useContext(ThemeContext);
  return (
    <Container>
      <ActivityIndicator size="large" color={COLORS.PRIMARY} />
    </Container>
  );
};

export default LoadingScreen;
