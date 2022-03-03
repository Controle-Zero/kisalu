import axios, { AxiosError } from "axios";
import apiConfig from "./apiConfig";

export async function avaliarAtividade(idAtividade: string, avaliacao: number) {
  try {
    const response = await axios.put(
      `${apiConfig.baseUrl}/atividade/${idAtividade}/${avaliacao}`
    );

    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}
