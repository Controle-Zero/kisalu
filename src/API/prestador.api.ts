import axios, { AxiosError } from "axios";
import * as DeviceInfo from "expo-device";
import Prestador from "../models/Provedor";
import apiConfig from "./apiConfig";

export async function getTokenPrestador(email: string, password: string) {
  const deviceData = {
    brand: DeviceInfo.brand,
    modelName: DeviceInfo.modelName,
  };
  const body = { email, password, deviceData };
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/prestador/login`,
      body
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function postPrestador(prestador: Prestador) {
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/prestador`,
      prestador
    );
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function getPrestador(token: string) {
  try {
    const response = await axios.get<{
      prestador: Prestador;
      sucesso: boolean;
    }>(`${apiConfig.baseUrl}/prestador`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.prestador;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function putPrestador(prestador: Prestador, token: string) {
  try {
    const response = await axios.put(`${apiConfig.baseUrl}/prestador`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      prestador,
    });
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}

export async function putCategorias(idCategorias: string[], token: string) {
  try {
    const response = await axios.put(
      `${apiConfig.baseUrl}/prestador/categorias`,
      {
        idCategorias,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.mensagem as string);
  }
}
