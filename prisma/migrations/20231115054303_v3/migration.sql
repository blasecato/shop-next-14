/*
  Warnings:

  - You are about to drop the column `Weight` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `ImageProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ImageProduct` DROP FOREIGN KEY `ImageProduct_productId_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `Weight`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `weight` INTEGER NULL,
    MODIFY `Description` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `ImageProduct`;
