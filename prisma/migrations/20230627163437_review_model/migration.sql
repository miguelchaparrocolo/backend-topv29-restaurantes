-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "restaurantsId" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
