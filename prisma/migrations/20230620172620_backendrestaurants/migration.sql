/*
  Warnings:

  - You are about to drop the column `calification` on the `Foods` table. All the data in the column will be lost.
  - Added the required column `image` to the `Foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Foods" DROP COLUMN "calification",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "qualification" TEXT NOT NULL;
