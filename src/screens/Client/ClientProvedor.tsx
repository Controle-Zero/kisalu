import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import ProfileHeader from "../../components/ProfileHeader";
import Button from "../../components/buttons/Button";
import Spacer from "../../components/layout/Spacer";
import ListTile from "../../components/ListTile";
import { Colors, TextStyles } from "../../styles/appTheme";
import React, { FC, Fragment, useState } from "react";
import { HomeNavProps } from "../../routes/types/Cliente/HomeParamsList";
import TextArea from "../../components/input/TextArea";
import useAuth from "../../contexts/AuthContext";
import * as Socket from "../../config/webSocket";

const ClientProvedor: (
  navProps: HomeNavProps<"ProviderProfile">
) => JSX.Element = ({ route }) => {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [text, setText] = useState("");

  const Icons = {
    birthDate: "calendar-blank",
    address: "home",
    email: "email",
    phone: "phone",
    bi: "card-bulleted",
    logout: "logout",
  };

  const { nome, email, telefone, descricao, estado } = route.params.provider;

  const handleActivityRequest = () => {
    const clienteId = user?.id;
    const prestadorId = route.params.provider.id;
    const categoriaId = route.params.categoryId;

    console.log({
      idCliente: clienteId,
      idProvedor: prestadorId,
      idCategoria: categoriaId,
      text,
    });

    const socket = Socket.initConnection({
      idCliente: clienteId,
      idProvedor: prestadorId,
    });
    socket.emit(`request:${prestadorId}`, {
      clienteId,
      prestadorId,
      categoriaId,
      descricao: text,
    });
    setModal2Open(false);
  };

  const spaceBetweenTiles = 10;
  const profileData = [
    {
      label: "Email",
      text: email,
      icon: Icons.email,
    },
    {
      label: "Telefone",
      text: telefone,
      icon: Icons.phone,
    },
    {
      label: "Estado",
      text: estado,
      icon: Icons.bi,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Modal visible={modalOpen} animationType="fade">
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
              <Text>Sim</Text>
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
          <TextArea
            label=""
            value={text}
            placeholder="Escreva a sua necessidade"
            onChangeText={(val) => setText(val)}
          />
          <View style={styles.actions}>
            <Pressable style={styles.btn} onPress={handleActivityRequest}>
              <Text>Requisitar</Text>
            </Pressable>
            <Spacer width={20} />
            <Pressable style={styles.btn} onPress={() => setModal2Open(false)}>
              <Text>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ProfileHeader name={nome} />
      <Spacer height={10} />
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
              text={text || "Sem estado"}
              iconBackgroundColor={Colors.lightPrimary}
              iconColor={Colors.secondary}
            />
            <Spacer height={spaceBetweenTiles} />
          </Fragment>
        ))}
        <Spacer height={10} />
        <AboutMe description={descricao} />
      </View>
    </ScrollView>
  );
};

const AboutMe: FC<{ description: string }> = ({ description }) => (
  <>
    <Text style={styles.heading2}>Sobre Mim</Text>
    <Text>{description}</Text>
    <Spacer height={10} />
  </>
);

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
    paddingHorizontal: 42,
    marginTop: "30%",
  },
  btn: {
    height: 40,
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
