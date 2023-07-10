import { PrismaClient } from "@prisma/client";
import { RestaurantType } from "./restaurant.type";

const prisma = new PrismaClient();

export async function getAllRestaurants() {
  const restaurants = await prisma.restaurants.findMany({
    include:{
      food:{
        select:{
          id:   true,
          name: true,
          price: true,
          image: true,
          rate: true
        }
      },
     Categories:{
      select:{
        name:true
      }

     },
     gallery:{
      select:{
        name:true
      }

    }
  }
  });
  return restaurants
}

export async function getRestaurantById(id: string) {
  const restaurant = await prisma.restaurants.findUnique({
    where: {
      id,
    },
    include: {
      food: true,
    },

  });
    return restaurant;
}

export async function createRestaurant(data: RestaurantType) {
  const restaurant = await prisma.restaurants.create({
    data,
  });
    return restaurant;
}

export async function updateRestaurantById(id: string, data: RestaurantType) {
  const updaterestaurant = await prisma.restaurants.update({
    where: { id },
    data,


  });
    return updaterestaurant;
}

export async function deleteRestaurantById(id: string) {
  const restaurant = await prisma.restaurants.delete({
    where: {
      id,
    },
  });
    return restaurant
}
