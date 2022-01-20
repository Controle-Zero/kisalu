import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { TextInput, FAB } from "react-native-paper";
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

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activities, setActivities] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filteredActivities = fakeData.filter((activity) => {
        if (!searchQuery) return activity;
        else if (
          activity.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
          return activity;
      });
      setActivities(filteredActivities);
      setLoading(false);
    }, 800);
  }, [searchQuery]);

  function handleAddActivity() {
    console.log("FAB clicked");
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
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={activities}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}

      <FAB icon="plus" style={style.fab} onPress={handleAddActivity} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: "5%",
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});

export default Home;
