import cors from "cors";
import express from "express";

import { webRouter } from "./src/routes/web.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(webRouter);

export default app;
