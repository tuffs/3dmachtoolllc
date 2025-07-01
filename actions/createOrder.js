'use server';

import prisma from '@/prisma/database';
import validator from 'validator';
import DOMPurify from 'dompurify';

export async function createOrder(formData) {

  // Check for the submission of formData
  if (!formData) {
    throw new Error('Form data is required to create an order. Exiting.');
  }

  /* 
  
    @@TODO: customerId's in sales, 1 = guest order, other is connected to customer account
    
    @@Note: This may not be the final implementation, as customerId should be dynamic
    and based on the logged-in user or guest session... but we need a guest ID of something
    to be able to filter these orders later on if needed.
  */

  // Sanitize the Form Data for validation and security as well as data integrity
  const sanitizedData = {
    orderNumber: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    pretaxSubtotal: parseFloat(formData.get('preTaxSubtotal')) || 0.0,
    stateTax: parseFloat(formData.get('stateTax')) || 0.0,
    surtax: parseFloat(formData.get('surtax')) || 0.0,
    total: parseFloat(formData.get('total')) || 0.0,
    taxRate: parseFloat(formData.get('taxRate')) || 0.0, // If state is not Florida, this will be an OOSS
    taxExemptionStatus: formData.get('taxExemptionStatus') === 'false',
    status: 'pending',
    purchasedItems: JSON.parse(formData.get('purchasedItems') || '{}'),
    shippingName: DOMPurify.sanitize(formData.get('shippingName') || ''),
    shippingAddressOne: DOMPurify.sanitize(formData.get('shippingAddressOne') || ''),
    shippingAddressTwo: DOMPurify.sanitize(formData.get('shippingAddressTwo') || ''),
    shippingCity: DOMPurify.sanitize(formData.get('shippingCity') || ''),
    shippingState: DOMPurify.sanitize(formData.get('shippingState') || ''),
    shippingZip: DOMPurify.sanitize(formData.get('shippingZip') || ''),
    customerId: 1, // @TODO && NOTE ABOVE: Replace with actual customer ID logic, or guest permanent ID of 1
  };

  try {
    const order = await prisma.order.create({
      data: sanitizedData,
    });
    return { success: true, order };
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Failed to create order. Please try again later.');
  }
}