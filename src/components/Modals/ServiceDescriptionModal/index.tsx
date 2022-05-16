import { View, Text } from "react-native";
import React, { FC } from "react";
import { BackgroundOverlay, Modal } from "./style";
import { Props } from "./types";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Button from "../../Button";

const ServiceDescriptionModal: FC<Props> = ({ reference, onSubmit }) => {
  const { dismiss } = useBottomSheetModal();

  const snapPoints = ["35%"];

  function handleSubmit() {
    dismiss();
    onSubmit("Hello World");
  }

  return (
    <Modal
      ref={reference}
      snapPoints={snapPoints}
      backdropComponent={() => <BackgroundOverlay />}
      enablePanDownToClose
    >
      <View>
        <Text>Hello</Text>
        <Button text="Requisitar" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default ServiceDescriptionModal;
