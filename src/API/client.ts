import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { v4 as uuid } from "uuid";
import { getDeviceData } from "../utils/deviceDataHandler";
import apiConfig, {
  ClientAuthenticationResponse,
  ClientRequest,
  ClientResponse,
  NormalResponse,
} from "./apiConfig";
import Atividade, { ActivityState } from "../models/Atividade";

/**
 * https://uservices-api-teste.herokuapp.com/cliente
 */
const END_POINT = `${apiConfig.baseUrl}/cliente`;

/**
 * Autentica o cliente na aplicação com o email, password e gera um id do
 * dispositivo a ser usado. O id do dispositivo gerado é guardado no AsyncStorage
 * @param email O email da conta do cliente
 * @param password A password da conta do cliente. Não deve ser encriptada
 * @returns O token de autenticação
 */
export async function authenticateClient(email: string, password: string) {
  const deviceData = await getDeviceData();
  const deviceID = uuid();
  deviceData.uniqueID = !deviceData.uniqueID ? deviceID : deviceData.uniqueID;
  await AsyncStorage.setItem("@UnionServices:deviceID", deviceData.uniqueID);
  const requestBody = { email, password, deviceData };
  try {
    const response = await axios.post<ClientAuthenticationResponse>(
      `${END_POINT}/login`,
      requestBody
    );
    return response.data.generatedToken;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
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
  const response = await getClient(token);
  const activities = response.atividades ?? [];
  if (activities.length == 0) return activities;
  const filteredActivities = filterActivities(activities, filter);
  return filteredActivities;
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
