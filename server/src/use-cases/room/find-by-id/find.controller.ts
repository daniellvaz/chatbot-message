import { Request, Response } from "express";

import RoomFindByIdUseCase from "./find.usecase";

export default class RoomFindByIdController {
  constructor(private find: RoomFindByIdUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.userId;
    const s = await this.find.execute(userId);

    return res.status(200).json(s);
  }
}
