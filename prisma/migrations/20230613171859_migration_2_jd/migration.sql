-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country_Id" TEXT NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city_Id" TEXT NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ubications" (
    "id" TEXT NOT NULL,
    "localidad_Id" TEXT NOT NULL,

    CONSTRAINT "Ubications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category_Id" TEXT NOT NULL,
    "calification" TEXT NOT NULL,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "ubication_Id" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "food_Id" TEXT NOT NULL,
    "ubication_Id" TEXT NOT NULL,
    "admin_Id" TEXT NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Details" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "asistentes" TEXT NOT NULL,
    "hora" TEXT NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" TEXT NOT NULL,
    "restaurant_Id" TEXT NOT NULL,
    "detail_Id" TEXT NOT NULL,
    "client_Id" TEXT NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Details_date_key" ON "Details"("date");

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_country_Id_fkey" FOREIGN KEY ("country_Id") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_city_Id_fkey" FOREIGN KEY ("city_Id") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ubications" ADD CONSTRAINT "Ubications_localidad_Id_fkey" FOREIGN KEY ("localidad_Id") REFERENCES "Locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_category_Id_fkey" FOREIGN KEY ("category_Id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_ubication_Id_fkey" FOREIGN KEY ("ubication_Id") REFERENCES "Ubications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_food_Id_fkey" FOREIGN KEY ("food_Id") REFERENCES "Foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_ubication_Id_fkey" FOREIGN KEY ("ubication_Id") REFERENCES "Ubications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_admin_Id_fkey" FOREIGN KEY ("admin_Id") REFERENCES "Admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_restaurant_Id_fkey" FOREIGN KEY ("restaurant_Id") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_detail_Id_fkey" FOREIGN KEY ("detail_Id") REFERENCES "Details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_client_Id_fkey" FOREIGN KEY ("client_Id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
