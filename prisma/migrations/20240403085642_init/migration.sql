/*
  Warnings:

  - You are about to drop the column `bKar` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `karTot` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `vitC` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `bKaroten` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bdd` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `karotenTotal` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retinol` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitaminC` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Menu` DROP COLUMN `bKar`,
    DROP COLUMN `karTot`,
    DROP COLUMN `name`,
    DROP COLUMN `vitC`,
    ADD COLUMN `bKaroten` DOUBLE NOT NULL,
    ADD COLUMN `bdd` DOUBLE NOT NULL,
    ADD COLUMN `karotenTotal` DOUBLE NOT NULL,
    ADD COLUMN `nama` VARCHAR(50) NOT NULL,
    ADD COLUMN `retinol` DOUBLE NOT NULL,
    ADD COLUMN `vitaminC` DOUBLE NOT NULL;
