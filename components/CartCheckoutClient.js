'use client';

import React, { useState } from 'react';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function CartCheckoutClient({ children }) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <>
        <CheckoutForm />

        {/* Display the purchase product matrix below the form */}
        {children}

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