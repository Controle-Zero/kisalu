import { ClientSignUpFormType } from "../../components/Forms/ClientSignUpForm/types";
import { ProviderSignUpFormType } from "../../components/Forms/ProviderSignUpForm/type";
import Cliente from "../../models/Cliente";
import Prestador from "../../models/Provedor";

export type User = Cliente | Prestador | null;

export type UserType = "client" | "provider";

export type AuthContextType = {
  user: User;
  userType: UserType;
  loading: boolean;
  error: any;
  token: string;
  signIn: LoginFunction;
  signOut: LogoutFunction;
  signUpProvider: CreateProviderAccount;
  signUpClient: CreateClientAccount;
};

export enum AsyncStorageKeys {
  USER = "@Kisalu:user",
  TOKEN = "@Kisalu:token",
}

export type LoginFunction = (
  email: string,
  password: string,
  userType: UserType
) => Promise<void>;

export type LogoutFunction = () => void;

export type CreateProviderAccount = (
  provider: ProviderSignUpFormType,
  profilePictureURI?: string
) => Promise<void>;

export type CreateClientAccount = (
  client: ClientSignUpFormType,
  profilePictureURI?: string
) => Promise<void>;
