import Prestador from "../../models/Provedor";

export type LeadingIconStyleProps = {
  backgroundColor: string;
};

export type Props = {
  onPress: (provider: Prestador, categoryId: string) => void;
  provider: Prestador;
  categoryID: string;
  backgroundColor: string;
};
