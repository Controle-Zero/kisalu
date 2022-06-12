import React from "react";
import { NoProfilePictureImage } from "../../styles/imageConstants";
import { formatDate } from "../../utils/dateFormatter";
import { Container, CreationDateText, ProfilePicture } from "./style";
import { Props } from "./type";

const ActivityHeader: React.FC<Props> = ({
  clientProfilePicture,
  creationDate,
  providerProfilePicture,
}) => {
  return (
    <Container>
      <ProfilePicture
        source={
          clientProfilePicture
            ? { uri: clientProfilePicture }
            : NoProfilePictureImage
        }
        defaultSource={NoProfilePictureImage}
      />
      <CreationDateText>{formatDate(new Date(creationDate))}</CreationDateText>
      <ProfilePicture
        source={
          providerProfilePicture
            ? { uri: providerProfilePicture }
            : NoProfilePictureImage
        }
      />
    </Container>
  );
};

export default ActivityHeader;
