import UserRegisterUseCase from "./register.usecase";
import UserRegisterController from "./register.controller";

import { userRegisterSchema } from "./register.schema";

import { prisma } from "../../../database";
import Email from "../../../handler/Email";

const email = new Email();
export const userRegisterUseCase = new UserRegisterUseCase(
  userRegisterSchema,
  prisma,
  email
);
export const userRegisterController = new UserRegisterController(
  userRegisterUseCase
);
