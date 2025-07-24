'use client';

import { useState } from 'react';
import { createContactMessage } from '@/actions/createContactMessage';

export default function ContactForm({ onSuccess, onError }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('message', formData.message);

      const result = await createContactMessage(formDataObj);

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        onSuccess();
      } else {
        onError(result.message || 'Failed to send and save messae. Please try again!');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      onError('An unexpected error occurred. Please try again..');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name or Business Name</label>
        <input
          className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
          id="name"
          name="name"
          type="text"
          placeholder="Your Name or Business Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
        <input
          className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
        <input
          className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Your Message</label>
        <textarea
          className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4 min-h-[175px]"
          id="message"
          name="message"
          placeholder="Enter your message here, please be as specific as possible."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button
        className="w-full mt-2 md:mt-3 p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-1000 disabled:opacity-50"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}