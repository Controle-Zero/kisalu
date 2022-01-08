import Atividade from "./Atividade";
export default interface Cliente {
  id?: string;
  bi: string;
  nome: string;
  dataNasc: string;
  morada: string;
  email: string;
  telefone: string;
  password: string;
  atividades?: Atividade[];
}
