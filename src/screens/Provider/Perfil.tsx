import { StyleSheet, Text, View } from "react-native";
import React, { FC, Fragment } from "react";

import { ScrollView } from "react-native-gesture-handler";

import ProfileHeader from "../../components/ProfileHeader";
import useAuth from "../../contexts/AuthContext";
import Provedor from "../../models/Provedor";
import { formatDate } from "../../utils/dateFormatter";
import { Colors, TextStyles } from "../../styles/appTheme";
import ListTile from "../../components/ListTile";
import Spacer from "../../components/layout/Spacer";
import Button from "../../components/buttons/Button";
import { FAB } from "react-native-paper";
import { ProfileNavProps } from "../../routes/types/Provider/ProfileParamsList";

const Icons = {
  birthDate: "calendar-blank",
  address: "home",
  email: "email",
  phone: "phone",
  bi: "card-bulleted",
  logout: "logout",
  iban: "bank",
  estado: "account",
};

type ProfileDataType = {
  label: string;
  text: string | number | "Disponível" | "Ocupado" | undefined;
  icon: string;
}[];

const Perfil: (navProps: ProfileNavProps<"ProfileScreen">) => JSX.Element = ({
  navigation,
}) => {
  const { user, signOut } = useAuth();
  const {
    nome,
    dataNasc: unformattedDate,
    bi,
    email,
    morada,
    telefone,
    iban,
    descricao,
    estado,
    classificacao,
  } = user as Provedor;

  const formattedBirthDate = formatDate(new Date(unformattedDate));
  const profileData: ProfileDataType = [
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
    {
      label: "IBAN",
      text: iban,
      icon: Icons.iban,
    },
    {
      label: "Estado",
      text: estado,
      icon: Icons.estado,
    },
  ];

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader name={nome} />
        <View style={styles.innerContainer}>
          <AboutMe description={descricao} />
          <Details profileData={profileData} />
          <Rating rating={classificacao} />
          <Spacer height={20} />
          <Button
            onPress={handleSignOut}
            text="Sair"
            icon={Icons.logout}
            width="60%"
          />
          <Spacer height={20} />
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        onPress={() => navigation.navigate("SelectServiceScreen")}
        style={styles.fab}
      />
    </>
  );
};

const AboutMe: FC<{ description: string }> = ({ description }) => (
  <>
    <Text style={styles.heading2}>Sobre Mim</Text>
    <Spacer height={10} />
    <Text>{description}</Text>
    <Spacer height={10} />
  </>
);

const Rating: FC<{ rating: number | undefined }> = ({ rating }) => {
  return (
    <>
      <Text style={styles.heading2}>Classificação</Text>
      <View style={styles.ratingContainer}>
        <Spacer height={5} />
        {rating || rating === 0 ? (
          <Text>Sem Classificação</Text>
        ) : (
          <Text>{rating}</Text>
        )}
      </View>
    </>
  );
};

const Details: FC<{ profileData: ProfileDataType }> = ({ profileData }) => (
  <>
    <Text style={styles.heading2}>Informações Detalhadas</Text>
    <Spacer height={10} />
    {profileData.map(({ icon, label, text }, index) => (
      <Fragment key={index}>
        <ListTile
          label={label}
          icon={icon}
          text={text as string}
          iconBackgroundColor={Colors.lightPrimary}
          iconColor={Colors.secondary}
        />
        <Spacer height={10} />
      </Fragment>
    ))}
  </>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.lightPrimary,
  },
  innerContainer: {
    marginTop: 10,
    paddingVertical: 40,
    paddingHorizontal: 37,
    backgroundColor: Colors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  ratingContainer: {
    alignItems: "center",
  },
  heading2: {
    fontSize: 18,
    fontFamily: TextStyles.heading1.fontMedium,
  },
  fab: {
    position: "absolute",
    margin: 30,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
  },
});

export default Perfil;
