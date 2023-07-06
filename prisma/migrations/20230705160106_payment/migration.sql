/*
  Warnings:

  - Added the required column `cardBrand` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardCvc` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardExpMonth` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardExpYear` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardPostalCode` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "cardBrand" TEXT NOT NULL,
ADD COLUMN     "cardCvc" TEXT NOT NULL,
ADD COLUMN     "cardExpMonth" TEXT NOT NULL,
ADD COLUMN     "cardExpYear" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "cardPostalCode" TEXT NOT NULL;
