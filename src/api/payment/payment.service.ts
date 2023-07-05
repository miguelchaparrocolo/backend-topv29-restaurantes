import { PrismaClient } from "@prisma/client";
import { PaymentType } from "./payment.type";

const prisma = new PrismaClient();

export async function createPayments(data: PaymentType) {
  const payment = await prisma.payments.create({
    data,
  });
  return payment;
}

