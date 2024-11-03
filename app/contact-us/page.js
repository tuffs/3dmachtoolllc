'use client';

import { useRef, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import Hero from '@/components/Hero';
import { createContactMessage } from '@/actions/createContactMessage';

export default function ContactUsPage() {
  const nameRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const initialState = { success: false, message: '' };
  const [state, formAction] = useFormState(createContactMessage, initialState);

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

  useEffect(() => {
    if (state.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [state]);

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

              <br /><br />

              <small className="text-gray-500 text-sm">
                Attempts to sell products or services are prohibited, all sales messages will be filtered out by active AI systems.
              </small>
            </p>

            {state.success ? (
              <div className="mt-8 mx-auto p-12 bg-green-500 text-white rounded-xl w-[400px]">
                <h1 className="text-5xl font-bold text-center mb-3" style={{ textShadow: "1px 1px rgba(0,0,0,.4)" }}>✅</h1>
                <h2 className="text-2xl font-bold text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.4)" }}>Message Sent!</h2>
                <p className="text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.24)" }}>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="mt-8" action={formAction}>
                {state.message && (
                  <div className="mb-4 p-4 bg-red-500 text-white rounded">
                    {state.message}
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full p-4 text-gray-300 bg-gray-700 rounded mb-4"
                    id="name"
                    name="name"
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
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
                    className="w-full p-4 text-gray-300 bg-gray-700 rounded mb-4"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
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
                    className="w-full p-4 text-gray-300 bg-gray-700 rounded mb-4"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                    Your Message <small className="text-gray-400 ml-2">Do not enter sales pitches, they will not reach our desk</small>
                  </label>
                  <textarea
                    className="w-full p-4 text-gray-300 bg-gray-700 rounded mb-4 min-h-[175px]"
                    id="message"
                    name="message"
                    placeholder="Enter your message here, please be as specific as possible."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  className="w-full mt-2 md:mt-3 p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-1000"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </>
  );
}