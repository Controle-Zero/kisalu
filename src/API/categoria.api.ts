import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function getCategorias() {
  const response = await axios.get(`${process.env.API_URL}/categoria`);
  return response.data;
}
