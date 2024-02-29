import { Request, Response } from "express";
import { FindMessagesUseCase } from "./find.usecase";

export class FindMessagesController {
  constructor(private findMessages: FindMessagesUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({});
  }
}
