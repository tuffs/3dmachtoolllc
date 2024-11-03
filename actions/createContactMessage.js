'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

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

    revalidatePath('/contact-us');

    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('Error creating contact message:', error)
    return { success: false, message: 'There was an error sending your message. Please try again.' }
  } finally {
    await prisma.$disconnect()
  }
}