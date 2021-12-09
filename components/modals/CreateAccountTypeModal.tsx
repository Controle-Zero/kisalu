import React, { useCallback, useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

interface Props {
  reference: React.Ref<BottomSheetModal>;
}

const CreateAccountTypeModal: React.FC<Props> = ({ reference }) => {
  const snapPoints = ["30%"];

  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text>Selecione o tipo de cadastro</Text>
        <Button
          title="Como Provedor"
          onPress={(e) => console.log("Provedor")}
        />
        <Button title="Como Cliente" onPress={(e) => console.log("Cliente")} />
      </View>
    </BottomSheetModal>
  );
};

export default CreateAccountTypeModal;

const styles = StyleSheet.create({
  modal: {
    // TODO: Add Shadow
  },
  modalContainer: {},
});
