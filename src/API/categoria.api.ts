import axios from "axios";
import dotenv from "dotenv";
import NodeCache from "node-cache";

dotenv.config();

const cache = new NodeCache();

export async function getCategorias() {
  const response = await axios.get(`${process.env.API_URL}/categoria`);
  cache.set("categorias", response.data, 120);
  return response.data;
}
