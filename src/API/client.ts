import axios, { AxiosError } from "axios";
import { getDeviceData } from "../utils/deviceDataHandler";
import apiConfig, {
  ActivitiesResponseClient,
  ClientAuthenticationResponse,
  ClientRequest,
  ClientResponse,
  NormalResponse,
} from "./apiConfig";
import Atividade, { ActivityState } from "../models/Atividade";

const END_POINT = `${apiConfig.baseUrl}/cliente`;

/**
 * Autentica o cliente na aplicação com o email, password e gera um id do
 * dispositivo a ser usado. O id do dispositivo gerado é guardado no AsyncStorage
 * @param email O email da conta do cliente
 * @param password A password da conta do cliente. Não deve ser encriptada
 * @returns O token de autenticação
 */
export async function authenticateClient(email: string, password: string) {
  const deviceData = getDeviceData();
  const requestBody = { email, password, deviceData };
  try {
    const response = await axios.post<ClientAuthenticationResponse>(
      `${END_POINT}/login`,
      requestBody
    );
    return response.data.generatedToken;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(error);
    if (axiosError.response?.status === 400)
      throw new Error("A conta inserida não existe");
    else throw new Error("Existe algum erro com as credenciais ou com a rede");
  }
}

/**
 * Cadastra um novo cliente
 * @param client O novo cliente
 * @returns Resposta com o estado da requisição
 */
export async function createClient(client: ClientRequest) {
  try {
    const response = await axios.post<NormalResponse>(END_POINT, client);
    return response;
  } catch (error) {
    console.error(error);
    const axiosError = error as AxiosError;
    if (axiosError.response?.status == 400)
      throw new Error(
        "O cliente já existe no sistema ou existe um erro no processamento dos dados enviados"
      );
    else
      throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Retorna o cliente baseado no token de autenticação. Inclui todas as
 * informações do cliente
 * @param token O token de autenticação
 * @returns O cliente com as atividades
 */
export async function getClient(token: string) {
  try {
    const response = await axios.get<ClientResponse>(END_POINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.cliente;
  } catch (error) {
    console.error(error);
    const axiosError = error as AxiosError;
    if (axiosError.response?.status == 401)
      throw new Error("Não está autorizado");
    else
      throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Filtra as atividades vinculados a um cliente de acordo com o filtro
 * selecionado. Usando esse método não é necessário fazer uma requisição
 * do getClient.
 * @param token O token de autenticação do cliente
 * @param filter O estado selecionado para filtrar a atividade
 * @returns Um array de atividades filtradas. Retorna vazio caso não existam
 * atividades com o estado selecionado
 */
export async function getFilteredActivitiesFromClient(
  token: string,
  filter: ActivityState
) {
  try {
    const response = await getClient(token);
    const activities = response.atividades ?? [];
    if (activities.length == 0) return activities;
    const filteredActivities = filterActivities(activities, filter);
    return filteredActivities;
  } catch (error) {
    throw error;
  }
}

export async function getActivities(token: string) {
  try {
    const response = await axios.get<ActivitiesResponseClient>(
      `${END_POINT}/atividades`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    const axiosError = error as AxiosError;
    if (axiosError.response?.status == 400)
      throw new Error("Erro na busca de atividades");
    else throw new Error(axiosError.message);
  }
}

function filterActivities(activities: Atividade[], filter: ActivityState) {
  return activities.filter((activity) => {
    const { estado } = activity;
    const { ATIVA, FINALIZADA, PENDENTE } = ActivityState;
    if ((estado == ATIVA || estado == PENDENTE) && filter == ATIVA)
      return activity;
    else if (estado == FINALIZADA && filter == FINALIZADA) return activity;
  });
}
