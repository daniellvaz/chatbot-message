import * as z from "zod";

export const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  APP_URL: z.string(),
  API_SECRET_KEY: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_URL: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
