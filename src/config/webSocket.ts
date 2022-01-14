import io from "socket.io-client";

export function initConnection(idProvedor?: string, idCliente?: string) {
  const socket = io("http://localhost:8080/atividadeNsp", {
    path: "/websocket/",
    auth: {
      idCliente,
      idProvedor,
    },
    autoConnect: false,
  });

  return socket;
}
