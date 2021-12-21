import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { Colors } from "../styles/appTheme";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingScreen;
