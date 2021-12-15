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

const CreateAccountTypeModal: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();

  const { dismiss } = useBottomSheetModal();

  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["45%"];

  const pushProviderScreen = () => {
    dismiss();
    navigation.push("CadastroProvedor");
  };
  const pushClientScreen = () => {
    dismiss();
    navigation.push("CadastroCliente");
  };
  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.modalHeading}>Selecione o tipo de cadastro</Text>
        <View style={styles.actions}>
          <ModalButton onPress={pushProviderScreen} text="Como Provedor" />
          <Spacer height={27} />
          <ModalButton onPress={pushClientScreen} text="Como Cliente" />
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
  actions: {
    marginTop: 26,
    width: "100%",
  },
});

export default CreateAccountTypeModal;
