'use server';

import prisma from '@/prisma/database';

export async function getProductDetails(orderId) {
  // Fetch the order by orderId then get the customer
  // output all data retrieved into a convenient object
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  return order;
}