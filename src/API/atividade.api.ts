import axios from "axios";
import dotenv from "dotenv";
import NodeCache from "node-cache";
import Atividade from "../models/Atividade";

dotenv.config();
const token = new NodeCache();

export async function postAtividade(atividade: Atividade) {
  const response = await axios.post(`${process.env.API_URL}/atividade`, {
    headers: {
      Authorization: `Bearer ${
        (token.get("token_cliente") || token.get("token_prestador")) ?? ""
      }`,
    },
    atividade,
  });
  return response.data;
}

export async function putAtividade(atividade: Atividade) {
  const response = await axios.put(`${process.env.API_URL}/atividade`, {
    headers: {
      Authorization: `Bearer ${
        (token.get("token_cliente") || token.get("token_prestador")) ?? ""
      }`,
    },
    atividade,
  });
  return response.data;
}
