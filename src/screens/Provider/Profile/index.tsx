import React, { Fragment, useContext } from "react";
import { Text, FlatList, Alert, AlertButton } from "react-native";
import { ThemeContext } from "styled-components/native";
import { Chip } from 'react-native-paper'
import {
  CenteredText,
  Container,
  FloatingActionButton,
  Heading2,
  RatingBar,
  RatingContainer,
  StarImage,
  Wrapper,
} from "./style";
import { buildProfileData } from "./fields";
import { NavigableFC } from "./type";
import useAuth from "../../../hooks/useAuth";
import ProfileHeader from "../../../components/ProfileHeader";
import Provedor from "../../../models/Provedor";
import Spacer from "../../../components/layout/Spacer";
import ListTile from "../../../components/ListTile";

const Profile: NavigableFC = ({ navigation }) => {
  const { signOut, user } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  const { nome, descricao, rate, imageUrl, categorias } = user as Provedor;
  const profileData = buildProfileData(user as Provedor);

  // TODO: Change this to a local asset
  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorned =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
  const ratingValues = [1, 2, 3, 4, 5];

  const handleSignOut = () => {
    signOut();
  };

  const removeCategoryAction = (item) => {
    // TODO: Call from API the DELETE category method
    console.log(item);
  }

  const handleRemoveCategory = (item) => {
    const deleteButton: AlertButton = {
      onPress: () => removeCategoryAction(item),
      style: "destructive",
      text: "Remover"
    };
    const cancelButton: AlertButton = {
      text: "Cancelar",
      style: "cancel",
    };
    Alert.alert("Remover categoria", `Tem a certeza que pretende remover a categoria ${"Lorem"} ?`, [
      cancelButton, deleteButton
    ],
      {
        cancelable: true,
      })
  }

  const floatingActionButtonClick = () => {
    navigation.navigate("SelectServiceScreen");
  };


  return (
    <>
      <Container>
        <ProfileHeader name={nome} profilePicture={imageUrl} onLogout={handleSignOut} />
        <Wrapper>
          <Heading2>Sobre Mim</Heading2>
          <Spacer height={10} />
          <Text>{descricao}</Text>
          <Heading2>Informações Detalhadas</Heading2>
          <Spacer height={10} />
          {profileData.map(({ icon, label, text }, index) => (
            <Fragment key={index}>
              <ListTile
                label={label}
                icon={icon}
                text={text as string}
                iconBackgroundColor={COLORS.LIGHT_PRIMARY}
                iconColor={COLORS.SECONDARY}
              />
              <Spacer height={10} />
            </Fragment>
          ))}
          <Heading2>Serviços a Prestar</Heading2>
          <FlatList horizontal data={categorias} renderItem={({ item }) => (
            <Chip onClose={() => handleRemoveCategory(item)} >Example</Chip>
          )} ListEmptyComponent={() => (
            <CenteredText>Sem serviços</CenteredText>
          )}
            ItemSeparatorComponent={() => <Spacer width={10} />}
            ListHeaderComponent={() => <Spacer width={10} />}
            ListFooterComponent={() => <Spacer width={10} />}
            style={{
              paddingVertical: 10,
            }}
          />

          <Heading2>Classificação</Heading2>
          <RatingContainer>
            <Spacer height={5} />
            {!rate || rate === 0 ? (
              <Text>Sem Classificação</Text>
            ) : (
              <RatingBar>
                {ratingValues.map((item, index) => (
                  <StarImage
                    key={index}
                    source={
                      item <= rate
                        ? { uri: starImgFilled }
                        : { uri: starImgCorned }
                    }
                  />
                ))}
              </RatingBar>
            )}
          </RatingContainer>
          <Spacer height={20} />
        </Wrapper>
      </Container>
      <FloatingActionButton icon="plus" onPress={floatingActionButtonClick} />
    </>
  );
};

export default Profile;
