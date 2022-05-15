import Categoria from "../models/Categoria";
import Cliente from "../models/Cliente";
import Prestador from "../models/Provedor";

const PRODUCTION_URL = "https://uservices-api-teste.herokuapp.com";
const DEV_URL = "http://192.168.1.24:8080";

export default {
  /**
   * The API base url. This is the production API
   */
  baseUrl: PRODUCTION_URL,
};

export type NormalResponse = {
  message: string;
  success?: boolean;
};

export type CategoriesResponse = {
  categorias: Categoria[];
};

export type ClientAuthenticationResponse = {
  generatedToken: string;
};

export type ClientRequest = {
  bi: string;
  nome: string;
  dataNasc: string;
  morada: string;
  email: string;
  telefone: string;
  password: string;
  imageUrl: string;
};

export type ClientResponse = {
  cliente: Cliente;
  success: boolean;
  message?: string;
};

export type ProviderAuthenticationResponse = {
  generatedToken: string;
};

export type ProviderRequest = {
  bi: string;
  nome: string;
  dataNasc: string;
  morada: string;
  email: string;
  telefone: string;
  password: string;
  iban: string;
  descricao: string;
  imageUrl: string;
};

export type ProviderResponse = {
  prestador: Prestador;
  success: boolean;
  message?: string;
};

export type ActivitiesResponseClient = {
  Prestador: {
    bi: string;
    nome: string;
    rate: number;
    email: string;
    telefone: string;
    iban: string;
    id: string;
  };
  Categoria: {
    titulo: string;
    id: string;
  };
  dataCriado: string;
  dataFinalizado: string;
  descricao: string;
  estado: string;
  id: string;
  numRef: number;
  valorAssociado: number;
  localizacao: string;
}[];

export type ActivitiesResponseProvider = {
  Cliente: {
    bi: string;
    nome: string;
    email: string;
    telefone: string;
    id: string;
    morada: string;
  };
  Categoria: {
    titulo: string;
    id: string;
  };
  dataCriado: string;
  dataFinalizado: string;
  descricao: string;
  estado: string;
  id: string;
  numRef: number;
  valorAssociado: number;
  localizacao: string;
}[];
