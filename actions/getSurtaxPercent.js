'use server';

import prisma from '@/prisma/database';
import validator from 'validator';

export async function getSurtaxPercent(zipCode) {
  // Validate the input
  if (!zipCode) {
    return { error: 'Zip code is required', rate: 0.0 };
  }

  return await prisma.floridaSalesTax.findUnique({
    where: { zipCode },
    select: {
      rate: true
    }
  });
}