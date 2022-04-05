import Categoria from "../models/Categoria";
import Cliente from "../models/Cliente";
import Prestador from "../models/Provedor";

export default {
  /**
   * The API base url. This is the production API
   */
  baseUrl: "https://uservices-api-teste.herokuapp.com",
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
  dataNasc: Date;
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
  dataNasc: Date;
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
