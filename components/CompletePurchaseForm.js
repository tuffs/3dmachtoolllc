'use client';

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { createPaymentIntent, updateOrderStatus } from '@/actions/stripeActions';

// Initialize Stripe (you'll need to add your publishable key to .env.local)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

// Payment Form Component
function PaymentForm({ orderData, total, onPaymentComplete, onPaymentError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  // Create PaymentIntent on component mount using server action
  useEffect(() => {
    const initializePayment = async () => {
      try {
        const result = await createPaymentIntent(
          total,
          orderData.order.id,
          orderData.customer.id
        );

        if (result.success) {
          setClientSecret(result.clientSecret);
        } else {
          setPaymentError(result.clientSecret);
          console.error('Failed to initialize payment. Please try again.');
        }
      } catch (error) {
        console.error('Error creating payment intent:', error);
        setPaymentError('Failed to initialize payment. Please try again.');
      }
    };

    initializePayment();
  }, [total, orderData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    const card = elements.getElement(CardElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: orderData.customer.name,
            email: orderData.customer.email,
            phone: orderData.submissionData.formData.phone,
            address: {
              line1: orderData.submissionData.formData.billingAddressOne || orderData.submissionData.formData.shippingAddressOne,
              line2: orderData.submissionData.formData.billingAddressTwo || orderData.submissionData.formData.shippingAddressTwo,
              city: orderData.submissionData.formData.billingCity || orderData.submissionData.formData.shippingCity,
              state: orderData.submissionData.formData.billingState || orderData.submissionData.formData.shippingState,
              postal_code: orderData.submissionData.formData.billingZipCode || orderData.submissionData.formData.shippingZipCode,
              country: 'US',
            },
          },
        },
      });

      if (error) {
        console.error('Payment failed:', error);
        setPaymentError(error.message);
        onPaymentError(error);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);

        // Update order status using server action
        const updateResult = await updateOrderStatus(
          orderData.order.id,
          'PAID',
          paymentIntent.id
        );

        if (updateResult.success) {
          onPaymentComplete({
            paymentIntent,
            orderData,
          });
        } else {
          console.error('Failed to update order status: ', updateResult.error);
          // Payment succeeded but status update failed
          onPaymentComplete({
            paymentIntent,
            orderData,
            statusUpdateFailed: true,
          });
        }
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      setPaymentError('An unexpected error occurred. Please try again.');
      onPaymentError(error);
    }

    setIsProcessing(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#e5e7eb',
        backgroundColor: '#1f2937',
        '::placeholder': {
          color: '#9ca3af',
        },
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444',
      },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-[#161717] p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <div className="text-sm text-gray-400 mb-4">
          <p>Order: {orderData.order.orderNumber}</p>
          <p>Customer: {orderData.customer.name}</p>
          <p>Email: {orderData.customer.email}</p>
        </div>
        <div className="text-2xl font-bold text-green-400">
          Total: ${total.toFixed(2)}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Card Information
          </label>
          <div className="p-3 border border-gray-600 rounded-md bg-gray-800">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        {paymentError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {paymentError}
          </div>
        )}

        <AnimatedButton
          type="submit"
          disabled={!stripe || isProcessing || !clientSecret}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
        </AnimatedButton>
      </form>
    </div>
  );
}

// Main Component
export default function CompletePurchaseForm({ orderData, total, onPaymentComplete, onPaymentError }) {
  return (
    <div className="purchase_form__container min-h-screen bg-inherit py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Complete Your Purchase
        </h2>

        <Elements stripe={stripePromise}>
          <PaymentForm
            orderData={orderData}
            total={total}
            onPaymentComplete={onPaymentComplete}
            onPaymentError={onPaymentError}
          />
        </Elements>
      </div>
    </div>
  );
}