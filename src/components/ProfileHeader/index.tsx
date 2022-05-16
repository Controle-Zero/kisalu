import React from "react";
import { Avatar } from "react-native-paper";
import { NoProfilePictureImage } from "../../styles/imageConstants";
import { Container, Text } from "./style";
import { Props } from "./types";

const ProfileHeader: React.FC<Props> = ({ name, profilePicture }) => {
  return (
    <Container>
      <Avatar.Image
        size={70}
        source={
          profilePicture ? { uri: profilePicture } : NoProfilePictureImage
        }
      />
      <Text>{name}</Text>
    </Container>
  );
};

export default ProfileHeader;
