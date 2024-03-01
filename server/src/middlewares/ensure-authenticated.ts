import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import RequestError from "../handler/RequestError";

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new RequestError("Usuário não autorizado", 401, "Not Authorized");
  }

  const [_, token] = bearerToken.split(" ");

  if (!token) {
    throw new RequestError("Usuário não autorizado", 401, "Not Authorized");
  }

  const userId = jwt.decode(token);

  if (!userId) {
    throw new RequestError("Usuário não autorizado", 401, "Not Authorized");
  }

  res.locals.userId = userId;

  next();
}
