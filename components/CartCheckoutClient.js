'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from '@/components/ui/CheckoutButton';
import AnimatedButton from './ui/AnimatedButton';
import CompletePurchaseForm from '@/components/CompletePurchaseForm';
import { createOrderAndCustomer } from '@/actions/createOrderAndCustomer';
import EmptyShoppingCart from '@/components/EmptyShoppingCart';

export default function CartCheckoutClient({ pre_tax_subtotal, initialCart, initialProducts, children }) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [cartData, setCartData] = useState(initialCart || {});
  const [productsData, setProductsData] = useState(initialProducts || []);
  const [subtotal, setSubtotal] = useState(pre_tax_subtotal || 0);
  const [isLoadingProducts, setIsLoadingProducts] = useState(!initialProducts || initialProducts.length === 0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log('Initial state:', { cartData, productsData, initialCart, initialProducts, isLoadingProducts });
    const cart = getCart();
    console.log('Client cart from cookie:', cart);
    const validProductIds = Object.entries(cart)
      .filter(([id, quantity]) => quantity > 0)
      .map(([id]) => Number(id));
    const initialProductIds = initialProducts ? initialProducts.map(p => p.id) : [];

    if (validProductIds.length > 0 && JSON.stringify(validProductIds.sort()) !== JSON.stringify(initialProductIds.sort())) {
      fetchProducts(cart);
    } else {
      setCartData(cart);
      setIsLoadingProducts(false);
    }
  }, []);

  const fetchProducts = async (cart) => {
    setIsLoadingProducts(true);
    setErrorMessage('');
    const productIds = Object.entries(cart)
      .filter(([id, quantity]) => quantity > 0)
      .map(([id]) => Number(id));

    console.log('Fetching products for IDs:', productIds);

    if (productIds.length > 0) {
      try {
        const products = await getProductDetails(productIds);
        console.log('Fetched products:', products);
        setProductsData(products);
        const newSubtotal = products.reduce((sum, product) => {
          const qty = cart[product.id] || 0;
          return sum + product.price * qty;
        }, 0);
        setSubtotal(newSubtotal);
      } catch (error) {
        setErrorMessage('Failed to load cart items. Please try again.');
        console.error('Error fetching products:', error);
        setProductsData([]);
        setSubtotal(0);
      }
    } else {
      setProductsData([]);
      setSubtotal(0);
    }
    setIsLoadingProducts(false);
    console.log('Post-fetch state:', { cartData: cart, productsData, subtotal, isLoadingProducts });
  };

  const handleCartUpdate = () => {
    const updatedCart = getCart();
    console.log('Updated cart:', updatedCart);
    setCartData(updatedCart);
    fetchProducts(updatedCart);

    // Check if cart is empty after update
    const validCartItems = Object.entries(updatedCart).filter(([id, quantity]) => quantity > 0);
    if (validCartItems.length === 0) {
      console.log('Cart is empty, triggering page refresh');
      router.refresh(); // Refresh the page to let server-side handle EmptyShoppingCart
    }
  };

  const handleCheckoutSubmit = async (submissionData) => {
    setIsSubmitted(true);
    setErrorMessage('');

    try {
      const orderNumber = `3DMANDT-${Date.now()}`;
      const result = await createOrderAndCustomer(submissionData, cartData, orderNumber);

      if (result.success) {
        setOrderData({
          order: result.order,
          customer: result.customer,
          submissionData: submissionData,
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
      console.error('Submission error:', error);
      setIsSubmitted(false);
    }
  };

  const handlePaymentComplete = () => {
    console.log('Payment completed successfully');
    alert('Payment completed successfully...');
    setCartData({});
    setProductsData([]);
    setSubtotal(0);
    router.refresh(); // Refresh to show EmptyShoppingCart after payment
  };

  const handlePaymentError = () => {
    setErrorMessage('Payment failed. Please review your payment details and try again.');
    setShowPayment(false);
    setShowCheckout(true);
  };

  // Check if cart is empty
  const validCartItems = Object.entries(cartData).filter(([id, quantity]) => quantity > 0);
  const isCartEmpty = !isLoadingProducts && validCartItems.length === 0;

  console.log('Render state:', { isCartEmpty, isLoadingProducts, cartData, productsData, validCartItems });

  if (isCartEmpty) {
    console.log('Rendering EmptyShoppingCart');
    return <EmptyShoppingCart />;
  }

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
              isLoadingProducts: isLoadingProducts,
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
            isLoadingProducts: isLoadingProducts,
          })}
          <div className="flex justify-center mt-8">
            <CheckoutButton onClick={() => setShowCheckout(true)} />
          </div>
        </>
      )}
    </>
  );
}