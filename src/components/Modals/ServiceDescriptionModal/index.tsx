import React, { FC, useState } from "react";
import { BackgroundOverlay, Content, Heading, Modal, Text } from "./style";
import { Props } from "./types";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Button from "../../Button";
import TextArea from "../../Input/TextArea";
import Spacer from "../../layout/Spacer";

const ServiceDescriptionModal: FC<Props> = ({ reference, onSubmit }) => {
  const { dismiss } = useBottomSheetModal();
  const [description, setDescription] = useState("");

  const snapPoints = ["30%", "75%", "100%"];

  function handleSubmit() {
    dismiss();
    setDescription("");
    onSubmit(description);
  }

  return (
    <Modal
      ref={reference}
      snapPoints={snapPoints}
      backdropComponent={() => <BackgroundOverlay />}
      enablePanDownToClose
    >
      <Content>
        <Heading>Descrição do Serviço</Heading>
        <Text>
          Faça uma breve descrição do que pretende para que o prestador possa
          fazer um orçamento estimado
        </Text>
        <TextArea
          hasError={false}
          label=""
          value={description}
          onChangeText={setDescription}
          placeholder="O que necessita..."
        />
        <Spacer height={20} />
        <Button text="Requisitar" onPress={handleSubmit} />
      </Content>
    </Modal>
  );
};

export default ServiceDescriptionModal;
