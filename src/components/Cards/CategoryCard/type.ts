import Categoria from "../../../models/Categoria";

export type CategoryCardProps = {
  category: Categoria;
  onPress: (category: Categoria) => void;
};
