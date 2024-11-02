'use client';

import { useRef, useEffect, useState } from 'react';
import Hero from '@/components/Hero';

export default function ContactUsPage() {
  const nameRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
      nameRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send the data to your server
  };

  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Contact Us
            </h1>
          </section>

          <section className="mx-3 md:mx-32">
            <p className="text-gray-300">
              Thank you for choosing to contact us, we value your important feedback and requests for quotation on custom machined parts and tooling. We have an in-house Mechanical Engineer to aide with custom part design. Please write a detailed description of your request and we will make sure to get back in touch with you as soon as possible.

              You can also directly email Devon Kiss at <a href="mailto:devon@3dmandt.com" className="text-gray-200 underline">devon@3dmandt.com</a> or call now <a href="tel:14482566963" className="text-gray-200 underline">448-256-6963</a>.
            </p>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full p-4 text-gray-300 bg-gray-700 rounded"
                  id="name"
                  ref={nameRef}
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  className="w-full p-4 text-gray-300 bg-gray-700 rounded"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                  Your Email Address
                </label>
                <input
                  className="w-full p-4 text-gray-300 bg-gray-700 rounded"
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                  Your Message or Inquiry
                </label>
                <textarea
                  className="w-full p-4 text-gray-300 bg-gray-700 rounded min-h-[175px]"
                  id="message"
                  placeholder="Enter your message here, be as specific as possible."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                className="w-full mt-2 md:mt-3 p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-1000"
                type="submit"
              >
                Send Your Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}