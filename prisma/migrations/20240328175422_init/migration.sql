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
    `username` VARCHAR(15) NOT NULL,
    `code` VARCHAR(5) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`username`, `code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menu` (
    `code` VARCHAR(5) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `air` DOUBLE NULL,
    `energi` DOUBLE NULL,
    `protein` DOUBLE NULL,
    `lemak` DOUBLE NULL,
    `kh` DOUBLE NULL,
    `serat` DOUBLE NULL,
    `abu` DOUBLE NULL,
    `kalsium` DOUBLE NULL,
    `fosfor` DOUBLE NULL,
    `besi` DOUBLE NULL,
    `natrium` DOUBLE NULL,
    `kalium` DOUBLE NULL,
    `tembaga` DOUBLE NULL,
    `seng` DOUBLE NULL,
    `vitC` DOUBLE NULL,
    `bKar` DOUBLE NULL,
    `karTot` DOUBLE NULL,
    `thiamin` DOUBLE NULL,
    `riboflavin` DOUBLE NULL,
    `niasin` DOUBLE NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AddMenu` ADD CONSTRAINT `AddMenu_username_fkey` FOREIGN KEY (`username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddMenu` ADD CONSTRAINT `AddMenu_code_fkey` FOREIGN KEY (`code`) REFERENCES `Menu`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
