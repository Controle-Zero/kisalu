import React from "react";
import { Avatar } from "react-native-paper";
import { NoProfilePictureImage } from "../../styles/imageConstants";
import { Container, Text } from "./style";
import Icon from "react-native-vector-icons/Octicons";
import { Props } from "./types";
import Spacer from "../layout/Spacer";
import { View } from "react-native";

const ProfileHeader: React.FC<Props> = ({ name, profilePicture, onLogout }) => {
  return (
    <Container>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar.Image
          size={70}
          source={
            profilePicture ? { uri: profilePicture } : NoProfilePictureImage
          }
        />
        <Text>{name}</Text>
      </View>
      <Icon name="sign-out" size={35} onPress={onLogout} />
    </Container>
  );
};

export default ProfileHeader;
