import { View, Text } from "react-native";
import React from "react";
import DropShadow from "react-native-drop-shadow";
import { Container, dropShadowStyle, ProfilePicture } from "./style";

const ProviderCard = () => {
  return (
    <DropShadow style={dropShadowStyle.container}>
      <Container></Container>
    </DropShadow>
  );
};

export default ProviderCard;
