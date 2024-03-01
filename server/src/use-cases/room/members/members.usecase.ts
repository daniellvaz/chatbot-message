import { PrismaClient } from "@prisma/client";

import { MemberDTO } from "./member.dto";
import { RoomUser } from "../../../database/Entities/RoomUser";

export default class RoomMembersUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(data: MemberDTO): Promise<RoomUser> {
    const member = new RoomUser(data);
    const findMembers = await this.prisma.roomUsers.findFirst({
      where: {
        userId: data.userId,
        AND: {
          roomId: data.roomId,
        },
      },
    });

    if (findMembers) {
      return findMembers;
    }

    const result = await this.prisma.roomUsers.create({
      data: member,
    });

    return result;
  }
}
