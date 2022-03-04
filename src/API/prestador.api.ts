import "react-native-get-random-values";
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";
import Prestador from "../models/Provedor";
import { getDeviceData } from "../utils/deviceDataHandler";
import apiConfig from "./apiConfig";

export async function getTokenPrestador(email: string, password: string) {
  const deviceData = await getDeviceData();
  const deviceId = uuid();
  deviceData.uniqueID = !deviceData.uniqueID ? deviceId : deviceData.uniqueID;
  await AsyncStorage.setItem("@UnionServices:deviceId", deviceData.uniqueID);
  const body = { email, password, deviceData };
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/prestador/login`,
      body
    );
    return response;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
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
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}

export async function getPrestador(token: string) {
  try {
    const response = await axios.get<{
      prestador: Prestador;
      success: boolean;
    }>(`${apiConfig.baseUrl}/prestador`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.prestador;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data.message as string);
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
    throw new Error((error as AxiosError).response?.data.message as string);
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
    throw new Error((error as AxiosError).response?.data.message as string);
  }
}
