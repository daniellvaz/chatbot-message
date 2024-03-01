import { PrismaClient } from "@prisma/client";
import { MessageCreateDTO } from "./create.dto";
import { messageCreateSchema } from "./createSchema";
import { Message } from "../../../database/Entities/Message";

export default class MessageCreateUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(data: MessageCreateDTO): Promise<Message> {
    const message = messageCreateSchema.parse(data);
    const newMessage = new Message(message);

    const result = await this.prisma.message.create({
      data: newMessage,
    });

    return result;
  }
}
