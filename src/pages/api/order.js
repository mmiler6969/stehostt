// const stripe = require('stripe')(process.env.STRIPE_SECRET);

// export default async (req,res) => {
//   res.statusCode=200

//   const stripeObj = await stripe.checkout.sessions.create({
//     success_url: 'https://localhost:3000/success',
//     cancel_url: 'https://localhost:3000/cancel',
//     payment_method_types: ['card','p24'],
//     line_items: [
//       {price: 'price_H5ggYwtDq4fbrJ', quantity: 2},
//     ],
//     mode: 'payment',
//   });
// }

