'use server';

import prisma from '@/prisma/database';
import { sendEmail } from '@/actions/sendEmail';

export async function createContactMessage(formData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: 'Please fill in all required fields.'
      };
    }

    // Create contact message in database
    const contactMessage = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        message: message.trim(),
        spamScore: 10, // Manual spam score as requested
        createdAt: new Date()
      }
    });

    // Send email notification
    const emailSubject = `New Contact Message from ${name}`;
    const emailBody = `
      New contact message received:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
      
      --
      This message was sent via the contact form on 3dmachtool.com
    `;

    const emailResult = await sendEmail(
      'devon@3dmandt.com',
      emailSubject,
      emailBody,
      email,
    );

    if (!emailResult.success) {
      console.error('Failed to send email notification:', emailResult.error);
      // Don't fail the entire operation if email fails
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };

  } catch (error) {
    console.error('Error creating contact message:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    };
  }
}