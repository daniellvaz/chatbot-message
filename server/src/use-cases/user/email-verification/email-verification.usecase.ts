import { PrismaClient } from "@prisma/client";
import RequestError from "../../../handler/RequestError";
import { User } from "../../../database/Entities/User";

export default class UserEmailVerificationUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new RequestError(
        "O usuário informado não existe",
        400,
        "Bad Request"
      );
    }

    const updatedUser = await this.prisma.user.update({
      data: {
        verifiedAt: new Date(),
      },
      where: {
        id,
      },
    });

    return updatedUser;
  }
}
