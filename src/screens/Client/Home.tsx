import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { TextInput, FAB } from "react-native-paper";
import CategoryCard from "../../components/CategoryCard";
import Spacer from "../../components/layout/Spacer";
import { initConnection } from "../../config/webSocket";
import useAuth from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";
import Prestador from "../../models/Provedor";
import { HomeNavProps } from "../../routes/types/Cliente/HomeParamsList";
import { retornarCategorias } from "../../services/categoria.services";
import { Colors } from "../../styles/appTheme";
import LoadingScreen from "../LoadingScreen";

const fakeData = [
  {
    title: "rafael",
    clientName: "Lorem",
    location: "Home",
    price: 1000,
    dateAdded: Date.now(),
  },
  {
    title: "roberto",
    clientName: "Lorem",
    location: "Home",
    price: 1000,
    dateAdded: Date.now(),
  },
  {
    title: "reginaldo",
    clientName: "Lorem",
    location: "Home",
    price: 1000,
    dateAdded: Date.now(),
  },
  {
    title: "Lorem",
    clientName: "Lorem",
    location: "Home",
    price: 1000,
    dateAdded: Date.now(),
  },
  {
    title: "Ipsum",
    clientName: "Lorem",
    location: "Home",
    price: 1000,
    dateAdded: Date.now(),
  },
];

interface Data {
  title: string;
  clientName: string;
  location: string;
  price: number;
  dateAdded: number;
}

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
              onPress={() =>
                navigation.navigate("ProvidersList", {
                  category: item,
                })
              }
            />
          )}
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
