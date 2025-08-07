'use client';

import { useRef, useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const ContactFormIntroMessage = ({ isVisible, isHidden }) => {
  return (
    <div
      id="contact_form__intro_message"
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: isHidden ? 'none' : 'block' }}
    >
      <p className="text-gray-300">
        Thank you for choosing to contact us, we value your important feedback and requests for quotation on custom machined parts and tooling. We have an in-house Mechanical Engineer to aide with custom part design. Please write a detailed description of your request and we will make sure to get back in touch with you as soon as possible.

        <br /><br />

        <small className="text-gray-500 text-sm">
          Attempts to sell products or services are prohibited, all sales messages will filtered and range-ban your IP address from future access.
        </small>
      </p>
    </div>
  );
}

const SuccessMessage = ({ isVisible, isHidden }) => {
  return (
    <div
      className={`mt-8 mx-auto p-12 bg-gray-900 text-white rounded-xl w-[90%] md:w-[400px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: isHidden ? 'none' : 'block' }}
    >
      <h1 className="text-5xl font-bold text-center mb-3" style={{ textShadow: "1px 1px rgba(255,255,255,.25)" }}>✅</h1>
      <h2 className="text-2xl font-bold text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.4)" }}>Message Sent!</h2>
      <p className="text-center" style={{ textShadow: "1px 1px rgba(0,0,0,.24)" }}>We'll get back to you as soon as possible.</p>
    </div>
  );
}

const ErrorMessage = ({ message, isVisible }) => {
  if (!isVisible || !message) return null;

  return (
    <div className="mb-4 p-4 bg-red-500 text-white rounded transition-opacity duration-300">
      {message}
    </div>
  );
}

export default function ContactUsPage() {
  const nameRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);
  const [hideIntro, setHideIntro] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hideSuccess, setHideSuccess] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Focus management can be handled by the ContactForm component
  }, []);

  const handleSuccess = () => {
    setErrorMessage('');
    setShowForm(false);

    // Start the animation sequence
    setShowIntro(false);
    setTimeout(() => {
      setHideIntro(true);
      setHideSuccess(false);
      setTimeout(() => {
        setShowSuccess(true);
      }, 50); // Small delay to ensure the element is rendered before fading in
    }, 1000); // Wait for intro to fade out before showing success
  };

  const handleError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 5000); // Clear error after 5 seconds
  };

  const resetForm = () => {
    setShowSuccess(false);
    setHideSuccess(true);
    setShowIntro(true);
    setHideIntro(false);
    setShowForm(true);
    setErrorMessage('');
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
            <ContactFormIntroMessage isVisible={showIntro} isHidden={hideIntro} />
            <SuccessMessage isVisible={showSuccess} isHidden={hideSuccess} />

            {showForm && (
              <>
                <ErrorMessage message={errorMessage} isVisible={!!errorMessage} />
                <ContactForm onSuccess={handleSuccess} onError={handleError} />
              </>
            )}

            {showSuccess && (
              <div className="text-center mt-8">
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}