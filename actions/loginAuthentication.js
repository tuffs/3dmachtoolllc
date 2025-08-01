'use server';
import prisma from '@/prisma/database';
import bcrypt from "bcryptjs";

export default async function loginAuthentication(loginFormData) {
  const { email, password: passwordSupplied } = loginFormData;

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return { success: false, error: 'Invalid email or password' }
    }

    try {
      const passwordComparison = await bcrypt.compare(passwordSupplied, admin.password);

      if (passwordComparison) {
        return { success: true };
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      console.error('ERROR COMPAIRING PASSWORD: ', error);
    }
  } catch (error) {
    return { success: false, error: 'Invalid email or password' }
  }
};