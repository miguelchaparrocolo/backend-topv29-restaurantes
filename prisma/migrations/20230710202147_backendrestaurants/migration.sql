-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "restaurantsId" TEXT,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
