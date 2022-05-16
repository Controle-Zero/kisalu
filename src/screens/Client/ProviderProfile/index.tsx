import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigableFC } from "./types";
import {
  BigName,
  Container,
  Header,
  ProfilePicture,
  TimeWithUsContainer,
  Text,
  RatingContainer,
  Heading,
  DescriptionContainer,
  Column,
  TextBold,
  Star,
  Field,
} from "./style";
import { NoProfilePictureImage } from "../../../styles/imageConstants";
import Button from "../../../components/Button";
import { ThemeContext } from "styled-components/native";
import { useCustomBottomSheetModal } from "../../../hooks/useCustomBottomSheetModal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ServiceDescriptionModal from "../../../components/Modals/ServiceDescriptionModal";
import { Alert } from "react-native";
import SocketContext from "../../../contexts/SocketContext";
import useAuth from "../../../hooks/useAuth";
import { Roles } from "../../../contexts/SocketContext/types";

const ProviderProfile: NavigableFC = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;
  const {
    nome,
    imageUrl,
    rate = 3,
    email,
    telefone,
    id: prestadorId,
    descricao,
  } = route.params.provider;

  const { COLORS } = useContext(ThemeContext);
  const { user } = useAuth();
  const { onActivityRequest } = useContext(SocketContext);
  const { showModal, reference } = useCustomBottomSheetModal();
  const iconSize = 25;

  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) ratingStars.push(<Star name="star" size={25} key={i} />);
    else ratingStars.push(<Star name="star-o" size={25} key={i} />);
  }

  function handleRequestService(description: string) {
    onActivityRequest({
      TriggeredBy: {
        id: user?.id as string,
        role: Roles.CLIENT,
      },
      atividade: {
        categoriaId: categoryId,
        clienteId: user?.id as string,
        descricao: description,
        prestadorId: prestadorId as string,
      },
    });

    Alert.alert(
      "Solicitação de serviço",
      "A sua solicitação foi enviada. Aguarde pela resposta do provedor"
    );
    navigation.navigate("HomeScreen");
  }

  return (
    <BottomSheetModalProvider>
      <Container>
        <Header>
          <Column>
            <ProfilePicture
              source={imageUrl ? { uri: imageUrl } : NoProfilePictureImage}
            />
            <BigName>{nome}</BigName>
          </Column>
          <Column>
            <TimeWithUsContainer>
              <Text>Está connosco há</Text>
              <TextBold>10 meses</TextBold>
            </TimeWithUsContainer>
            <Button text="Solicitar Serviço" onPress={showModal} />
            <RatingContainer>{ratingStars.map((star) => star)}</RatingContainer>
          </Column>
        </Header>
        <Heading>Contactos</Heading>
        <Field>
          <Icon
            name="email"
            color={COLORS.PRIMARY}
            size={iconSize}
            style={{ marginRight: 20 }}
          />
          <Text>{email}</Text>
        </Field>
        <Field>
          <Icon
            name="phone"
            color={COLORS.PRIMARY}
            size={iconSize}
            style={{ marginRight: 20 }}
          />
          <Text>{telefone}</Text>
        </Field>
        <Heading>Descrição</Heading>
        <DescriptionContainer>
          <Text>{descricao}</Text>
        </DescriptionContainer>
      </Container>
      <ServiceDescriptionModal
        reference={reference}
        onSubmit={handleRequestService}
      />
    </BottomSheetModalProvider>
  );
};

export default ProviderProfile;
