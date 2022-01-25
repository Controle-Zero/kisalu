import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Colors, TextStyles } from "../../styles/appTheme";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  icon: string;
  iconColor: string;
}

const IconTextButton: React.FC<Props> = ({
  onPress,
  text,
  icon,
  iconColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{ color: "#f0f0f0" }}
    >
      <Avatar.Icon
        icon={icon}
        size={50}
        style={styles.icon}
        color={iconColor}
      />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  text: {
    marginLeft: 15,
    color: Colors.black,
    fontSize: 17,
    fontFamily: TextStyles.linkText.font,
  },
  icon: {
    backgroundColor: Colors.primary,
  },
});

export default IconTextButton;
