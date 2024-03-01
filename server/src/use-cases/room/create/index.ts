import { prisma } from "../../../database";
import RoomCreateUseCase from "./create.usecase";

export const roomCreateUseCase = new RoomCreateUseCase(prisma);
