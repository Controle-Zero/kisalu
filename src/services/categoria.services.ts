import { getCategorias } from "../API/categoria.api";
import Categoria from "../models/Categoria";

export async function retornarCategorias(): Promise<Categoria[]> {
  const categorias: Categoria[] = await getCategorias();
  return categorias;
}
