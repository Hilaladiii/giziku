-- CreateTable
CREATE TABLE "User" (
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "image" VARCHAR(100),

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "AddMenu" (
    "addMenuId" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "code" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "berat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AddMenu_pkey" PRIMARY KEY ("addMenuId")
);

-- CreateTable
CREATE TABLE "Menu" (
    "code" SERIAL NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "air" DOUBLE PRECISION NOT NULL,
    "energi" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "lemak" DOUBLE PRECISION NOT NULL,
    "kh" DOUBLE PRECISION NOT NULL,
    "serat" DOUBLE PRECISION NOT NULL,
    "abu" DOUBLE PRECISION NOT NULL,
    "kalsium" DOUBLE PRECISION NOT NULL,
    "fosfor" DOUBLE PRECISION NOT NULL,
    "besi" DOUBLE PRECISION NOT NULL,
    "natrium" DOUBLE PRECISION NOT NULL,
    "kalium" DOUBLE PRECISION NOT NULL,
    "tembaga" DOUBLE PRECISION NOT NULL,
    "seng" DOUBLE PRECISION NOT NULL,
    "retinol" DOUBLE PRECISION NOT NULL,
    "bKaroten" DOUBLE PRECISION NOT NULL,
    "karotenTotal" DOUBLE PRECISION NOT NULL,
    "thiamin" DOUBLE PRECISION NOT NULL,
    "riboflavin" DOUBLE PRECISION NOT NULL,
    "niasin" DOUBLE PRECISION NOT NULL,
    "vitaminC" DOUBLE PRECISION NOT NULL,
    "bdd" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "AddMenu" ADD CONSTRAINT "AddMenu_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddMenu" ADD CONSTRAINT "AddMenu_code_fkey" FOREIGN KEY ("code") REFERENCES "Menu"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
