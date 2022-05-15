import Prestador from "../../../models/Provedor";

export type Props = {
  provider: Prestador;
  onPress: (provider: Prestador) => void;
};
