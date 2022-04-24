import React from "react";
import { FlatList } from "react-native";
import { Container } from "./style";
import { NavigableFC } from "./types";
import Spacer from "../../../components/layout/Spacer";
import ProviderListItem from "../../../components/ProviderListItem";
import Prestador from "../../../models/Provedor";

const ProvidersList: NavigableFC = ({ route, navigation }) => {
  const { prestadores, id } = route.params.category;

  const getRandomColor = () => {
    let randomColor = "";
    while (randomColor.length !== 6)
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  const navigateToProviderProfile = (
    provider: Prestador,
    categoryId: string
  ) => {
    navigation.navigate("ProviderProfile", {
      provider,
      categoryId,
    });
  };

  return (
    <Container>
      <FlatList
        data={prestadores}
        ItemSeparatorComponent={() => <Spacer height={10} />}
        keyExtractor={({ id }) => id as string}
        renderItem={({ item: provedor }) => (
          <ProviderListItem
            provider={provedor}
            categoryID={id}
            backgroundColor={getRandomColor()}
            onPress={navigateToProviderProfile}
          />
        )}
      />
    </Container>
  );
};

export default ProvidersList;
