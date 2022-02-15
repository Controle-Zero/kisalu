export default interface Atividade {
  Categoria: {
    id: string;
    titulo: string;
  };
  Prestador: {
    bi: string;
    email: string;
    iban: string;
    id: string;
    nome: string;
    rate: number;
    telefone: string;
  };
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  idCliente?: string;
  numRef: number;
  estado: string;
}
