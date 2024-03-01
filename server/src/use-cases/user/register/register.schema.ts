import * as z from "zod";

export const userRegisterSchema = z.object({
  name: z
    .string({ required_error: "O campo nome é obrigatório" })
    .min(3, "O campo nome deve ter no mínimo 3 caracteres"),
  email: z
    .string({ required_error: "O campo e-mail é obrigatório" })
    .email("insira um e-mail válido"),
});
