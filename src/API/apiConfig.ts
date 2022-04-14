import Categoria from "../models/Categoria";
import Cliente from "../models/Cliente";
import Prestador from "../models/Provedor";

const PRODUCTION_URL = "https://uservices-api-teste.herokuapp.com";
const DEV_URL = "http://localhost:8080";

export default {
  /**
   * The API base url. This is the production API
   */
  baseUrl: DEV_URL,
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
};

export type ProviderResponse = {
  provedor: Prestador;
  success: boolean;
  message?: string;
};
