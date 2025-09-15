import { NextRequest, NextResponse } from 'next/server';
import { createStripeCustomer, createCheckoutSession } from '@/lib/stripe';
import { createRealtorLead, initializeDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    
    const { name, email, phone, brokerage, zipCode, packageType } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !brokerage || !zipCode || !packageType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create Stripe customer
    const customer = await createStripeCustomer(email, name);

    // Save lead to database
    const lead = await createRealtorLead({
      name,
      email,
      phone,
      brokerage,
      zip_code: zipCode,
      package_type: packageType,
      stripe_customer_id: customer.id,
    });

    // Create checkout session
    const session = await createCheckoutSession(
      customer.id,
      packageType as any,
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`
    );

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
