import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton, TextInput } from "react-native-paper";
import { Colors, TextStyles } from "../../styles/appTheme";
import { retornarCategorias } from "../../services/categoria.services";
import Categoria from "../../models/Categoria";

const SelectService: FC = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [checked, setChecked] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await retornarCategorias();
      console.log(data);
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Adicionar um novo serviço</Text>
      <Text style={styles.heading2}>
        Clique na categoria que na qual tens competência para que possas ser
        encontrado
      </Text>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoComplete={false}
        mode="flat"
        placeholder="Pesquisar serviços..."
        left={<TextInput.Icon name="briefcase-search" color="#757575" />}
        activeUnderlineColor={Colors.primary}
        style={styles.input}
      />
      <View style={styles.innerContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading1: {
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: 20,
    textAlign: "center",
  },
  heading2: {
    fontFamily: TextStyles.heading2.font,
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: "5%",
    textAlign: "center",
    color: Colors.greyText,
  },
  container: { paddingTop: 40, backgroundColor: Colors.lightPrimary },
  innerContainer: {
    minHeight: "80%",
    marginTop: 10,
    paddingVertical: 40,
    paddingHorizontal: 37,
    backgroundColor: Colors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  input: {
    marginBottom: 10,
    backgroundColor: Colors.lightPrimary,
    marginHorizontal: "10%",
  },
});

export default SelectService;
