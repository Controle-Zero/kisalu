export default interface Atividade {
  idAtividade: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  idPrestador: string;
  idCliente: string;
  idCategoria: string;
}
