import path from "node:path";
import { Router } from "express";

export const webRouter = Router();

webRouter.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  return res.render(path.resolve(__dirname, "../../public/index.html"));
});
