import * as z from "zod";
import { roomCreateSchema } from "./createSchema";

export type RoomCreateDTO = z.infer<typeof roomCreateSchema>;
