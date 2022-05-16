import React, { FC } from "react";
import DropShadow from "react-native-drop-shadow";
import {
  Container,
  dropShadowStyle,
  ProfilePicture,
  RateStar,
  RatingContainer,
  Text,
  Title,
} from "./style";
import { Props } from "./type";
import { NoProfilePictureImage } from "../../../styles/imageConstants";

const ProviderCard: FC<Props> = ({ onPress, provider }) => {
  const { imageUrl, rate = 0 } = provider;
  const hasProfilePicture = !!imageUrl;
  const hasRating = rate != 0;
  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) ratingStars.push(<RateStar name="star" size={25} key={i} />);
    else ratingStars.push(<RateStar name="star-o" size={25} key={i} />);
  }
  return (
    <DropShadow style={dropShadowStyle.container}>
      <Container onPress={() => onPress(provider)}>
        <ProfilePicture
          source={
            hasProfilePicture
              ? { uri: provider.imageUrl }
              : NoProfilePictureImage
          }
        />
        <Title>{provider.nome}</Title>
        <RatingContainer>
          {hasRating ? (
            ratingStars.map((ratingStartComponent) => ratingStartComponent)
          ) : (
            <Text>Sem classificação</Text>
          )}
        </RatingContainer>
      </Container>
    </DropShadow>
  );
};

export default ProviderCard;
