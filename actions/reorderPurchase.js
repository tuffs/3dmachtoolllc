'use server';

import { cookies } from 'next/headers'

export async function reorderPurchase(purchaseDetails) {
  try {
    if (!purchaseDetails || !purchaseDetails.items || purchaseDetails.items.length === 0) {
      return {
        success: false,
        error: 'No items found in the order to reorder'
      };
    }

    // Create cartt object from purchase items

    const cartData = {};

    purchaseDetails.items.forEach(item => {
      if (item.productId && item.quantity > 0) {
        cartData[item.productId] = item.quantity;
      }
    });

    if (Object.keys(cartData).length === 0) {
      return {
        success: false,
        error: 'No valid items found to reeorder'
      };
    }

    // Set the cart cookie with the reordered items
    const cookieStore = cookies();
    cookieStore.set('3dmandt_cart', JSON.stringify(cartData), {
      expires: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000), // 28 days 
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });

    // Store customer information for checkout pre-population
    const customerData = {
      name: purchaseDetails.customer.name,
      email: purchaseDetails.customer.email,
      phone: purchaseDetails.customer.phone,
      shippingAddress: purchaseDetails.shippingAddress,
      billingAddress: purchaseDetails.billingDetails
    };

    cookieStore.set('3dmandt_reorder_customer', JSON.stringify(customerData), {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });

    return {
      success: true,
      message: 'Items added to cart successfully',
      itemCount: Object.values(cartData).reduce((sum, qty) => sum + qty, 0),
      cartData
    };
  } catch (error) {
    console.error('Error processing reorder:', error);
    return {
      success: false,
      error: 'Failed to process reorder. Please try again.'
    };
  }
}