/*
  Warnings:

  - You are about to drop the column `billingAddressOne` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `billingAddressTwo` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `billingCity` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `billingName` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `billingState` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `billingZipCode` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `shippingName` on the `Order` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Order_customerId_key";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "billingAddressOne",
DROP COLUMN "billingAddressTwo",
DROP COLUMN "billingCity",
DROP COLUMN "billingName",
DROP COLUMN "billingState",
DROP COLUMN "billingZipCode",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "shippingName",
ADD COLUMN     "billingAddressOne" TEXT,
ADD COLUMN     "billingAddressTwo" TEXT,
ADD COLUMN     "billingCity" TEXT,
ADD COLUMN     "billingDifferentFromShipping" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "billingName" TEXT,
ADD COLUMN     "billingState" TEXT,
ADD COLUMN     "billingZipCode" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
