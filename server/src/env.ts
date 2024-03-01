import * as z from "zod";

export const envSchema = z.object({
  PORT: z.string(),
  API_SECRET_KEY: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
