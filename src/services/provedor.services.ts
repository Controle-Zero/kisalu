import {
  postPrestador,
  getTokenPrestador,
  getPrestador,
  postCategorias,
} from "../API/prestador.api";
import Prestador from "../models/Provedor";

export async function loginProvedor(email: string, password: string) {
  const response = await getTokenPrestador(email, password);
  if (response.status === 200) {
    return response.data.token;
  } else {
    throw new Error("Dados incorretos");
  }
}

export async function criarProvedor(provedor: Prestador) {
  return await postPrestador(provedor);
}

export async function retornarProvedor(token: string): Promise<Prestador> {
  const provedor: Prestador = await getPrestador(token);
  return provedor;
}

export async function adicionarCategoriasProvedor(
  idCategorias: string[],
  token: string
) {
  return await postCategorias(idCategorias, token);
}

/*export async function actualizarProvedor(provedor: Prestador) {
  return await putPrestador(provedor);
}*/
