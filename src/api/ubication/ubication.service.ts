import { PrismaClient } from "@prisma/client";
import { UbicationType } from "./ubication.type";

const prisma = new PrismaClient();

export async function getAllUbications() {
  const ubications = await prisma.ubications.findMany();
  return ubications
}

export async function getUbicationById(id: string) {
  const ubication = await prisma.ubications.findUnique({
    where: {
      id,
    },
  });
    return ubication;
}

export async function createUbication(data: UbicationType) {
  const ubication = await prisma.ubications.create({
    data,
  });
    return ubication;
}

export async function updateUbicationById(id: string, data: UbicationType) {
  const updateUbication = await prisma.ubications.update({
    where: { id },
    data,
  });
    return updateUbication;
}

export async function deleteUbicationById(id: string) {
  const ubication = await prisma.ubications.delete({
    where: {
      id,
    },
  });
    return ubication
}
