/*
  Warnings:

  - You are about to drop the column `dataStoreId` on the `training_requests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "training_requests" DROP COLUMN "dataStoreId";
ALTER TABLE "training_requests" ALTER COLUMN "modelId" DROP NOT NULL;
