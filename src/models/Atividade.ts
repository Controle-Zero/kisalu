import Cliente from "./Cliente";

export default interface Atividade {
  Categoria: {
    id: string;
    titulo: string;
  };
  Prestador?: {
    bi: string;
    email: string;
    iban: string;
    id: string;
    nome: string;
    rate: number;
    telefone: string;
  };
  Cliente?: Cliente;
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  descricao: string;
}
