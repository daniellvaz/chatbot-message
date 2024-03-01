import { PrismaClient } from "@prisma/client";
import RequestError from "../../../handler/RequestError";
import { Room } from "../../../database/Entities/Room";

export default class RoomFindUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(id: string): Promise<Room> {
    const result = await this.prisma.roomUsers.findUnique({
      where: {
        id,
      },
      select: {
        room: {
          select: {
            id: true,
            name: true,
            messages: true,
          },
        },
      },
    });

    if (!result) {
      throw new RequestError("O usuário não possui messagesn");
    }

    return result.room;
  }
}
