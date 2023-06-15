import { PrismaClient } from "@prisma/client";
import { PedidoType } from "./pedido";

const prisma = new PrismaClient();

export async function getAllPedidos() {
  const pedidos = await prisma.pedidos.findMany();
  return pedidos
}

export async function getPedidoById(id: string) {
  const pedido = await prisma.pedidos.findUnique({
    where: {
      id,
    },
  });
    return pedido;
}

export async function createPedido(data: PedidoType) {
  const pedido = await prisma.pedidos.create({
    data,
  });
    return pedido;
}

export async function updatePedidoById(id: string, data: PedidoType) {
  const updatepedido = await prisma.pedidos.update({
    where: { id },
    data,
  });
    return updatepedido;
}

export async function deletePedidoById(id: string) {
  const pedido = await prisma.pedidos.delete({
    where: {
      id,
    },
  });
    return pedido
}
