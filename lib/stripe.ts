import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export const PACKAGE_PRICES = {
  '20-leads': {
    name: '20 Leads per Month',
    price: 44900, // $449.00 in cents
    description: '20 high-quality real estate leads delivered monthly'
  },
  '50-leads': {
    name: '50 Leads per Month', 
    price: 69900, // $699.00 in cents
    description: '50 high-quality real estate leads delivered monthly'
  },
  '100-leads': {
    name: '100 Leads per Month',
    price: 129900, // $1,299.00 in cents
    description: '100 high-quality real estate leads delivered monthly'
  }
};

export async function createStripeCustomer(email: string, name: string) {
  return await stripe.customers.create({
    email,
    name,
  });
}

export async function createCheckoutSession(
  customerId: string,
  packageType: keyof typeof PACKAGE_PRICES,
  successUrl: string,
  cancelUrl: string
) {
  const packageInfo = PACKAGE_PRICES[packageType];
  
  return await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: packageInfo.name,
            description: packageInfo.description,
          },
          unit_amount: packageInfo.price,
          recurring: {
            interval: 'month',
          },
        },
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      package_type: packageType,
    },
  });
}

export default stripe;
