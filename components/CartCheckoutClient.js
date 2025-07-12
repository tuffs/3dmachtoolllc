'use client';

import React, { useState, useEffect } from 'react';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";
import AnimatedButton from './ui/AnimatedButton';
import { createOrderAndCustomer } from '@/actions/createOrderAndCustomer';

export default function CartCheckoutClient({ pre_tax_subtotal, children }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartData, setCartData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [subtotal, setSubtotal] = useState(pre_tax_subtotal);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Initialize cart data on mount
  useEffect(() => {
    const cart = getCart();
    setCartData(cart);
    fetchProducts(cart);
  }, []);

  const fetchProducts = async (cart) => {
    setIsLoadingProducts(true);
    const productIds = Object.keys(cart).map(id => Number(id));
    if (productIds.length > 0) {
      const products = await getProductDetails(productIds);
      setProductsData(products);

      // Recalculate subtotal
      const newSubtotal = products.reduce((sum, product) => {
        const qty = cart[product.id] || 0;
        return sum + product.price * qty;
      }, 0);
      setSubtotal(newSubtotal);
    } else {
      setProductsData([]);
      setSubtotal(0);
    }
    setIsLoadingProducts(false);
  }

  const handleCartUpdate = () => {
    const updatedCart = getCart();
    setCartData(updatedCart);
    fetchProducts(updatedCart);
  }

  const handleCheckoutSubmit = async (submissionData) => {
    // Prevent double submission...
    setIsSubmitted(true);

    console.log(submissionData);

    try {
      // Generate Order Number
      const orderNumber = `3DMANDT-${Date.now()}`;
      console.log('Generated Order Number: ', orderNumber);

      // Call server action to create customer and order
      const result = await createOrderAndCustomer(submissionData, cartData, orderNumber);

      if (result.success) {
        console.log('Customer: ', result.customer);
        console.log('Order: ', result.order);

        // Clear cart or redirect to confirmation page
        // clearCart(); // Implement this function to clear the cart
      } else {
        console.error('Error creating order and customer: ', result.error);
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error('Submission error: ', error);
      setIsSubmitted(false);
    }
  }

  if (showCheckout) {
    return (
      <>
        <CheckoutForm pre_tax_subtotal={subtotal} onSubmit={handleCheckoutSubmit}>
          {React.cloneElement(children, {
            products: productsData,
            cart: cartData,
            pre_tax_subtotal: subtotal,
            onCartUpdate: handleCartUpdate,
            isLoadingProducts: isLoadingProducts
          })}
        </CheckoutForm>
        <div className="w-full flex justify-center">
          <AnimatedButton
            type="submit"
            className="w-[45%] mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
            form="checkout-form"
          >
            {isSubmitted ? 'Processing...' : 'Continue to Payment'}
          </AnimatedButton>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Clone children and pass updated props */}
      {React.cloneElement(children, {
        products: productsData,
        cart: cartData,
        pre_tax_subtotal: subtotal,
        onCartUpdate: handleCartUpdate,
        isLoadingProducts: isLoadingProducts
      })}
      <div className="flex justify-center mt-8">
        <CheckoutButton onClick={() => setShowCheckout(true)} />
      </div>
    </>
  );
}