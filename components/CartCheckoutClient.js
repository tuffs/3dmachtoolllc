'use client';

import React, { useState, useEffect } from 'react';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from '@/components/ui/CheckoutButton';
import AnimatedButton from './ui/AnimatedButton';
import CompletePurchaseForm from '@/components/CompletePurchaseForm';
import { createOrderAndCustomer } from '@/actions/createOrderAndCustomer';

export default function CartCheckoutClient({ pre_tax_subtotal, children }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [cartData, setCartData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [subtotal, setSubtotal] = useState(pre_tax_subtotal);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // Add state for errors

  useEffect(() => {
    const cart = getCart();
    setCartData(cart);
    fetchProducts(cart);
  }, []);

  const fetchProducts = async (cart) => {
    setIsLoadingProducts(true);
    setErrorMessage(''); // Clear previous errors
    const productIds = Object.keys(cart).map(id => Number(id));
    if (productIds.length > 0) {
      try {
        const products = await getProductDetails(productIds);
        setProductsData(products);
        const newSubtotal = products.reduce((sum, product) => {
          const qty = cart[product.id] || 0;
          return sum + product.price * qty;
        }, 0);
        setSubtotal(newSubtotal);
      } catch (error) {
        setErrorMessage('Failed to load cart items. Please try again.');
        console.error('Error fetching products:', error);
      }
    } else {
      setProductsData([]);
      setSubtotal(0);
    }
    setIsLoadingProducts(false);
  };

  const handleCartUpdate = () => {
    const updatedCart = getCart();
    setCartData(updatedCart);
    fetchProducts(updatedCart);
  };

  const handleCheckoutSubmit = async (submissionData) => {
    setIsSubmitted(true);
    setErrorMessage(''); // Clear previous errors

    try {
      const orderNumber = `3DMANDT-${Date.now()}`;
      const result = await createOrderAndCustomer(submissionData, cartData, orderNumber);

      if (result.success) {
        setOrderData({
          order: result.order,
          customer: result.customer,
          submissionData: submissionData
        });
        setShowCheckout(false);
        setShowPayment(true);
        setIsSubmitted(false);
      } else {
        setErrorMessage(result.error || 'Failed to create order. Please check your details and try again.');
        setIsSubmitted(false);
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again later.');
      console.error('Submission error: ', error);
      setIsSubmitted(false);
    }
  };

  const handlePaymentComplete = () => {
    console.log('Payment completed successfully');
    // Now we can clear the cart...
    // Move to an order confirmation view or similar
  };

  const handlePaymentError = () => {
    setErrorMessage('Payment failed. Please review your payment details and try again.');
    setShowPayment(false);
    setShowCheckout(true);
  };

  if (showPayment && orderData) {
    return (
      <CompletePurchaseForm
        orderData={orderData}
        total={orderData.submissionData.total}
        onPaymentComplete={handlePaymentComplete}
        onPaymentError={handlePaymentError}
      />
    );
  }

  return (
    <>
      {errorMessage && (
        <div className="w-full max-w-3xl mx-auto p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      {showCheckout ? (
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
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Processing...' : 'Continue to Payment'}
            </AnimatedButton>
          </div>
        </>
      ) : (
        <>
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
      )}
    </>
  );
}