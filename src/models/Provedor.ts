import Cliente from "./Cliente";
import Atividade from "./Atividade";
export default interface Prestador extends Cliente {
  estado: string;
  iban: string;
  classificacao: number;
  numAvaliacoes: number;
  rate: number;
  descricao: string;
  atividades?: Atividade[];
  idCategorias?: string[];
}
