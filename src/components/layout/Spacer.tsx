import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  width?: number;
  height?: number;
}

const Spacer: React.FC<Props> = ({ width = 0, height = 0 }) => {
  const styles = StyleSheet.create({
    space: {
      width,
      height,
    },
  });
  return <View style={styles.space}></View>;
};

export default Spacer;
