import React from "react";
import { View, StyleSheet } from "react-native";

import ProfileHeader from "../../components/ProfileHeader";
import useAuth from "../../contexts/AuthContext";
import Cliente from "../../models/Cliente";
import { Colors } from "../../styles/appTheme";

const Perfil = () => {
  const { signOut, user } = useAuth();
  const { nome } = user as Cliente;

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={style.container}>
      <ProfileHeader name={nome} profileImage="dog.jpg" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: Colors.lightPrimary,
  },
});

export default Perfil;
