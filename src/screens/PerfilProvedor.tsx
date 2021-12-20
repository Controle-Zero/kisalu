import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Image } from "react-native";
import Button from "../components/buttons/Button";
import Spacer from "../components/layout/Spacer";
import { useCustomBottomSheetModal } from "../hooks/useCustomBottomSheetModal";
import ModalPerfilProvedor from "../components/modals/ModalPerfilProvedor";

const PerfilProvedor = () => {
  const { reference, onModalShown } = useCustomBottomSheetModal();

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.containermaster}>
        <View style={styles.container}>
          <Image
            style={styles.profilephoto}
            source={require("../assets/images/photoprofile.jpg")}
          />
          <View style={styles.descricao}>
            <Text style={styles.nomeUser}> Kelman Dias dos Santos </Text>
            <Text style={styles.age}> 22 ANOS</Text>
            <Text style={styles.detalhesUser}> Sou estudante e trabalho</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button width={"50%"} text="Mais detalhada" onPress={onModalShown} />
          <Spacer width={30} />
          <Button width={"50%"} text="Pedir serviço" onPress={onModalShown} />
        </View>
        <Text style={styles.habilidadestext}> Outras habilidades</Text>
        <View style={styles.habilidades}>
          <Image
            style={styles.iconhabilidade}
            source={require("../assets/images/h1.png")}
          />
          <Image
            style={styles.iconhabilidade}
            source={require("../assets/images/h2.png")}
          />
        </View>
        <Text style={styles.habilidadestext}> Classificações</Text>
        <View style={styles.espaco}></View>
        <Text style={styles.habilidadestext}> Comentarios</Text>
      </ScrollView>
      <ModalPerfilProvedor reference={reference} />
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 100,
  },
  profilephoto: {
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  descricao: {
    marginLeft: 10,
    marginTop: 30,
  },
  nomeUser: {
    padding: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonsContainer: {
    padding: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  containermaster: {
    flexDirection: "column",
  },
  habilidades: {
    flexDirection: "row",
  },
  iconhabilidade: {
    marginTop: 10,
    borderRadius: 100,
    marginLeft: 10,
    height: 50,
    width: 50,
  },
  habilidadestext: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  age: {
    padding: 2,
    fontSize: 15,
  },
  detalhesUser: {
    padding: 2,
    fontSize: 16,
  },
  espaco: {
    height: 100,
  },
});

export default PerfilProvedor;
