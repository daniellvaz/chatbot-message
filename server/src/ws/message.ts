import { Server } from "socket.io";

import server from "../../server";

import { User } from "../database/Entities/User";
import { Message } from "../database/Entities/Message";

import { roomCreateUseCase } from "../use-cases/room/create";
import { roomMemberUseCase } from "../use-cases/room/members";
import { userRegisterUseCase } from "../use-cases/user/register";
import { messageCreateUseCase } from "../use-cases/message/create";

import { prisma } from "../database";

export const wsServer = new Server(server, {
  cors: {
    origin: ["*", "http://localhost:5173"],
  },
});

interface Join {
  email: string;
  roomId?: string;
}

wsServer.on("connection", async (socket) => {
  console.log("Client connected");

  socket.on("SIGN_IN", async (event) => {
    const data: User = JSON.parse(event);
    const result = await userRegisterUseCase.execute(data);

    server.emit("SUCCESS", JSON.stringify(result));
  });

  socket.on("JOIN_ROOM", async (event) => {
    const data: Join = JSON.parse(event);
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
      include: {
        role: true,
      },
    });

    if (!user) {
      socket.emit("ERROR", "Usuário não encontrado");
      return;
    }

    if (user.role.value === "!USER") {
      if (!data.roomId) {
        socket.emit("ERROR", "É necessário informar a o grupo!");
        return;
      }

      const roomId = data.roomId;
      const userRoom = await roomMemberUseCase.execute({
        roomId,
        userId: user.id,
      });

      socket.emit("SUCCESS", JSON.stringify(userRoom));
    } else {
      const room = await roomCreateUseCase.execute({ name: user.name });
      const userRoom = await roomMemberUseCase.execute({
        roomId: room.id!,
        userId: user.id,
      });

      socket.emit("SUCCESS", JSON.stringify(userRoom));
    }
  });

  socket.on("SEND_MESSAGE", async (event) => {
    const data: Message = JSON.parse(event);

    await messageCreateUseCase.execute(data);
  });

  socket.on("TYPPING", (event) => {
    const { user } = JSON.parse(event);

    socket.emit("TYPPING", `${user} está digitando...`);
  });
});
