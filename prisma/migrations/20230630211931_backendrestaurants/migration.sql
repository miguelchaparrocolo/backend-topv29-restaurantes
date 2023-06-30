/*
  Warnings:

  - You are about to drop the column `qualification` on the `Foods` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `Restaurants` table. All the data in the column will be lost.
  - Added the required column `rate` to the `Foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodtype` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedules` to the `Restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Foods" DROP COLUMN "qualification",
ADD COLUMN     "rate" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurants" DROP COLUMN "direccion",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "foodtype" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "schedules" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
