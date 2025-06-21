'use server';

import prisma from '@/prisma/database';
import validator from 'validator';

export async function getSurtaxPercent(zipCode) {
  // Validate the input
  if (!zipCode) {
    return { error: 'Zip code is required', rate: 0.0 };
  }

  // Convert zip code to integer and validate formatting
  const zipCodeInt = parseInt(zipCode, 10);
  if (isNaN(zipCodeInt) || !validator.isPostalCode(zipCode.toString(), 'US')) {
    return { error: 'Invalid zip code format', rate: 0.0 };
  }

  try {
    // Query the database for the tax rate
    const taxRecord = await prisma.floridaSalesTax.findFirst({
      where: { zipCode: zipCodeInt },
      select: { rate: true },
    });

    // Return the rate if found, otherwise return 0.0 with a message
    if (!taxRecord) {
      return { error: 'No tax rate found for this zip code', rate: 0.0 };
    }

    return { rate: taxRecord.rate };
  } catch (error) {
    console.error('Error fetching surtax rate:', error);
    return { error: 'Failed to fetch tax rate', rate: 0.0 };
  }
}