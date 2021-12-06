import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import loginImage from "../assets/images/login-image.png";

const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={loginImage} />
      <View style={styles.headerContainer}>
        <Text style={styles.heading1}>Bem-vindo de volta</Text>
        <Text style={styles.heading2}>Sentimos a sua falta</Text>
      </View>
      <View>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Button title="Login" onPress={() => console.log("Login")} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraph}>Não possui uma conta?</Text>
        <Text style={styles.textButton}>Cadastre Já</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 55,
    paddingHorizontal: 25,
  },
  image: {
    alignSelf: "center",
  },
  headerContainer: {
    marginVertical: 35,
  },
  heading1: {
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 30,
  },
  heading2: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 30,
    color: "#303030",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#0078CF",
    textDecorationLine: "underline",
  },
});
