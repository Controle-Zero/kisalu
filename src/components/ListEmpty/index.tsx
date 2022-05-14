import React, { FC } from "react";
import { ListEmptyContainer, ListEmptyText } from "./style";
import { Props } from "./type";
import NoDataSVG from "../../assets/svg/NoDataSVG";

const ListEmpty: FC<Props> = ({ text }) => {
  return (
    <ListEmptyContainer>
      <NoDataSVG height={250} width="70%" />
      <ListEmptyText>{text}</ListEmptyText>
    </ListEmptyContainer>
  );
};

export default ListEmpty;
