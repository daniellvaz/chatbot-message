import { PrismaClient } from "@prisma/client";
import { Message } from "../../../database/Entities/Message";

export default class MessageFindUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(userId: string): Promise<Message[]> {
    const result = await this.prisma.message.findMany({
      where: {
        userId,
      },
    });

    return result;
  }
}
