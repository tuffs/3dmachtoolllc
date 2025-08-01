'use server';

import { sendEmail } from '@/actions/sendEmail';

export async function sendEmailReceipt(orderData, customerEmail) {
  try {
    const subject = `RECEIPT FOR ORDER #${orderData.orderNumber} - 3D MACHINE AND TOOL`;

    const emailBody = `
Thank you for your purchase!

Order Details:
----------------------------------------

Order Number: ${orderData.orderNumber}
Order Data: ${new Date(orderData.orderDate).toLocaleDateString()}
Customer: ${orderData.customer.name}

Items Purchased:
----------------------------------------
${orderData.items.map(item =>
      `- ${item.productName} (Qty: ${item.quantity}) - $${item.totalPrice.toFixed(2)}`
    ).join('\n')}

Shipping Address:
----------------------------------------
${orderData.shippingAddress.addressOne}
${orderData.shippingAddress.addressTwo || ''}
${orderData.shippingAddress.city}, ${orderData.shippingAddress.state}  ${orderData.shippingAddress.zipCode}

${orderData.billingAdress.addressOne ? (`
Billing Address:
----------------------------------------
${orderData.billingAddress.addressOne}
${orderData.billingAddress.addressTwo || ''}
${orderData.billingAddress.city}, ${orderData.billingAddress.state}  ${orderData.billingAddress.zipCode}
`) : ''}

Order Summary:
----------------------------------------
Subtotal: $${orderData.financials.subtotal.toFixed(2)}
Tax: $${orderData.financials.totalTax.toFixed(2)}
Total: $${orderData.financials.total.toFixed(2)}

You can view your full receipt online at:
https://3dmandt.com/purchaes/${orderData.orderNumber}

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