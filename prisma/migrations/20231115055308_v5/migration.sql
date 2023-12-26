/*
  Warnings:

  - Made the column `weight` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `weight` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;
