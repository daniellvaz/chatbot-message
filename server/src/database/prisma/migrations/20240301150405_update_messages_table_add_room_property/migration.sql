/*
  Warnings:

  - You are about to drop the column `user_id` on the `messages` table. All the data in the column will be lost.
  - Added the required column `room` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_user_id_fkey";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "user_id",
ADD COLUMN     "room" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_room_fkey" FOREIGN KEY ("room") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
