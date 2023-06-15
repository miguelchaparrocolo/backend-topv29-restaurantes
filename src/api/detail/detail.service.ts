import { PrismaClient } from "@prisma/client";
import { DetailType } from "./detail";

const prisma = PrismaClient();

export async function getAllDetails() {
  const details = await prisma.details.findMany();
  return details
}

export async function getDetailById(id: string) {
  const detail = await prisma.details.findUnique({
    where: {
      id,
    },
  });
    return detail;
}

export async function createDetail(data: DetailType) {
  const detail = await prisma.details.create({
    data,
  });
    return detail;
}

export async function updateDetailById(id: string, data: DetailType) {
  const updatedetail = await prisma.details.update({
    where: { id },
    data,
  });
    return updatedetail;
}

export async function deleteDetailById(id: string) {
  const detail = await prisma.details.delete({
    where: {
      id,
    },
  });
    return detail
}
