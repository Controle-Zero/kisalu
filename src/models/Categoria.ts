import Prestador from "./Provedor";

export default interface Categoria {
  id: string;
  titulo: string;
  imageUrl: string;
  prestadores: Prestador[];
}
