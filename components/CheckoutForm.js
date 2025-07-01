'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import { getSurtaxPercent } from '@/actions/getSurtaxPercent';

export default function CheckoutForm({ pre_tax_subtotal, children }) {
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

            <input type="hidden" name="preTaxSubtotal" value={pre_tax_subtotal} />
            <input type="hidden" name="stateTax" value={0.06} />
            <input type="hidden" name="surtax" value={getSurtaxPercent()} />
            <input type="hidden" name="total" value={pre_tax_subtotal + 0.06 * pre_tax_subtotal + getSurtaxPercent()} />
            <input type="hidden" name="taxRate" value={0.06} />
            <input type="hidden" name="taxExemptionStatus" value={false} />
            <input type="hidden" name="purchasedItems" value={JSON.stringify({})} />
          </div>

          <button type="submit" className="btn btn-primary">
            Checkout
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