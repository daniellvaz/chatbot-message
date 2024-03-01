import jwt from "jsonwebtoken";
import { Server } from "socket.io";

import server from "../../server";
import { env } from "../env";
import { prisma } from "../database";
import { messageCreateUseCase } from "../use-cases/message/create";
import { messageFindUseCase } from "../use-cases/message/find";
import { Message } from "../database/Entities/Message";
import { roomCreateUseCase } from "../use-cases/room/create";
import { roomMemberUseCase } from "../use-cases/room/members";

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

  const room = await roomCreateUseCase.execute({ name: user.name });

  socket.join(room.name);

  socket.on("message", async (event) => {
    const { content } = JSON.parse(event);

    await messageCreateUseCase.execute({
      content,
      roomId: room.id!,
    });

    await roomMemberUseCase.execute({
      roomId: room.id!,
      userId: user.id,
    });
  });
});
