import React, { FC } from "react";
import { Container, Icon, Image, Wrapper } from "./style";
import { Props } from "./type";
import { defaultProfilePic } from "../../styles/imageConstants";

const ProfilePictureSelector: FC<Props> = ({
  imageUrl = defaultProfilePic,
  onSelectPhoto,
}) => {
  return (
    <Container>
      <Wrapper>
        <Image source={imageUrl} />
        <Icon name="camera" onPress={onSelectPhoto} size={25} />
      </Wrapper>
    </Container>
  );
};

export default ProfilePictureSelector;
