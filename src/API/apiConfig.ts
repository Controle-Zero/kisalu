import Categoria from "../models/Categoria";
import Cliente from "../models/Cliente";
import { Morada } from "../models/Morada";
import { Post } from "../models/Post";
import Prestador from "../models/Provedor";

const PRODUCTION_URL = "https://uservices-api-teste.herokuapp.com";
export const SOCKET_URL = PRODUCTION_URL + "/Kisalu";
// const DEV_URL = "http://192.168.1.24:8080";

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
  morada: Morada;
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
  morada: Morada;
  email: string;
  telefone: string;
  password: string;
  iban: string;
  descricao: string;
  imageUrl: string;
  idCategorias: string[];
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
    datNasc: Date;
    imageUrl: string;
    nome: string;
    email: string;
    telefone: string;
    id: string;
    morada: Morada;
  };
  Categoria: {
    titulo: string;
    id: string;
  };
  dataCriado: Date;
  dataFinalizado: Date;
  descricao: string;
  estado: string;
  id: string;
  numRef: number;
  valorAssociado: number;
  localizacao: string;
}[];

export type PostResponse = {
  portifolio: Post[];
};
