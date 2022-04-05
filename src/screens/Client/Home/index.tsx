import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { Container, Input } from "./style";
import { NavigableFC } from "./types";
import Categoria from "../../../models/Categoria";
import { getCategories, getFilteredCategories } from "../../../API/category";
import LoadingScreen from "../../other/LoadingScreen";
import Spacer from "../../../components/layout/Spacer";
import CategoryCard from "../../../components/Cards/CategoryCard";

const Home: NavigableFC = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<Categoria[]>([]);
  const { COLORS } = useContext(ThemeContext);

  // TODO: Change to React Query
  useEffect(() => {
    setLoading(true);
    async function getActivities() {
      const categories = await getCategories();
      setFilteredCategories(
        getFilteredCategories(searchQuery, categories) as Categoria[]
      );
      setLoading(false);
    }
    getActivities();
  }, [searchQuery]);

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
          keyExtractor={(category) => category.id}
          ItemSeparatorComponent={() => <Spacer height={20} />}
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
