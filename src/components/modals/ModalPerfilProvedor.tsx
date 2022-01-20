import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Colors, TextStyles } from "../../styles/appTheme";
import ModalButton from "../buttons/ModalButton";
import Spacer from "../layout/Spacer";
interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const ModalPerfilProvedor: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();

  const { dismiss } = useBottomSheetModal();

  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["50%"];

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
        <Text style={styles.modalHeading}> Pedir Serviço </Text>
        <Text style={styles.modalDescricao}>
          OBS: É do direito do provedor rejeitar ou aceitar a sua requisição.
          Receberá uma notificação com a resposta correspondente
        </Text>
        <View style={styles.actions}>
          <ModalButton onPress={pushClientScreen} text="Concordo" />
          <Spacer width={30} />
          <ModalButton onPress={pushClientScreen} text="Não concordo" />
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
    marginTop: 40,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalPerfilProvedor;
