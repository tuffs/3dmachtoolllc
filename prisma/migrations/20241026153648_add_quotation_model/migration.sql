-- CreateTable
CREATE TABLE "Quotation" (
    "id" TEXT NOT NULL,
    "uploadedDesignFiles" TEXT[],
    "projectDescription" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "leadTimeWeeks" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "unitOfMeasurement" TEXT NOT NULL,
    "tolerance" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quotation_pkey" PRIMARY KEY ("id")
);
