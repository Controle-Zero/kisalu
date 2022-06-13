import { ActivityState } from "../../models/Atividade";
import Categoria from "../../models/Categoria";
import Cliente from "../../models/Cliente";
import Prestador from "../../models/Provedor";

export type SocketContextTypes = {
  initSocket: () => void;
  onActivityRequest: ActivityRequestFunction;
  onActivityResponse: ActivityResponseFunction;
};

export type ActivityRequestFunction = (payload: RequestPayload) => void;
export type ActivityResponseFunction = (payload: ResponsePayload) => void;

export type ActivityRequestPayload = {
  clienteId: string;
  categoriaId: string;
  prestadorId: string;
  descricao: string;
};

export type ActivityResponsePayload = {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: ActivityState;
  descricao: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "atividades">;
  Prestador: Omit<Prestador, "password" | "atividades">;
};

export enum Roles {
  CLIENT = "CLIENTE",
  PRESTADOR = "PRESTADOR",
}

export enum Events {
  REQUEST = "REQUEST",
  RESPONSE = "RESPONSE",
}

export type RequestPayload = {
  TriggeredBy: {
    id: string;
    role: Roles;
  };
  atividade: ActivityRequestPayload;
};

export type ResponsePayload = {
  TriggeredBy: {
    id: string;
    role: Roles;
  };
  atividade: ActivityResponsePayload;
};
