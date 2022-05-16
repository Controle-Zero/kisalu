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

const ProviderProfile: NavigableFC = ({ navigation, route }) => {
  const {
    nome,
    imageUrl,
    rate = 3,
    email,
    telefone,
    descricao,
  } = route.params.provider;

  const { COLORS } = useContext(ThemeContext);
  const { showModal, reference } = useCustomBottomSheetModal();
  const iconSize = 25;

  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) ratingStars.push(<Star name="star" size={25} key={i} />);
    else ratingStars.push(<Star name="star-o" size={25} key={i} />);
  }

  function handleRequestService(description: string) {
    // TODO: Create activity
    console.log(description);
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
