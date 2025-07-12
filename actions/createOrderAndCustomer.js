'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createOrderAndCustomer(submissionData, cartData, orderNumber) {
  try {
    let customer = await prisma.customer.findUnique({
      where: { email: submissionData.formData.email }
    });

    // If Customer does not exist, create them
    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: submissionData.formData.name,
          email: submissionData.formData.email,
          phone: submissionData.formData.phone,
        }
      });
      console.log('New Customer Created: ', customer);
    } else {
      console.log('Existingg customer found: ', customer);
    }

    // Create the order
    const order = await prisma.order.create({
      data: {
        orderNumber: orderNumber,
        status: 'UNPAID',
        name: submissionData.formData.name,
        email: submissionData.formData.email,
        phone: submissionData.formData.phone,
        shippingAddressOne: submissionData.formData.shippingAddressOne,
        shippingAddressTwo: submissionData.formData.shippingAddressTwo ? submissionData.formData.shippingAddressTwo : null,
        shippingCity: submissionData.formData.shippingCity,
        shippingState: submissionData.formData.shippingState,
        shippingZipCode: submissionData.formData.shippingZipCode,
        billingDifferentFromShipping: submissionData.isDifferentBilling,
        billingAddressOne: submissionData.formData.billingAddressOne ? submissionData.formData.billingAddressOne : null,
        billingAddressTwo: submissionData.formData.billingAddressTwo ? submissionData.formData.billingAddressTwo : null,
        billingCity: submissionData.formData.billingCity ? submissionData.formData.billingCity : null,
        billingState: submissionData.formData.billingState ? submissionData.formData.billingState : null,
        billingZipCode: submissionData.formData.billingZipCode ? submissionData.formData.billingZipCode : null,
        customerId: customer.id,
        preTaxSubtotal: submissionData.preTaxSubtotal,
        stateTax: submissionData.stateTax,
        surtax: submissionData.surtax,
        total: submissionData.total,
        taxRate: submissionData.taxRate,
        taxExemptionStatus: false,
        purchasedItems: cartData, // Store cart data as JSON
      }
    });

    return { success: true, customer, order };
  } catch (error) {
    console.error('Error creating order and customer: ', error.message);
    return { success: false, error: error.message };
  } finally {
    await prisma.$disconnect();
  }
}