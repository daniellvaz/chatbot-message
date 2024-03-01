import RoomFindByIdUseCase from "./find.usecase";
import RoomFindByIdController from "./find.controller";

import { prisma } from "../../../database";

export const roomFindByIdUseCase = new RoomFindByIdUseCase(prisma);
export const roomFindByIdController = new RoomFindByIdController(
  roomFindByIdUseCase
);
