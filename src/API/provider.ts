import "react-native-get-random-values";
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";
import Prestador from "../models/Provedor";
import { getDeviceData } from "../utils/deviceDataHandler";
import apiConfig, {
  ActivitiesResponseProvider,
  NormalResponse,
  ProviderAuthenticationResponse,
  ProviderRequest,
  ProviderResponse,
} from "./apiConfig";

/**
 * https://uservices-api-teste.herokuapp.com/prestador
 */
const END_POINT = `${apiConfig.baseUrl}/prestador`;

/**
 * Autentica o provider na aplicação com o email, password e gera um id do
 * dispositivo a ser usado. O id do dispositivo gerado é guardado no AsyncStorage
 * @param email O email da conta do provider
 * @param password A password da conta do provider. Não deve ser encriptada
 * @returns O token de autenticação
 */
export async function authenticateProvider(email: string, password: string) {
  const deviceData = await getDeviceData();
  const deviceID = uuid();
  deviceData.uniqueID = !deviceData.uniqueID ? deviceID : deviceData.uniqueID;
  await AsyncStorage.setItem("@UnionServices:deviceID", deviceData.uniqueID);
  const requestBody = { email, password, deviceData };
  try {
    const response = await axios.post<ProviderAuthenticationResponse>(
      `${END_POINT}/login`,
      requestBody
    );
    return response.data.generatedToken;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Cadastra um novo provider
 * @param provider O novo provedor
 * @returns Resposta com o estado da requisição
 */
export async function createProvider(provider: ProviderRequest) {
  try {
    const response = await axios.post<NormalResponse>(END_POINT, provider);
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Retorna o provedor baseado no token de autenticação. Inclui todas as
 * informações do provedor
 * @param token O token de autenticação
 * @returns O provedor com as atividades
 */
export async function getProvider(token: string) {
  try {
    const response = await axios.get<ProviderResponse>(END_POINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.prestador;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 * Atualiza os dados do provedor
 * @param provider Os novos dados do provedor
 * @param token O token de autenticação do provedor
 * @returns O estado da requisição
 */
export async function updateProvider(provider: Prestador, token: string) {
  try {
    const response = await axios.put<NormalResponse>(END_POINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      prestador: provider,
    });
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

/**
 *  Adiciona novas categorias para o provedor baseado no token
 * @param categoriesID Um array com os ids das categorias a serem inseridas
 * @param token O token de autenticação do provedor
 * @returns O estado da requisição
 */
export async function updateProviderCategories(
  categoriesID: string[],
  token: string
) {
  try {
    const requestBody = {
      idCategorias: categoriesID,
    };
    const response = await axios.put<NormalResponse>(
      `${END_POINT}/categoria`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

export async function getActivities(token: string) {
  try {
    const response = await axios.get<ActivitiesResponseProvider>(
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

export async function removeProviderCategory(
  token: string,
  idCategoria: string
) {
  try {
    const requestBody = {
      idCategoria,
    };
    const response = await axios.delete(`${END_POINT}/categoria`, {
      headers: {
        Authorization: token,
      },
      data: requestBody,
    });
    return {
      status: response.status,
    };
  } catch (error) {
    console.error(error);
    const axiosError = error as AxiosError;
    if (axiosError.response?.status == 400) {
      throw new Error(
        "Something wrong with the request. The category might not exist"
      );
    } else throw new Error(axiosError.message);
  }
}
