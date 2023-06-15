import { PrismaClient } from "@prisma/client";
import { AdminType } from "./admin";

const prisma = PrismaClient();

export async function getAllAdmins() {
  const admins = await prisma.admins.findMany();
  return admins
}

export async function getAdminById(id: string) {
  const admin = await prisma.admins.findUnique({
    where: {
      id,
    },
  });
    return admin;
}

export async function createAdmin(data: AdminType) {
  const admin = await prisma.admins.create({
    data,
  });
    return admin;
}

export async function updateAdminById(id: string, data: AdminType) {
  const updateadmin = await prisma.admins.update({
    where: { id },
    data,
  });
    return updateadmin;
}

export async function deleteAdminById(id: string) {
  const admin = await prisma.admins.delete({
    where: {
      id,
    },
  });
    return admin
}
