import React from "react";
import { Avatar } from "react-native-paper";
import { Container, Text } from "./style";
import { Props } from "./types";
import noProfileImage from "../../assets/images/no-profile.png";

const ProfileHeader: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Avatar.Image size={70} source={noProfileImage} />
      <Text>{name}</Text>
    </Container>
  );
};

export default ProfileHeader;
