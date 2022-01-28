import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/buttons/Button";
import Spacer from "../../components/layout/Spacer";
import ListTile from "../../components/ListTile";

import ProfileHeader from "../../components/ProfileHeader";
import useAuth from "../../contexts/AuthContext";
import Cliente from "../../models/Cliente";
import { Colors, TextStyles } from "../../styles/appTheme";
import { formatDate } from "../../utils/dateFormatter";

const Icons = {
  birthDate: "calendar-blank",
  address: "home",
  email: "email",
  phone: "phone",
  bi: "card-bulleted",
};

const Perfil = () => {
  const { signOut, user } = useAuth();
  const {
    nome,
    dataNasc: unformattedDate,
    bi,
    email,
    morada,
    telefone,
  } = user as Cliente;

  const formattedBirthDate = formatDate(new Date(unformattedDate));
  const spaceBetweenTiles = 10;
  const profileData = [
    {
      label: "Email",
      text: email,
      icon: Icons.email,
    },
    {
      label: "Data de nascimento",
      text: formattedBirthDate,
      icon: Icons.birthDate,
    },
    {
      label: "BI",
      text: bi,
      icon: Icons.bi,
    },
    {
      label: "Morada",
      text: morada,
      icon: Icons.address,
    },
    {
      label: "Telefone",
      text: telefone,
      icon: Icons.phone,
    },
  ];

  function handleSignOut() {
    signOut();
  }

  return (
    <ScrollView style={style.container}>
      <ProfileHeader name={nome} profileImage="dog.jpg" />
      <View style={style.innerContainer}>
        <Text style={style.heading2}>Informações Detalhadas</Text>
        {profileData.map(({ icon, label, text }, index) => (
          <>
            <ListTile
              key={index}
              label={label}
              icon={icon}
              text={text}
              iconBackgroundColor={Colors.lightPrimary}
              iconColor={Colors.secondary}
            />
            <Spacer height={spaceBetweenTiles} />
          </>
        ))}
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
