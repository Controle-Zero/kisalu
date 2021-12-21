import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AuthContext from "../context/auth";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  //TODO: Ver se posso meter mais alguma coisa
  function onSignOut() {
    signOut();
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Dashboard</Text>
      <Button title="Sign out" onPress={onSignOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});
