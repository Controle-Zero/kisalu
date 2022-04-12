import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, Heading2, Wrapper } from "./style";
import { buildProfileData } from "./fields";
import useAuth from "../../../hooks/useAuth";
import ProfileHeader from "../../../components/ProfileHeader";
import Cliente from "../../../models/Cliente";
import ListTile from "../../../components/ListTile";
import Button from "../../../components/Button";
import Spacer from "../../../components/layout/Spacer";

const Profile = () => {
  const { signOut, user } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  const { nome } = user as Cliente;

  const spaceBetweenTiles = 10;
  const profileData = buildProfileData(user as Cliente);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <ProfileHeader name={nome} />
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
        <Button onPress={handleSignOut} text="Sair" icon="logout" width="60%" />
      </Wrapper>
    </Container>
  );
};

export default Profile;
