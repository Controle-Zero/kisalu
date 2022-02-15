import axios, { AxiosError } from "axios";
import Cliente from "../models/Cliente";
import apiConfig from "./apiConfig";

interface TokenClienteResponse {
  generatedToken: string;
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
  try {
    const response = await axios.post<TokenClienteResponse>(
      `${apiConfig.baseUrl}/cliente/login`,
      body
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function postCliente(cliente: Cliente) {
  try {
    const response = await axios.post<PostCliente>(
      `${apiConfig.baseUrl}/cliente`,
      cliente
    );
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function getCliente(token: string) {
  try {
    const response = await axios.get<{ cliente: Cliente; sucesso: boolean }>(
      `${apiConfig.baseUrl}/cliente`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.cliente;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

// export async function putCliente() {
//   const response = await axios.put(`${process.env.API_URL}/cliente`, {
//     headers: {
//       Authorization: `Bearer ${tokenCache.get("token_cliente") ?? ""}`,
//     },
//   });
//   return response.data;
// }
