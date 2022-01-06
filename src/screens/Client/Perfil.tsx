import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/buttons/Button";
import useAuth from "../../contexts/AuthContext";

const Perfil = () => {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <Text>Perfil</Text>
      <Button onPress={handleSignOut} text="Sign Out" />
    </View>
  );
};

export default Perfil;
