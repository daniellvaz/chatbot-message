import "express-async-errors";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { apiRouter } from "./src/routes/api.routes";

import RequestError from "./src/handler/RequestError";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", apiRouter);

app.use(
  (error: RequestError, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      return res.status(error.status || 500).json({ message: error.message });
    }

    next();
  }
);

export default app;
