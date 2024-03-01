import { Router } from "express";
import { userRegisterController } from "../use-cases/user/register";
import { messageFindController } from "../use-cases/message/find";
import ensureAuthenticated from "../middlewares/ensure-authenticated";
import { userEmailVeriricationController } from "../use-cases/user/email-verification";

export const apiRouter = Router();

apiRouter
  .get("/messages", ensureAuthenticated, (req, res) =>
    messageFindController.execute(req, res)
  )
  .post("/user", (req, res) => userRegisterController.execute(req, res))
  .get("/user/verify/:id", (req, res) =>
    userEmailVeriricationController.execute(req, res)
  );