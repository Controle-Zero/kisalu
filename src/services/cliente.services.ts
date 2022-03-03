import { postCliente, getCliente, getTokenCliente } from "../API/cliente.api";
import Cliente from "../models/Cliente";
import Atividade from "../models/Atividade";
import { avaliarAtividade } from "../API/atividade.api";

export async function loginCliente(email: string, password: string) {
  const response = await getTokenCliente(email, password);
  return response.data.generatedToken;
}

export async function criarCliente(cliente: Cliente) {
  return await postCliente(cliente);
}

export async function retornarCliente(token: string): Promise<Cliente> {
  const cliente = await getCliente(token);
  return cliente;
}

export async function retornarAtividades(token: string): Promise<Atividade[]> {
  const atividades: Atividade[] = (await getCliente(token)).atividades ?? [];
  return atividades;
}

export async function avaliarServico(idAtividade: string, avalicao: number) {
  return await avaliarAtividade(idAtividade, avalicao);
}

// export async function atualizarCliente(cliente: Cliente) {
//   return await putCliente(cliente);
// }
