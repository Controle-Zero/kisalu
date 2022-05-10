import React, { FC } from "react";
import { defaultProfilePic } from "../../styles/imageConstants";
import { Container, Icon, Image, Wrapper } from "./style";
import { Props } from "./type";

const ProfilePictureSelector: FC<Props> = ({ imageUrl, onSelectPhoto }) => {
  return (
    <Container>
      <Wrapper>
        <Image source={imageUrl ? { uri: imageUrl } : defaultProfilePic} />
        <Icon name="camera" onPress={onSelectPhoto} size={25} />
      </Wrapper>
    </Container>
  );
};

export default ProfilePictureSelector;
