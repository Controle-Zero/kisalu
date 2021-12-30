import React, { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as auth from "../services/auth";

interface User {
  name: string;
  type: "client" | "provider";
  email: string;
}

interface AuthContextType {
  signed: boolean;
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storageUser = await AsyncStorage.getItem("@UnionServices:user");
        const storageToken = await AsyncStorage.getItem("@UnionServices:token");

        if (storageUser && storageToken) {
          setUser(JSON.parse(storageUser));
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
      const response = await auth.signIn({ email, password, userType });
      await AsyncStorage.setItem(
        "@UnionServices:user",
        JSON.stringify({ ...response.user, userType })
      );
      await AsyncStorage.setItem("@UnionServices:token", response.token);
      setError(null);
      setUser(response.user);
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
      value={{ signed: !!user, user, error, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

// const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// export const AuthProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState<object | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadStorageData() {
//       const storageUser = await AsyncStorage.getItem("user");
//       const storageToken = await AsyncStorage.getItem("token");

//       if (storageToken && storageUser) {
//         setUser(JSON.parse(storageUser));
//         setLoading(false);
//       }
//     }

//     loadStorageData();
//   }, []);

//   async function signIn() {
//     const response = await auth.signIn();
//     setUser(response.user);

//     AsyncStorage.setItem("user", JSON.stringify(response.user));
//     AsyncStorage.setItem("token", response.token);
//   }

//   function signOut() {
//     AsyncStorage.clear().then(() => {
//       setUser(null);
//     });
//   }

//   return (
//     <AuthContext.Provider
//       value={{ signed: !!user, user, signIn, signOut, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
