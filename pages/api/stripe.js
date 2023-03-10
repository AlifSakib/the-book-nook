import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1MIu2BJYKMdyVPnVrNNJjR2z",
          },
        ],
        line_items: req.body.map((item) => {
          console.log(item);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: item.image,
              },
              unit_amount: parseInt(item.price.slice(1, -1) * 100),
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      console.log(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
