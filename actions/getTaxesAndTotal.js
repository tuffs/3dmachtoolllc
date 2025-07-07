'use server'

import { getSurtaxPercent } from '@/actions/getSurtaxPercent';

export async function getTaxesAndTotal(state, zipCode, pre_tax_subtotal) {
  try {
    console.log('getTaxesAndTotal called with:', { state, zipCode, pre_tax_subtotal });

    // Base State Tax Rate - convert to number
    const stateTax = parseFloat(process.env.STATE_TAX) || 0.06;

    // Fetch the surtax if needed
    if (state === 'FL' && zipCode) {
      let surtaxData;

      try {
        surtaxData = await getSurtaxPercent(zipCode);
        console.log('Surtax data received:', surtaxData); // Debug log
      } catch (error) {
        console.error('Error fetching surtax data: ', error);
        return { success: false, error: "There was an error fetching the surtax data." };
      }

      if (surtaxData.success) {
        const surtax = parseFloat(surtaxData.surtax) || 0;
        const taxRate = stateTax + surtax;
        const total = parseFloat((pre_tax_subtotal + (pre_tax_subtotal * taxRate)).toFixed(2));

        console.log('FL tax calculation:', { stateTax, surtax, taxRate, total });

        return {
          success: true,
          surtax,
          stateTax,
          taxRate,
          subtotal: pre_tax_subtotal,
          total,
        };
      } else {
        console.log('Surtax fetch failed:', surtaxData); // Debug log
        return { success: false, error: "Error fetching surtax data." };
      }
    } else if (state !== 'FL') {
      console.log('Non-FL state, no tax applied');
      return {
        success: true,
        surtax: 0,
        stateTax: 0,
        taxRate: 0,
        subtotal: pre_tax_subtotal,
        total: pre_tax_subtotal,
      };
    } else {
      // This handles the case where state is FL but no zipCode is provided yet
      console.log('FL state but no zipCode, applying only state tax');
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
    console.error('Error in getTaxesAndTotal: ', error);
    return { success: false, error: "There was an error calculating taxes." };
  }
}