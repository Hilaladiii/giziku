-- DropForeignKey
ALTER TABLE `AddMenu` DROP FOREIGN KEY `AddMenu_username_fkey`;

-- AlterTable
ALTER TABLE `AddMenu` MODIFY `username` VARCHAR(50) NOT NULL;

-- AddForeignKey
ALTER TABLE `AddMenu` ADD CONSTRAINT `AddMenu_username_fkey` FOREIGN KEY (`username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
