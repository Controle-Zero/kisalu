import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import ProfileHeader from "../../components/ProfileHeader";
import Button from "../../components/buttons/Button";
import useAuth from "../../contexts/AuthContext";
import Cliente from "../../models/Cliente";
import Spacer from "../../components/layout/Spacer";
import ListTile from "../../components/ListTile";
import { Colors, TextStyles } from "../../styles/appTheme";
import React, { Fragment, useState } from "react";

const ClientProvedor = () => {
  const { signOut, user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [text, setText] = useState(" ");

  const Icons = {
    birthDate: "calendar-blank",
    address: "home",
    email: "email",
    phone: "phone",
    bi: "card-bulleted",
    logout: "logout",
  };
  const {
    nome,
    dataNasc: unformattedDate,
    bi,
    email,
    morada,
    telefone,
  } = user as Cliente;
  const spaceBetweenTiles = 10;
  const profileData = [
    {
      label: "Email",
      text: email,
      icon: Icons.email,
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
  ];

  return (
    <ScrollView style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.container1}>
          <Text style={styles.modalHeading}>Pedir serviço</Text>
          <Text style={styles.descricao}>
            OBS: É do direito do provedor rejeitar ou aceitar a sua requisição.
            Receberá uma notificação com a resposta correspondente
          </Text>
          <View style={styles.actions}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                setModal2Open(true);
                setModalOpen(false);
              }}
            >
              <Text> Sim</Text>
            </Pressable>
            <Spacer width={20} />
            <Pressable style={styles.btn} onPress={() => setModalOpen(false)}>
              <Text>Não</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={modal2Open} animationType="slide">
        <View style={styles.container1}>
          <Text style={styles.modalHeading}>Descrição do Serviço</Text>
          <Text style={styles.atention}>
            Faça uma breve descrição do que pretende para que o prestador possa
            fazer um orçamento estimado
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Escreva"
            onChangeText={(val) => setText(val)}
          />
          <View style={styles.actions}>
            <Pressable style={styles.btn} onPress={() => setModal2Open(true)}>
              <Text>Requisitar</Text>
            </Pressable>
            <Spacer width={20} />
            <Pressable style={styles.btn} onPress={() => setModal2Open(false)}>
              <Text>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ProfileHeader name={"Almir Major"} profileImage="no-profile.png" />
      <Button
        onPress={() => setModalOpen(true)}
        text="Entrar em contacto"
        width="60%"
      />

      <View style={styles.innerContainer}>
        <Text style={styles.heading2}>Informações Detalhadas</Text>
        {profileData.map(({ icon, label, text }, index) => (
          <Fragment key={index}>
            <ListTile
              label={label}
              icon={icon}
              text={text}
              iconBackgroundColor={Colors.lightPrimary}
              iconColor={Colors.secondary}
            />
            <Spacer height={spaceBetweenTiles} />
          </Fragment>
        ))}
        <Spacer height={10} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  innerContainer: {
    marginTop: 55,
    height: "100%",
    paddingVertical: 45,
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
  modalHeading: {
    fontFamily: TextStyles.modalHeading.font,
    fontSize: TextStyles.modalHeading.fontSize,
    lineHeight: TextStyles.modalHeading.lineHeight,
    fontWeight: "bold",
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    fontSize: TextStyles.paragraph.fontSize,
    fontFamily: TextStyles.paragraph.font,
    lineHeight: TextStyles.paragraph.lineHeight,
    backgroundColor: "#383D3B",
    color: Colors.white,
    padding: 20,
  },
  actions: {
    flex: 1,
    marginTop: 26,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    height: "20%",
  },
  container1: {
    paddingVertical: 30,
    paddingHorizontal: 42,
    marginTop: "50%",
  },
  btn: {
    height: 30,
    width: "45%",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  atention: {
    textAlign: "center",
    color: Colors.greyText,
    fontSize: TextStyles.paragraph.fontSize,
    fontWeight: "bold",
    padding: "5%",
  },
  input: {
    borderWidth: 1,
    padding: 50,
    backgroundColor: "#383D3B",
    width: "100%",
    height: 100,
    color: Colors.lightGrey,
  },
});

export default ClientProvedor;
