import React, { createContext, FC, useState } from "react";
import {
  ActivityRequestFunction,
  ActivityResponseFunction,
  ActivityResponsePayload,
  Events,
  RequestPayload,
  ResponsePayload,
  SocketContextTypes,
} from "./types";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../../API/apiConfig";
import useAuth from "../../hooks/useAuth";

const SocketContext = createContext<SocketContextTypes>(
  {} as SocketContextTypes
);
export default SocketContext;

export const SocketContextProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const { token, userType } = useAuth();

  const initSocket = () => {
    const socketConnection = io(SOCKET_URL, {
      auth: {
        token,
      },
      path: "/websocket",
    }).connect();
    setSocket(socketConnection);
  };

  const onActivityRequest: ActivityRequestFunction = (payload) => {
    if (socket) {
      console.log(payload);
      if (userType == "client") {
        socket.emit(Events.REQUEST, payload);
      } else {
        socket.on(Events.REQUEST, (data) => {
          console.log(data);
        });
      }
    } else {
      throw new Error("Socket não inicializado");
    }
  };

  const onActivityResponse: ActivityResponseFunction = () => {
    return {} as ResponsePayload;
  };

  return (
    <SocketContext.Provider
      value={{
        initSocket,
        onActivityRequest,
        onActivityResponse,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
