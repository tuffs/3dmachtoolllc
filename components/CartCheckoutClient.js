'use client';

import React, { useState } from 'react';
import CustomerInformation from '@/components/CustomerInformation';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function CartCheckoutClient({ children }) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <>
        <CustomerInformation />
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