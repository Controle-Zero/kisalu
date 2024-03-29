import axios from "axios";
import Categoria from "../models/Categoria";
import apiConfig, { CategoriesResponse } from "./apiConfig";

/**
 * https://uservices-api-teste.herokuapp.com/categoria
 */
const END_POINT = `${apiConfig.baseUrl}/categoria`;

/**
 * Retorna a lista de todas as categorias
 * @returns Lista de categorias
 */
export async function getCategories(token: string) {
  try {
    const response = await axios.get<CategoriesResponse>(END_POINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.categorias;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching the categories");
  }
}

export function getFilteredCategories(
  searchedCategoryTitle: string,
  categories: Categoria[]
) {
  const filteredCategories = categories.map((category) => {
    if (!searchedCategoryTitle) return category;
    else if (
      category.titulo
        .toLowerCase()
        .includes(searchedCategoryTitle.toLowerCase())
    )
      return category;
  });
  return filteredCategories as Categoria[];
}
