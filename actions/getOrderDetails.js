'use server';

import prisma from '@/prisma/database.js';

export default async function getOrderDetails(orderNumber) {

  try {

    // Fetch the order with all related data
    const order = await prisma.order.findUnique({
      where: { orderNumber },
      include: {
        customer: true,
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });

    console.log('Database query result:', order ? 'Order found' : 'Order not found');

    if (!order) {
      return {
        success: false,
        error: 'Order not found'
      };
    }

    // Format the receipt data (your existing formatting code)
    const receiptData = {
      orderNumber: order.orderNumber,
      orderId: order.id,
      orderDate: order.createdAt,
      orderStatus: order.status,

      customer: {
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone
      },

      shippingAddress: {
        addressOne: order.shippingAddressOne,
        addressTwo: order.shippingAddressTwo,
        city: order.shippingCity,
        state: order.shippingState,
        zipCode: order.shippingZipCode
      },

      billingAddress: {
        addressOne: order.billingAddressOne,
        addressTwo: order.billingAddressTwo,
        city: order.billingCity,
        state: order.billingState,
        zipCode: order.billingZipCode,
      },

      items: order.orderItems.map(item => ({
        id: item.id,
        productId: item.productId,
        productName: item.product.name,
        productDescription: item.product.description,
        quantity: item.quantity,
        price: Number(parseFloat(item.price)),
        formattedPrice: `$${parseFloat(item.price).toFixed(2)}`,
        productImages: item.product.imageUrls || null
      })),

      financials: {
        subtotal: parseFloat(order.preTaxSubtotal || 0),
        stateTax: parseFloat(order.stateTax || 0),
        surtax: parseFloat(order.surtax || 0),
        totalTax: parseFloat((order.stateTax || 0) + (order.surtax || 0)),
        taxRate: parseFloat(order.taxRate || 0),
        total: parseFloat(order.total),
        isTaxExempt: order.isTaxExempt || false
      }
    };

    console.log(`Returning receipt data with ${receiptData.items.length} items.`);

    return {
      success: true,
      data: receiptData
    };
  } catch (error) {
    console.error('Error fetching order details:', error);
    return {
      success: false,
      error: 'Database error: ' + error.message
    };
  }
}