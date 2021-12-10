import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CadastroProvedor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro Provedor</Text>
    </View>
  );
};

export default CadastroProvedor;

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
