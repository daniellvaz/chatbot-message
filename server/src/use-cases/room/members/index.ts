import { prisma } from "../../../database";
import RoomMembersUseCase from "./members.usecase";

export const roomMemberUseCase = new RoomMembersUseCase(prisma);
