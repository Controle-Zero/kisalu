import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/buttons/Button";
import useAuth from "../../contexts/AuthContext";
import { TextStyles } from "../../styles/appTheme";

const Perfil = () => {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Button onPress={handleSignOut} text="Sign Out" />
      <Text
        style={{
          fontSize: TextStyles.heading2.fontSize,
          textAlign: "center",
          marginTop: 20,
          fontFamily: TextStyles.heading2.font,
        }}
      >
        {user?.nome}
      </Text>
    </View>
  );
};

export default Perfil;
