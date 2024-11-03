'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { sendEmail } from '@/actions/sendEmail'

const prisma = new PrismaClient()

export async function createContactMessage(prevState, formData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    const newMessage = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    // Send email notification
    const emailSubject = "New Contact Form Submission";
    const emailBody = `
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    const emailSent = await sendEmail("devon@3dmandt.com", emailSubject, emailBody, email);

    revalidatePath('/contact-us');

    if (emailSent) {
      return { success: true, message: 'Your message has been sent successfully!' }
    } else {
      return { success: true, message: 'Your message was saved, but there was an issue sending the notification email.' }
    }
  } catch (error) {
    console.error('Error creating contact message:', error)
    return { success: false, message: 'There was an error sending your message. Please try again.' }
  } finally {
    await prisma.$disconnect()
  }
}