'use server'

import database from '@/prisma/database';

export async function listProducts() {
  try {
    const products = await database.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { success: true, products };
  } catch (error) {
    console.error('Error fetching products: ', error);
    return { success: false, error: "There was an error fetching the products." };
  }
}