import UserEmailVerificationUseCase from "./email-verification.usecase";
import UserEmailVerificationController from "./email-verification.controller";
import { prisma } from "../../../database";

export const userEmailVerificationUseCase = new UserEmailVerificationUseCase(
  prisma
);
export const userEmailVeriricationController =
  new UserEmailVerificationController(userEmailVerificationUseCase);
