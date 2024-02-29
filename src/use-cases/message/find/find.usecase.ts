import { PrismaClient } from "@prisma/client";
import { Message } from "../../../database/Entities/Message";

export class FindMessagesUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(): Promise<Message[]> {
    return [];
  }
}
