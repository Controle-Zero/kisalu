import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../styles/appTheme";

const ErrorText: React.FC = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: Colors.danger,
    fontSize: 12,
  },
});
