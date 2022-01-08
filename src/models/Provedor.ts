import Cliente from "./Cliente";
import Atividade from "./Atividade";
export default interface Prestador extends Cliente {
  estado?: "Disponível" | "Ocupado";
  iban: string;
  classificacao?: number;
  numAvaliacoes?: number;
  descricao: string;
  idCategorias?: string[];
}
