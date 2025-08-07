'use server';

import { customAlphabet } from 'nanoid';
import prisma from '@/prisma/database';

const nanoid = customAlphabet('23456789ABCDEFGHJKLMNPQRSTUVWXYZ', 10);

export async function generateUniqueOrderNumber(maxAttempts = 5) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const orderNumber = nanoid();
    const existingOrder = await prisma.order.findUnique({
      where: { orderNumber }
    });

    if (!existingOrder) {
      return orderNumber;
    }

    console.warn(`Order number collision detected: ${orderNumber}, attempt ${attempt + 1}`);
  }

  throw new Error('Failed to generate unique order number after maximum attempts');
}