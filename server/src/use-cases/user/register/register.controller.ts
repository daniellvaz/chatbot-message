import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import UserRegisterUseCase from "./register.usecase";
import { env } from "../../../env";

export default class UserRegisterController {
  constructor(private userRegisterUseCase: UserRegisterUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const user = await this.userRegisterUseCase.execute({ name, email });
    const token = jwt.sign(user.id!, env.API_SECRET_KEY);

    return res.status(201).json({ user, token });
  }
}
