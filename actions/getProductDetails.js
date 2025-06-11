'use server';

import prisma from '@/prisma/database';

export async function getProductDetails(ids) {
  if (!ids || ids.length === 0) return [];

  return await prisma.product.findMany({
    where: { id: { in: ids } },
    select: {
      id: true,
      name: true,
      modelNumber: true,
      price: true
    },
  });
}