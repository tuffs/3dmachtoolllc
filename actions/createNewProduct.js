'use server'

import { v2 as cloudinary } from 'cloudinary';
import database from '@/prisma/database';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9_.-]/g, '_');
}

function prepareFileName(productName, originalFileName) {
  const sanitizedProductName = sanitizeFileName(productName)
    .toUpperCase()
    .replace(/\s/g, '_')
    .slice(0, 96);

  const lastDotIndex = originalFileName.lastIndexOf('.');
  let nameWithoutExtension, extension;

  if (lastDotIndex === -1) {
    nameWithoutExtension = sanitizeFileName(originalFileName);
    extension = '';
  } else {
    nameWithoutExtension = sanitizeFileName(originalFileName.slice(0, lastDotIndex));
    extension = originalFileName.slice(lastDotIndex + 1).toLowerCase();
  }

  const combinedName = `${sanitizedProductName}__${nameWithoutExtension}`;
  const maxLengthWithoutExtension = 240 - (extension ? extension.length + 1 : 0);
  const trimmedCombinedName = combinedName.slice(0, maxLengthWithoutExtension);

  return extension ? `${trimmedCombinedName}.${extension}` : trimmedCombinedName;
}

function createSlug(productName) {
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function createNewProduct(formData) {
  try {
    const uploadedFiles = formData.getAll('productImages');
    const productName = formData.get('name');
    const productSlug = createSlug(productName);

    // Upload files to Cloudinary
    const uploadedProductImagesSet = new Set(await Promise.all(uploadedFiles.map(async (file) => {
      const fileName = prepareFileName(productName, file.name);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const extension = fileName.split('.').pop() || '';

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            public_id: fileName.split('.')[0], // Remove extension from public_id
            folder: '3DMANDT/PRODUCTS',
            format: extension // Explicitly set the format
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      // Return the full Cloudinary URL
      return result.secure_url;
    })));

    const uploadedProductImages = Array.from(uploadedProductImagesSet);

    const product = await database.product.create({
      data: {
        name: productName,
        slug: productSlug,
        modelNumber: formData.get('modelNumber'),
        shortDescription: formData.get('shortDescription'),
        description: formData.get('description'),
        quantity: parseInt(formData.get('quantityOnHand')),
        price: parseFloat(formData.get('price')),
        tags: formData.get('tags').split(',').map(tag => tag.trim()),
        imageUrls: uploadedProductImages,
      },
    });

    return { success: true, product };
  } catch (error) {
    console.error('Error creating new product:', error);
    return { success: false, error: 'There was an error creating the new product.' };
  }
}
