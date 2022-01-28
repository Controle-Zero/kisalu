import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { TextInput } from "react-native-paper";

import CategoryCard from "../../components/CategoryCard";
import Spacer from "../../components/layout/Spacer";
import Categoria from "../../models/Categoria";
import { HomeNavProps } from "../../routes/types/Cliente/HomeParamsList";
import { retornarCategorias } from "../../services/categoria.services";
import { Colors } from "../../styles/appTheme";
import LoadingScreen from "../LoadingScreen";

const Home: (navProps: HomeNavProps<"HomeScreen">) => JSX.Element = ({
  navigation,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    setLoading(true);
    async function getActivities() {
      const response = (await retornarCategorias()).categorias;
      const filteredCategories = response.filter((category) => {
        if (!searchQuery) return category;
        else if (
          category.titulo
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
          return category;
      });
      setCategories(filteredCategories);
      setLoading(false);
    }
    getActivities();
  }, [searchQuery]);

  function handleCategoryNavigation(category: Categoria) {
    navigation.navigate("ProvidersList", {
      category,
    });
  }

  return (
    <View style={style.container}>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoComplete={false}
        mode="outlined"
        placeholder="Pesquisar serviços..."
        left={<TextInput.Icon name="briefcase-search" color="#757575" />}
        activeOutlineColor={Colors.primary}
        style={style.input}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryCard
              category={item}
              onPress={() => handleCategoryNavigation(item)}
            />
          )}
          keyExtractor={(category) => category.id}
          ItemSeparatorComponent={() => <Spacer height={20} />}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  container: {
    padding: "5%",
    flex: 1,
  },
});

export default Home;
