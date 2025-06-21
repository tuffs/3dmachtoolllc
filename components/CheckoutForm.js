'use client';

import React, { useState, useEffect } from 'react';
import validator from 'validator';
import DOMPurify from 'dompurify';
import { getSurtaxPercent } from '@/actions/getSurtaxPercent';

export default function CheckoutForm({ children }) {
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

  const [errors, setErrors] = useState({});
  const [differentShippingInformation, setDifferentShippingInformation] = useState(false);
  const [taxRate, setTaxRate] = useState({ rate: 0.0, error: null });

  // Fetch tax rate when zip code changes
  useEffect(() => {
    async function fetchTaxRate() {
      const zipCode = differentShippingInformation ? form.shippingZipCode : form.billingZipCode;
      if (zipCode && validator.isPostalCode(zipCode, 'US')) {
        const result = await getSurtaxPercent(zipCode);
        setTaxRate(result);
      } else {
        setTaxRate({ rate: 0.0, error: 'Invalid zip code' });
      }
    }
    fetchTaxRate();
  }, [form.billingZipCode, form.shippingZipCode, differentShippingInformation]);

  // Validation function
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!validator.isLength(value, { min: 2 })) {
          error = 'Name must be at least 2 characters';
        } else if (!validator.matches(value, /^[a-zA-Z0-9\s\-\.\'\,\&\(\)éñáíóúüçÉÑÁÍÓÚÜÇ#]+$/)) {
          error = 'Name can only contain letters, numbers, spaces, or common name characters (e.g., -, ., \', &, #)';
        }
        break;
      case 'email':
        if (!validator.isEmail(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'phone':
        if (!validator.isMobilePhone(value, 'any')) {
          error = 'Invalid phone number';
        }
        break;
      case 'billingAddressOne':
      case 'shippingAddressOne':
        if (!validator.isLength(value, { min: 5 })) {
          error = 'Address must be at least 5 characters';
        }
        break;
      case 'billingAddressTwo':
      case 'shippingAddressTwo':
        if (value && !validator.isLength(value, { min: 1 })) {
          error = 'Address line 2 is invalid';
        }
        break;
      case 'billingCity':
      case 'shippingCity':
        if (!validator.isLength(value, { min: 2 })) {
          error = 'City must be at least 2 characters';
        }
        break;
      case 'billingState':
      case 'shippingState':
        if (!validator.isLength(value, { min: 2, max: 2 })) {
          error = 'State must be a 2-letter code';
        } else if (!validator.isAlpha(value)) {
          error = 'State must contain only letters';
        }
        break;
      case 'billingZipCode':
      case 'shippingZipCode':
        if (!validator.isPostalCode(value, 'US')) {
          error = 'Invalid US zip code';
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Sanitize and validate on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    switch (name) {
      case 'name':
        sanitizedValue = value;
        console.log(`Name input: raw=${value}, sanitized=${sanitizedValue}`);
        break;
      case 'email':
        sanitizedValue = value;
        console.log(`Email input: raw=${value}, sanitized=${sanitizedValue}`);
        break;
      case 'phone':
        sanitizedValue = value.replace(/[\s-()]/g, '');
        break;
      case 'billingAddressOne':
      case 'billingAddressTwo':
      case 'shippingAddressOne':
      case 'shippingAddressTwo':
        sanitizedValue = DOMPurify.sanitize(value);
        break;
      case 'billingCity':
      case 'shippingCity':
        sanitizedValue = validator.trim(value);
        break;
      case 'billingState':
      case 'shippingState':
        sanitizedValue = validator.trim(value).toUpperCase();
        break;
      case 'billingZipCode':
      case 'shippingZipCode':
        sanitizedValue = validator.trim(value);
        break;
      default:
        break;
    }

    setForm((prev) => {
      let updatedForm = { ...prev, [name]: sanitizedValue };

      if (
        !differentShippingInformation &&
        (name.startsWith('billingAddress') ||
          name === 'billingCity' ||
          name === 'billingState' ||
          name === 'billingZipCode')
      ) {
        const shippingField = name.replace('billing', 'shipping');
        updatedForm[shippingField] = sanitizedValue;
      }

      return updatedForm;
    });

    const error = validateField(name, sanitizedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Sync shipping fields
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
      setErrors((prev) => ({
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
      setErrors((prev) => ({
        ...prev,
        shippingAddressOne: prev.billingAddressOne ? validateField('shippingAddressOne', prev.billingAddressOne) : '',
        shippingAddressTwo: prev.billingAddressTwo ? validateField('shippingAddressTwo', prev.billingAddressTwo) : '',
        shippingCity: prev.billingCity ? validateField('shippingCity', prev.billingCity) : '',
        shippingState: prev.billingState ? validateField('shippingState', prev.billingState) : '',
        shippingZipCode: prev.billingZipCode ? validateField('shippingZipCode', prev.billingZipCode) : '',
      }));
    }
  }, [differentShippingInformation]);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalForm = {
      ...form,
      name: DOMPurify.sanitize(validator.trim(form.name)),
      email: validator.normalizeEmail(form.email) || form.email,
    };

    const newErrors = {};
    Object.keys(finalForm).forEach((key) => {
      if (
        !differentShippingInformation &&
        (key.startsWith('shippingAddress') ||
          key === 'shippingCity' ||
          key === 'shippingState' ||
          key === 'shippingZipCode')
      ) {
        return;
      }
      const error = validateField(key, finalForm[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...finalForm, taxRate: taxRate.rate }),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
          setForm({
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
          setDifferentShippingInformation(false);
          setErrors({});
          setTaxRate({ rate: 0.0, error: null });
        } else {
          console.error('Submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Validation errors:', newErrors);
    }
  };

  const renderInput = (id, name, label, type = 'text', required = true) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`w-full p-2 text-sm tertiary_bg_color text-gray-300 border ${errors[name] ? 'border-red-500' : 'border-gray-300'
          } rounded-lg`}
        value={form[name]}
        onChange={handleChange}
        required={required}
        autoComplete={name === 'email' ? 'off' : 'on'}
        autoCorrect="off"
        spellCheck={name === 'email' ? 'false' : 'true'}
        placeholder={
          name === 'name' ? 'Full Name or Registered Business Name' :
            name === 'billingState' || name === 'shippingState' ? 'CA' : undefined
        }
        maxLength={name === 'billingState' || name === 'shippingState' ? 2 : undefined}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-8">
          <div className="secondary_bg_color md:w-[45%] md:mx-auto p-6 rounded-lg border-[.1rem] border-gray-100 shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Billing Details</h2>
            {renderInput('name', 'name', 'Billing Name or Business')}
            {renderInput('email', 'email', 'Email Address', 'email')}
            {renderInput('phone', 'phone', 'Phone Number')}
            {renderInput('billingAddressOne', 'billingAddressOne', 'Billing Address Line One')}
            {renderInput('billingAddressTwo', 'billingAddressTwo', 'Billing Address Line Two', 'text', false)}
            {renderInput('billingCity', 'billingCity', 'Billing City')}
            {renderInput('billingState', 'billingState', 'Billing State')}
            {renderInput('billingZipCode', 'billingZipCode', 'Billing Zip Code')}

            <div className="shipping_and_billing_differentiation flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                id="differentShippingInformation"
                name="differentShippingInformation"
                checked={differentShippingInformation}
                onChange={() => setDifferentShippingInformation(!differentShippingInformation)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="differentShippingInformation" className="text-sm text-gray-300">
                Check here if your shipping address differs from your billing address information.
              </label>
            </div>

            {differentShippingInformation && (
              <div id="shippingDetails" className="space-y-6 pt-3 pb-6">
                <h2 className="text-xl font-semibold text-gray-300 mb-4">Shipping Details</h2>
                {renderInput('shippingAddressOne', 'shippingAddressOne', 'Shipping Address One')}
                {renderInput('shippingAddressTwo', 'shippingAddressTwo', 'Shipping Address Two', 'text', false)}
                {renderInput('shippingCity', 'shippingCity', 'Shipping City')}
                {renderInput('shippingState', 'shippingState', 'Shipping State')}
                {renderInput('shippingZipCode', 'shippingZipCode', 'Shipping Zip Code')}
              </div>
            )}

            <div className="purchase_order_summary">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Your Purchase Details:</h3>
              <div className="outputBillingAddress">
                <p className="text-sm text-gray-300 mt-4">
                  <strong>Billing Address:</strong>
                  <br />
                  {form.billingAddressOne && <>{form.billingAddressOne}<br /></>}
                  {form.billingAddressTwo && <>{form.billingAddressTwo}<br /></>}
                  {form.billingCity && form.billingState && (
                    <>{form.billingCity}, {form.billingState} {form.billingZipCode}<br /></>
                  )}
                </p>
              </div>
              <div className="outputShippingAddress">
                <p className="text-sm text-gray-300 mt-4">
                  <strong>Shipping Address:</strong>
                  <br />
                  {form.shippingAddressOne && <>{form.shippingAddressOne}<br /></>}
                  {form.shippingAddressTwo && <>{form.shippingAddressTwo}<br /></>}
                  {form.shippingCity && form.shippingState && (
                    <>{form.shippingCity}, {form.shippingState} {form.shippingZipCode}<br /></>
                  )}
                </p>
              </div>
              <div className="taxRate">
                <p className="text-sm text-gray-300 mt-4">
                  <strong>Sales Tax Rate:</strong> {taxRate.error ? taxRate.error : `${taxRate.rate}%`}
                </p>
              </div>
            </div>

            {children}

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}