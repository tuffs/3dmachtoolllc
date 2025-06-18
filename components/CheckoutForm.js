'use client';

import React, { useState, useEffect } from 'react';

export default function CheckoutForm(children) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    billingAddressOne: '',
    billingAddressTwo: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    shippingAddressOne: '',
    shippingAddressTwo: '',
    shippingCity: '',
    shippingState: '',
    shippingZipCode: '',
  });

  // Check billing and shipping info differ
  const [differentShippingInformation, setDifferentShippingInformation] = useState(false);

  useEffect(() => {
    if (differentShippingInformation) {
      setForm((prev) => ({
        ...prev,
        shippingAddressOne: '',
        shippingAddressTwo: '',
        shippingCity: '',
        shippingState: '',
        shippingZipCode: '',
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        shippingAddressOne: prev.billingAddressOne,
        shippingAddressTwo: prev.billingAddressTwo,
        shippingCity: prev.billingCity,
        shippingState: prev.billingState,
        shippingZipCode: prev.billingZipCode,
      }));
    }
  }, [differentShippingInformation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      // If billing field and not using different shipping, sync shipping
      if (
        !differentShippingInformation &&
        (name.startsWith('billingAddress') ||
          name.startsWith('billingCity') ||
          name.startsWith('billingState') ||
          name.startsWith('billingZipCode'))
      ) {
        const shippingField = name.replace('billing', 'shipping');
        return {
          ...prev,
          [name]: value,
          [shippingField]: value,
        };
      }
      // Otherwise, just update the field
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-8">
          <div className="secondary_bg_color md:w-[45%] md:mx-auto p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Billing Details</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Billing Name or Business</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.name}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.email}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.phone}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="billingAddressOne" className="block text-sm font-medium text-gray-300 mb-1">Billing Address Line One</label>
              <input
                type="text"
                id="billingAddressOne"
                name="billingAddressOne"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.billingAddressOne}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="billingAddressTwo" className="block text-sm font-medium text-gray-300 mb-1">Billing Address Line Two</label>
              <input
                type="text"
                id="billingAddressTwo"
                name="billingAddressTwo"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.billingAddressTwo}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="billingCity" className="block text-sm font-medium text-gray-300 mb-1">Billing City</label>
              <input
                type="text"
                id="billingCity"
                name="billingCity"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.billingCity}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="billingState" className="block text-sm font-medium text-gray-300 mb-1">Billing State</label>
              <input
                type="text"
                id="billingState"
                name="billingState"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.billingState}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div>
              <label htmlFor="billingZipCode" className="block text-sm font-medium text-gray-300 mb-1">Billing Zip Code</label>
              <input
                type="text"
                id="billingZipCode"
                name="billingZipCode"
                className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                value={form.billingZipCode}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="shipping_and_billing_differentiation flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                id="differentShippingInformation"
                name="differentShippingInformation"
                checked={differentShippingInformation}
                onChange={() => setDifferentShippingInformation(!differentShippingInformation)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="differentShippingInformation" className="text-sm text-gray-300">Check here if your shipping address differs from your billing address information.</label>
            </div>

            {differentShippingInformation && (
              <div id="shippingDetails" className="space-y-6 pt-3 pb-6">
                <h2 className="text-xl font-semibold text-gray-300 mb-4">Shipping Details</h2>
                <div>
                  <label htmlFor="shippingAddressOne" className="block text-sm font-medium text-gray-300 mb-1">Shipping Address One</label>
                  <input
                    type="text"
                    id="shippingAddressOne"
                    name="shippingAddressOne"
                    className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                    value={form.shippingAddressOne}
                    onChange={handleChange}
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="shippingAddressTwo" className="block text-sm font-medium text-gray-300 mb-1">Shipping Address Two</label>
                  <input
                    type="text"
                    id="shippingAddressTwo"
                    name="shippingAddressTwo"
                    className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                    value={form.shippingAddressTwo}
                    onChange={handleChange}
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="shippingCity" className="block text-sm font-medium text-gray-300 mb-1">Shipping City</label>
                  <input
                    type="text"
                    id="shippingCity"
                    name="shippingCity"
                    className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                    value={form.shippingCity}
                    onChange={handleChange}
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="shippingState" className="block text-sm font-medium text-gray-300 mb-1">Shipping State</label>
                  <input
                    type="text"
                    id="shippingState"
                    name="shippingState"
                    className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                    value={form.shippingState}
                    onChange={handleChange}
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="shippingZipCode" className="block text-sm font-medium text-gray-300 mb-1">Shipping Zip Code</label>
                  <input
                    type="text"
                    id="shippingZipCode"
                    name="shippingZipCode"
                    className="w-full p-2 text-sm tertiary_bg_color text-gray-300 border border-gray-300 rounded-lg"
                    value={form.shippingZipCode}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>
            )}

            <div className="purchase_order_summary">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Your Purchase Details:</h3>
              <div className="outputShippingAddress">
                <p className="text-sm text-gray-300 mt-4">
                  <strong>Billing Address:</strong><br />
                  {form.billingAddressOne && (<>{form.billingAddressOne}<br /></>)}
                  {form.billingAddressTwo && (<>{form.billingAddressTwo}<br /></>)}
                  {form.billingCity && form.billingState && (
                    <>{form.billingCity}, {form.billingState}&nbsp;&nbsp;{form.billingZipCode}<br /></>
                  )}
                </p>
              </div>
              <div className="outputShippingAddress">
                <p className="text-sm text-gray-300 mt-4">
                  <strong>Shipping Address:</strong><br />
                  {form.shippingAddressOne && (<>{form.shippingAddressOne}<br /></>)}
                  {form.shippingAddressTwo && (<>{form.shippingAddressTwo}<br /></>)}
                  {form.shippingCity && form.shippingState && (
                    <>{form.shippingCity}, {form.shippingState}&nbsp;&nbsp;{form.shippingZipCode}<br /></>
                  )}
                </p>
              </div>
            </div>

            {children.children}

            <br />

            *REMOVE FROM CODE* PRE TAX SUBTOTAL: ${children.pre_tax_subtotal}
          </div>
        </div>
      </div>
    </form>
  );
}
