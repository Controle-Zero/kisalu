import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";

import TextField from "../components/formInputs/TextField";
import FormButton from "../components/buttons/FormButton";
import Fonts from "../styles/fontsConstants";

import loginImage from "../assets/images/login-image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    console.log({ email, password });
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={loginImage as ImageSourcePropType} />
      <View style={styles.headerContainer}>
        <Text style={styles.heading1}>Bem-vindo de volta</Text>
        <Text style={styles.heading2}>Sentimos a sua falta</Text>
      </View>
      <View>
        <TextField
          label="Email"
          leftIcon={{ name: "email" }}
          fieldValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextField
          label="Password"
          leftIcon={{ name: "key" }}
          isSecret
          fieldValue={password}
          onChangeText={(text) => setPassword(text)}
        />
        <FormButton text="Login" color="#60DBDA" onPress={onLogin} />
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
    fontSize: 25,
    lineHeight: 30,
    fontFamily: Fonts.Poppins_600SemiBold,
  },
  heading2: {
    marginTop: 10,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: Fonts.Poppins_400Regular,
    color: "#303030",
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
    fontFamily: Fonts.Poppins_400Regular,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#0078CF",
    textDecorationLine: "underline",
    fontFamily: Fonts.Poppins_400Regular,
  },
});
