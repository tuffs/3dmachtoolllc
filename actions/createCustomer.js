'use server';

import prisma from '@/prisma/database';

export async function createCustomer({ email, name, password }) {
  try {
    // If password is not provided, treat as guest
    const customer = await prisma.customer.create({
      data: {
        email,
        name,
        password: password || '', // Store empty string for guest
      },
    });
    return { success: true, customer };
  } catch (error) {
    if (error.code === 'P2002') {
      return { success: false, error: 'Email already exists.' };
    }
    return { success: false, error: error.message };
  }
}