import { Morada } from "./Morada";
export default interface Cliente {
  id: string;
  bi: string;
  nome: string;
  dataNasc: string;
  morada: Morada;
  email: string;
  telefone: string;
  password: string;
  imageUrl: string;
  criadoEm: Date;
}
