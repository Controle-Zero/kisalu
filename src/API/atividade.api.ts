import axios from "axios";
import dotenv from "dotenv";
import Atividade from "../models/Atividade";
import apiConfig from "./apiConfig";

dotenv.config();

export async function postAtividade(atividade: Atividade, token: string) {
  const response = await axios.post(`${apiConfig.baseUrl}/atividade`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    atividade,
  });
  return response.data;
}

export async function putAtividade(atividade: Atividade, token: string) {
  const response = await axios.put(`${apiConfig.baseUrl}/atividade`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    atividade,
  });
  return response.data;
}
