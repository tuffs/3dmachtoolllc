-- CreateTable
CREATE TABLE "FloridaSalesTax" (
    "id" SERIAL NOT NULL,
    "county" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FloridaSalesTax_pkey" PRIMARY KEY ("id")
);
