import Categoria from "./Categoria";
import { Morada } from "./Morada";

export default interface Prestador {
  nome: string;
  bi: string;
  categorias: Categoria[];
  morada: Morada;
  dataNasc: string;
  descricao: string;
  email: string;
  estado: string;
  iban: string;
  id: string;
  rate: number;
  telefone: string;
  imageUrl: string;
  verificado: boolean;
  criadoEm: string;
}
