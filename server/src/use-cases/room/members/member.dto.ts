import { memberSchema } from "./memberSchema";
import * as z from "zod";

export type MemberDTO = z.infer<typeof memberSchema>;
