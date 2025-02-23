import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST"],
  },
});

const usersocketMap = {}; //{user_id:socket_id}

export const getReceiverSocketID = (recevierId) => {
  return usersocketMap[recevierId];
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId !== "undefined") {
    usersocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(usersocketMap));

  //socket.on is used to listen the events on both side client and server
  socket.on("disconnect", () => {
    delete usersocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(usersocketMap));
  });
});

export { app, server, io };
