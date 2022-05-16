import React from "react";
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
  MainInfoContainer,
  ActionsContainer,
  TextBold,
  Star,
} from "./style";
import { NoProfilePictureImage } from "../../../styles/imageConstants";
import Button from "../../../components/Button";

const ProviderProfile: NavigableFC = ({ navigation, route }) => {
  const {
    nome,
    imageUrl,
    rate = 3,
    email,
    telefone,
    descricao,
  } = route.params.provider;
  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) ratingStars.push(<Star name="star" size={25} key={i} />);
    else ratingStars.push(<Star name="star-o" size={25} key={i} />);
  }
  return (
    <Container>
      <Header>
        <MainInfoContainer>
          <ProfilePicture
            source={imageUrl ? { uri: imageUrl } : NoProfilePictureImage}
          />
          <BigName>{nome}</BigName>
        </MainInfoContainer>
        <ActionsContainer>
          <TimeWithUsContainer>
            <Text>Está connosco há</Text>
            <TextBold>10 meses</TextBold>
          </TimeWithUsContainer>
          <Button text="Solicitar Serviço" onPress={() => {}} />
          <RatingContainer>{ratingStars.map((star) => star)}</RatingContainer>
        </ActionsContainer>
      </Header>
      <Heading>Contactos</Heading>
      <Text>{email}</Text>
      <Text>{telefone}</Text>
      <Heading>Descrição</Heading>
      <DescriptionContainer>
        <Text>{descricao}</Text>
      </DescriptionContainer>
    </Container>
  );
};

export default ProviderProfile;
