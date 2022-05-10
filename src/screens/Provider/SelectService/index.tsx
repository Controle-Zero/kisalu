import React, { useContext, useState } from "react";
import { Text, FlatList, Alert } from "react-native";
import { useQuery } from "react-query";
import { NavigableFC } from "./type";
import useAuth from "../../../hooks/useAuth";
import * as CategoryAPI from "../../../API/category";
import * as ProviderAPI from "../../../API/provider";
import Spacer from "../../../components/layout/Spacer";
import LoadingScreen from "../../other/LoadingScreen";
import CategorySelect from "../../../components/Button/CategorySelect";
import Categoria from "../../../models/Categoria";
import {
  Container,
  Heading1,
  Heading2,
  NoServicesContainer,
  NoServicesText,
  Wrapper,
} from "./style";

const SelectService: NavigableFC = ({ navigation }) => {
  const { token, user } = useAuth();
  const [isLoadingSubmission, setLoadingSubmission] = useState(false);
  const { data: categories, isLoading } = useQuery("categories", getCategories);

  async function handleSelectCategory(selectedCategoryId: string) {
    setLoadingSubmission(true);
    try {
      await ProviderAPI.updateProviderCategories([selectedCategoryId], token);
      Alert.alert("Sucesso", "Categoria adicionada no seu perfil");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro na seleção de categoria");
    } finally {
      navigation.navigate("ProfileScreen");
    }
  }

  async function getCategories() {
    let categories: Categoria[] = [];
    try {
      categories = await CategoryAPI.getCategories(token);
    } catch (error) {
      console.error(error);
    }
    return categories
      .filter(
        (category) =>
          !category.prestadores.some((prestador) => prestador.id === user?.id)
      )
      .sort((categoryA, categoryB) =>
        categoryA.titulo.localeCompare(categoryB.titulo)
      );
  }

  if (isLoading || isLoadingSubmission) {
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
                id={item.id}
              />
            )}
            keyExtractor={(item) => item.id}
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
