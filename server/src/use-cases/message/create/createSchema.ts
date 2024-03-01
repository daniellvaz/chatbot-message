import * as z from "zod";

export const messageCreateSchema = z.object({
  content: z.string({ required_error: "O campo conteúdo é obrigatório" }),
  roomId: z
    .string({ required_error: "Usuário não autorizado" })
    .cuid("Usuário não autorizado"),
});
