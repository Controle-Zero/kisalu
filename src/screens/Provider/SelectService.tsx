import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import RadioForm from "react-native-simple-radio-button";

import { Colors, TextStyles } from "../../styles/appTheme";
import * as CategoriaServices from "../../services/categoria.services";
import Button from "../../components/buttons/Button";
import Spacer from "../../components/layout/Spacer";
import useAuth from "../../contexts/AuthContext";
import * as ProvedorServices from "../../services/provedor.services";
import { ProfileNavProps } from "../../routes/types/Provider/ProfileParamsList";

// Typing of the radio button item
type RadioButtonProps = {
  label: string;
  value: string;
};

const SelectService: (
  navProps: ProfileNavProps<"SelectServiceScreen">
) => JSX.Element = ({ navigation }) => {
  const { token, user } = useAuth();
  // The list of radio button itens
  const [radioButtonItems, setRadioButtonItems] = useState<RadioButtonProps[]>(
    []
  );
  // The selected radio button item state
  const [checkedValue, setCheckedValue] = useState("");

  // Handles when the user confirms its category
  const handleSelectCategory = async () => {
    if (!checkedValue) {
      alert("Selecione uma categoria");
      return;
    }
    console.log(checkedValue);

    await ProvedorServices.adicionarCategoriasProvedor([checkedValue], token);
    alert("Categoria adicionada no seu perfil");
    navigation.navigate("ProfileScreen");
  };

  useEffect(() => {
    const fetchData = async () => {
      // Get all of the categories
      const data = await CategoriaServices.retornarCategorias();
      const radioProps: RadioButtonProps[] = [];
      // Filter only the available categories, sorts them and adds the categories to the radio button list
      data
        .filter(
          (category) =>
            !category.prestadores.some(
              ({ prestador }: any) => prestador.id === user?.id
            )
        )
        .sort((categoryA, categoryB) =>
          categoryA.titulo.localeCompare(categoryB.titulo)
        )
        .forEach(({ id, titulo }) =>
          radioProps.push({ label: titulo, value: id })
        );
      setRadioButtonItems(radioProps);
      setCheckedValue(radioProps[0].value);
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
      <View style={styles.innerContainer}>
        <Button onPress={handleSelectCategory} text="Confirmar" width="50%" />
        <Spacer height={20} />
        <ScrollView style={{ height: "65%" }}>
          <RadioForm
            buttonColor={Colors.primary}
            radio_props={radioButtonItems}
            initial={0}
            onPress={(value) => {
              setCheckedValue(value);
            }}
          />
        </ScrollView>
      </View>
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
    marginTop: 10,
    paddingVertical: 40,
    paddingHorizontal: 37,
    backgroundColor: Colors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
});

export default SelectService;
