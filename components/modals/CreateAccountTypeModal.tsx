import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import Fonts from "../../styles/fontsConstants";
import BottomSheetModalButton from "../buttons/BottomSheetModalButton";
interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const CreateAccountTypeModal: React.FC<Props> = ({ reference }) => {
  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["40%"];
  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Selecione o tipo de cadastro</Text>
        <BottomSheetModalButton
          text="Como Provedor"
          color="#60DBDA"
          onPress={(e) => console.log("Provedor")}
        />
        <View style={{ height: 25 }}></View>
        <BottomSheetModalButton
          text="Como Cliente"
          color="#60DBDA"
          onPress={(e) => console.log("Cliente")}
        />
      </View>
    </BottomSheetModal>
  );
};

export default CreateAccountTypeModal;

const styles = StyleSheet.create({
  modal: {
    // TODO: Add Shadow
  },
  modalContainer: {
    padding: 25,
  },
  modalTitle: {
    fontFamily: Fonts.Poppins_500Medium,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
});
