import { PrismaClient } from '@prisma/client';
import { CountryType } from './country.type';

const prisma = new PrismaClient();

export async function getAllCountries() {
  const countries = await prisma.countries.findMany();
  return countries;
}

export async function getCountryById(id: string) {
  const country = await prisma.countries.findUnique({
    where: {
      id,
    },
  });
  return country;
}

export async function createCountry(data: CountryType) {
  const country = await prisma.countries.create({
    data,
  });
  return country;
}

export async function updateCountryById(id: string, data: CountryType) {
  const updatedCountry = await prisma.countries.update({
    where: { id },
    data,
  });
  return updatedCountry;
}

export async function deleteCountryById(id: string) {
  const country = await prisma.countries.delete({
    where: {
      id,
    },
  });
  return country;
}
