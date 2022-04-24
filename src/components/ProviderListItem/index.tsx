import React, { FC } from "react";
import { List, TouchableRipple } from "react-native-paper";
import { LeadingIcon } from "./style";
import { Props } from "./type";

const ProviderListItem: FC<Props> = ({
  categoryID,
  onPress,
  provider,
  backgroundColor,
}) => {
  const { nome } = provider;
  return (
    <TouchableRipple onPress={() => onPress(provider, categoryID)}>
      <List.Item
        left={() => (
          <LeadingIcon icon="account" backgroundColor={backgroundColor} />
        )}
        title={nome}
      />
    </TouchableRipple>
  );
};

export default ProviderListItem;
