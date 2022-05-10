import React, { useContext, useState } from "react";
import { Text, FlatList, Alert } from "react-native";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import * as CategoryAPI from "../../../API/category";
import * as ProviderAPI from "../../../API/provider";
import { NavigableFC } from "./type";
import {
  Container,
  Heading1,
  Heading2,
  NoServicesContainer,
  NoServicesText,
  Wrapper,
} from "./style";
import Spacer from "../../../components/layout/Spacer";
import { ThemeContext } from "styled-components";
import LoadingScreen from "../../other/LoadingScreen";
import CategorySelect from "../../../components/Button/CategorySelect";

const SelectService: NavigableFC = ({ navigation }) => {
  const { token, user } = useAuth();
  const { COLORS } = useContext(ThemeContext);
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("categories", getCategories);

  async function handleSelectCategory(selectedCategory: string) {
    console.log(selectedCategory);
    // await ProviderAPI.updateProviderCategories([selectedCategory], token);
    // Alert.alert("Sucesso", "Categoria adicionada no seu perfil");
    // navigation.navigate("ProfileScreen");
  }

  async function getCategories() {
    const categories = await CategoryAPI.getCategories(token);

    return categories
      .filter(
        (category) =>
          !category.prestadores.some((prestador) => prestador.id === user?.id)
      )
      .sort((categoryA, categoryB) =>
        categoryA.titulo.localeCompare(categoryB.titulo)
      );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Heading1>Adicionar um novo serviço</Heading1>
      <Heading2>
        Clique na categoria que na qual tens competência para que possas ser
        encontrado
      </Heading2>
      <Wrapper>
        {categories?.length == 0 ? (
          <NoServicesContainer>
            <NoServicesText>Não existem serviços disponíveis</NoServicesText>
          </NoServicesContainer>
        ) : (
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CategorySelect
                title={item.titulo}
                onPress={handleSelectCategory}
              />
            )}
            ItemSeparatorComponent={() => <Spacer height={35} />}
            ListHeaderComponent={() => <Spacer height={15} />}
            ListFooterComponent={() => <Spacer height={15} />}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default SelectService;
