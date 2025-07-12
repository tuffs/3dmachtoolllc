'use client';

import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import PurchaseSummary from '@/components/PurchaseSummary';
import { getTaxesAndTotal } from '@/actions/getTaxesAndTotal';


export default function CheckoutForm({ pre_tax_subtotal, children, onSubmit }) {

  const [isDifferentBilling, setIsDifferentBilling] = useState(false);
  const [isPhoneFormatted, setIsPhoneFormatted] = useState(false);

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
    billingAddressOne: '',
    billingAddressTwo: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
  });

  // Handle Billing Address Toggle
  const handleBillingAddressDiffers = () => {
    if (!isDifferentBilling) {
      // Reset billing address fields if they are not different
      setFormData((prev) => ({
        ...prev,
        billingAddressOne: '',
        billingAddressTwo: '',
        billingCity: '',
        billingState: '',
        billingZipCode: '',
      }));
      // Set isDifferentBilling to true AFTER resetting form values
      setIsDifferentBilling(true);
    } else {
      setIsDifferentBilling(false);
    }
  }

  // Handle form input changes
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'phone') {
      // format phone number with hyphens and keep validated
      const formattedPhoneNumber = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhoneNumber,
      }));
      setIsPhoneFormatted(true);
    }
  };

  // BASE STATE TAX RATE:
  // State for hidden input values
  // checks out across the board, has a useEffect to sync
  const [preTaxSubtotal, setPreTaxSubtotal] = useState(pre_tax_subtotal);

  // State of Florida base Tax Rate
  const [stateTax, setStateTax] = useState(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
  const [surtax, setSurtax] = useState(0);
  const [taxRate, setTaxRate] = useState(parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06) + 0);
  // Initialize total with base FL tax applied
  const initialStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
  const [total, setTotal] = useState(parseFloat((pre_tax_subtotal + (pre_tax_subtotal * initialStateTax)).toFixed(2)));

  // Keep the preTaxSubtotal in sync with prop value
  useEffect(() => {
    setPreTaxSubtotal(pre_tax_subtotal);
    // Also update the total when subtotal changes (applying current tax rate)
    const currentTaxRate = parseFloat(stateTax) + parseFloat(surtax);
    const newTotal = parseFloat((pre_tax_subtotal + (pre_tax_subtotal * currentTaxRate)).toFixed(2));
    setTotal(newTotal);
  }, [pre_tax_subtotal, stateTax, surtax]);

  // We only need to concern ourselves with the Shipping State and Zip Code
  // all other values are irrelevant.

  useEffect(() => {
    const differentBilling = isDifferentBilling;

    let state, zipCode, subtotal;
    if (differentBilling) {
      state = formData.billingState;
      zipCode = formData.billingZipCode;
      subtotal = preTaxSubtotal;
    } else {
      state = formData.shippingState;
      zipCode = formData.shippingZipCode;
      subtotal = preTaxSubtotal;
    }

    // Function to get all sales information in a single object
    // If the state is not Florida, we can skip the tax calculation
    const callTaxesAndTotal = async () => {
      try {
        console.log('Calling getTaxesAndTotal with:', { state, zipCode, subtotal });
        // Get the taxes and totals - AWAIT the server action
        const salesInfo = await getTaxesAndTotal(state, zipCode, subtotal);
        console.log('Sales info result:', salesInfo);

        if (salesInfo.success) {
          setSurtax(salesInfo.surtax);
          setStateTax(salesInfo.stateTax);
          setPreTaxSubtotal(salesInfo.subtotal);
          setTotal(parseFloat(salesInfo.total.toFixed(2)));
          setTaxRate(salesInfo.taxRate);
        } else if (salesInfo.success === false) {
          setSurtax(0);
          setStateTax(0);
          setPreTaxSubtotal(preTaxSubtotal);
          setTotal(preTaxSubtotal);
          setTaxRate(0.00);
          console.error('No sales tax to charge.');
        }
        return;
      } catch (error) {
        console.error('Error fetching taxes and total:', error);
        return;
      }
    }

    // Actually call the function when state, zipCode, or subtotal changes
    if (state && zipCode && subtotal) {
      callTaxesAndTotal();
    }
  }, [formData.shippingState, formData.shippingZipCode, preTaxSubtotal, formData.billingState, formData.billingZipCode, isDifferentBilling]);

  // Keep the taxRate in sync with stateTax and surtax changes
  useEffect(() => {
    const newTaxRate = parseFloat(stateTax) + parseFloat(surtax);
    setTaxRate(newTaxRate);
  }, [stateTax, surtax]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      formData,
      preTaxSubtotal,
      stateTax,
      surtax,
      total,
      taxRate,
      isDifferentBilling
    };

    if (onSubmit) {
      await onSubmit(submissionData);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 p-12">
        <form id="checkout-form" className="checkout_form w-full md:w-1/2 p-6 bg-[#161717] rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
          <div className="contact_information mb-6" data-testid="contact_information_section">
            <h4 className="text-lg font-bold">Contact Details</h4>

            <input
              type="text"
              name="name"
              placeholder="Business Name or Full Name"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 inline-block focus:outline-none ${formData.name.length >= 3 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formData.name && formData.name.length >= 3 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.email.includes("@") ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
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
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.phone.length >= 10 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
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
            <h4 className="text-lg font-bold">Shipping Address</h4>
            <input
              type="text"
              name="shippingAddressOne"
              placeholder="Address Line 1"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.shippingAddressOne.length > 3 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
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
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.shippingAddressTwo ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
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
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.shippingCity.length >= 2 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
              value={formData.shippingCity}
              onChange={handleChange}
              required
            />
            {formData.shippingCity.length > 3 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="text"
              name="shippingState"
              placeholder="State (2 Letter Code)"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.shippingState.length === 2 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
              pattern="[A-Z]{2}"
              maxLength="2"
              minLength="2"
              value={formData.shippingState}
              onChange={handleChange}
              required
            />
            {formData.shippingState.length === 2 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <input
              type="text"
              name="shippingZipCode"
              placeholder="Zip Code"
              className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${formData.shippingZipCode.length === 5 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
              pattern="[0-9]{5}"
              value={formData.shippingZipCode}
              onChange={handleChange}
              required
            />
            {formData.shippingZipCode.length === 5 && (
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}

            <div className="billingAddressSameAsShippingCheckbox mt-2">
              <input
                type="checkbox"
                name="sameAsShipping"
                className="my-2"
                checked={!isDifferentBilling}
                onChange={handleBillingAddressDiffers}
              />
              <label className="ml-2 text-sm text-gray-400"><div className="inline-block" style={{ lineHeight: '2rem' }}>My billing address is the same as my shipping address.</div></label>
            </div>

            {isDifferentBilling &&
              (
                <>
                  <h4 className="text-lg font-bold mt-4">Billing Address</h4>
                  <input
                    type="text"
                    name="billingAddressOne"
                    placeholder="Billing Address Line 1"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingAddressOne.length > 3 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                    value={formData.billingAddressOne}
                    onChange={handleChange}
                    required={isDifferentBilling ? true : false}
                  />
                  {isDifferentBilling && formData.billingAddressOne.length > 3 && (
                    <FaCheckCircle className="text-green-500 inline-block ml-3" />
                  )}

                  <input
                    type="text"
                    name="billingAddressTwo"
                    placeholder="Billing Address Line 2"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingAddressTwo ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                    value={formData.billingAddressTwo}
                    onChange={handleChange}
                  />
                  {isDifferentBilling && formData.billingAddressTwo && (
                    <FaCheckCircle className="text-green-500 inline-block ml-3" />
                  )}

                  <input
                    type="text"
                    name="billingCity"
                    placeholder="Billing City"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingCity.length >= 2 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                    required={isDifferentBilling ? true : false}
                    value={formData.billingCity}
                    onChange={handleChange}
                  />
                  {isDifferentBilling && formData.billingCity.length >= 2 && (
                    <FaCheckCircle className="text-green-500 inline-block ml-3" />
                  )}

                  <input
                    type="text"
                    name="billingState"
                    placeholder="Billing State (2 Letter Code)"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingState.length === 2 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                    pattern="[A-Z]{2}"
                    maxLength="2"
                    minLength="2"
                    required={isDifferentBilling ? true : false}
                    value={formData.billingState}
                    onChange={handleChange}
                  />
                  {isDifferentBilling && formData.billingState.length === 2 && (
                    <FaCheckCircle className="text-green-500 inline-block ml-3" />
                  )}

                  <input
                    type="text"
                    name="billingZipCode"
                    placeholder="Billing Zip Code"
                    className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingZipCode.length === 5 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                    pattern="[0-9]{5}"
                    required={isDifferentBilling ? true : false}
                    value={formData.billingZipCode}
                    onChange={handleChange}
                  />
                  {isDifferentBilling && formData.billingZipCode.length === 5 && (
                    <FaCheckCircle className="text-green-500 inline-block ml-3" />
                  )}
                </>
              )
            }

            <input
              type="hidden"
              name="preTaxSubtotal"
              value={preTaxSubtotal}
            />


            <input
              type="hidden"
              name="stateTax"
              value={stateTax}
            />


            <input
              type="hidden"
              name="surtax"
              value={surtax}
            />


            <input
              type="hidden"
              name="total"
              value={total}
            />


            <input
              type="hidden"
              name="taxRate"
              value={taxRate}
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
        </form>

        <div className="checkout_summary w-full md:w-1/2 p-6 bg-inherit rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Items to Purchase</h2>
          {children}
          <PurchaseSummary
            preTaxSubtotal={preTaxSubtotal}
            stateTax={stateTax}
            surtax={surtax}
            taxRate={taxRate}
            total={total}
          />
        </div>
      </div>
    </>
  )
}