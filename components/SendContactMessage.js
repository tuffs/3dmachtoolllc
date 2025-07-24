'use client';

import { createContactMessage } from "@/actions/createContactMessage";

export default function SendContactMessage() {
  const handleSubmit = async (formData) => {
    try {
      const sentContactMessage = await createContactMessage(formData);
      if (sentContactMessage.success) {
        console.log('Contact Message Sent');
      }
    } catch (error) {
      console.error('Error occurred: ', error);
    }
  }

  return (
    <>
      <div className="w-full">
        <form action={handleSubmit}>
          <div className="name_field__contact_message">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
          </div>

          <div className="email_field__contact_message">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="phone">
                Your Phone Number
              </label>
              <input
                className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          <div className="phone_field__contact_message">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                Your Email Address
              </label>
              <input
                className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4"
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className="message_field__contact_message">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                Your Message <small className="text-gray-400 ml-2">Do not enter sales pitches, they will not reach our desk</small>
              </label>
              <textarea
                className="w-full p-4 text-gray-300 tertiary_bg_color rounded mb-4 min-h-[175px]"
                id="message"
                name="message"
                placeholder="Enter your message here, please be as specific as possible."
                required
              ></textarea>
            </div>
          </div>

          <button
            className="w-full mt-2 md:mt-3 p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-1000"
            type="submit"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </>
  )
}