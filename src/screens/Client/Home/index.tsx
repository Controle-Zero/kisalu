import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { Container, Input, ListHeading } from "./style";
import { NavigableFC } from "./types";
import Categoria from "../../../models/Categoria";
import * as CategoriesAPI from "../../../API/category";
import LoadingScreen from "../../other/LoadingScreen";
import Spacer from "../../../components/layout/Spacer";
import CategoryCard from "../../../components/Cards/CategoryCard";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";

const Home: NavigableFC = ({ navigation }) => {
  const { token } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isLoading,
    isFetching,
    isIdle,
    data: filteredCategories,
  } = useQuery(["filteredCategories", searchQuery], getActivities, {
    enabled: searchQuery != undefined,
  });
  const { COLORS } = useContext(ThemeContext);

  async function getActivities() {
    const categories = await CategoriesAPI.getCategories(token);
    const filteredCategories = CategoriesAPI.getFilteredCategories(
      searchQuery,
      categories
    );

    return filteredCategories;
  }

  function handleCategoryNavigation(category: Categoria) {
    navigation.navigate("ProvidersList", { category });
  }

  return (
    <Container>
      <Input
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoComplete={false}
        mode="outlined"
        placeholder="Pesquisar serviços..."
        left={<TextInput.Icon name="briefcase-search" color="#757575" />}
        activeOutlineColor={COLORS.PRIMARY}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={filteredCategories}
          numColumns={2}
          keyExtractor={(category) => category.id || "1"}
          ItemSeparatorComponent={() => <Spacer height={30} />}
          ListFooterComponent={() => <Spacer height={10} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ListHeaderComponent={() => (
            <ListHeading>Categorias de Serviços</ListHeading>
          )}
          renderItem={({ item }) => (
            <CategoryCard
              category={item}
              onPress={() => handleCategoryNavigation(item)}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
