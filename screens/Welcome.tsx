import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Fonts from "../styles/fontsConstants";
import FormButton from "../components/buttons/FormButton";
import welcomeimage from "../assets/images/logooficial.png";
import Spacer from "../components/layout/Spacer";
export default function Welcome() {
  const onLogin = () => {
    console.log("Sergio");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.direction} source={welcomeimage} />
      <Text style={styles.welcome}>BEM VINDO</Text>
      <Text style={styles.introdu}>
        Uma app que te ajuda a encontrar e providenciar serviços
      </Text>
      <View style={styles.alinharbotao}>
        <FormButton text="Login" color="#383D3B" onPress={onLogin} />
        <Spacer width={10} height={0} />
        <FormButton text="Cadastro" color="#60DBDA" onPress={onLogin} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  alinharbotao: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btntxtLogin: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  btntxtCadastro: {
    color: "#000000",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  direction: {
    paddingTop: 200,
    height: 200,
    width: 200,
  },
  welcome: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
  },
  introdu: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 15,
    fontFamily: Fonts.Poppins_400Regular,
  },
});
