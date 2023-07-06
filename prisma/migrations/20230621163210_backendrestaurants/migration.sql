/*
  Warnings:

  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Foods" ADD COLUMN     "restaurantsId" TEXT;

-- DropTable
DROP TABLE "Admins";

-- DropTable
DROP TABLE "clients";

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
