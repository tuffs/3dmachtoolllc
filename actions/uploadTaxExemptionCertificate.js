'use server';

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadTaxExemptionCertificate(formData) {
  try {
    const file = formData.get('taxExemptionFile');

    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    // Validate file size (10Mb max)
    if (file.size > 10 * 1024 * 1028) {
      return { success: false, error: 'File size exceeds 10MB limit' };
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return { success: false, error: 'Invalid file type. Only PDF, JPG, and PNG files are allowed.' };
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'tax-exemption-certificates',
          resource_type: 'auto',
          format: file.type === 'application/pdf' ? 'pdf' : undefined,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };

  } catch (error) {
    console.error('Error uploading tax exemption certificate: ', error);
    return {
      success: false,
      error: error.message
    };
  }
}