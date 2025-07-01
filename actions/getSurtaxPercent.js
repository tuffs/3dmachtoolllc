'use server';

/*
  @@ Server Action getSurtaxPercent:

  -- This must be used to get the tax rate based on a Florida Zip Code.
  
  -- If no Florida Zip Code is provided:
    -- an Effective Tax Rate will be returned as 0.00 for an out of state sale.
  
    -- If an invalid Zip Code is provided:
    -- an error message will be returned and the Effective Tax Rate will still be 0.00.

    RETURNS:
      surtax: float
      finalMultiplier: float
*/

import prisma from '@/prisma/database';
import validator from 'validator';

export async function getSurtaxPercent(zipCode) {
  // Validate zipCode is provided
  // If not provided, error returned and zeroed out sales tax surtax and finalMultiplier
  if (!zipCode) {
    return { error: 'You must provide a zip code to proceed.', surtax: 0.00, finalMultiplier: 0.00 };
  }

  // Parse Integer from zipCode and validate
  // Not meeting requirements will return an error and zero out the sales tax
  const zipCodeInt = parseInt(zipCode, 10);
  if (isNaN(zipCodeInt) || !validator.isPostalCode(zipCode.toString(), 'US')) {
    return { error: 'You have entered an invalid U.S. postal code.', surtax: 0.0, finalMultiplier: 0.00 };
  }

  try {
    const taxRecord = await prisma.floridaSalesTax.findFirst({
      where: { zipCode: zipCodeInt },
      select: { rate: true },
    });

    const baseRate = parseFloat((process.env.STATE_TAX || '6.00') / 100);

    if (!taxRecord) {
      // This happens when there is no surtax based on the zip code (Outside of Florida)
      return { error: 'No surtax found for this zip code', surtax: 0.00, finalMultiplier: 0.00 };
    }

    const surtax = taxRecord.rate;
    const totalRate = baseRate + surtax;
    return { surtax, finalMultiplier: 1 + totalRate }; // e.g. 1 + (0.06 + 0.015) = 1.075
  } catch (error) {
    console.error('Error fetching surtax rate:', error);
    return { error: 'Failed to fetch surtax rate', surtax: 0.0, finalMultiplier: 0.00 };
  }
}