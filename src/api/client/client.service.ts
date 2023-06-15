import { PrismaClient } from "@prisma/client";
import { ClientType } from "./client";

const prisma = PrismaClient();

export async function getAllClients() {
  const clients = await prisma.clients.findMany();
  return clients
}

export async function getClientById(id: string) {
  const client = await prisma.clients.findUnique({
    where: {
      id,
    },
  });
    return client;
}

export async function createClient(data: ClientType) {
  const client = await prisma.clients.create({
    data,
  });
    return client;
}

export async function updateClientById(id: string, data: ClientType) {
  const updateclient = await prisma.clients.update({
    where: { id },
    data,
  });
    return updateclient;
}

export async function deleteClientById(id: string) {
  const client = await prisma.clients.delete({
    where: {
      id,
    },
  });
    return client
}
