import axios from "axios";
import Cliente from "../models/Cliente";
import dotenv from "dotenv";
import NodeCache from "node-cache";

dotenv.config();
const tokenCache = new NodeCache();

export async function getTokenCliente(email: string, password: string) {
  const body = { email, password };
  const response = await axios.post(
    `${process.env.API_URL}/cliente/login`,
    body
  );
  return response;
}

export async function postCliente(cliente: Cliente) {
  const response = await axios.post(`${process.env.API_URL}/cliente`, cliente);
  return response.data;
}

export async function getCliente(email: string) {
  const response = await axios.get(`${process.env.API_URL}/cliente`, {
    headers: {
      Authorization: `Bearer ${tokenCache.get("token_cliente") ?? ""}`,
    },
    data: {
      email,
    },
  });
  return response.data;
}

export async function putCliente(cliente: Cliente) {
  const response = await axios.put(`${process.env.API_URL}/cliente`, {
    headers: {
      Authorization: `Bearer ${tokenCache.get("token_cliente") ?? ""}`,
    },
    cliente,
  });
  return response.data;
}
