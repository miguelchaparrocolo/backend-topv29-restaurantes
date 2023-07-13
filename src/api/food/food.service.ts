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

export async function createFood(data: FoodType, ) {
  const restauranteId = data.restaurantsId as string;

  const food = await prisma.foods.create({

    data: {
      name: data.name,
      price: data.price,
      image: data.image,
      rate: data.rate,

      Restaurants: {
        connect: { id: restauranteId }
      }
    }
  });
    return food;
}

export async function updateFoodById(id: string, data: FoodType) {
  const restauranteId = data.restaurantsId as string;
  const updatefood = await prisma.foods.update({
    where: { id },
    data: {
      name: data.name,
      price: data.price,
      image: data.image,
      rate: data.rate,

      Restaurants: {
        connect: { id: restauranteId }
      }
    }

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
