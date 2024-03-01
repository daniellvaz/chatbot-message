import * as z from "zod";

export const memberSchema = z.object({
  userId: z.string().cuid(),
  roomId: z.string().cuid(),
});
