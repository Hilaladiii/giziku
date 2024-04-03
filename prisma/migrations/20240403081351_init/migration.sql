-- CreateTable
CREATE TABLE `User` (
    `username` VARCHAR(15) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddMenu` (
    `addMenuId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(15) NOT NULL,
    `code` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `berat` DOUBLE NOT NULL,

    PRIMARY KEY (`addMenuId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menu` (
    `code` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `air` DOUBLE NOT NULL,
    `energi` DOUBLE NOT NULL,
    `protein` DOUBLE NOT NULL,
    `lemak` DOUBLE NOT NULL,
    `kh` DOUBLE NOT NULL,
    `serat` DOUBLE NOT NULL,
    `abu` DOUBLE NOT NULL,
    `kalsium` DOUBLE NOT NULL,
    `fosfor` DOUBLE NOT NULL,
    `besi` DOUBLE NOT NULL,
    `natrium` DOUBLE NOT NULL,
    `kalium` DOUBLE NOT NULL,
    `tembaga` DOUBLE NOT NULL,
    `seng` DOUBLE NOT NULL,
    `vitC` DOUBLE NOT NULL,
    `bKar` DOUBLE NOT NULL,
    `karTot` DOUBLE NOT NULL,
    `thiamin` DOUBLE NOT NULL,
    `riboflavin` DOUBLE NOT NULL,
    `niasin` DOUBLE NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AddMenu` ADD CONSTRAINT `AddMenu_username_fkey` FOREIGN KEY (`username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddMenu` ADD CONSTRAINT `AddMenu_code_fkey` FOREIGN KEY (`code`) REFERENCES `Menu`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
