import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAsyncStorageAuthData, setAsyncStorageData } from "./helpers";
import {
  AuthContextType,
  CreateClientAccount,
  CreateProviderAccount,
  LoginFunction,
  LogoutFunction,
  User,
} from "./types";
import * as ClientAPI from "../../API/client";
import * as ProviderAPI from "../../API/provider";
import dayjs from "dayjs";
import { Alert } from "react-native";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const storageData = await getAsyncStorageAuthData();
        if (storageData) {
          setUser(storageData.storageUser);
          setToken(storageData.storageToken);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const signIn: LoginFunction = async (email, password, userType) => {
    setIsLoading(true);
    try {
      let token = "";
      let user = {} as User;
      if (userType == "client") {
        token = await ClientAPI.authenticateClient(email, password);
        user = await ClientAPI.getClient(token);
      } else if (userType == "provider") {
        token = await ProviderAPI.authenticateProvider(email, password);
        user = await ProviderAPI.getProvider(token);
      } else {
        throw new Error("Tipo de utilizador inválido");
      }
      setAsyncStorageData(user, token);
      setError(null);
      setUser(user);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut: LogoutFunction = async () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setError(null);
      setToken("");
    });
  };

  const signUpProvider: CreateProviderAccount = async (provider) => {
    const newProvider = {
      bi: provider.bi,
      nome: provider.fullName,
      dataNasc: dayjs(provider.birthDay).format("YYYY/MM/DD"),
      morada: provider.address,
      email: provider.email,
      telefone: provider.phoneNumber,
      password: provider.password,
      iban: provider.IBAN,
      descricao: provider.description,
      idCategorias: [],
    };
    setIsLoading(true);
    try {
      await ProviderAPI.createProvider(newProvider);
      Alert.alert("Login", "Conta criada com sucesso");
      const { email, password } = provider;
      await signIn(email, password, "provider");
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const signUpClient: CreateClientAccount = async (client) => {
    const newClient = {
      bi: client.bi,
      nome: client.fullName,
      dataNasc: dayjs(client.birthDay).format("YYYY-MM-DD"),
      email: client.email,
      morada: client.address,
      password: client.password,
      telefone: client.phoneNumber,
      atividades: [],
    };
    setIsLoading(true);
    try {
      await ClientAPI.createClient(newClient);
      Alert.alert("Login", "Conta criada com sucesso");
      const { email, password } = client;
      await signIn(email, password, "client");
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const providerValue: AuthContextType = {
    error,
    loading: isLoading,
    signIn,
    signOut,
    signUpClient,
    signUpProvider,
    token,
    user,
    userType: "client",
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
