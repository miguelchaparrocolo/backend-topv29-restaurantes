import { PrismaClient } from "@prisma/client";
import { CategoryType } from "./category.type";

const prisma = new PrismaClient();

export async function getAllCategories() {
  const categories = await prisma.categories.findMany();
  return categories
}

export async function getCategoryById(id: string) {
  const category = await prisma.categories.findUnique({
    where: {
      id,
    },
  });
    return category;
}

export async function createCategory(data: CategoryType) {
  const category = await prisma.categories.create({
    data,
  });
    return category;
}

export async function updateCategoryById(id: string, data: CategoryType) {
  const updatecategory = await prisma.categories.update({
    where: { id },
    data,
  });
    return updatecategory;
}

export async function deleteCategoryById(id: string) {
  const category = await prisma.categories.delete({
    where: {
      id,
    },
  });
    return category
}
