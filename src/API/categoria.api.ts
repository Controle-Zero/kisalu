import axios from "axios";
import apiConfig from "./apiConfig";

export async function getCategorias() {
  const response = await axios.get(`${apiConfig.baseUrl}/categoria`);
  // cache.set("categorias", response.data, 120);
  return response.data;
}
