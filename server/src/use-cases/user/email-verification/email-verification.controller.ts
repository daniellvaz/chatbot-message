import { Request, Response } from "express";
import UserEmailVerificationUseCase from "./email-verification.usecase";
import { env } from "../../../env";

export default class UserEmailVerificationController {
  constructor(
    private userEmailVerificationUsecase: UserEmailVerificationUseCase
  ) {}

  async execute(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.userEmailVerificationUsecase.execute(id);

    res.redirect(301, env.REDIRECT_URL);
  }
}
