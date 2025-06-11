'use client';

import React, { useState } from 'react';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function CheckoutForm() {
  const [billing, setBilling] = useState({
    billingName: '',
    billingAddressOne: '',
    billingAddressTwo: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
  });
  const [shipping, setShipping] = useState({ ...billing });
  const [differentShipping, setDifferentShipping] = useState(false);

  // Sync shipping with billing unless differentShipping is checked
  React.useEffect(() => {
    if (!differentShipping) setShipping({ ...billing });
  }, [billing, differentShipping]);

  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setDifferentShipping(e.target.checked);
    if (!e.target.checked) setShipping({ ...billing });
    else setShipping({
      shippingName: '',
      shippingAddressOne: '',
      shippingAddressTwo: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit billing and shipping info here
    // ...
    alert('Order submitted!');
  };

  return (
    <div className="container mx-auto p-4 mb-24">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Details */}
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Billing Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="billingName" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text" id="billingName" name="billingName" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingName} onChange={handleBillingChange} required />
              </div>
              <div>
                <label htmlFor="billingAddressOne" className="block text-sm font-medium text-gray-300 mb-1">Address Line 1</label>
                <input type="text" id="billingAddressOne" name="billingAddressOne" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingAddressOne} onChange={handleBillingChange} required />
              </div>
              <div>
                <label htmlFor="billingAddressTwo" className="block text-sm font-medium text-gray-300 mb-1">Address Line 2</label>
                <input type="text" id="billingAddressTwo" name="billingAddressTwo" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingAddressTwo} onChange={handleBillingChange} />
              </div>
              <div>
                <label htmlFor="billingCity" className="block text-sm font-medium text-gray-300 mb-1">City</label>
                <input type="text" id="billingCity" name="billingCity" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingCity} onChange={handleBillingChange} required />
              </div>
              <div>
                <label htmlFor="billingState" className="block text-sm font-medium text-gray-300 mb-1">State</label>
                <input type="text" id="billingState" name="billingState" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingState} onChange={handleBillingChange} required />
              </div>
              <div>
                <label htmlFor="billingZipCode" className="block text-sm font-medium text-gray-300 mb-1">Zip Code</label>
                <input type="text" id="billingZipCode" name="billingZipCode" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={billing.billingZipCode} onChange={handleBillingChange} required />
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="secondary_bg_color p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="differentShipping"
                checked={differentShipping}
                onChange={handleCheckbox}
                className="mr-2"
              />
              <label htmlFor="differentShipping" className="text-gray-300 font-medium">
                Shipping address is different from billing
              </label>
            </div>
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Shipping Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="shippingName" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text" id="shippingName" name="shippingName" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingName} onChange={handleShippingChange} required />
              </div>
              <div>
                <label htmlFor="shippingAddressOne" className="block text-sm font-medium text-gray-300 mb-1">Address Line 1</label>
                <input type="text" id="shippingAddressOne" name="shippingAddressOne" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingAddressOne} onChange={handleShippingChange} required />
              </div>
              <div>
                <label htmlFor="shippingAddressTwo" className="block text-sm font-medium text-gray-300 mb-1">Address Line 2</label>
                <input type="text" id="shippingAddressTwo" name="shippingAddressTwo" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingAddressTwo} onChange={handleShippingChange} />
              </div>
              <div>
                <label htmlFor="shippingCity" className="block text-sm font-medium text-gray-300 mb-1">City</label>
                <input type="text" id="shippingCity" name="shippingCity" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingCity} onChange={handleShippingChange} required />
              </div>
              <div>
                <label htmlFor="shippingState" className="block text-sm font-medium text-gray-300 mb-1">State</label>
                <input type="text" id="shippingState" name="shippingState" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingState} onChange={handleShippingChange} required />
              </div>
              <div>
                <label htmlFor="shippingZipCode" className="block text-sm font-medium text-gray-300 mb-1">Zip Code</label>
                <input type="text" id="shippingZipCode" name="shippingZipCode" className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg" value={shipping.shippingZipCode} onChange={handleShippingChange} required />
              </div>
            </div>
          </div>
        </div>
        <AnimatedButton type="submit" className="w-full mt-8">
          Submit Order
        </AnimatedButton>
      </form>
    </div>
  );
}