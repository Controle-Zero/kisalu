import { getCategorias } from "../API/categoria.api";
import Categoria from "../models/Categoria";
import NodeCache from "node-cache";

const categoriasCached = new NodeCache();

export async function retornarCategorias(): Promise<Categoria[]> {
  if (categoriasCached.get("categorias")) {
    return categoriasCached.get("categorias")!!;
  } else {
    const categorias: Categoria[] = await getCategorias();
    return categorias;
  }
}
