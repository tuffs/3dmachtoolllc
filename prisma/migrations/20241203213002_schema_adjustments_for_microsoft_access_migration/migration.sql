/*
  Warnings:

  - Changed the type of `imageUrls` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `uploadedDesignFiles` on the `Quotation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrls",
ADD COLUMN     "imageUrls" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Quotation" DROP COLUMN "uploadedDesignFiles",
ADD COLUMN     "uploadedDesignFiles" JSONB NOT NULL;
