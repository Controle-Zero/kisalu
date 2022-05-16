import React from "react";
import { FlatList } from "react-native";
import { Container } from "./style";
import { NavigableFC } from "./types";
import Spacer from "../../../components/layout/Spacer";
import Prestador from "../../../models/Provedor";
import ProviderCard from "../../../components/Cards/ProviderCard";
import ListEmpty from "../../../components/ListEmpty";

const ProvidersList: NavigableFC = ({ route, navigation }) => {
  const { prestadores, id } = route.params.category;

  const navigateToProviderProfile = (provider: Prestador) => {
    navigation.navigate("ProviderProfile", {
      provider,
      categoryId: id,
    });
  };

  return (
    <Container>
      <FlatList
        data={prestadores}
        numColumns={2}
        keyExtractor={(provider) => provider?.id as string}
        ListHeaderComponent={() => <Spacer height={30} />}
        ItemSeparatorComponent={() => <Spacer height={30} />}
        ListFooterComponent={() => <Spacer height={10} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListEmptyComponent={() => (
          <ListEmpty text="Não existem prestadores disponíveis" />
        )}
        renderItem={({ item }) => (
          <ProviderCard provider={item} onPress={navigateToProviderProfile} />
        )}
      />
    </Container>
  );
};

export default ProvidersList;
