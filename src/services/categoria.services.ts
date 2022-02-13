import { getCategorias } from "../API/categoria.api";

export async function retornarCategorias() {
  const categorias = await getCategorias();
  return categorias;
}
