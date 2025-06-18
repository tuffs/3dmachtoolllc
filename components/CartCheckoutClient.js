'use client';

import React, { useState } from 'react';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function CartCheckoutClient({ pre_tax_subtotal, children }) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <>
        <CheckoutForm children={children} pre_tax_subtotal={pre_tax_subtotal} />
      </>
    );
  }

  return (
    <>
      {children}

      {pre_tax_subtotal !== 0 && (
        <div className="flex justify-center mt-8">
          <CheckoutButton onClick={() => setShowCheckout(true)} />
        </div>
      )}
    </>
  );
}