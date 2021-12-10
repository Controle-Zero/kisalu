import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import Fonts from "../../styles/fontsConstants";
import BottomSheetModalButton from "../buttons/BottomSheetModalButton";
import Spacer from "../layout/Spacer";
import { useNavigation } from "@react-navigation/native";
import { light } from "../../styles/colorThemes";
interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const CreateAccountTypeModal: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();

  // Define o espaço da tela que o modal irá ocupar em percentagem
  const snapPoints = ["40%"];

  const pushProviderScreen = () => {
    navigation.push("CadastroProvedor");
  };
  const pushClientScreen = () => {
    navigation.push("CadastroCliente");
  };
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
          color={light.primaryColor}
          onPress={pushProviderScreen}
        />
        <Spacer height={25} />
        <BottomSheetModalButton
          text="Como Cliente"
          color={light.primaryColor}
          onPress={pushClientScreen}
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
