import {
  postPrestador,
  putPrestador,
  getTokenPrestador,
  getPrestador,
} from "../API/prestador.api";
import Prestador from "../models/Provedor";
import NodeCache from "node-cache";

const cache = new NodeCache();

export async function loginProvedor(email: string, password: string) {
  const response = await getTokenPrestador(email, password);
  if (response.status === 200) {
    cache.set("token_prestador", response.data.token, 600);
    cache.set("provedor", { email, password });
    return true;
  } else {
    return false;
  }
}

export async function criarProvedor(provedor: Prestador) {
  return await postPrestador(provedor);
}

export async function retornarProvedor(): Promise<Prestador> {
  const { email } = cache.get("provedor")!!;
  const provedor: Prestador = await getPrestador(email);
  return provedor;
}

export async function actualizarProvedor(provedor: Prestador) {
  return await putPrestador(provedor);
}
