import { useEffect, useState } from "react";
import SocketIOClient, { Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

// const socket = io();
const socket = SocketIOClient(process.env.BASE_URL, {
  path: "/api/socketio",
});

socket.on("connect", () => {
  console.log("SOCKET CONNECTED!", socket.id);
});

// const socket2 = SocketIOClient(process.env.BASE_URL, {
//   path: "/api/socketio",
// });

// socket2.on("message", (message) => {
//   console.log("message", message);
// });

// setTimeout(() => {
//   socket2.emit("message", {
//     id: uuidv4(),
//     from: "user",
//     date: "2021-10-22 14:00:00",
//     message: "Olá, está me vendo?",
//   });
// }, 4000);

const useSocket = (cb?: (socket: Socket) => void) => {
  const [activeSocket, setActiveSocket] = useState(null);

  useEffect(() => {
    // debug("Socket updated", { socket, activeSocket });
    if (activeSocket || !socket) return;
    cb && cb(socket);
    setActiveSocket(socket);
    return function cleanup() {
      // debug("Running useSocket cleanup", { socket });
      socket.off("message", cb);
    };
  }, [socket]);

  return activeSocket;
};

export default useSocket;
