import { PrismaClient } from "@prisma/client";

import { User } from "../../../database/Entities/User";
import { RegisterDTO } from "./register.dto";
import { ZodType } from "zod";
import Email from "../../../handler/Email";
import { env } from "../../../env";

export default class UserRegisterUseCase {
  constructor(
    private userRegisterSchema: ZodType<RegisterDTO>,
    private prisma: PrismaClient,
    private email: Email
  ) {}

  async execute(data: RegisterDTO): Promise<User> {
    const user = this.userRegisterSchema.parse(data);
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    const role = await this.prisma.role.findUnique({
      where: {
        value: "manager",
      },
    });

    if (!role) {
      throw new Error("Erro ao criar o usuário");
    }

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const newUser = new User({
      ...user,
      roleId: role.id,
    });

    const result = await this.prisma.user.create({
      data: newUser,
    });

    await this.email.send({
      from: "daniellmurilo@yahoo.com.br",
      to: user.email,
      subject: "Verificação de e-mail",
      html: `
        <h1>Verifique seu e-mail</h1>
        <p>Olá ${result.name}! Por favor, clique no link abaixo para verificar seu e-mail</p>

        <a href="http://localhost:3333/api/user/verify/${result.id}?redirect_url=${env.REDIRECT_URL}">
          Clique aqui
        </a>
      `,
    });

    return result;
  }
}
