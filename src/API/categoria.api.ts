import axios from "axios";
import Categoria from "../models/Categoria";
import apiConfig from "./apiConfig";

interface CategoriesResponse {
  categorias: Categoria[];
  success: boolean;
}

export async function getCategorias() {
  const response = await axios.get<CategoriesResponse>(
    `${apiConfig.baseUrl}/categoria`
  );

  if (response.data.success) {
    return response.data.categorias;
  }
  throw new Error("Error fetching the categories");
}
