import axios from "axios";
import dotenv from "dotenv";
import Prestador from "../models/Provedor";
import apiConfig from "./apiConfig";

dotenv.config();

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

export async function getPrestador(token: string) {
  const response = await axios.get(`${apiConfig.baseUrl}/prestador`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function putPrestador(prestador: Prestador, token: string) {
  const response = await axios.put(`${apiConfig.baseUrl}/prestador`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    prestador,
  });
  return response.data;
}
