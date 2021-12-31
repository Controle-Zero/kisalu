import axios from "axios";
import dotenv from "dotenv";
import Prestador from "../models/Provedor";
import NodeCache from "node-cache";
import apiConfig from "./apiConfig";

dotenv.config();
const tokenCache = new NodeCache();

export async function getTokenPrestador(email: string, password: string) {
  const body = { email, password };
  const response = await axios.post(
    `${apiConfig.baseUrl}/prestador/login`,
    body
  );
  return response;
}

export async function postPrestador(prestador: Prestador) {
  const response = await axios.post(
    `${apiConfig.baseUrl}/prestador`,
    prestador
  );
  return response.data;
}

export async function getPrestador(email: string) {
  const response = await axios.get(`${apiConfig.baseUrl}/prestador`, {
    headers: {
      Authorization: `Bearer ${tokenCache.get("token_prestador") ?? ""}`,
    },
    data: {
      email,
    },
  });
  return response.data;
}

export async function putPrestador(prestador: Prestador) {
  const response = await axios.put(`${apiConfig.baseUrl}/prestador`, {
    headers: {
      Authorization: `Bearer ${tokenCache.get("token_prestador") ?? ""}`,
    },
    prestador,
  });
  return response.data;
}
