import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {
  title?: string;
}

const AppBar: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.appBar}>
      <Avatar.Image
        size={45}
        source={require("../../assets/images/no-profile.png")}
      />
      <Text style={styles.titleSection}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingLeft: 20,
    marginTop: "7%",
    height: 80,
    alignItems: "center",
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  titleSection: {
    marginLeft: 20,
    fontFamily: TextStyles.paragraph.font,
    fontSize: TextStyles.paragraph.fontSize,
    fontWeight: "bold",
  },
});

export default AppBar;
