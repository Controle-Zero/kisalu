import React, { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as ClienteService from "../services/cliente.services";
import * as ProvedorService from "../services/provedor.services";
import Cliente from "../models/Cliente";
import Provedor from "../models/Provedor";
import { CadastroClienteFormType } from "../components/forms/CadastroClienteForm";
import { CadastroProvedorFormType } from "../components/forms/CadastroProvedorForm";
import dayjs from "dayjs";

type User = Cliente | Provedor | null;

interface AuthContextType {
  signed: boolean;
  user: User;
  userType: string;
  loading: boolean;
  signIn(
    email: string,
    password: string,
    userType: "client" | "provider"
  ): Promise<void>;
  signOut(): void;
  signUpProvider(providerData: CadastroProvedorFormType): Promise<void>;
  signUpClient(clientData: CadastroClienteFormType): Promise<void>;
  error: unknown | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [userTypeState, setUserTypeState] = useState<string>("");

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storageUser = await AsyncStorage.getItem("@UnionServices:user");
        const storageToken = await AsyncStorage.getItem("@UnionServices:token");
        const userType = (await AsyncStorage.getItem(
          "@UnionServices:userType"
        )) as string;

        if (storageUser && storageToken) {
          setUser(JSON.parse(storageUser));
          setUserTypeState(userType);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(
    email: string,
    password: string,
    userType: "client" | "provider"
  ) {
    setLoading(true);
    try {
      setUserTypeState(userType);
      let token: string;
      let user: User;
      if (userType === "client") {
        token = await ClienteService.loginCliente(email, password);
        user = await ClienteService.retornarCliente(token);
      } else if (userType === "provider") {
        token = await ProvedorService.loginProvedor(email, password);
        user = await ProvedorService.retornarProvedor(token);
      } else {
        throw new Error("Tipo de utilizador inválido");
      }
      await AsyncStorage.setItem("@UnionServices:token", token);
      await AsyncStorage.setItem("@UnionServices:user", JSON.stringify(user));
      await AsyncStorage.setItem("@UnionServices:userType", userType);
      setError(null);
      setUser(user);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setError(null);
    });
  }

  async function signUpProvider({
    bi,
    fullName,
    birthDay,
    address,
    email,
    phoneNumber,
    password,
    iban,
    description,
  }: CadastroProvedorFormType) {
    let newProvider: Provedor = {
      bi,
      nome: fullName,
      dataNasc: dayjs(birthDay).format("YYYY/MM/DD"),
      morada: address,
      email,
      telefone: phoneNumber,
      password: password,
      iban,
      descricao: description,
      idCategorias: [],
    };

    setLoading(true);
    try {
      await ProvedorService.criarProvedor(newProvider);
      alert("Conta Criada com sucesso!");
      await signIn(email, password, "provider");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  async function signUpClient({
    address,
    bi,
    birthDay,
    email,
    fullName,
    password,
    phoneNumber,
  }: CadastroClienteFormType) {
    const newClient: Cliente = {
      bi,
      nome: fullName,
      dataNasc: dayjs(birthDay).format("YYYY/MM/DD"),
      email,
      morada: address,
      password,
      telefone: phoneNumber,
      atividades: [],
    };

    setLoading(true);
    try {
      await ClienteService.criarCliente(newClient);
      alert("Conta criada com sucesso");
      await signIn(email, password, "client");
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        error,
        loading,
        signIn,
        signOut,
        signUpClient,
        signUpProvider,
        userType: userTypeState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
