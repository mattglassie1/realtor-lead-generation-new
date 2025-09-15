import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { storeLead } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const packagePrices: Record<string, string> = {
  '20-leads': 'price_1S7TqKBWNf0QYApPrBVAllYw123d5umd0o7Pf73WnIxLcCSNTFEFx0mXx6JAISJkESid5Ik8wm3GM5YjYIJqB0Jg00NtL7KbU5',
  '50-leads': 'price_1S7TqKBWNf0QYApPgGXan0143lsC8gHooZeiQHiWRUX0VhvXlTz0GVUdKJkLczUDNMN1lljQwU1b0h32sOrhwILJ005hMVLiwY',
  '100-leads': 'price_1S7TqKBWNf0QYApPwhsec_mc7NkS03gDfoL3sGpRQSnbRjBnYBX8HG'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, brokerage, zipCode, packageType } = body;

    // Store lead in database
    await storeLead({
      name,
      email,
      phone,
      brokerage,
      zipCode,
      packageType,
      status: 'pending'
    });

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        phone,
        brokerage,
        zipCode,
        packageType
      }
    });

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price: packagePrices[packageType],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        leadEmail: email,
        packageType
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}