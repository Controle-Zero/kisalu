import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Actions, Content, Heading, Modal } from "./style";
import { Props } from "./types";
import ModalButton from "../../Button/ModalButton";
import Spacer from "../../layout/Spacer";

const AccountTypeModal: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation();
  const { dismiss } = useBottomSheetModal();

  const snapPoints = ["45%"];

  const navigateToProviderScreen = () => {
    dismiss();
    navigation.push("ProviderSignUp");
  };

  const navigateToClientScreen = () => {
    dismiss();
    navigation.push("ClientSignUp");
  };

  return (
    <Modal ref={reference} snapPoints={snapPoints}>
      <Content>
        <Heading>Selecione o tipo de cadastro</Heading>
        <Actions>
          <ModalButton
            text="Como Provedor"
            onPress={navigateToProviderScreen}
          />
          <Spacer height={27} />
          <ModalButton text="Como Cliente" onPress={navigateToClientScreen} />
        </Actions>
      </Content>
    </Modal>
  );
};

export default AccountTypeModal;
