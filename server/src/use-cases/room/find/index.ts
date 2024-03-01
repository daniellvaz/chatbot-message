import MessageFindUseCase from "./find.usecase";
import MessageFindController from "./find.controller";

import { prisma } from "../../../database";

export const messageFindUseCase = new MessageFindUseCase(prisma);
export const messageFindController = new MessageFindController(
  messageFindUseCase
);
