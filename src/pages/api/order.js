const stripe = require('stripe')(process.env.STRIPE_SECRET);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { productId, plan } = req.body;

    let price;
    switch (productId) {
      case 0:
        price = plan === 'annually' ? 'price_1NDXE8KdlvdEYUMxMZHkOcqd' : 'price_1NDXClKdlvdEYUMxsy7FHkAj';
        break;
      case 1:
        price = plan === 'annually' ? 'price_1NDYMsKdlvdEYUMxwx4onPBd' : 'price_1NDYN8KdlvdEYUMxqZwfRRcV';
        break;
      case 2:
        price = plan === 'annually' ? 'price_1NDYNsKdlvdEYUMx77G8unyd' : 'price_1NDYNeKdlvdEYUMxaeYJjMDK';
        break;
      default:
        price = 'default_price';
        break;
    }

    const successUrl = `${process.env.URL}/success`;
const cancelUrl = `${process.env.URL}/cancel`;

    const stripeObj = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      payment_method_types: ['card', 'p24', 'blik', 'paypal'],
      line_items: [{ price, quantity: 1 }],
      mode: 'payment',
    });

    res.status(200).json(stripeObj);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
