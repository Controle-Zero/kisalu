import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Avatar } from "react-native-paper";
import { TextStyles } from "../styles/appTheme";

interface Props {
  name: string;
}

const ProfileHeader: FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={70}
        source={require(`../assets/images/no-profile.png`)}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingLeft: 20,
  },
  text: {
    marginLeft: 33,
    fontSize: 18,
    fontFamily: TextStyles.heading1.fontMedium,
    fontWeight: "bold",
  },
});
