'use server';

import prisma from '@/prisma/database';

export async function signInCustomer({ email, password }) {
  try {
    const customer = await prisma.customer.findUnique({ where: { email } });

    if (!customer) {
      return { success: false, error: 'No customer found with that email.' };
    }

    // For guest checkout, password may be empty
    if (customer.password && customer.password !== password) {
      return { success: false, error: 'Incorrect password.' };
    }

    return { success: true, customer };
  } catch (error) {
    return { success: false, error: error.message };
  }
}