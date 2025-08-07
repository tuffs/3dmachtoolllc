'use server';

import prisma from '@/prisma/database';
import { getProductDetails } from './getProductDetails';
import { generateUniqueOrderNumber } from './generateUniqueOrderNumber';

export async function createOrderAndCustomer(submissionData, cartData) {
  try {
    // Generate unique order number first
    const orderNumber = await generateUniqueOrderNumber();
    console.log('Generated unique order number:', orderNumber);

    let customer = await prisma.customer.findUnique({
      where: { email: submissionData.formData.email }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: submissionData.formData.name,
          email: submissionData.formData.email,
          phone: submissionData.formData.phone,
          salesTaxExemptionCertificateURL: submissionData.taxExemptionCertificateURL || "",
        }
      });
      console.log('New customer created:', customer.id);
    } else {
      if (submissionData.taxExemptionCertificateURL) {
        customer = await prisma.customer.update({
          where: { id: customer.id },
          data: {
            salesTaxExemptionCertificateURL: submissionData.taxExemptionCertificateURL
          }
        });
      }
      console.log('Existing customer found:', customer.id);
    }

    if (submissionData.isTaxExempt && !submissionData.taxExemptionCertificateURL) {
      throw new Error('Tax-exempt status requires a valid certificate URL.');
    }

    // Fetch product details to get prices for OrderItem
    const productIds = Object.keys(cartData).map(Number);
    const products = await getProductDetails(productIds);

    // Create the order
    const order = await prisma.order.create({
      data: {
        orderNumber: orderNumber,
        status: 'UNPAID',
        name: submissionData.formData.name,
        email: submissionData.formData.email,
        phone: submissionData.formData.phone,
        shippingAddressOne: submissionData.formData.shippingAddressOne,
        shippingAddressTwo: submissionData.formData.shippingAddressTwo || null,
        shippingCity: submissionData.formData.shippingCity,
        shippingState: submissionData.formData.shippingState,
        shippingZipCode: submissionData.formData.shippingZipCode,
        billingDifferentFromShipping: submissionData.isDifferentBilling,
        billingAddressOne: submissionData.formData.billingAddressOne || null,
        billingAddressTwo: submissionData.formData.billingAddressTwo || null,
        billingCity: submissionData.formData.billingCity || null,
        billingState: submissionData.formData.billingState || null,
        billingZipCode: submissionData.formData.billingZipCode || null,
        customerId: customer.id,
        preTaxSubtotal: submissionData.preTaxSubtotal,
        stateTax: submissionData.stateTax,
        surtax: submissionData.surtax,
        total: submissionData.total,
        taxRate: submissionData.taxRate,
        taxExemptionStatus: submissionData.isTaxExempt || false,
        purchasedItems: cartData, // Keep for backward compatibility
        orderItems: {
          create: Object.entries(cartData).map(([productId, quantity]) => {
            const product = products.find(p => p.id === Number(productId));
            if (!product) {
              throw new Error(`Product with ID ${productId} not found`);
            }
            return {
              productId: Number(productId),
              quantity,
              price: product.price, // Store price at time of purchase
            };
          }),
        },
      },
      include: { orderItems: true }, // Include created orderItems in response
    });

    return { success: true, customer, order };
  } catch (error) {
    console.error('Error creating order and customer:', error);
    return { success: false, error: error.message || 'Failed to create order' };
  }
}