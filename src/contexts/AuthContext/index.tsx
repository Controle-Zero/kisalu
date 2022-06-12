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
  UserType,
} from "./types";
import * as ClientAPI from "../../API/client";
import * as ProviderAPI from "../../API/provider";
import dayjs from "dayjs";
import { Alert } from "react-native";
import storage from "../../API/firebase/storage";
import NoProfilePicture from "../../assets/images/no-profile.png";
import { ClientRequest, ProviderRequest } from "../../API/apiConfig";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [token, setToken] = useState("");
  const [userType, setUserType] = useState<UserType>("client");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const storageData = await getAsyncStorageAuthData();
        if (storageData) {
          setUser(storageData.storageUser);
          setToken(storageData.storageToken);
          setUserType(storageData.storageUserType);
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
        setUserType("client");
      } else if (userType == "provider") {
        token = await ProviderAPI.authenticateProvider(email, password);
        user = await ProviderAPI.getProvider(token);
        setUserType("provider");
      } else {
        throw new Error("Tipo de utilizador inválido");
      }
      setAsyncStorageData(user, userType, token);
      setError(null);
      setUser(user);
      setToken(token);
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

  const signUpProvider: CreateProviderAccount = async (
    provider,
    profilePictureURI
  ) => {
    setIsLoading(true);
    let profilePictureDownloadUrl = "";
    if (profilePictureURI) {
      try {
        profilePictureDownloadUrl = await storage.sendProfilePicture(
          profilePictureURI
        );
      } catch (error) {
        console.error(error);
        setError(
          "Erro na submissão da foto de perfil, verifique a sua conexão"
        );
        setIsLoading(false);
        return;
      }
    }
    const newProvider: ProviderRequest = {
      bi: provider.bi,
      nome: provider.fullName,
      dataNasc: dayjs(provider.birthDay).format("YYYY/MM/DD"),
      morada: {
        bairro: provider.neighbor,
        distrito: provider.district,
        provincia: provider.province,
        complemento: provider.complementaryAddress,
        municipio: provider.county,
      },
      email: provider.email,
      telefone: provider.phoneNumber,
      password: provider.password,
      iban: provider.IBAN,
      descricao: provider.description,
      imageUrl: profilePictureDownloadUrl,
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
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const signUpClient: CreateClientAccount = async (
    client,
    profilePictureURI
  ) => {
    setIsLoading(true);
    let profilePictureDownloadUrl = "";
    if (profilePictureURI) {
      try {
        profilePictureDownloadUrl = await storage.sendProfilePicture(
          profilePictureURI
        );
      } catch (error) {
        console.error(error);
        setError(
          "Erro na submissão da foto de perfil, verifique a sua conexão"
        );
        setIsLoading(false);
        return;
      }
    }
    const newClient: ClientRequest = {
      bi: client.bi,
      nome: client.fullName,
      dataNasc: dayjs(client.birthDay).format("YYYY-MM-DD"),
      email: client.email,
      morada: {
        bairro: client.neighbor,
        distrito: client.district,
        provincia: client.province,
        complemento: client.complementaryAddress,
        municipio: client.county,
      },
      password: client.password,
      telefone: client.phoneNumber,
      imageUrl: profilePictureDownloadUrl,
    };
    console.log(newClient);
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
    userType,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
