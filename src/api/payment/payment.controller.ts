const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

async function handlerPayment(req, res) {
  const { amount, paymentMethod } = req.body

  try {
    const { id, card } = paymentMethod

    const payment = await stripe.paymentIntents.create({
      amount,
      paymentMethod: id,
      currency: 'usd',
      description: 'Food Delivery',
    })

    const confirmPayment = await stripe.paymentIntents.confirm(payment.id)

    if (confirmPayment.status === 'succeeded') {
      return res.status(400).json({ message: 'Payment denied' })
    }
      return res.status(200).json({ message: 'Payment successful' })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }

}

module.exports = {
  handlerPayment
}
