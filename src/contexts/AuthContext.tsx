import React, { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as ClienteService from "../services/cliente.services";
import Cliente from "../models/Cliente";
import Provedor from "../models/Provedor";

type User = Cliente | Provedor | null;

interface AuthContextType {
  signed: boolean;
  user: User | null;
  userType: "client" | "provider";
  loading: boolean;
  signIn(
    email: string,
    password: string,
    userType: "client" | "provider"
  ): Promise<void>;
  signOut(): void;
  error: unknown | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [userTypeState, setUserTypeState] = useState<"client" | "provider">(
    "client"
  );

  // useEffect(() => {
  //   async function loadStorageData() {
  //     try {
  //       const storageUser = await AsyncStorage.getItem("@UnionServices:user");
  //       const storageToken = await AsyncStorage.getItem("@UnionServices:token");

  //       if (storageUser && storageToken) {
  //         setUser(JSON.parse(storageUser));
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadStorageData();
  // }, []);

  async function signIn(
    email: string,
    password: string,
    userType: "client" | "provider"
  ) {
    setLoading(true);
    try {
      setUserTypeState(userType);
      if (userType == "client") {
        const token = await ClienteService.loginCliente(email, password);
        await AsyncStorage.setItem("@UnionServices:token", token);
        const cliente = await ClienteService.retornarCliente(email, token);
        console.log(cliente);
        await AsyncStorage.setItem(
          "@UnionServices:user",
          JSON.stringify(cliente)
        );
        setError(null);
        setUser(cliente);
      } else {
        // TODO: Provedor
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    console.log("Sign Out");
    AsyncStorage.clear().then(() => {
      setUser(null);
      setError(null);
    });
  }

  async function signUpProvider() {}

  async function signUpClient() {}

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        error,
        loading,
        signIn,
        signOut,
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
