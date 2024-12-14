'use server'

import { v2 as cloudinary } from 'cloudinary';
import database from '@/prisma/database';
import { sendEmail } from './sendEmail';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9_.-]/g, '_');
}

function prepareFileName(businessName, originalFileName) {
  const sanitizedBusinessName = sanitizeFileName(businessName)
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

  const combinedName = `${sanitizedBusinessName}__${nameWithoutExtension}`;
  const maxLengthWithoutExtension = 240 - (extension ? extension.length + 1 : 0);
  const trimmedCombinedName = combinedName.slice(0, maxLengthWithoutExtension);

  return extension ? `${trimmedCombinedName}.${extension}` : trimmedCombinedName;
}

export async function createRequestForQuote(formData) {
  try {
    const uploadedFiles = formData.getAll('uploadedDesignFiles');

    // Upload files to Cloudinary
    const uploadedDesignFilesSet = new Set(await Promise.all(uploadedFiles.map(async (file) => {
      const fileName = prepareFileName(formData.get('businessName'), file.name);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const extension = fileName.split('.').pop() || '';

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            public_id: fileName.split('.')[0], // Remove extension from public_id
            folder: '3DMANDT/QUOTES',
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

    const uploadedDesignFiles = Array.from(uploadedDesignFilesSet);

    const quotation = await database.quotation.create({
      data: {
        name: formData.get('name'),
        businessName: formData.get('businessName'),
        phoneNumber: formData.get('phoneNumber'),
        emailAddress: formData.get('emailAddress'),
        projectDescription: formData.get('projectDescription'),
        quantity: parseInt(formData.get('quantity')),
        leadTimeWeeks: parseInt(formData.get('leadTimeWeeks')),
        material: formData.get('material'),
        unitOfMeasurement: formData.get('unitOfMeasurement'),
        tolerance: formData.get('tolerance'),
        uploadedDesignFiles: uploadedDesignFiles, // This now contains unique full Cloudinary URLs
      },
    });

    // Construct email body
    const emailBody = `
      New Request for Quote Received

      Name: ${quotation.name}
      Business Name: ${quotation.businessName}
      Phone Number: ${quotation.phoneNumber}
      Email Address: ${quotation.emailAddress}
      Project Description: ${quotation.projectDescription}
      Quantity: ${quotation.quantity}
      Lead Time (Weeks): ${quotation.leadTimeWeeks}
      Material: ${quotation.material}
      Unit of Measurement: ${quotation.unitOfMeasurement}
      Tolerance: ${quotation.tolerance}

      Uploaded Design Files:
      ${uploadedDesignFiles.join('\n')}
    `;

    // Send email
    const emailSent = await sendEmail(
      "devon@3dmandt.com",
      "New Request for Quote",
      emailBody,
      quotation.emailAddress
    );

    if (!emailSent) {
      console.error("Failed to send email notification");
    }

    return { success: true, quotation };
  } catch (error) {
    console.error('Error creating request for quotation:', error);
    return { success: false, error: 'There was an error creating the request for quotation.' };
  }
}

