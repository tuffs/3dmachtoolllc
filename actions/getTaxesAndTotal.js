'use server'

import { getSurtaxPercent } from '@/actions/getSurtaxPercent';

export async function getTaxesAndTotal(state, zipCode, pre_tax_subtotal) {
  try {

    // Base State Tax Rate - convert to number
    const stateTax = parseFloat(process.env.STATE_TAX) || 0.06;

    // Fetch the surtax if needed
    if (state === 'FL' && zipCode.length === 5) {
      let surtaxData;

      try {
        surtaxData = await getSurtaxPercent(zipCode);
      } catch (error) {
        return { success: false, error: "There was an error fetching the surtax data." };
      }

      if (surtaxData.success) {
        const surtax = parseFloat(surtaxData.surtax) || 0;
        const taxRate = stateTax + surtax;
        const total = parseFloat((pre_tax_subtotal + (pre_tax_subtotal * taxRate)).toFixed(2));

        return {
          success: true,
          surtax,
          stateTax,
          taxRate,
          subtotal: pre_tax_subtotal,
          total,
        };
      } else {
        return { success: false, error: "Error fetching surtax data." };
      }
    } else if (state !== 'FL') {
      return {
        success: true,
        surtax: 0,
        stateTax: 0.06,
        taxRate: 0.06,
        subtotal: pre_tax_subtotal,
        total: parseFloat(pre_tax_subtotal + (pre_tax_subtotal * stateTax)).toFixed(2),
      };
    } else {
      // This handles the case where state is FL but 
      // no zipCode is provided yet

      // 0%- $0.00 TAX RATE
      const taxRate = stateTax;
      const total = parseFloat((pre_tax_subtotal + (pre_tax_subtotal * taxRate)).toFixed(2));

      return {
        success: true,
        surtax: 0,
        stateTax,
        taxRate,
        subtotal: pre_tax_subtotal,
        total,
      };
    }
  } catch (error) {
    return { success: false, error: "There was an error calculating taxes." };
  }
}