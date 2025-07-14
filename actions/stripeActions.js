'use server';

import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
const prisma = new PrismaClient();

export async function createPaymentIntent(amount, orderId, customerId) {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: 'usd',
      metadata: {
        orderId: orderId.toString(),
        customerId: customerId.toString(),
      },
    });

    return {
      success: true,
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error('Error creating payment intent: ', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateOrderStatus(orderId, status, paymentIntentId) {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        // Add paymentIntentId to your Order model if you want to store it
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error updating order status: ', error);
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
}