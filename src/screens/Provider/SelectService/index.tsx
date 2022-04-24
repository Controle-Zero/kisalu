import { Alert, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import * as ProviderAPI from "../../../API/provider";
import * as CategoryAPI from "../../../API/category";
import { NavigableFC, RadioButtonProps } from "./type";
import {
  Container,
  Heading1,
  Heading2,
  NoServicesContainer,
  NoServicesText,
  Wrapper,
} from "./style";
import Button from "../../../components/Button";
import Spacer from "../../../components/layout/Spacer";
import RadioForm from "react-native-simple-radio-button";
import { ThemeContext } from "styled-components";

const SelectService: NavigableFC = ({ navigation }) => {
  const { token, user } = useAuth();
  const [radioItems, setRadioItems] = useState<RadioButtonProps[]>([]);
  const { COLORS } = useContext(ThemeContext);
  const [checkedValue, setCheckedValue] = useState("");

  const handleSelectCategory = async () => {
    if (!checkedValue) {
      Alert.alert("Erro", "Selecione uma categoria");
      return;
    }

    await ProviderAPI.updateProviderCategories([checkedValue], token);
    Alert.alert("Sucesso", "Categoria adicionada no seu perfil");
    navigation.navigate("ProfileScreen");
  };

  const fetchData = async () => {
    const data = await CategoryAPI.getCategories(token);
    const radioProps = data
      .filter(
        (category) =>
          !category.prestadores.some((prestador) => prestador.id === user?.id)
      )
      .sort((categoryA, categoryB) =>
        categoryA.titulo.localeCompare(categoryB.titulo)
      )
      .map(
        ({ id, titulo }) => ({ label: titulo, value: id } as RadioButtonProps)
      );
    setRadioItems(radioProps);
    setCheckedValue(radioProps[0].value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Heading1>Adicionar um novo serviço</Heading1>
      <Heading2>
        Clique na categoria que na qual tens competência para que possas ser
        encontrado
      </Heading2>
      <Wrapper>
        {radioItems.length == 0 ? (
          <NoServicesContainer>
            <NoServicesText>Não existem serviços disponíveis</NoServicesText>
          </NoServicesContainer>
        ) : (
          <>
            <Button
              onPress={handleSelectCategory}
              text="Confirmar"
              width="50%"
            />
            <Spacer height={20} />
            <ScrollView style={{ height: "65%" }}>
              <RadioForm
                buttonColor={COLORS.PRIMARY}
                radio_props={radioItems}
                initial={0}
                onPress={(value) => setCheckedValue(value)}
              />
            </ScrollView>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default SelectService;
