import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CadastroCliente = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro Cliente</Text>
    </View>
  );
};

export default CadastroCliente;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
});
