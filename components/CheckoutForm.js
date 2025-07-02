'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import AnimatedButton from './ui/AnimatedButton';
import { getSurtaxPercent } from '@/actions/getSurtaxPercent';
import { FaCheckCircle } from 'react-icons/fa';


export default function CheckoutForm({ pre_tax_subtotal, children }) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDifferentBilling, setIsDifferentBilling] = useState(false);

  // State for Purchase Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shippingAddressOne: '',
    shippingAddressTwo: '',
    shippingCity: '',
    shippingState: '',
    shippingZipCode: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // State for hidden input values
  const [preTaxSubtotal, setPreTaxSubtotal] = useState(pre_tax_subtotal);
  const [stateTax, setStateTax] = useState(0);
  const [surtax, setSurtax] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate total whenever values are changed
  useEffect(() => {
    const calculateTotal = preTaxSubtotal + (stateTax * preTaxSubtotal) + surtax;
    setTotal(calculateTotal);
  }, [preTaxSubtotal, stateTax, surtax]);

  // Console log for debugging
  useEffect(() => {
    console.clear();
    console.log('--- CHECKOUT FORM VALUES ---');
    console.log('Pre-Tax Subtotal:', preTaxSubtotal);
    console.log('State Tax:', stateTax);
    console.log('Surtax:', surtax);
    console.log('Tax Rate:', taxRate);
    console.log('');
    console.log('Total: $', total);
  }, [preTaxSubtotal, stateTax, surtax, total, taxRate]);

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
              name="name"
              placeholder="Business Name or Full Name"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 inline-block`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formData.name && formData.name.length > 3 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formData.email && formData.email.includes("@") && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formData.phone && formData.phone.length === 10 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

          </div>

          <div className="shipping_information mb-6" data-testid="shipping_information_section">
            <h4 className="text-lg font-bold">Shipping Information</h4>
            <input
              type="text"
              name="shippingAddressOne"
              placeholder="Address Line 1"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              value={formData.shippingAddressOne}
              onChange={handleChange}
              required
            />
            {formData.shippingAddressOne && formData.shippingAddressOne.length > 3 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="text"
              name="shippingAddressTwo"
              placeholder="Address Line 2"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              value={formData.shippingAddressTwo}
              onChange={handleChange}
            />
            {formData.shippingAddressTwo && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}
            <input
              type="text"
              name="shippingCity"
              placeholder="City"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              value={formData.shippingCity}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="shippingState"
              placeholder="State"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[A-Z]{2}"
              value={formData.shippingState}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="shippingZipCode"
              placeholder="Zip Code"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
              pattern="[0-9]{5}"
              value={formData.shippingZipCode}
              onChange={handleChange}
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
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    required
                  />
                  <input
                    type="text"
                    name="billingAddressTwo"
                    placeholder="Billing Address Line 2"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                  />
                  <input
                    type="text"
                    name="billingCity"
                    placeholder="Billing City"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    required
                  />
                  <input
                    type="text"
                    name="billingState"
                    placeholder="Billing State"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    pattern="[A-Z]{2}"
                    required
                  />
                  <input
                    type="text"
                    name="billingZipCode"
                    placeholder="Billing Zip Code"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2`}
                    pattern="[0-9]{5}"
                    required
                  />
                </>
              )
            }

            <input
              type="hidden"
              name="preTaxSubtotal"
              value={0.00}
            />


            <input
              type="hidden"
              name="stateTax"
              value={0.06}
            />


            <input
              type="hidden"
              name="surtax"
              value={0.015}
            />


            <input
              type="hidden"
              name="total"
              value={0.015}
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

          <AnimatedButton
            type="submit"
            className="w-full mt-6 tertiary_bg_color border-[.1rem] border-gray-100 text-gray-200 font-semibold py-2 px-4 rounded-lg text-sm"
          >
            {isSubmitted ? 'Processing...' : 'Complete Purchase'}
          </AnimatedButton>
        </form>

        <div className="checkout_summary w-full md:w-1/2 p-6 bg-inherit rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Items to Purchase</h2>
          {children}
        </div>
      </div>
    </>
  )
}