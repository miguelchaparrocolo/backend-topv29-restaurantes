import { PrismaClient } from '@prisma/client';
import { CityType } from './city';

const prisma = new PrismaClient();

export async function getAllCities() {
  const cities = await prisma.cities.findMany();
  return cities;
}

export async function getCityById(id: string) {
  const city = await prisma.cities.findUnique({
    where: {
      id,
    },
  });
  return city;
}

export async function createCity(data: CityType) {
  const city = await prisma.cities.create({
    data,
  });
  return city;
}

export async function updateCityById(id: string, data: CityType) {
  const updatedCity = await prisma.cities.update({
    where: { id },
    data,
  });
  return updatedCity;
}

export async function deleteCityById(id: string) {
  const city = await prisma.cities.delete({
    where: {
      id,
    },
  });
  return city;
}
