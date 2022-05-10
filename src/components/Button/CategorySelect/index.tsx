import React, { FC, useState } from "react";
import { Props } from "./types";
import { ButtonContainer, ButtonText } from "./style";

const CategorySelect: FC<Props> = ({ title, onPress }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <ButtonContainer
      android_ripple={{ color: "#f0f0f0" }}
      isSelected={isSelected}
      onPress={() => {
        setSelected(true);
        onPress(title);
      }}
      disabled={isSelected}
    >
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CategorySelect;
