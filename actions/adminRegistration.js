'use server';

import bcrypt from 'bcryptjs';
import prisma from '@/prisma/database'

export default async function adminRegistration(registrationDetails) {

  const { email, password, name } = registrationDetails;

  const salt = await brcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.admin.create({
    data: {
      email,
      hashedPassword,
      name
    }
  });

  if (!user) {
    return {
      success: false,
      error: 'Failed to create new administrative account.'
    }
  }

  return {
    success: true,
  }
}