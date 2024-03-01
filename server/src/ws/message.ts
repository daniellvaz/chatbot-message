import jwt from "jsonwebtoken";
import { Server } from "socket.io";

import server from "../../server";
import { env } from "../env";
import { prisma } from "../database";
import { messageCreateUseCase } from "../use-cases/message/create";
import { messageFindUseCase } from "../use-cases/message/find";
import { Message } from "../database/Entities/Message";

export const wsServer = new Server(server, {
  cors: {
    origin: "*",
  },
});

wsServer.on("connection", async (socket) => {
  const { token } = socket.handshake.auth;

  if (!token) {
    socket.emit("error", "Usuário não autorizado");
    return;
  }

  const userId = jwt.verify(token, env.API_SECRET_KEY).toString();
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    socket.emit("error", "Usuário não autorizado");
    return;
  }

  const messages = await messageFindUseCase.execute(userId);

  socket.join(user.id);
  socket.to(user.id).emit("success", JSON.stringify(messages));

  socket.on("message", async (event) => {
    const data: Message = JSON.parse(event);

    const message = await messageCreateUseCase.execute({
      content: data.content,
      userId: user.id,
    });

    socket.to(data.room).emit(JSON.stringify(message));
  });
});
