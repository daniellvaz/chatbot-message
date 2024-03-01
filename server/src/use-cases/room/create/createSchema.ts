import * as z from "zod";

export const roomCreateSchema = z.object({
  name: z.string({ required_error: "Usuário não autorizado" }),
});
