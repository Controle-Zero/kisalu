import {
  postCliente,
  getCliente,
  getTokenCliente,
  putCliente,
} from "../API/cliente.api";
import Cliente from "../models/Cliente";
import NodeCache from "node-cache";

const tokenCache = new NodeCache();

export async function loginCliente(email: string, password: string) {
  const response = await getTokenCliente(email, password);
  if (response.status === 200) {
    tokenCache.set("token_cliente", response.data.token, 600);
    return true;
  } else {
    return false;
  }
}

export async function criarCliente(cliente: Cliente) {
  return await postCliente(cliente);
}

export async function retornarCliente(email: string): Promise<Cliente> {
  const cliente: Cliente = await getCliente(email);
  return cliente;
}

export async function actualizarCliente(cliente: Cliente) {
  return await putCliente(cliente);
}
