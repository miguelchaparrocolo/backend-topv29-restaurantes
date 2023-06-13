import { PrismaClient } from '@prisma/client';
import { LocationType } from './location.type';

const prisma = new PrismaClient();

export async function getAllLocations() {
  const locations = await prisma.locations.findMany();
  return locations;
}

export async function getLocationById(id: string) {
  const location = await prisma.locations.findUnique({
    where: {
      id,
    },
  });
  return location;
}

export async function createLocation(data: LocationType) {
  const location = await prisma.locations.create({
    data,
  });
  return location;
}

export async function updateLocationById(id: string, data: LocationType) {
  const updatedLocation = await prisma.locations.update({
    where: { id },
    data,
  });
  return updatedLocation;
}

export async function deleteLocationById(id: string) {
  const location = await prisma.locations.delete({
    where: {
      id,
    },
  });
  return location;
}
