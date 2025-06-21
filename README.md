# 3D MACHINE AND TOOL LLC

The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

## DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS

- [ ] Recreate the animation set for the <Hero/> component.
  - [ ] The logo should hover, isolating slowly "in place" with framer motion.

## CHECKOUT PROCESS

- [ ] Ability to completely checkout with multiple products and quantities
  - [ ] Checkout Form and all of its intricacies
    - [ ] Ensure that the US address provided is recognized by the USPS as a definitive ship to location
    - [ ] Allow override with acknowledgement that any shipping errors are on the customer
    - [ ] Sales Tax Calculation and Final Pricing Provided
    - [ ] Acceptance of valid Exemption Certificates in PDF format
      - [ ] Can we query AI to check if the uploaded PDF appears to be a legitimate copy by US State?
        - [ ] Use ChatGPT or Grok to offload processing power for this
  - [ ] Add on a Stripe Payment processor which completes sales
    - [ ] Ensure we are capable to complete these forms in mobile devices


## MOBILE PHONE NAVIGATION

- [ ] Create an animated fullscreen menu for desktop (smaller display, user enforced) and primarily for mobile phones.

  - [ ] Use the <MobileMenu/> component for displaying the mobile menu.
  - [ ] Hide the Desktop navigation on size small.
  - [ ] fade in and fade out with close for the fullscreen mobile menu.
  - [ ] link items should be a bit bigger and operate differently (a little) from Desktop views.
    - [ ] Examples:
      - [ ] Framer.com, mobile navigation [https://framer.com]

## RECEIVE RFQ's, PROVIDE QUOTES, REMOVE DATA FROM SERVERS (contact request and design docs in the cloud.)

  - [ ] Once quoted, must remove the files and the quotation from the server.
    - [ ] Need a process to speed this up after the quote is received.
    - [ ] Administrative controls to allow for the deletion of these quotes.
- [ ] Data limitations, design doc package limits
  - [ ] Need to figure out what the biggest project in 3d models dad has in size for individual solutions are and x2 the available upload data per quote.

# COMPLETED ITEMS:

## [x] Dealing with SPAM and BOT Activity
  - [x] ChatGPT is being used to rate the likelihood of a message being spam or a relevant business request.
  - [x] Filter out fake or spamming users from contacting or annoying the admins.
  - [x] I want to try and ensure that genuine people are acccessing my website's content.
  - [x] Person seeking services or products which are provided.
  - [x] Upon identification of illegitimate behaviour or access:
      - [x] Save that persons access information in full.
      - [x] Refuse service to that computer or set of computers.
      - [x] Prevent all data submitted from reaching admins.
  - [x] Implement a working Request for Quote form with the database.
  - [x] Show a screen which shows successful submission and email sent.
  - [x] Provide an admin email and a customer email response.
  - [x] The PostgreSQL database will need all of the file names stored
  - [x] Cloudinary for file uploads, Cloudinary is currently cheapest alternative.


# TODO

Complete the sales checkout process with zipcode and state selection for
sales tax, ability to upload a sales tax exemption form and the ability
to complete purchases.

The ACTION column needs to be removed and removal of a product from the
shopping cart integrated into the existing width of the table as it
stands now.

# OK, SO, MY CURRENT PROMPT TO AI + THOUGHTS
I have gotten all the way to the point where we discuss making changes
to the `prisma.schema` file and we need to talk more in-depth about
this. First, the taxRate as it stands is going to be two parts, the
first part being that we will use an environment variable for the base
State of Florida tax rate which at present is 6% then we will add on the
zip code fetched surtax from my table of data regarding surtaxes for
each zip code (read county) in Florida.

However, at present we have a problem. The way that the value for our
surtaxes are saved and how we are using them differ. I have run into an
issue with adding the surtax and six percent (via `0.06 + taxRate`)
because our tax rate is a float... in the application, but, as it is
saved in the database at present across the entire table it contains
values such as: 0.015 -- this is not a float. Also, if we want to do
things the way we are, we cannot use a float anyhow.

So we need a way to work with values such as 1.5 or 2.0 percent but as
decimal values like 0.015 or 2.000 so that we then get 0.060 + 0.015 as
0.075 so that we can multiply the `preTaxSubtotal*0.075` or whatever the
case may be and then add back the `preTaxSubtotal` for the final value,
or, make the tax multiplier as `1.075` and provide a `1` value so that
when we multiply our final answer is the total value of the purchase,
then just simply display the surtax and state tax cost combined with the
original formulae as `preTaxSubtotal*0.075` so that we can show users
what they are paying in taxes too.

This is getting a bit off of the beaten path here, but needs to be
figured out for the application to work properly and display proper
numbers to our customers.

In addition, we do need to provide updates with more fields for our
orders so that when we pull them up in the database, they show all of
the information in the sale to include the surtax, state tax, and pre
purchase price subtotal along with the final amount charged. I need to
go through and see what other data I would like to include about each
transaction too before we proceed there. But for right now, we need to
figure out taxation, the values that are in the reference table I
created for surtaxes already and how we can play with the numbers format
properly to be accurate with customers purchases.

Also, we need to remove the ability to enter more than 5 (five)
characters to the field for zip codes as no one in the US really uses
the +4 except for super large systems like the IRS, Exxon, and Amazon.
Those we are not and our final, bottom line does not depend on that we
will be printing labels with five digits and the local post offices can
figure the rest out. Therefor, we need to limit zip code fields to only
allow 5 characters maximum.

In addition to this, I have made some changes to my code base that I
would like for you to be aware of, I will not state all of those changes
with an explanation, I will instead provide the files that contain the
changes which are relevant to the project we are working on for future
reference below. In addition to that, I will provide a screengrab of the
Neon postgresql database table for State of Florida surtaxes by zip code
and county for your review as well.

`app/cart/page.js`
```
import Hero from '@/components/Hero';
import CartCheckoutClient from '@/components/CartCheckoutClient';
import CartTable from '@/components/CartTable';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';

export default async function ShoppingCartPage() {
  const cookieStore = cookies();
  const cartCookie = cookieStore.get('3dmandt_cart')?.value;
  const cart = cartCookie ? getCart(cartCookie) : {};

  const productIds = Object.keys(cart).map((id) => Number(id));
  let products = [];
  let pre_tax_subtotal = 0;

  if (productIds.length > 0) {
    products = await getProductDetails(productIds);
    pre_tax_subtotal = products.reduce((sum, product) => {
      const qty = cart[product.id] || 0;
      return sum + product.price * qty;
    }, 0);
  }

  return (
    <div className="my-24">
      <Hero />
      <div className="mt-24 text-white pt-0 p-8">
        <section className="mb-3">
          <h1 className="text-4xl font-bold text-center">Current Order</h1>
        </section>
      </div>
      <CartCheckoutClient pre_tax_subtotal={pre_tax_subtotal}>
        <CartTable products={products} cart={cart} pre_tax_subtotal={pre_tax_subtotal} />
      </CartCheckoutClient>
    </div>
  );
}

```

`@/components/CartTable.js`
```
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CartTable({ products, cart, pre_tax_subtotal }) {
  return (
    <div className="w-full bg-inherit">
      <div className="w-full flex justify-center bg-inherit p-1">
        <div className="w-full max-w-3xl">
          <table className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-950 border border-gray-800">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700" width="33%">
                  QTY
                </th>
                <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
              </tr>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-900 transition-colors">
                    <td className="p-5 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Link
                            href={`/products/${product.id}`}
                            className="underline text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {product.name}
                          </Link>
                        </div>
                        <div className="flex flex-col">
                          <a
                            href="#!"
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <div className="flex">
                              <FaTimes className="flex flex-col text-block block" />
                              <small className="flex flex-col pl-1 hover:underline">
                                <small>remove item</small>
                              </small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800">{cart[product.id]}</td>
                    <td className="p-5 text-right border-b border-gray-800">
                      ${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td></td>
                <td className="p-5 text-right font-bold text-gray-300">PRE TAX SUBTOTAL</td>
                <td className="p-5 text-right font-bold text-white">
                  ${pre_tax_subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm my-3 mx-auto text-center text-white">
            <i>
              You may provide your Tax Exemption certificate during the checkout process next. You MUST provide a valid PDF
              certificate at the point of sale.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

```

`@/components/CartCheckoutClient.js`
```
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

```

`@/component/CheckoutForm.js`
```
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
  const [finalTaxRate, setFinalTaxRate] = useState(0.06);

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

    // Validation Error Handling
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
          name === 'name' ? 'Full Name or Registered Business Name' : undefined
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
                  <strong>Sales Tax Multiplier:</strong> {taxRate.error ? taxRate.error : `${taxRate.rate}`}
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

```

And at the root of my app's file structure I have this script which was
used to enter in surtax data to the database quickly as a preliminary
seed process from a markdown file containing all of the current surtax,
county, and zip code information used in the creation of the reference
table we are using for the surtax value.

`processSeedData.js`
```
const fs = require('fs');
const path = require('path');

// Read the markdown file
const filePath = path.join(__dirname, 'ZipCode_County_Tax.md');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Process the content
const lines = fileContent.split('\n').slice(2); // Skip the first two lines (title and empty line)
const seedData = lines
  .filter(line => line.trim() !== '') // Remove empty lines
  .map(line => {
    const [zipCode, county, rate] = line.split(',').map(item => item.trim());
    return {
      zipCode: parseInt(zipCode),
      county,
      rate: parseFloat(rate) / 100 // Convert percentage to decimal
    };
  });

// Generate the seed file content
const seedFileContent = `
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.floridaSalesTax.createMany({
      data: ${JSON.stringify(seedData, null, 2)},
      skipDuplicates: true,
    });
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
`;

// Write the seed file
const seedFilePath = path.join(__dirname, './seed.js');
fs.writeFileSync(seedFilePath, seedFileContent);

console.log('Seed file generated successfully:', seedFilePath);
console.log('Total records:', seedData.length);

```

Finally, the environment variable has been set for the State of
Florida's base tax as:
`STATE_TAX=6.0`

If I have not included an attachment to this prompt that is a
screenshot, stop and provide no text other than a reminder to paste my
attachment with my query. If I did, proceed as usual. Thank you.
