import { PrismaClient } from "@prisma/client";
import { FoodType } from "./food";

const prisma = new PrismaClient();

export async function getAllFoods() {
  const foods = await prisma.foods.findMany();
  return foods
}

export async function getFoodById(id: string) {
  const food = await prisma.foods.findUnique({
    where: {
      id,
    },
  });
    return food;
}

export async function createFood(data: FoodType) {
  const food = await prisma.foods.create({
    data,
  });
    return food;
}

export async function updateFoodById(id: string, data: FoodType) {
  const updatefood = await prisma.foods.update({
    where: { id },
    data,

  });
    return updatefood;
}

export async function deleteFoodById(id: string) {
  const food = await prisma.foods.delete({
    where: {
      id,
    },
  });
    return food
}
