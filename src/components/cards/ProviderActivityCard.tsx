import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors, TextStyles } from "../../styles/appTheme";
import Atividade from "../../models/Atividade";
import Cliente from "../../models/Cliente";
import { formatDate } from "../../utils/dateFormatter";
import Button from "../buttons/Button";
import TextButton from "../buttons/TextButton";
import Spacer from "../layout/Spacer";

interface Props {
  activity: Atividade;
}

const ProviderActivityCard: FC<Props> = ({ activity }) => {
  const {
    Categoria: { titulo },
    Cliente,
    descricao,
    dataCriado,
  } = activity;
  const { nome, morada } = Cliente as Cliente;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={[styles.text, styles.textPrimaryColor]}>{titulo}</Text>
        <Text style={styles.text}>{morada}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{nome}</Text>
        <Text style={styles.text}>{formatDate(new Date(dataCriado))}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.text]}>
          {descricao ? descricao : "Sem descrição"}
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button
          text="Aplicar"
          onPress={() => console.log("Apply")}
          width="40%"
        />
        <Spacer width={20} />
        <Button
          text="Rejeitar"
          color={Colors.danger}
          textColor={Colors.white}
          onPress={() => console.log("Ver mais")}
          width="40%"
        />
      </View>
    </View>
  );
};

export default ProviderActivityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 26,
    marginHorizontal: "2%",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  descriptionContainer: {
    backgroundColor: "rgba(196,196,196,0.2)",
    maxHeight: 100,
    padding: 10,
    height: 80,
    borderRadius: 20,
  },
  textPrimaryColor: {
    color: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: TextStyles.label.font,
    marginBottom: 10,
  },
  actionsContainer: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
});
