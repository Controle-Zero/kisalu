import io from "socket.io-client";
import APIConfig from "../API/apiConfig";

interface SocketParams {
  idProvedor?: string;
  idCliente?: string;
}

export function initConnection({ idProvedor, idCliente }: SocketParams) {
  const socket = io(`${APIConfig.baseUrl}/atividadeNsp`, {
    path: "/websocket/",
    auth: {
      idCliente,
      idProvedor,
    },
  });

  return socket;
}
