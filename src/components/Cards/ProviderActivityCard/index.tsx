import React from "react";
import { ProviderActivityCardProps } from "./type";
import {
  ColoredText,
  Container,
  ProfilePicture,
  TextContainer,
  Text,
  style,
} from "./style";
import DefaultProfilePic from "../../../assets/images/default-profile-pic.png";
import DropShadow from "react-native-drop-shadow";
import { formatDate } from "../../../utils/dateFormatter";

const ProviderActivityCard: React.FC<ProviderActivityCardProps> = ({
  activity,
  onNavigate,
}) => {
  const {
    Categoria: { titulo },
    dataCriado,
    Cliente,
  } = activity;
  return (
    <DropShadow style={style.container}>
      <Container>
        <TextContainer>
          <ColoredText>{titulo}</ColoredText>
          <Text>{Cliente?.nome}</Text>
          <Text>{formatDate(new Date(dataCriado))}</Text>
        </TextContainer>
        <ProfilePicture source={DefaultProfilePic} />
      </Container>
    </DropShadow>
  );
};

export default ProviderActivityCard;
