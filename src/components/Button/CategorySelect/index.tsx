import React, { FC, useState } from "react";
import { Props } from "./types";
import { ButtonContainer, ButtonText } from "./style";

const CategorySelect: FC<Props> = ({ title, onPress, id }) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <ButtonContainer
      android_ripple={{ color: "#f0f0f0" }}
      isSelected={isSelected}
      onPress={() => {
        setSelected(true);
        onPress(id);
      }}
      disabled={isSelected}
    >
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CategorySelect;
