import { postCliente, getCliente, getTokenCliente } from "../API/cliente.api";
import Cliente from "../models/Cliente";
import Atividade from "../models/Atividade";

export async function loginCliente(email: string, password: string) {
  const response = await getTokenCliente(email, password);
  return response.data.token;
}

export async function criarCliente(cliente: Cliente) {
  return await postCliente(cliente);
}

export async function retornarCliente(token: string): Promise<Cliente> {
  const cliente = await getCliente(token);
  return cliente;
}

export async function retornarAtividades(
  token: string
): Promise<Atividade[]> {
  const atividades: Atividade[] = (await getCliente(token)).atividades ?? [];
  return atividades;
}

// export async function atualizarCliente(cliente: Cliente) {
//   return await putCliente(cliente);
// }
