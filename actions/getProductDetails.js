'use server';

import prisma from '@/prisma/database';

export async function getProductDetails(productIds) {
  if (!productIds || productIds.length === 0) return [];
  return await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: {
      id: true,
      name: true,
      modelNumber: true,
      price: true
    },
  });
}