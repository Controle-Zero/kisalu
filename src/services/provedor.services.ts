import {
  postPrestador,
  putPrestador,
  getTokenPrestador,
  getPrestador,
} from "../API/prestador.api";
import Prestador from "../models/Provedor";
import NodeCache from "node-cache";

const tokenCache = new NodeCache();

export async function loginProvedor(email: string, password: string) {
  const response = await getTokenPrestador(email, password);
  if (response.status === 200) {
    tokenCache.set("token_prestador", response.data.token, 600);
    return true;
  } else {
    return false;
  }
}

export async function criarProvedor(provedor: Prestador) {
  return await postPrestador(provedor);
}

export async function retornarProvedor(email: string): Promise<Prestador> {
  const provedor: Prestador = await getPrestador(email);
  return provedor;
}

export async function actualizarProvedor(provedor: Prestador) {
  return await putPrestador(provedor);
}
