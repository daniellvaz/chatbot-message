import { Request, Response } from "express";

import MessageFindUseCase from "./find.usecase";

export default class MessageFindController {
  constructor(private findMessages: MessageFindUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.userId;
    const messages = await this.findMessages.execute(userId);

    return res.status(200).json(messages);
  }
}
