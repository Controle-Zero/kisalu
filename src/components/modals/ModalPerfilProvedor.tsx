import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Colors, TextStyles } from "../../styles/appTheme";
import ModalButton from "../buttons/ModalButton";

interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const ModalPerfilProvedor: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();

  const { dismiss } = useBottomSheetModal();

  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["70%"];

  const pushClientScreen = () => {
    dismiss();
  };
  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.modalHeading}> Informações Gerais </Text>
        <Text style={styles.modalDescricao}> Nome: </Text>
        <Text style={styles.modalDescricao}> Idade: </Text>
        <Text style={styles.modalDescricao}> Habilidades: </Text>
        <Text style={styles.modalDescricao}> Biografia: </Text>
        <View style={styles.actions}>
          <ModalButton onPress={pushClientScreen} text="Fechar" />
        </View>
      </View>
    </BottomSheetModal>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.lightGrey,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 42,
  },
  modalHeading: {
    fontFamily: TextStyles.modalHeading.font,
    fontSize: TextStyles.modalHeading.fontSize,
    lineHeight: TextStyles.modalHeading.lineHeight,

    textAlign: "center",
  },
  modalDescricao: {
    margin: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  actions: {
    marginTop: 100,
    width: "100%",
  },
});

export default ModalPerfilProvedor;
