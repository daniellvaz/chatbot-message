import { PrismaClient } from "@prisma/client";

import { RoomCreateDTO } from "./create.dto";
import { roomCreateSchema } from "./createSchema";
import { Room } from "../../../database/Entities/Room";

export default class RoomCreateUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(data: RoomCreateDTO): Promise<Room> {
    const room = roomCreateSchema.parse(data);
    const newRoom = new Room(room);

    const roomAlreadyExists = await this.prisma.room.findFirst({
      where: {
        name: newRoom.name,
      },
    });

    if (roomAlreadyExists) {
      return roomAlreadyExists;
    }

    const result = await this.prisma.room.create({
      data: {
        name: newRoom.name,
      },
    });

    return result;
  }
}
