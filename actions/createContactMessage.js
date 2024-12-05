'use server'

import { PrismaClient } from '@prisma/client'
import { sendEmail } from '@/actions/sendEmail'
import OpenAI from 'openai'

const prisma = new PrismaClient()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Make sure to set this in your .env file
})

async function checkSpamScore(message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that evaluates messages for spam content related to machine shops."
        },
        {
          role: "user",
          content: `Please evaluate the following message and provide a spam score from 0 to 10. 
          0 means it's definitely spam (trying to sell a product or sexual in nature), 
          1-6 means it's likely spam or unrelated to machine shop business, 
          7-10 means it's likely legitimate business inquiry. 
          Only respond with the integer score.
          
          Message: "${message}"`
        }
      ]
    })

    const score = parseInt(completion.choices[0].message.content.trim())
    return isNaN(score) ? 0 : score // Default to 0 if parsing fails
  } catch (error) {
    console.error('Error checking spam score:', error)
    return 0 // Default to 0 if there's an error
  }
}

export async function createContactMessage(prevState, formData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    // Check spam score
    const spamScore = await checkSpamScore(message)

    const newMessage = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
        spamScore,
      },
    });

    // Only send email for messages with spam score 4 or higher
    if (spamScore >= 4) {
      // Send email notification
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
        return { success: true, message: 'Your message was saved, but there was an issue sending the notification email.' }
      }
    } else {
      return { success: true, message: 'Your message has been received and will be reviewed.' }
    }
  } catch (error) {
    console.error('Error creating contact message:', error)
    return { success: false, message: 'There was an error sending your message. Please try again.' }
  } finally {
    await prisma.$disconnect()
  }
}

