/*
  Warnings:

  - You are about to drop the column `subtotal` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderNumber]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preTaxSubtotal` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateTax` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surtax` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "subtotal",
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "preTaxSubtotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stateTax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "surtax" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "taxExemptionStatus" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Order_customerId_key" ON "Order"("customerId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
