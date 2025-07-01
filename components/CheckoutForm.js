'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import { getSurtaxPercent } from '@/actions/getSurtaxPercent';

export default function CheckoutForm({ pre_tax_subtotal, children }) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDifferentBilling, setIsDifferentBilling] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Submission logic here
    alert('Submitted!');
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 p-12">
        <form className="checkout_form w-full md:w-1/2 p-6 bg-[#161717] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
          <div className="contact_information mb-6" data-testid="contact_information_section">
            <h4 className="text-lg font-bold">Purchaser Contact Details</h4>
            <input
              type="text"
              name="fullName"
              placeholder="Business Name or Full Name"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>

          <div className="shipping_information mb-6" data-testid="shipping_information_section">
            <h4 className="text-lg font-bold">Shipping Information</h4>
            <input
              type="text"
              name="shippingAddressOne"
              placeholder="Address Line 1"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              required
            />
            <input
              type="text"
              name="shippingAddressTwo"
              placeholder="Address Line 2"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
            />
            <input
              type="text"
              name="shippingCity"
              placeholder="City"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              required
            />
            <input
              type="text"
              name="shippingState"
              placeholder="State"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[A-Z]{2}"
              required
            />
            <input
              type="text"
              name="shippingZipCode"
              placeholder="Zip Code"
              className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[0-9]{5}"
              required
            />

            <div>
              <input
                type="checkbox"
                name="sameAsShipping"
                className="my-2"
                checked={!isDifferentBilling}
                onChange={() => setIsDifferentBilling(!isDifferentBilling)}
              />
              <label className="text-sm text-gray-400">Same as Shipping Address</label>
            </div>

            {isDifferentBilling &&
              (
                <>
                  <h4 className="text-lg font-bold mt-4">Billing Information</h4>
                  <input
                    type="text"
                    name="billingAddressOne"
                    placeholder="Billing Address Line 1"
                    className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    required
                  />
                  <input
                    type="text"
                    name="billingAddressTwo"
                    placeholder="Billing Address Line 2"
                    className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                  />
                  <input
                    type="text"
                    name="billingCity"
                    placeholder="Billing City"
                    className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    required
                  />
                  <input
                    type="text"
                    name="billingState"
                    placeholder="Billing State"
                    className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    pattern="[A-Z]{2}"
                    required
                  />
                  <input
                    type="text"
                    name="billingZipCode"
                    placeholder="Billing Zip Code"
                    className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    pattern="[0-9]{5}"
                    required
                  />
                </>
              )
            }

            <input
              type="hidden"
              name="preTaxSubtotal"
              value={pre_tax_subtotal}
            />


            <input
              type="hidden"
              name="stateTax"
              value={0.06}
            />


            <input
              type="hidden"
              name="surtax"
              value={getSurtaxPercent()}
            />


            <input
              type="hidden"
              name="total"
              value={pre_tax_subtotal + 0.06 * pre_tax_subtotal + getSurtaxPercent()}
            />


            <input
              type="hidden"
              name="taxRate"
              value={0.06}
            />


            <input
              type="hidden"
              name="taxExemptionStatus"
              value={false}
            />


            <input
              type="hidden"
              name="purchasedItems"
              value={JSON.stringify({})}
            />
          </div>


          <button
            type="submit"
            className="w-3/4 mx-auto py-3 px-6 text-white font-semibold rounded-lg
                      bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700
                      hover:bg-gradient-to-b hover:from-gray-500 hover:via-gray-600 hover:to-gray-800
                      active:bg-gradient-to-b active:from-gray-600 active:via-gray-700 active:to-gray-900
                      focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transform transition-all duration-200 ease-in-out
                      hover:w-[90%] hover:scale-105 active:scale-95
                      shadow-lg hover:shadow-xl active:shadow-md
                      block"
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Processing...' : 'Complete Purchase'}
          </button>
        </form>

        <div className="checkout_summary w-full md:w-1/2 p-6 bg-inherit rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Items to Purchase</h2>
          {children}
        </div>
      </div>
    </>
  )
}