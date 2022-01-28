import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {}

const ActivityCard: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Content>
        <LeftContent />
        <RightContent />
      </Content>
      <Actions>
        <Button text="Cancelar" width="40%" onPress={() => {}} />
        <Spacer width={10} />
        <Button text="Ver mais" width="40%" onPress={() => {}} />
      </Actions>
    </View>
  );
};

const Content: FC = ({ children }) => (
  <View style={styles.contentContainer}>{children}</View>
);

const LeftContent: FC = () => (
  <View style={styles.content}>
    <Text style={[styles.text, styles.textPrimaryColor]}>Categoria</Text>
    <Text style={styles.text}>Nome do Provedor</Text>
    <Text style={styles.text}>Localização</Text>
  </View>
);

const RightContent: FC = () => (
  <View style={[styles.content, { alignItems: "flex-end" }]}>
    <Text style={styles.text}>
      Estado: <Text style={styles.textPrimaryColor}>Ativa</Text>
    </Text>
    <Text style={styles.text}>xx,xx Kzs/h</Text>
    <Text style={styles.text}>Data</Text>
  </View>
);

const Actions: FC = ({ children }) => (
  <View style={styles.actionsContainer}>{children}</View>
);

export default ActivityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 26,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 14,
    // paddingHorizontal: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    width: "50%",
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
});
