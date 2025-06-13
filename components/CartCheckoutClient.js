'use client';

import React, { useState } from 'react';
import CreateCustomerOrSignInForm from '@/components/CreateCustomerOrSignInForm';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function CartCheckoutClient({ children }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState(null);

  if (showCheckout) {
    return (
      <>
        <CreateCustomerOrSignInForm onCustomerChange={setCustomer} />
        <CheckoutForm autoFocus />
      </>
    );
  }

  return (
    <>
      {children}
      <div className="flex justify-center mt-8">
        <CheckoutButton onClick={() => setShowCheckout(true)} />
      </div>
    </>
  );
}