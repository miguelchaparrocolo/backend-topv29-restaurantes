import { Request, Response, NextFunction } from 'express';
import { createPayments } from './payment.service';

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handlerPayment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { amount, paymentMethod } = req.body;

  try {
    console.log(
      '🚀 ~ file: payment.controller.ts:16 ~ paymentMethod:',
      paymentMethod
    );
    const { id, card } = paymentMethod;

    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: 'usd',
      description: 'Food Delivery',
    });

    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status === 'succeeded') {
      // await createPayments(payment);

      return res.status(200).json({ message: 'Payment successful', payment });
    }
    return res.status(400).json({ message: 'Payment denied' });
  } catch (error) {
    return next(error);
  }
}
