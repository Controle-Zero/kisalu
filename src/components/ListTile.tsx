import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Avatar } from "react-native-paper";
import { Colors, TextStyles } from "../styles/appTheme";
import Spacer from "./layout/Spacer";

interface Props {
  icon: string;
  text: string;
  label: string;
  iconColor?: string;
  iconBackgroundColor?: string;
}

const ListTile: FC<Props> = ({
  icon,
  text,
  iconBackgroundColor,
  iconColor,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Avatar.Icon
        color={iconColor}
        icon={icon}
        size={35}
        style={{ backgroundColor: iconBackgroundColor }}
      />
      <Spacer width={14} />
      <View>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={2} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.lightGrey,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    color: Colors.greyText,
  },
  label: {
    fontSize: 14,
    fontFamily: TextStyles.label.font,
    fontWeight: "bold",
  },
});
