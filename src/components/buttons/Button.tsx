import React, { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Avatar } from "react-native-paper";

import { Colors, TextStyles } from "../../styles/appTheme";
import Spacer from "../layout/Spacer";

interface Props {
  text: string;
  isPrimaryColor?: boolean;
  width?: number | string;
  icon?: string;
  onPress: () => void;
}

const Button: FC<Props> = ({
  text,
  isPrimaryColor = true,
  width = "100%",
  icon,
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: isPrimaryColor ? Colors.primary : Colors.secondary,
      width,
      shadowColor: Colors.black,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: width == "100%" ? "auto" : "center",
    },
    text: {
      fontFamily: TextStyles.button.font,
      fontSize: TextStyles.button.fontSize,
      lineHeight: TextStyles.button.lineHeight,
      color: isPrimaryColor ? Colors.black : Colors.white,
      textAlign: "center",
    },
    icon: {
      backgroundColor: Colors.lightPrimary,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{ color: "#f0f0f0" }}
    >
      {icon && (
        <>
          <Avatar.Icon
            icon={icon}
            color={Colors.danger}
            style={styles.icon}
            size={35}
          />
          <Spacer width={10} />
        </>
      )}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
