import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import Spacer from "../../../components/layout/Spacer";
import ListTile from "../../../components/ListTile";
import ProfileHeader from "../../../components/ProfileHeader";
import useAuth from "../../../hooks/useAuth";
import Cliente from "../../../models/Cliente";
import { buildProfileData } from "./fields";
import { Container, Heading2, Wrapper } from "./style";

const Profile = () => {
  const { signOut, user } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  const { nome, imageUrl } = user as Cliente;

  const spaceBetweenTiles = 10;
  const profileData = buildProfileData(user as Cliente);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <ProfileHeader
        name={nome}
        profilePicture={imageUrl}
        onLogout={handleSignOut}
      />
      <Wrapper>
        <Heading2>Informações Detalhadas</Heading2>
        {profileData.map(({ icon, label, text }, index) => (
          <Fragment key={index}>
            <ListTile
              label={label}
              icon={icon}
              text={text}
              iconBackgroundColor={COLORS.LIGHT_PRIMARY}
              iconColor={COLORS.SECONDARY}
            />
            <Spacer height={spaceBetweenTiles} />
          </Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Profile;
