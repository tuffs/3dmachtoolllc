'use client';

import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaUpload, FaTimes } from 'react-icons/fa';
import PurchaseSummary from '@/components/PurchaseSummary';
import { getTaxesAndTotal } from '@/actions/getTaxesAndTotal';
import { uploadTaxExemptionCertificate } from '@/actions/uploadTaxExemptionCertificate';
import Cookies from 'js-cookie';

export default function CheckoutForm({ pre_tax_subtotal, children, onSubmit }) {
  const [isDifferentBilling, setIsDifferentBilling] = useState(false);
  const [isPhoneFormatted, setIsPhoneFormatted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTaxExempt, setIsTaxExempt] = useState(false);
  const [taxExemptionCertificateURL, setTaxExemptionCertificateURL] = useState('');
  const [isUploadingCertificate, setIsUploadingCertificate] = useState(false);
  const [uploadError, setUploadError] = useState('');

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

  useEffect(() => {
    const reorderCustomerData = Cookies.get('3dmandt_reorder_customer');
    if (reorderCustomerData) {
      try {
        const customerData = JSON.parse(reorderCustomerData);
        setFormData(prev => ({
          ...prev,
          name: customerData.name || '',
          email: customerData.email || '',
          phone: customerData.phone || '',
          shippingAddressOne: customerData.shippingAddress?.addressOne || '',
          shippingAddressTwo: customerData.shippingAddress?.addressTwo || '',
          shippingCity: customerData.shippingAddress?.city || '',
          shippingState: customerData.shippingAddress?.state || '',
          shippingZipCode: customerData.shippingAddress?.zipCode || '',
          billingAddressOne: customerData.billingAddress?.addressOne || '',
          billingAddressTwo: customerData.billingAddress?.addressTwo || '',
          billingCity: customerData.billingAddress?.city || '',
          billingState: customerData.billingAddress?.state || '',
          billingZipCode: customerData.billingAddress?.zipCode || '',
        }));


        if (customerData.billingAddress?.addressOne) {
          setIsDifferentBilling(true);
        }

        // Clear the reorder cookie after use
        Cookies.remove('3dmandt_reorder_customer');
      } catch (error) {
        console.error('Error parsing reorder customer data:', error);
      }
    }
  }, []);

  const handleBillingAddressDiffers = () => {
    if (!isDifferentBilling) {
      setFormData((prev) => ({
        ...prev,
        billingAddressOne: '',
        billingAddressTwo: '',
        billingCity: '',
        billingState: '',
        billingZipCode: '',
      }));
      setIsDifferentBilling(true);
    } else {
      setIsDifferentBilling(false);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'phone') {
      const formattedPhoneNumber = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhoneNumber,
      }));
      setIsPhoneFormatted(true);
    }
  };

  const [preTaxSubtotal, setPreTaxSubtotal] = useState(pre_tax_subtotal);
  const [stateTax, setStateTax] = useState(0);
  const [surtax, setSurtax] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [total, setTotal] = useState(pre_tax_subtotal);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setUploadError('Please select a file to upload.');
      return;
    }

    setIsUploadingCertificate(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('taxExemptionFile', file);

    try {
      const result = await uploadTaxExemptionCertificate(formData);

      if (result.success) {
        setTaxExemptionCertificateURL(result.url);
        setIsTaxExempt(true);
        setUploadError(''); // Clear any previous errors
      } else {
        setUploadError(result.error || 'Failed to upload certificate. Please try again.');
        setIsTaxExempt(false);
      }
    } catch (error) {
      setUploadError('An unexpected error occurred during upload. Please try again.');
      setIsTaxExempt(false);
    }

    setIsUploadingCertificate(false);
  };

  const removeCertificate = () => {
    setTaxExemptionCertificateURL('');
    setIsTaxExempt(false);
    setUploadError('');
  };

  useEffect(() => {
    setPreTaxSubtotal(pre_tax_subtotal);
  }, [pre_tax_subtotal]);

  useEffect(() => {
    const calculateTaxes = async () => {
      try {
        console.log('Calculating taxes with:', {
          state: formData.shippingState,
          zipCode: formData.shippingZipCode,
          subtotal: preTaxSubtotal,
          isTaxExempt
        });

        if (isTaxExempt) {
          setStateTax(0);
          setSurtax(0);
          setTotal(preTaxSubtotal);
          setTaxRate(0);
          return;
        }

        if (!formData.shippingState || !formData.shippingZipCode) {
          const baseStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
          const calculatedStateTax = preTaxSubtotal * baseStateTax;
          setStateTax(calculatedStateTax);
          setSurtax(0);
          setTotal(preTaxSubtotal + calculatedStateTax);
          setTaxRate(baseStateTax);
          return;
        }

        if (formData.shippingState.toUpperCase() !== 'FL') {
          const baseStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
          const calculatedStateTax = preTaxSubtotal * baseStateTax;
          setStateTax(calculatedStateTax);
          setSurtax(0);
          setTotal(preTaxSubtotal + calculatedStateTax);
          setTaxRate(baseStateTax);
          console.log('Applied out-of-state base tax rate:', baseStateTax);
          return;
        }

        if (formData.shippingState.toUpperCase() === 'FL' && formData.shippingZipCode.length === 5) {
          const salesInfo = await getTaxesAndTotal(formData.shippingState, formData.shippingZipCode, preTaxSubtotal);
          console.log('Florida tax calculation result:', salesInfo);

          if (salesInfo.success) {
            setStateTax(parseFloat(salesInfo.stateTax || 0));
            setSurtax(parseFloat(salesInfo.surtax || 0));
            setTotal(parseFloat(salesInfo.total || preTaxSubtotal));
            setTaxRate(parseFloat(salesInfo.taxRate || 0));
          } else {
            const baseStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
            const calculatedStateTax = preTaxSubtotal * baseStateTax;
            setStateTax(calculatedStateTax);
            setSurtax(0);
            setTotal(preTaxSubtotal + calculatedStateTax);
            setTaxRate(baseStateTax);
            console.log('Applied base Florida tax rate (county not found):', baseStateTax);
          }
        } else if (formData.shippingState.toUpperCase() === 'FL') {
          const baseStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
          const calculatedStateTax = preTaxSubtotal * baseStateTax;
          setStateTax(calculatedStateTax);
          setSurtax(0);
          setTotal(preTaxSubtotal + calculatedStateTax);
          setTaxRate(baseStateTax);
        }
      } catch (error) {
        console.error('Error calculating taxes:', error);
        const baseStateTax = parseFloat(process.env.NEXT_PUBLIC_STATE_TAX || 0.06);
        const calculatedStateTax = preTaxSubtotal * baseStateTax;
        setStateTax(calculatedStateTax);
        setSurtax(0);
        setTotal(preTaxSubtotal + calculatedStateTax);
        setTaxRate(baseStateTax);
      }
    };

    calculateTaxes();
  }, [formData.shippingState, formData.shippingZipCode, preTaxSubtotal, isTaxExempt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Additional validation for tax-exempt orders
    if (isTaxExempt && !taxExemptionCertificateURL) {
      setUploadError('Tax exemption requires a valid certificate. Please upload a file.');
      setIsSubmitted(false);
      return;
    }

    const submissionData = {
      formData,
      preTaxSubtotal,
      stateTax,
      surtax,
      total,
      taxRate,
      isDifferentBilling,
      isTaxExempt,
      taxExemptionCertificateURL
    };

    if (onSubmit) {
      await onSubmit(submissionData);
    }
  };

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
            {formData.phone && formData.phone.length === 12 && ( // Adjusted to check for formatted length
              <FaCheckCircle className="text-green-500 inline-block ml-3" />
            )}
          </div>

          <div className="tax_exemption mb-6" data-testid="tax_exemption_section">
            <h4 className="text-lg font-bold mb-3">Sales Tax Exemption (Optional)</h4>
            {!taxExemptionCertificateURL ? (
              <div>
                <p className="text-sm text-gray-400 mb-3">
                  Upload a valid sales tax exemption certificate provided by your State (PDF, JPG, or PNG, max 10MB) to remove sales tax from your order.<br />
                  <small>
                    Uploading a false, fake or invalid sales tax exemption certificate will delay your order so that we may speak with you. If you fail to provide a valid certificate you will be allowed to pay the taxes owed and sent the product or your order will be refunded less the cost of Certificate Processing Fee ($45), and any transaction related fees.
                  </small>
                </p>
                <div className="upload-area border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="taxExemptionFile"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={isUploadingCertificate}
                  />
                  <label
                    htmlFor="taxExemptionFile"
                    className={`cursor-pointer flex flex-col items-center ${isUploadingCertificate ? 'opacity-50' : ''}`}
                  >
                    <FaUpload className="text-3xl text-gray-400 mb-2" />
                    <span className="text-sm text-gray-300">
                      {isUploadingCertificate ? 'Uploading...' : 'Click to upload certificate'}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      PDF, JPG, PNG (Max 10MB)
                    </span>
                  </label>
                </div>
                {uploadError && (
                  <p className="text-red-500 text-sm mt-2">{uploadError}</p>
                )}
              </div>
            ) : (
              <div className="certificate-uploaded bg-green-800 border border-green-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2" />
                    <span className="text-green-200">Certificate uploaded successfully</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeCertificate}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTimes />
                  </button>
                </div>
                <p className="text-xs text-green-300 mt-1">
                  Sales tax has been removed from your order. Note: Certificate is subject to verification.
                </p>
              </div>
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
            {formData.shippingCity.length >= 2 && (
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
            {isDifferentBilling && (
              <>
                <h4 className="text-lg font-bold mt-4">Billing Address</h4>
                <input
                  type="text"
                  name="billingAddressOne"
                  placeholder="Billing Address Line 1"
                  className={`w-[94%] p-2 text-sm tertiary_bg_color text-gray-300 border rounded-sm my-2 focus:outline-none ${isDifferentBilling && formData.billingAddressOne.length > 3 ? 'border-green-500 focus:border-green-500' : 'border-gray-300 focus:border-gray-300'}`}
                  value={formData.billingAddressOne}
                  onChange={handleChange}
                  required={isDifferentBilling}
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
                  required={isDifferentBilling}
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
                  required={isDifferentBilling}
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
                  required={isDifferentBilling}
                  value={formData.billingZipCode}
                  onChange={handleChange}
                />
                {isDifferentBilling && formData.billingZipCode.length === 5 && (
                  <FaCheckCircle className="text-green-500 inline-block ml-3" />
                )}
              </>
            )}
            <input type="hidden" name="preTaxSubtotal" value={preTaxSubtotal} />
            <input type="hidden" name="stateTax" value={stateTax} />
            <input type="hidden" name="surtax" value={surtax} />
            <input type="hidden" name="total" value={total} />
            <input type="hidden" name="taxRate" value={taxRate} />
            <input type="hidden" name="taxExemptionStatus" value={isTaxExempt} />
            <input type="hidden" name="taxExemptionCertificateURL" value={taxExemptionCertificateURL} />
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
            isTaxExempt={isTaxExempt}
          />
        </div>
      </div>
    </>
  );
}