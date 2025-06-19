'use server';

import prisma from '@/prisma/database';

export async function getSurtaxPercent(zipCode) {
  if (!zipCode || zipCode === "") return 0.0;

  return await prisma.floridaSalesTax.find({
    where: { zipCode },
    select: {
      rate: true
    }
  });
}