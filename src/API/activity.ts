import axios, { AxiosError, AxiosResponse } from "axios";
import apiConfig, { NormalResponse } from "./apiConfig";

/**
 * https://uservices-api-teste.herokuapp.com/atividade
 */
const END_POINT = `${apiConfig.baseUrl}/atividade`;

/**
 * Atribui uma avaliação em uma atividade. Essa avaliação deve ser de 1 até 5.
 *  Representa número de estrelas
 * @param activityId  O ID da atividade a ser avaliada
 * @param rating  A avaliação do utilizador da atividade
 * @returns  A resposta da requisição
 */
export async function rateActivity(activityId: string, rating: number) {
  try {
    const response: AxiosResponse<NormalResponse> = await axios.put(
      `${END_POINT}/${activityId}/${rating}`
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Gera uma fatura da atividade no formato HTML. Nesta fatura possui a
 * informação do cliente, provedor, da categoria em questão e da atividade
 * @param activityId O ID da atividade para ser gerado o documento
 * @returns A fatura no formato HTML
 */
export async function generateActivityBill(activityId: string) {
  try {
    const response = await axios.get(`${END_POINT}/${activityId}/doc`);
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Gera uma fatura da atividade no formato PDF. Nesta fatura possui a
 * informação do cliente, provedor, da categoria em questão e da atividade
 * @param activityId O ID da atividade para ser gerado o documento
 * @returns A fatura no formato PDF em Blob
 */
export async function generatePDFActivityBill(activityId: string) {
  try {
    const response = await axios.get(`${END_POINT}/${activityId}/docPDF`);
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}
