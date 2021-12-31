import {
  postCliente,
  getCliente,
  getTokenCliente,
} from "../API/cliente.api";
import Cliente from "../models/Cliente";


export async function loginCliente(email: string, password: string) {
  const response = await getTokenCliente(email, password);
  if (response.status === 200) {
    return response.data.token;
  } else {
    throw new Error("Dados incorretos");
  }
}

export async function criarCliente(cliente: Cliente) {
  return await postCliente(cliente);
}

export async function retornarCliente(token: string): Promise<Cliente> {
  const cliente = await getCliente(token);
  return cliente;
}

// export async function actualizarCliente(cliente: Cliente) {
//   return await putCliente(cliente);
// }
