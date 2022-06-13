import React, { createContext, FC, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../../API/apiConfig";
import useAuth from "../../hooks/useAuth";
import {
  ActivityRequestFunction,
  ActivityResponseFunction,
  Events,
  ResponsePayload,
  SocketContextTypes,
} from "./types";

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

  const onActivityResponse: ActivityResponseFunction = (payload) => {
    if (!socket) throw new Error("Socket não inicializado");
    console.log(payload);
    if (userType == "provider") {
      socket.emit(Events.RESPONSE, payload);
    } else {
      socket.on(Events.RESPONSE, (data) => {
        console.log("Socket response", data);
      });
    }
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
