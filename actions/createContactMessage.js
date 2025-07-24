'use server'

import prisma from '@/prisma/database'
import { sendEmail } from '@/actions/sendEmail'

export async function createContactMessage(formData) {
  console.log('Received formData:', formData);
  console.log('Is FormData:', formData instanceof FormData);

  let name, email, phone, message;
  if (formData instanceof FormData) {
    name = formData.get('name');
    email = formData.get('email');
    phone = formData.get('phone');
    message = formData.get('message');
  } else {
    console.warn('Received non-FormData object:', formData);
    name = formData.name || '';
    email = formData.email || '';
    phone = formData.phone || '';
    message = formData.message || '';
  }

  const spamScore = 10;

  const contactMessage = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      message,
      spamScore
    },
  });

  console.log('Saved Database Entry for Message: ', contactMessage);

  const emailSubject = "CONTACT REQUEST FROM 3D MACHINE + TOOL WEBSITE";
  const emailBody = `
        New contact form submission:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Spam Score: ${spamScore}
      `;

  const emailSent = await sendEmail("devon@3dmandt.com", emailSubject, emailBody, email);

  if (emailSent) {
    return { success: true, message: 'Your message has been sent successfully!' }
  } else {
    console.error('There was an error in saving or sendingg your email message.');
    return { success: false, message: 'There was an error sending your message. Please try again.' }
  }
}
