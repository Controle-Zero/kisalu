import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { TextStyles } from "../../styles/appTheme";
import ModalButton from "../buttons/ModalButton";
import Spacer from "../layout/Spacer";

interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const CreateAccountTypeModal: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();

  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["45%"];

  const pushProviderScreen = () => {
    navigation.push("CadastroProvedor");
  };
  const pushClientScreen = () => {
    navigation.push("CadastroCliente");
  };
  return (
    <BottomSheetModal ref={reference} index={0} snapPoints={snapPoints}>
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
