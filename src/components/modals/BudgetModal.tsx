import { View, Text, StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Colors, TextStyles } from "../../styles/appTheme";
import TextField from "../input/TextField";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";

interface Props {
  reference: React.Ref<BottomSheetModal>;
  onBudgetApply: (budget: string) => void;
}

const BudgetModal: FC<Props> = ({ reference, onBudgetApply }) => {
  const { dismiss } = useBottomSheetModal();
  const [text, setText] = useState("");
  const snapPoints = ["80%"];
  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.modalHeading}>Informe o seu orçamento</Text>

        <TextField
          label=""
          value={text}
          onChangeText={setText}
          placeholder="0,00 Kzs"
          keyboardType="numbers-and-punctuation"
        />
        <View style={styles.actions}>
          <Button
            onPress={() => {
              onBudgetApply(text);
              dismiss();
            }}
            text="Aplicar"
            isPrimaryColor={false}
            width="40%"
          />
          <Spacer height={10} />
          <Button
            onPress={() => dismiss()}
            text="Cancelar"
            color={Colors.danger}
            textColor={Colors.white}
            width="40%"
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.lightPrimary,
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default BudgetModal;
