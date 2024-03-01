import * as z from "zod";
import { messageCreateSchema } from "./createSchema";

export type MessageCreateDTO = z.infer<typeof messageCreateSchema>;
