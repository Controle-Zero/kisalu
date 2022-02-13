import axios from "axios";
import Categoria from "../models/Categoria";
import apiConfig from "./apiConfig";

interface CategoriesResponse {
  categorias: Categoria[];
  sucesso: boolean;
}

export async function getCategorias() {
  const response = await axios.get<CategoriesResponse>(
    `${apiConfig.baseUrl}/categoria`
  );

  if (response.data.sucesso) {
    return response.data.categorias;
  }
  throw new Error("Error fetching the categories");
}
