import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HomeNavProps } from "../../routes/types/Cliente/HomeParamsList";
import { FlatList } from "react-native-gesture-handler";
import { Avatar, List, TouchableRipple } from "react-native-paper";
import Spacer from "../../components/layout/Spacer";
import { Colors } from "../../styles/appTheme";

const ProvidersList: (
  navigationProps: HomeNavProps<"ProvidersList">
) => JSX.Element = ({ route, navigation }) => {
  const { prestadores } = route.params.category;

  function getRandomColor() {
    let randomColor = "";
    while (randomColor.length !== 6) {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
    }
    return `#${randomColor}`;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        renderItem={({ item: { prestador } }) => (
          <TouchableRipple
            onPress={() =>
              navigation.navigate("ProviderProfile", { provider: prestador })
            }
          >
            <List.Item
              left={({}) => (
                <Avatar.Icon
                  size={50}
                  style={{
                    backgroundColor: getRandomColor(),
                    marginTop: 5,
                    marginRight: 10,
                  }}
                  icon="account"
                />
              )}
              title={prestador.nome}
              description={`Avaliação: ${prestador.rate}\nNº de Avaliações: ${prestador.numAvaliacoes}`}
            />
          </TouchableRipple>
        )}
        data={prestadores}
        ItemSeparatorComponent={() => <Spacer height={10} />}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ProvidersList;
