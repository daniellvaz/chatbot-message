import * as z from "zod";
import { userRegisterSchema } from "./register.schema";

export type RegisterDTO = z.infer<typeof userRegisterSchema>;
