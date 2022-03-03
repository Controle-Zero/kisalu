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

export async function getDocumento(idAtividade: string) {
  try {
    const response = await axios.get(
      `${apiConfig.baseUrl}/atividade/${idAtividade}/doc`
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

export async function getDocumentoPDF(idAtividade: string) {
  try {
    const response = await axios.get(
      `${apiConfig.baseUrl}/atividade/${idAtividade}/docPDF`
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}
