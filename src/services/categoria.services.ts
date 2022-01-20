import { getCategorias } from "../API/categoria.api";
import Categoria from "../models/Categoria";

interface Response {
  categorias: Categoria[];
}

export async function retornarCategorias(): Promise<Response> {
  const categorias: Response = await getCategorias();
  return categorias;
}
