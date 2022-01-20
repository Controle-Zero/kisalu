import { View, Text } from "react-native";
import React from "react";
import { HomeNavProps } from "../../routes/types/Cliente/HomeParamsList";
import { FlatList } from "react-native-gesture-handler";
import { List } from "react-native-paper";

const ProvidersList: (
  navigationProps: HomeNavProps<"ProvidersList">
) => JSX.Element = ({ route }) => {
  const { prestadores } = route.params.category;
  console.log(prestadores);
  return (
    <View style={{ flex: 1 }}>
      <Text>Possui {prestadores.length}</Text>
      <FlatList
        renderItem={({ item }) => <List.Item title={item.prestador.nome} />}
        data={prestadores}
      />
    </View>
  );
};

export default ProvidersList;
