'use server';

import prisma from '@/prisma/database';

export async function getTaxesAndTotal(state, zipCode, subtotal) {
  try {
    // Base Florida state tax
    const baseStateTaxRate = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);

    // Find county-specific tax rate
    const countyTax = await prisma.floridaSalesTax.findFirst({
      where: {
        zipCode: parseInt(zipCode)
      }
    });

    let stateTax = subtotal * baseStateTaxRate;
    let surtax = 0;
    let totalTaxRate = baseStateTaxRate;

    if (countyTax) {
      // County surtax is in addition to state tax
      surtax = subtotal * countyTax.rate;
      totalTaxRate = baseStateTaxRate + countyTax.rate;
    }

    const total = subtotal + stateTax + surtax;

    return {
      success: true,
      subtotal: parseFloat(subtotal),
      stateTax: parseFloat(stateTax.toFixed(2)),
      surtax: parseFloat(surtax.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      taxRate: parseFloat(totalTaxRate.toFixed(4))
    };

  } catch (error) {
    console.error('Error calculating taxes:', error);
    return {
      success: false,
      error: error.message
    };
  } finally {
    await prisma.$disconnect();
  }
}