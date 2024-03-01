import { prisma } from "../../../database";
import MessageCreateUseCase from "./create.usecase";

export const messageCreateUseCase = new MessageCreateUseCase(prisma);
