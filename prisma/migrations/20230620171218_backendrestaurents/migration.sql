/*
  Warnings:

  - You are about to drop the column `country_Id` on the `Cities` table. All the data in the column will be lost.
  - You are about to drop the column `category_Id` on the `Foods` table. All the data in the column will be lost.
  - You are about to drop the column `city_Id` on the `Locations` table. All the data in the column will be lost.
  - You are about to drop the column `client_Id` on the `Pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `detail_Id` on the `Pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_Id` on the `Pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `admin_Id` on the `Restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `food_Id` on the `Restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `ubication_Id` on the `Restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `localidad_Id` on the `Ubications` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Details` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `UserRole` required. This step will fail if there are existing NULL values in that column.
  - Made the column `roleId` on table `UserRole` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cities" DROP CONSTRAINT "Cities_country_Id_fkey";

-- DropForeignKey
ALTER TABLE "Foods" DROP CONSTRAINT "Foods_category_Id_fkey";

-- DropForeignKey
ALTER TABLE "Locations" DROP CONSTRAINT "Locations_city_Id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_client_Id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_detail_Id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_restaurant_Id_fkey";

-- DropForeignKey
ALTER TABLE "Restaurants" DROP CONSTRAINT "Restaurants_admin_Id_fkey";

-- DropForeignKey
ALTER TABLE "Restaurants" DROP CONSTRAINT "Restaurants_food_Id_fkey";

-- DropForeignKey
ALTER TABLE "Restaurants" DROP CONSTRAINT "Restaurants_ubication_Id_fkey";

-- DropForeignKey
ALTER TABLE "Ubications" DROP CONSTRAINT "Ubications_localidad_Id_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_ubication_Id_fkey";

-- AlterTable
ALTER TABLE "Cities" DROP COLUMN "country_Id";

-- AlterTable
ALTER TABLE "Details" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Foods" DROP COLUMN "category_Id";

-- AlterTable
ALTER TABLE "Locations" DROP COLUMN "city_Id";

-- AlterTable
ALTER TABLE "Pedidos" DROP COLUMN "client_Id",
DROP COLUMN "detail_Id",
DROP COLUMN "restaurant_Id";

-- AlterTable
ALTER TABLE "Restaurants" DROP COLUMN "admin_Id",
DROP COLUMN "food_Id",
DROP COLUMN "ubication_Id";

-- AlterTable
ALTER TABLE "Ubications" DROP COLUMN "localidad_Id";

-- AlterTable
ALTER TABLE "UserRole" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "roleId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
