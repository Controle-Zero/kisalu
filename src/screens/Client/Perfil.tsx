import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/buttons/Button";
import IconTextButton from "../../components/buttons/IconTextButton";
import Spacer from "../../components/layout/Spacer";

import ProfileHeader from "../../components/ProfileHeader";
import useAuth from "../../contexts/AuthContext";
import Cliente from "../../models/Cliente";
import { Colors, TextStyles } from "../../styles/appTheme";

const Perfil = () => {
  const { signOut, user } = useAuth();
  const { nome } = user as Cliente;

  const space = 10;

  function handleSignOut() {
    signOut();
  }

  return (
    <ScrollView style={style.container}>
      <ProfileHeader name={nome} profileImage="dog.jpg" />
      <View style={style.innerContainer}>
        <Text style={style.heading2}>Informações Detalhadas</Text>
        <IconTextButton
          icon="account"
          text="Nome"
          onPress={() => {}}
          iconColor="#029AEF"
        />
        <Spacer height={space} />
        <IconTextButton
          icon="calendar-blank"
          text="Data de Nascimento"
          onPress={() => {}}
          iconColor="#5E2129"
        />
        <Spacer height={space} />
        <IconTextButton
          icon="email"
          text="Email"
          onPress={() => {}}
          iconColor="#0078CF"
        />
        <Spacer height={space} />
        <IconTextButton
          icon="cellphone"
          text="Telefone"
          onPress={() => {}}
          iconColor="#FFA500"
        />
        <Spacer height={space} />
        <Button onPress={handleSignOut} text="Sair" />
        <Spacer height={20} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.lightPrimary,
  },
  innerContainer: {
    marginTop: 50,
    paddingVertical: 40,
    paddingHorizontal: 37,
    backgroundColor: Colors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  heading2: {
    fontSize: 18,
    fontFamily: TextStyles.heading1.fontMedium,
    marginBottom: 30,
  },
});

export default Perfil;
