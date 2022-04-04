import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { Container, Label, Text } from "./style";
import { Props } from "./types";
import Spacer from "../layout/Spacer";

const ListTile: React.FC<Props> = ({
  icon,
  label,
  text,
  iconBackgroundColor,
  iconColor,
}) => {
  return (
    <Container>
      <Avatar.Icon
        color={iconColor}
        icon={icon}
        size={35}
        style={{ backgroundColor: iconBackgroundColor }}
      />
      <Spacer width={14} />
      <View>
        <Label>{label}</Label>
        <Spacer height={2} />
        <Text>{text}</Text>
      </View>
    </Container>
  );
};

export default ListTile;
