import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Actions, Content, Heading, Modal } from "./style";
import { Props } from "./types";
import ModalButton from "../../Button/ModalButton";
import Spacer from "../../layout/Spacer";
import { AuthParamsList } from "../../../routes/types/AuthParamsList";

const AccountTypeModal: React.FC<Props> = ({ reference }) => {
  const navigation = useNavigation<NavigationProp<AuthParamsList>>();
  const { dismiss } = useBottomSheetModal();

  const snapPoints = ["35%"];

  const navigateToProviderScreen = () => {
    dismiss();
    navigation.navigate("CadastroProvedor");
  };

  const navigateToClientScreen = () => {
    dismiss();
    navigation.navigate("CadastroCliente");
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
