import Prestador from "./Provedor";

export default interface Categoria {
  categoriaId: string;
  titulo: string;
  imageUrl: string;
  prestadores: Prestador[];
}
