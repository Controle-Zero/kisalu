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
  const iconSize = 25;

  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) ratingStars.push(<Star name="star" size={25} key={i} />);
    else ratingStars.push(<Star name="star-o" size={25} key={i} />);
  }
  return (
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
          <Button text="Solicitar Serviço" onPress={() => {}} />
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
  );
};

export default ProviderProfile;
