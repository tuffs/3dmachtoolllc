import database from '@/prisma/database';

export default async function createProduct({ name, modelNumber, description, shortDescription, slug, price, quantity, imageUrls }) {
  try {  
  const product = await database.product.create({
    data: {
      name,
      modelNumber,
      description,
      shortDescription,
      slug,
      price,
      quantity,
      imageUrls,
    },
  });
  return product;
  } catch (error) {
    throw new Error(`There was an error creating the product: ' + ${error}`);
  }
}