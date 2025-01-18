/*
  Warnings:

  - Added the required column `zipCode` to the `FloridaSalesTax` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FloridaSalesTax" ADD COLUMN     "zipCode" INTEGER NOT NULL;
