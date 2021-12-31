import axios from "axios";
import Cliente from "../models/Cliente";
import apiConfig from "./apiConfig";

interface TokenClienteResponse {
  token: string;
  refreshToken: {
    id: string;
    expiraEm: number;
    clienteId: string;
  };
}

interface PostCliente {
  mensagem: string;
  sucesso: boolean;
}

export async function getTokenCliente(email: string, password: string) {
  const body = { email, password };
  const response = await axios.post<TokenClienteResponse>(
    `${apiConfig.baseUrl}/cliente/login`,
    body
  );
  return response;
}

export async function postCliente(cliente: Cliente) {
  const response = await axios.post<PostCliente>(
    `${apiConfig.baseUrl}/cliente`,
    cliente
  );
  return response.data;
}

export async function getCliente(token: string) {
  const response = await axios.get<Cliente>(`${apiConfig.baseUrl}/cliente`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

// export async function putCliente() {
//   const response = await axios.put(`${process.env.API_URL}/cliente`, {
//     headers: {
//       Authorization: `Bearer ${tokenCache.get("token_cliente") ?? ""}`,
//     },
//   });
//   return response.data;
// }
