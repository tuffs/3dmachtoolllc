'use server';

import { sendEmail } from '@/actions/sendEmail';

export async function sendEmailReceipt(purchaseDetails, customerEmail) {
  try {
    const subject = `RECEIPT FOR ORDER #${purchaseDetails.orderNumber} - 3D MACHINE AND TOOL`;

    const emailBody = `
Thank you for your purchase!

Order Details:
----------------------------------------

Order Number: ${purchaseDetails.orderNumber}
Order Data: ${new Date(purchaseDetails.orderDate).toLocaleDateString()}
Customer: ${purchaseDetails.customer.name}

Items Purchased:
----------------------------------------
${purchaseDetails.items.map(item =>
      `- ${item.productName} (Qty: ${item.quantity}) - ${item.formattedPrice}`
    ).join('\n')}

Shipping Address:
----------------------------------------
${purchaseDetails.shippingAddress.addressOne}
${purchaseDetails.shippingAddress.addressTwo || ''}
${purchaseDetails.shippingAddress.city}, ${purchaseDetails.shippingAddress.state}  ${purchaseDetails.shippingAddress.zipCode}

${purchaseDetails.billingAddress.addressOne ? (`
Billing Address:
----------------------------------------
${purchaseDetails.billingAddress.addressOne}
${purchaseDetails.billingAddress.addressTwo || ''}
${purchaseDetails.billingAddress.city}, ${purchaseDetails.billingAddress.state}  ${purchaseDetails.billingAddress.zipCode}
`) : ''}

Order Summary:
----------------------------------------
Subtotal: $${purchaseDetails.financials.subtotal.toFixed(2)}
Tax: $${purchaseDetails.financials.totalTax.toFixed(2)}
Total: $${purchaseDetails.financials.total.toFixed(2)}

You can view your full receipt online at:
https://3dmandt.com/purchaes/${purchaseDetails.orderNumber}

Thank you for choosing 3D MACHINE AND TOOL!

Best regards,
3D MACHINE AND TOOL TEAM

  `;

    const result = await sendEmail(
      customerEmail,
      subject,
      emailBody,
      'devon@3dmandt.com'
    );

    return result;
  } catch (error) {
    console.error('Error sending receipt email:', error);
    return { success: false, error: error.message };
  }
}